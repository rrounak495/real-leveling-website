"use client";

import { motion } from "framer-motion";
import { User, Shield, Zap } from "lucide-react";
import Image from "next/image";

const stages = [
  { level: 1, title: "Novice", description: "Just starting out. Your potential is locked.", icon: User },
  { level: 15, title: "Awakened Hunter", description: "You've awakened. Stats are rising.", icon: Shield },
  { level: 50, title: "Celestial Monarch", description: "Unstoppable. You command your habits.", icon: Zap },
];

export function AvatarEvolution() {
  return (
    <section id="avatar" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="container relative z-10 mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary w-fit mb-6">
              <span className="text-xs font-semibold tracking-wide uppercase">Visual Progression</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
              Watch Your Avatar <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary">Evolve</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-balance">
              As you conquer your daily habits and earn XP, your digital representation grows stronger. Unlock new armor, auras, and classes at milestone levels to showcase your real-world discipline.
            </p>
            
            <div className="space-y-6">
              {stages.map((stage, i) => {
                const Icon = stage.icon;
                return (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    className="flex gap-4 items-start"
                  >
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white font-heading text-lg">Level {stage.level}+ : {stage.title}</h4>
                      <p className="text-muted-foreground text-sm">{stage.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Ambient Glow */}
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />
            
            <div className="relative aspect-[3/4] w-full max-w-sm mx-auto rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(var(--primary),0.3)] group">
              {/* If the user places the avatar in public/avatar.jpg it will show, else fallback styles */}
              <div className="absolute inset-0 bg-zinc-900 flex items-center justify-center text-zinc-700 font-medium z-0">
                [Avatar Image Placeholder]
              </div>
              
              {/* Assuming the user will place female-avatar.jpg based on instructions */}
              <Image 
                src="/new-avatar.jpg" 
                alt="Evolved Avatar" 
                fill 
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover relative z-10 transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  // Hide image if not found so placeholder shows
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-20 pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 right-6 z-30">
                <div className="flex justify-between items-end mb-2">
                  <div className="flex flex-col">
                    <div className="text-xs font-bold text-primary tracking-widest uppercase mb-1 drop-shadow-md">Awaken Your Potential</div>
                    <div className="text-xl md:text-2xl font-black font-heading text-white uppercase tracking-tight leading-tight">
                      Your Epic Journey <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary italic">Begins Now</span>
                    </div>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center font-bold text-xl text-primary">
                    50
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
