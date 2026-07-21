"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 bg-[#03030A]">
        {/* Neon Gradient Orbs */}
        <div className="absolute top-[20%] left-[20%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-[60%] right-[10%] w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] translate-x-1/2" />
        
        {/* Animated Particles Grid / Overlay */}
        <div className="absolute inset-0 bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm20 20h20v20H20V20zM0 20h20v20H0V20z' fill='%239C92AC' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E\")" }} />
      </div>

      <div className="container relative z-10 mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6 text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary w-fit mx-auto lg:mx-0">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-xs font-semibold tracking-wide uppercase">Private Beta Opening Soon</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold font-heading tracking-tight text-balance">
            Level Up Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
              Real Life.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground text-balance max-w-xl mx-auto lg:mx-0">
            Turn your goals, habits, and workouts into epic quests. Earn XP, evolve your avatar, and become the main character of your own story.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center lg:justify-start">
            <Button size="lg" className="h-12 px-8 text-base shadow-[0_0_20px_rgba(var(--primary),0.4)]" asChild>
              <a href="#waitlist">
                Join Waitlist <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-base bg-background/50 backdrop-blur-sm border-white/10" asChild>
              <a href="#demo">
                <Play className="mr-2 h-4 w-4" /> Watch Demo
              </a>
            </Button>
          </div>
        </motion.div>

        {/* Avatar Hero Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative mx-auto w-full max-w-sm aspect-[3/4] perspective-1000"
        >
          {/* Ambient Glow */}
          <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />
            
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }} 
            className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(var(--primary),0.3)] group"
          >
            <div className="absolute inset-0 bg-zinc-900 flex items-center justify-center text-zinc-700 font-medium z-0">
              [Avatar Image Placeholder]
            </div>
            
            <Image 
              src="/avatar.jpg" 
              alt="Shadow Monarch Avatar" 
              fill
              className="object-cover z-10 transition-transform duration-700 group-hover:scale-105"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-20 pointer-events-none" />
            
            <div className="absolute bottom-6 left-6 right-6 z-30">
              <div className="flex justify-between items-end mb-2">
                <div className="flex flex-col">
                  <div className="text-xs font-bold text-blue-400 tracking-[0.2em] uppercase mb-1 drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]">
                    System Initialized
                  </div>
                  <div className="text-2xl font-black font-heading tracking-tight uppercase leading-none">
                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-white/60">REAL LEVELING </span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500 italic drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">STARTED</span>
                  </div>
                </div>
                <div className="w-12 h-12 rounded-xl bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center font-bold text-xl text-primary">
                  50
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Floating XP Orbs */}
          <motion.div 
            animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute -right-8 top-1/4 bg-primary/20 backdrop-blur-md border border-primary/30 text-primary font-bold px-4 py-2 rounded-xl text-sm shadow-[0_0_15px_rgba(var(--primary),0.5)] z-40"
          >
            +500 XP
          </motion.div>
          <motion.div 
            animate={{ y: [0, 15, 0], opacity: [0.3, 0.8, 0.3] }}
            transition={{ repeat: Infinity, duration: 5, delay: 1 }}
            className="absolute -left-12 bottom-1/3 bg-blue-500/20 backdrop-blur-md border border-blue-500/30 text-blue-400 font-bold px-4 py-2 rounded-xl text-sm shadow-[0_0_15px_rgba(59,130,246,0.3)] z-40"
          >
            LEVEL UP!
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40"
      >
        <span className="text-xs uppercase tracking-widest font-semibold">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  );
}
