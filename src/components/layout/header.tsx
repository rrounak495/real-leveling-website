"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center border border-white/10 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
             <Image 
                src="/logo.png" 
                alt="Real Leveling Logo" 
                fill 
                className="object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  (e.target as HTMLImageElement).parentElement!.innerHTML = '<span class="font-bold text-primary-foreground text-sm font-heading">RL</span>';
                }}
             />
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="font-heading font-bold text-xl tracking-tight text-white leading-none">REAL LEVELING</span>
            <span className="text-[10px] uppercase tracking-widest text-primary font-medium mt-0.5">THE GAME OF REAL LIFE</span>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <Link href="#features" className="hover:text-white transition-colors">Features</Link>
          <Link href="#demo" className="hover:text-white transition-colors">Demo</Link>
          <Link href="#roadmap" className="hover:text-white transition-colors">Roadmap</Link>
        </nav>
        <Button size="sm" asChild>
          <Link href="#waitlist">Join Waitlist</Link>
        </Button>
      </div>
    </header>
  );
}
