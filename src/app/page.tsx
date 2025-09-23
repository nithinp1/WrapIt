import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { categories, products, artisans, type Artisan } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ProductCard } from '@/components/product-card';

function CategorySection({
  categoryId,
  categoryName,
}: {
  categoryId: string;
  categoryName: string;
}) {
  const categoryProducts = products.filter((p) => p.categoryId === categoryId);
  if (categoryProducts.length === 0) return null;

  return (
    <section id={categoryName.toLowerCase().replace(/\s+/g, '-')} className="py-12 md:py-16">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-8 font-headline">
          {categoryName}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categoryProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ArtisanCard({ artisan }: { artisan: Artisan }) {
  return (
    <div className="text-center group">
      <Avatar className="h-32 w-32 mx-auto mb-4 border-4 border-transparent group-hover:border-accent transition-all duration-300 group-hover:scale-105">
        <AvatarImage
          src={artisan.avatar?.imageUrl}
          alt={artisan.name}
          data-ai-hint={artisan.avatar?.imageHint}
        />
        <AvatarFallback className="text-4xl">
          {artisan.name.substring(0, 2)}
        </AvatarFallback>
      </Avatar>
      <h3 className="text-xl font-semibold font-headline">{artisan.name}</h3>
      <p className="text-muted-foreground text-sm line-clamp-3">
        {artisan.story}
      </p>
    </div>
  );
}

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-image');
  const featuredProducts = products.filter((p) => p.categoryId === 'cat-1');
  const otherCategories = categories.filter((c) => c.id !== 'cat-1' && c.id !== 'cat-4');
  const handcraftedCategory = categories.find((c) => c.id === 'cat-4');

  return (
    <div>
      <section className="relative w-full h-[50vh] md:h-[60vh] flex items-center justify-center text-center text-white overflow-hidden">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 p-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 font-headline drop-shadow-lg">
            Gifts with Heart & Soul
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl mb-8 drop-shadow-md">
            Discover unique, handcrafted treasures from talented artisans around
            the world.
          </p>
          <Button size="lg" asChild>
            <Link href="#featured">
              Explore Gifts <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <section id="featured" className="py-16 md:py-24 bg-accent/30">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12 font-headline">
            Featured Gifts
          </h2>
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {featuredProducts.map((product) => (
                <CarouselItem
                  key={product.id}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1">
                    <ProductCard product={product} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="flex" />
            <CarouselNext className="flex" />
          </Carousel>
        </div>
      </section>

      {otherCategories.map((category) => (
        <CategorySection
          key={category.id}
          categoryId={category.id}
          categoryName={category.name}
        />
      ))}

      {handcraftedCategory && (
        <CategorySection
          key={handcraftedCategory.id}
          categoryId={handcraftedCategory.id}
          categoryName={handcraftedCategory.name}
        />
      )}

      <section id="artisans" className="py-16 md:py-24 bg-accent/30">
        <div className="container text-center">
          <h2 className="text-3xl font-bold tracking-tighter mb-4 font-headline">
            Meet Our Artisans
          </h2>
          <p className="max-w-3xl mx-auto text-muted-foreground md:text-lg mb-12">
            The talented hands and creative minds behind your favorite gifts.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            {artisans.map((artisan) => (
              <ArtisanCard key={artisan.id} artisan={artisan} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
