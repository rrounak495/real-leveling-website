"use client";

import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface SlideData {
  src: string;
  title: string;
  description: string;
}

interface DemoCarouselProps {
  slides: SlideData[];
}

export function DemoCarousel({ slides }: DemoCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      skipSnaps: false,
    },
    [Autoplay({ delay: 4000, stopOnInteraction: true, stopOnMouseEnter: true })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.internalEngine().index.get());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    // Delay initial state sync to avoid synchronous setState during render
    setTimeout(() => onSelect(), 0);
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  if (!slides || slides.length === 0) return null;

  return (
    <div className="w-full relative max-w-[1600px] mx-auto z-20">
      {/* Carousel Viewport */}
      <div className="overflow-hidden py-16" ref={emblaRef}>
        <div className="flex touch-pan-y items-center h-full">
          {slides.map((screen, index) => {
            const isActive = index === selectedIndex;
            return (
              <div 
                key={index} 
                className="relative flex-[0_0_85%] sm:flex-[0_0_45%] md:flex-[0_0_35%] lg:flex-[0_0_28%] min-w-0 px-4 transition-all duration-700 ease-out flex flex-col items-center"
              >
                {/* Phone Mockup Container */}
                <motion.div 
                  animate={{ 
                    scale: isActive ? 1 : 0.85,
                    y: isActive ? [0, -10, 0] : 0,
                    opacity: isActive ? 1 : 0.4
                  }}
                  transition={{ 
                    scale: { duration: 0.6, ease: "easeOut" },
                    y: { repeat: Infinity, duration: 6, ease: "easeInOut" },
                    opacity: { duration: 0.6 }
                  }}
                  className={`relative w-full aspect-[9/19] rounded-[3rem] border-[8px] border-zinc-900 bg-black group
                    ${isActive ? 'shadow-[0_40px_80px_-20px_rgba(0,0,0,1),0_0_40px_rgba(59,130,246,0.3)] z-20' : 'shadow-2xl z-10'}
                  `}
                >
                  {/* Glowing aura for active phone */}
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-purple-500/40 blur-3xl -z-10 rounded-full opacity-60" />
                  )}
                  
                  {/* Inner bezel */}
                  <div className="absolute inset-0 rounded-[2.2rem] border border-white/10 overflow-hidden bg-zinc-950">
                    {/* Notch */}
                    <div className="absolute top-0 inset-x-0 h-6 bg-zinc-900 w-[120px] mx-auto rounded-b-2xl z-20 shadow-sm flex items-center justify-center">
                      <div className="w-12 h-1.5 bg-black rounded-full" />
                    </div>
                    
                    {/* Screen Content */}
                    <Image
                      src={screen.src}
                      alt={`App preview: ${screen.title}`}
                      fill
                      sizes="(max-width: 768px) 85vw, (max-width: 1024px) 45vw, 35vw"
                      className="object-cover relative z-10"
                      priority={index === 0}
                    />
                    
                    {/* Glass Reflection */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none transform -skew-x-12 translate-x-[150%] group-hover:translate-x-[-150%] transition-transform duration-1500 ease-in-out z-30" />
                  </div>
                </motion.div>
                
                {/* Animated Text Below Screenshot */}
                <motion.div 
                  animate={{ 
                    opacity: isActive ? 1 : 0,
                    y: isActive ? 0 : 20,
                    scale: isActive ? 1 : 0.95
                  }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="mt-10 text-center px-4 w-[120%] pointer-events-none"
                >
                  <h3 className="text-2xl font-bold font-heading text-white tracking-wide mb-3 text-shadow-sm">{screen.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mx-auto">{screen.description}</p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute top-[45%] -translate-y-1/2 left-4 right-4 md:left-12 md:right-12 flex justify-between pointer-events-none z-30">
        <Button
          variant="outline"
          size="icon"
          className="w-14 h-14 rounded-full bg-black/60 border-white/10 text-white backdrop-blur-xl pointer-events-auto hover:bg-primary/20 hover:border-primary/50 transition-all hover:scale-110 shadow-2xl"
          onClick={scrollPrev}
        >
          <ChevronLeft className="w-8 h-8" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="w-14 h-14 rounded-full bg-black/60 border-white/10 text-white backdrop-blur-xl pointer-events-auto hover:bg-primary/20 hover:border-primary/50 transition-all hover:scale-110 shadow-2xl"
          onClick={scrollNext}
        >
          <ChevronRight className="w-8 h-8" />
        </Button>
      </div>
    </div>
  );
}
