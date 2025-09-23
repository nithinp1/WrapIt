import React from 'react';
import Link from 'next/link';
import { Gift } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t bg-background/50">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <Gift className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl text-primary font-headline">WrapIt</span>
          </div>
          <div className="flex flex-wrap justify-center space-x-4 md:space-x-6 text-sm text-foreground/80">
            <Link href="#" className="hover:text-primary">About</Link>
            <Link href="#" className="hover:text-primary">Contact</Link>
            <Link href="#" className="hover:text-primary">Terms of Service</Link>
            <Link href="#" className="hover:text-primary">Privacy Policy</Link>
          </div>
          <div className="text-sm text-foreground/60">
            © {new Date().getFullYear()} WrapIt. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
