import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { artisans, type Product } from '@/lib/data';

export function ProductCard({ product }: { product: Product }) {
  const artisan = artisans.find(a => a.id === product.artisanId);
  return (
    <Card className="flex flex-col h-full overflow-hidden transition-shadow duration-300 hover:shadow-xl rounded-lg">
      <CardContent className="p-0">
        <Link href={`/products/${product.id}`} className="block relative aspect-square w-full">
          <Image
            src={product.images[0]?.imageUrl || ''}
            alt={product.title}
            fill
            className="object-cover"
            data-ai-hint={product.images[0]?.imageHint}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </Link>
      </CardContent>
      <div className="p-4 flex flex-col flex-grow">
        <Link href={`/products/${product.id}`} className="block">
          <h3 className="text-lg font-semibold hover:text-primary transition-colors line-clamp-2 h-14">{product.title}</h3>
        </Link>
        {artisan && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground pt-1">
            <Avatar className="h-6 w-6">
                <AvatarImage src={artisan.avatar?.imageUrl} alt={artisan.name} data-ai-hint={artisan.avatar?.imageHint} />
                <AvatarFallback>{artisan.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <span>by {artisan.name}</span>
            </div>
        )}
        <div className="flex-grow" />
        <div className="flex justify-between items-center mt-4">
            <p className="text-xl font-bold text-primary">₹{product.price.toFixed(2)}</p>
            <Button asChild size="sm">
            <Link href={`/products/${product.id}`}>View</Link>
            </Button>
        </div>
      </div>
    </Card>
  );
}
