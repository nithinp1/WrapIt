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
import { categories, products } from '@/lib/data';
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
    </div>
  );
}
