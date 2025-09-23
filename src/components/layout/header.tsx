"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Gift, ShoppingBag } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export function Header() {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setShow(false);
        } else {
          setShow(true);
        }
        setLastScrollY(window.scrollY);
      }
    };
    
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-transform duration-300',
        !show && '-translate-y-full'
      )}
    >
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Gift className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl text-primary font-headline">WrapIt</span>
        </Link>
        <nav className="flex items-center gap-2 md:gap-6 text-sm font-medium">
          <Link
            href="/#categories"
            className="text-foreground/60 transition-colors hover:text-foreground/80 hidden md:block"
          >
            Categories
          </Link>
          <Button variant="ghost" size="icon">
            <ShoppingBag className="h-5 w-5" />
            <span className="sr-only">Shopping Cart</span>
          </Button>
        </nav>
      </div>
    </header>
  );
}
