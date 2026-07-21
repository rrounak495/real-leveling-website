import { DemoCarousel } from "./demo-carousel";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import fs from "fs";
import path from "path";

// Hardcoded text mapping based on user instructions
const screenTexts: Record<string, { title: string, description: string }> = {
  "01-hunter-selection": {
    title: "Choose Your Hunter",
    description: "Start your journey by creating a character that grows stronger as you grow in real life."
  },
  "02-goal-personalization": {
    title: "Personalize Your Goals",
    description: "Tell the AI what you want to become and receive a completely personalized leveling experience."
  },
  "03-fitness-level": {
    title: "Built Around You",
    description: "Your fitness level, habits and missions automatically adapt as you improve."
  },
  "04-home-dashboard": {
    title: "Your Command Center",
    description: "Track quests, earn XP, monitor streaks and watch your progress every single day."
  },
  "05-hunter-feed": {
    title: "Hunter Feed",
    description: "Celebrate achievements, share progress and stay motivated with a growing community."
  }
};

export function Demo() {
  // Read images from the filesystem dynamically
  const imagesDir = path.join(process.cwd(), "public/images/app");
  let files: string[] = [];
  
  try {
    if (fs.existsSync(imagesDir)) {
      files = fs.readdirSync(imagesDir).filter(file => /\.(png|jpe?g|webp)$/i.test(file));
    }
  } catch (error) {
    console.error("Failed to read images directory", error);
  }

  // Map the files to slide data
  const slides = files.map(file => {
    // Extract base name without extension for matching
    const baseName = file.split('.').slice(0, -1).join('.');
    
    // Find matching text, or use generic fallback
    const textData = screenTexts[baseName] || {
      title: baseName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
      description: "Experience the next evolution of habit tracking and personal growth."
    };

    return {
      src: `/images/app/${file}`,
      title: textData.title,
      description: textData.description,
    };
  });

  return (
    <section id="demo" className="relative py-32 lg:py-48 overflow-hidden bg-[#03030A]">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Animated Aurora Gradient */}
        <div className="absolute top-[-10%] left-[-10%] w-[120%] h-[120%] bg-[conic-gradient(at_top_center,var(--tw-gradient-stops))] from-indigo-900/20 via-purple-900/10 to-[#03030A] opacity-50 blur-[100px] pointer-events-none" />
        
        {/* Soft purple glow */}
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" 
             style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} 
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 flex flex-col items-center">
        
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-20 relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white w-fit mx-auto mb-8 shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-bold tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary">
              ⚡ REAL APP PREVIEW
            </span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black font-heading mb-8 tracking-tighter text-white drop-shadow-2xl">
            Your Next Level <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-primary to-purple-500">Starts Here.</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 text-balance leading-relaxed font-medium mb-6">
            REAL LEVELING isn&apos;t another fitness or habit tracker.
          </p>
          
          <p className="text-lg md:text-xl text-muted-foreground text-balance leading-relaxed max-w-3xl mx-auto">
            It&apos;s a next-generation Life Operating System designed to transform your discipline, fitness, mindset, productivity, and daily consistency into an exciting journey.<br/><br/>
            <span className="text-white/80 font-medium">Every action matters. Every habit earns XP. Every challenge makes you stronger. Every day becomes another opportunity to level up.</span>
          </p>
        </div>

        {/* Dynamic Carousel Component */}
        {slides.length > 0 ? (
          <DemoCarousel slides={slides} />
        ) : (
          <div className="py-20 text-center text-muted-foreground border border-dashed border-white/20 rounded-2xl w-full max-w-4xl mx-auto backdrop-blur-sm bg-white/5">
            No app screenshots found. Please upload images to /public/images/app/
          </div>
        )}

        {/* Premium CTA Section */}
        <div className="mt-32 text-center max-w-4xl mx-auto relative w-full">
          {/* Glassmorphism CTA Box */}
          <div className="p-10 md:p-16 rounded-[3rem] bg-zinc-950/40 border border-white/10 backdrop-blur-2xl shadow-[0_0_100px_rgba(59,130,246,0.1)] relative overflow-hidden">
            {/* CTA Background accents */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-500/20 rounded-full blur-[100px] pointer-events-none" />
            
            <h3 className="text-4xl md:text-5xl font-black font-heading text-white mb-8 relative z-10 tracking-tight">
              Your Future Self Starts Today.
            </h3>
            
            <div className="space-y-3 text-lg md:text-xl text-muted-foreground font-medium mb-12 relative z-10 leading-relaxed">
              <p>The strongest version of yourself isn&apos;t built overnight.</p>
              <p className="text-white/80">It&apos;s built one habit. One workout. One study session.</p>
              <p className="text-white/80">One challenge. One victory at a time.</p>
              <p className="mt-6 text-blue-100/60 max-w-2xl mx-auto">
                REAL LEVELING makes self-improvement addictive by turning your daily life into an epic game where you are the main character.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center relative z-10">
              <Button size="lg" className="h-14 px-10 text-lg font-bold rounded-full shadow-[0_0_30px_rgba(var(--primary),0.5)] hover:shadow-[0_0_50px_rgba(var(--primary),0.8)] hover:scale-105 transition-all duration-300" asChild>
                <Link href="#waitlist">
                  Join the Waitlist <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-10 text-lg font-bold rounded-full bg-white/5 border-white/10 text-white backdrop-blur-md hover:bg-white/10 hover:border-white/20 transition-all duration-300" asChild>
                <Link href="#roadmap">
                  See Roadmap
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Glowing Banner Underneath */}
          <div className="mt-16 flex flex-col items-center">
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-primary/20 bg-primary/10 shadow-[0_0_20px_rgba(59,130,246,0.2)] mb-4">
              <span className="text-lg font-bold text-white tracking-wide">🚀 Launching Soon</span>
            </div>
            <p className="text-muted-foreground">
              Thousands of future Hunters are already waiting. <strong className="text-white">Don&apos;t miss Day One.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
