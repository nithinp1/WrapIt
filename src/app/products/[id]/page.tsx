import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Star, ShoppingCart } from 'lucide-react';

import { products, artisans } from '@/lib/data';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

function Rating({ rating, count, showCount = true }: { rating: number; count: number, showCount?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${
              i < Math.floor(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground/50'
            }`}
          />
        ))}
      </div>
      {showCount && <span className="text-muted-foreground text-sm">({count} reviews)</span>}
    </div>
  );
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }

  const artisan = artisans.find((a) => a.id === product.artisanId);

  const averageRating =
    product.reviews.length > 0 ? product.reviews.reduce((acc, review) => acc + review.rating, 0) / product.reviews.length : 0;

  return (
    <div className="container mx-auto max-w-6xl py-8 md:py-16">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
        <div>
          <Carousel className="w-full">
            <CarouselContent>
              {product.images.map((image, index) => (
                <CarouselItem key={index}>
                  <Card className="overflow-hidden">
                    <CardContent className="p-0">
                      <Image
                        src={image?.imageUrl || ''}
                        alt={`${product.title} - view ${index + 1}`}
                        width={600}
                        height={600}
                        className="w-full h-auto aspect-square object-cover"
                        data-ai-hint={image?.imageHint}
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight font-headline">{product.title}</h1>
            {artisan && (
              <div className="flex items-center gap-3 mt-2">
                <Avatar>
                  <AvatarImage src={artisan.avatar?.imageUrl} alt={artisan.name} data-ai-hint={artisan.avatar?.imageHint} />
                  <AvatarFallback>{artisan.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <span className="text-lg font-medium text-muted-foreground">{artisan.name}</span>
              </div>
            )}
          </div>

          <p className="text-muted-foreground">{product.description}</p>
          
          <Rating rating={averageRating} count={product.reviews.length} />

          <p className="text-4xl font-bold text-primary">${product.price.toFixed(2)}</p>

          <Separator />
          
          <div className="grid gap-4">
              <h3 className="font-semibold text-lg">Customization</h3>
              <div className="grid gap-2">
                <Label htmlFor="custom-theme">Wrapping Theme</Label>
                <Select>
                  <SelectTrigger id="custom-theme">
                    <SelectValue placeholder="Select a theme" />
                  </SelectTrigger>
                  <SelectContent>
                    {product.customizationOptions.themes.map(theme => (
                      <SelectItem key={theme} value={theme}>{theme}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="custom-message">Personal Message</Label>
                <Textarea id="custom-message" placeholder="Add a personal note for the recipient..." />
              </div>
          </div>

          <Button size="lg" className="w-full">
            <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
          </Button>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 lg:gap-16 mt-16">
        {artisan && artisan.showcaseImage && (
            <Card className="overflow-hidden">
                <CardHeader>
                    <CardTitle className="font-headline">The Artisan's Story</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <Image
                        src={artisan.showcaseImage.imageUrl}
                        alt={`Artisan ${artisan.name}`}
                        width={600}
                        height={400}
                        className="rounded-lg object-cover w-full"
                        data-ai-hint={artisan.showcaseImage.imageHint}
                    />
                    <div className="flex items-center gap-4">
                        <Avatar className="h-16 w-16">
                            <AvatarImage src={artisan.avatar?.imageUrl} alt={artisan.name} data-ai-hint={artisan.avatar?.imageHint} />
                            <AvatarFallback className="text-2xl">{artisan.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <h3 className="text-2xl font-semibold font-headline">{artisan.name}</h3>
                    </div>
                    <p className="text-muted-foreground">{artisan.story}</p>
                </CardContent>
            </Card>
        )}

        <div className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight font-headline">Customer Reviews</h2>
            {product.reviews.length > 0 ? (
                <div className="space-y-6">
                    {product.reviews.map(review => (
                        <Card key={review.id}>
                            <CardHeader>
                                <div className="flex justify-between items-center">
                                    <h3 className="font-semibold">{review.author}</h3>
                                    <Rating rating={review.rating} count={0} showCount={false} />
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{review.comment}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            ) : (
                <p className="text-muted-foreground">No reviews yet.</p>
            )}
        </div>
      </div>
    </div>
  );
}
