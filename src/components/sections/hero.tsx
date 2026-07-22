"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { FaApple, FaGooglePlay } from "react-icons/fa6";

const notifications = [
  { id: 1, title: "+500 XP", subtitle: "Morning Workout Completed", color: "text-primary", border: "border-primary/30", bg: "bg-primary/20", shadow: "shadow-[0_0_15px_rgba(var(--primary),0.5)]" },
  { id: 2, title: "LEVEL UP", subtitle: "Strength +1", color: "text-blue-400", border: "border-blue-500/30", bg: "bg-blue-500/20", shadow: "shadow-[0_0_15px_rgba(59,130,246,0.3)]" },
  { id: 3, title: "NEW QUEST", subtitle: "Daily Mission Unlocked", color: "text-purple-400", border: "border-purple-500/30", bg: "bg-purple-500/20", shadow: "shadow-[0_0_15px_rgba(168,85,247,0.3)]" },
  { id: 4, title: "STREAK", subtitle: "7 Day Streak 🔥", color: "text-orange-400", border: "border-orange-500/30", bg: "bg-orange-500/20", shadow: "shadow-[0_0_15px_rgba(249,115,22,0.3)]" }
];

export function Hero() {
  const [activeNotification, setActiveNotification] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNotification((prev) => (prev + 1) % notifications.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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
          <motion.a
            href="#waitlist"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center gap-3 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-md w-fit mx-auto lg:mx-0 overflow-hidden shadow-[0_0_20px_rgba(59,130,246,0.15)] hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-300 cursor-pointer"
          >
            {/* Inner Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>

            <div className="relative grid items-center">
              {/* Default State */}
              <div className="flex items-center justify-center gap-2.5 transition-opacity duration-300 opacity-100 group-hover:opacity-0 col-start-1 row-start-1">
                <span className="text-xs font-semibold tracking-widest uppercase text-white/90 whitespace-nowrap">Available Soon</span>
                <div className="w-px h-3 bg-white/30" />
                <div className="flex items-center gap-1.5 text-white/90">
                  <FaApple className="w-3.5 h-3.5" />
                  <FaGooglePlay className="w-3 h-3" />
                </div>
              </div>
              
              {/* Hover State */}
              <div className="flex items-center justify-center gap-2 transition-opacity duration-300 opacity-0 group-hover:opacity-100 col-start-1 row-start-1">
                <span className="text-xs font-bold tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary whitespace-nowrap">Launching Soon</span>
                <span className="text-[10px] font-semibold tracking-widest uppercase text-white/70 whitespace-nowrap">• Join Waitlist</span>
              </div>
            </div>
          </motion.a>
          
          <h1 className="text-5xl md:text-7xl font-bold font-heading tracking-tight text-balance">
            Level Up Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
              Real Life.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground text-balance max-w-xl mx-auto lg:mx-0">
            Turn your goals, habits, and workouts into epic quests. Earn XP, evolve your avatar, and become the main character of your own story.
          </p>

          {/* Hero Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mt-2 mb-2"
          >
            {[
              { icon: "🎯", label: "Daily Missions" },
              { icon: "⚡", label: "XP Progression" },
              { icon: "🏆", label: "Level System" },
              { icon: "🔥", label: "Daily Streaks" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/5 bg-white/[0.02] backdrop-blur-sm cursor-default transition-colors"
              >
                <span className="text-sm">{stat.icon}</span>
                <span className="text-xs font-medium text-white/70">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 mt-2 justify-center lg:justify-start"
          >
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
          </motion.div>

          {/* Social Proof & Trust Elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="flex flex-col items-center lg:items-start gap-6 mt-4 pt-4 border-t border-white/5 relative"
          >
            {/* Ambient Line Glow */}
            <div className="absolute top-0 left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0 w-32 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

            <div className="flex flex-col sm:flex-row items-center gap-5">
              {/* Counter Card */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-3 px-4 py-2.5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
              >
                <span className="text-lg animate-pulse">🚀</span>
                <div className="flex flex-col text-left">
                  <span className="text-sm font-bold text-white leading-tight">EARLY ACCESS</span>
                  <span className="text-[10px] text-white/50 font-medium uppercase tracking-wider">Join the Waitlist</span>
                </div>
              </motion.div>
            </div>

            {/* Platforms & Trust Line */}
            <div className="flex flex-col items-center lg:items-start w-full gap-4">
              <div className="flex items-center gap-3 text-xs font-medium text-white/40">
                <span className="uppercase tracking-wider text-[10px]">Available On</span>
                <div className="flex items-center gap-3 text-white/60">
                  <FaApple className="w-4 h-4 hover:text-white transition-colors cursor-pointer" />
                  <FaGooglePlay className="w-3.5 h-3.5 hover:text-white transition-colors cursor-pointer" />
                </div>
              </div>
              
              <p className="text-[10px] text-white/30 uppercase tracking-widest font-semibold text-center lg:text-left">
                Built for people who refuse to stay average.
              </p>
            </div>
          </motion.div>
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
          
          {/* Animated System Notifications */}
          <div className="absolute -right-8 lg:-right-16 top-1/3 z-40">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeNotification}
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className={`flex flex-col backdrop-blur-md border px-4 py-3 rounded-xl ${notifications[activeNotification].bg} ${notifications[activeNotification].border} ${notifications[activeNotification].shadow}`}
              >
                <span className={`text-sm font-black tracking-wide ${notifications[activeNotification].color}`}>
                  {notifications[activeNotification].title}
                </span>
                <span className="text-[10px] text-white/80 font-medium uppercase tracking-wider mt-0.5">
                  {notifications[activeNotification].subtitle}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>
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
