"use client";

import { motion } from "framer-motion";
import { Dumbbell, Droplets, BrainCircuit, MoonStar, Flame, Sparkles } from "lucide-react";

const mechanics = [
  {
    icon: Dumbbell,
    title: "Gym & Workouts",
    description: "Complete a workout or hit a PR",
    xp: "+150 XP",
    stat: "Strength",
    color: "from-red-500 to-orange-500",
  },
  {
    icon: Droplets,
    title: "Hydration",
    description: "Drink 8 glasses of water daily",
    xp: "+30 XP",
    stat: "Health",
    color: "from-blue-400 to-cyan-400",
  },
  {
    icon: BrainCircuit,
    title: "Deep Work",
    description: "1 hour of focused study or work",
    xp: "+200 XP",
    stat: "Intelligence",
    color: "from-purple-500 to-indigo-500",
  },
  {
    icon: MoonStar,
    title: "Recovery",
    description: "Get 8 hours of quality sleep",
    xp: "+50 XP",
    stat: "Stamina",
    color: "from-emerald-400 to-teal-500",
  },
  {
    icon: Flame,
    title: "Consistency",
    description: "Maintain a 7-day habit streak",
    xp: "+500 XP",
    stat: "Discipline",
    color: "from-amber-400 to-yellow-600",
  },
  {
    icon: Sparkles,
    title: "Mindfulness",
    description: "10 minutes of meditation",
    xp: "+75 XP",
    stat: "Wisdom",
    color: "from-fuchsia-500 to-pink-500",
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 lg:py-32 overflow-hidden bg-black/50 border-y border-white/5">
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
            Life is a Game. <span className="text-primary">Play to Win.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Every positive action in the real world translates directly to in-game progress. Complete real-life quests, earn XP, and permanently boost your stats.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {mechanics.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} p-[1px] mb-6 shadow-lg`}>
                  <div className="w-full h-full bg-black/80 rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold font-heading mb-2 text-white">{item.title}</h3>
                <p className="text-muted-foreground text-sm mb-6 h-10">{item.description}</p>
                
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">Reward</span>
                    <span className="text-sm font-bold text-white">{item.xp}</span>
                  </div>
                  <div className="flex flex-col text-right">
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">Stat Up</span>
                    <span className={`text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r ${item.color}`}>
                      + {item.stat}
                    </span>
                  </div>
                </div>
              </motion.div>
            )
          })}

          {/* Level Progression Visual Component */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-3 mt-12 bg-gradient-to-r from-primary/10 via-blue-500/10 to-primary/10 border border-primary/20 rounded-3xl p-8 relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10 mix-blend-overlay" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }} />
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
              <div className="text-center md:text-left flex-1">
                <h3 className="text-2xl font-bold font-heading mb-2">Level Up System</h3>
                <p className="text-muted-foreground max-w-md">
                  Consistent effort fills your XP bar. Higher levels unlock new avatar evolutions, exclusive badges, and harder quests.
                </p>
              </div>
              
              <div className="flex-1 w-full max-w-md space-y-4">
                <div className="flex justify-between items-end text-sm font-bold">
                  <span className="text-white/80">Hunter Rank: E</span>
                  <span className="text-primary text-xl font-heading">Level 12</span>
                </div>
                <div className="h-4 w-full bg-black/50 rounded-full overflow-hidden border border-white/10">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "75%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-blue-500 to-primary relative"
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse" />
                  </motion.div>
                </div>
                <div className="text-right text-xs text-muted-foreground font-mono">
                  3,450 / 4,000 XP
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
