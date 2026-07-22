"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";
import { FaLinkedin, FaInstagram, FaXTwitter, FaFacebook, FaYoutube } from "react-icons/fa6";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/40 py-12 relative z-20 overflow-hidden pointer-events-auto">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent pointer-events-none" />
      <div className="container relative z-10 mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="flex items-center gap-3 mb-4">
            <div className="relative w-8 h-8 rounded-lg overflow-hidden">
               <Image 
                  src="/logo.png" 
                  alt="Real Leveling Logo" 
                  fill 
                  className="object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                    (e.target as HTMLImageElement).parentElement!.innerHTML = '<span class="flex items-center justify-center w-full h-full bg-primary font-bold text-primary-foreground text-xs font-heading">RL</span>';
                  }}
               />
            </div>
            <span className="font-heading font-bold text-lg tracking-tight text-white">REAL LEVELING</span>
          </Link>
          <p className="text-sm text-muted-foreground max-w-sm">
            The world&apos;s first AI-powered fitness RPG. Level up in real life, build unbreakable habits, and become the main character of your own story.
          </p>
        </div>
        
        <div>
          <h4 className="font-bold text-white mb-4">System</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link href="#how-it-works" className="hover:text-primary transition-colors">How It Works</Link></li>
            <li><Link href="#avatar" className="hover:text-primary transition-colors">Avatars</Link></li>
            <li><Link href="#demo" className="hover:text-primary transition-colors">Interactive Demo</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-white mb-4">Connect</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li>
              <a href="https://www.linkedin.com/company/real-leveling/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                <FaLinkedin className="w-4 h-4" /> LinkedIn
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/reallevelingapp?utm_source=qr&igsh=M2Z5c2hqZ2dvbWpw" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                <FaInstagram className="w-4 h-4" /> Instagram
              </a>
            </li>
            <li>
              <a href="https://x.com/reallevelinapp" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                <FaXTwitter className="w-4 h-4" /> Twitter (X)
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/share/1BbVMQcc7v/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                <FaFacebook className="w-4 h-4" /> Facebook
              </a>
            </li>
            <li>
              <a href="https://youtube.com/@reallevelingapp?si=O2BYPBymtShq9eae" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                <FaYoutube className="w-4 h-4" /> YouTube
              </a>
            </li>
            <li>
              <a href="mailto:hello@realleveling.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" /> Email Us
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <p>&copy; 2026 REAL LEVELING. All Rights Reserved.</p>
        <div className="flex gap-4">
          <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
