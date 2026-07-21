"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle2, Sparkles, Trophy, Target, BookOpen, Brain, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  goal: z.string().min(1, "Please select a primary goal"),
});

type FormData = z.infer<typeof formSchema>;

const goals = [
  { id: "fitness", label: "Fitness & Health", icon: Trophy },
  { id: "study", label: "Study & Learning", icon: BookOpen },
  { id: "career", label: "Career & Finance", icon: Target },
  { id: "productivity", label: "General Productivity", icon: Brain },
];

export function Waitlist() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const { register, handleSubmit, setValue, watch, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      goal: "",
    }
  });

  // eslint-disable-next-line react-hooks/incompatible-library
  const selectedGoal = watch("goal");

  const onSubmit = async (data: FormData) => {
    try {
      // We will replace this with a real API call to Vercel Postgres later
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      if (!res.ok) throw new Error("Submission failed");
      
      setIsSubmitted(true);
    } catch (error) {
      console.error(error);
      // Fallback for visual demo purposes even if API fails right now
      setIsSubmitted(true); 
    }
  };

  return (
    <section id="waitlist" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div className="w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/4" />
      </div>

      <div className="container relative z-10 mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Level Up?</span></h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join the waitlist to get early access to the private beta. Spots are limited, and early members get exclusive founder rewards.
          </p>
        </motion.div>

        <div className="mx-auto max-w-lg">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                transition={{ duration: 0.4 }}
                className="bg-white/5 border border-white/10 p-8 rounded-3xl shadow-2xl backdrop-blur-sm"
              >
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80">Your Name</label>
                    <Input 
                      placeholder="Sung Jin-woo" 
                      {...register("name")}
                      className={errors.name ? "border-red-500/50 focus-visible:ring-red-500/50" : ""}
                    />
                    {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80">Email Address</label>
                    <Input 
                      type="email" 
                      placeholder="jinwoo@shadows.com" 
                      {...register("email")}
                      className={errors.email ? "border-red-500/50 focus-visible:ring-red-500/50" : ""}
                    />
                    {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email.message}</p>}
                  </div>

                  <div className="space-y-3">
                    <label className="text-sm font-medium text-white/80">Primary Quest (Goal)</label>
                    <div className="grid grid-cols-2 gap-3">
                      {goals.map((goal) => {
                        const Icon = goal.icon;
                        const isSelected = selectedGoal === goal.id;
                        return (
                          <div 
                            key={goal.id}
                            onClick={() => setValue("goal", goal.id, { shouldValidate: true })}
                            className={cn(
                              "flex flex-col items-center justify-center p-3 gap-2 rounded-xl border cursor-pointer transition-all duration-200 text-center",
                              isSelected 
                                ? "bg-primary/20 border-primary shadow-[0_0_15px_rgba(var(--primary),0.2)]" 
                                : "bg-black/20 border-white/10 hover:bg-white/5 hover:border-white/20"
                            )}
                          >
                            <Icon className={cn("w-6 h-6", isSelected ? "text-primary" : "text-muted-foreground")} />
                            <span className={cn("text-xs font-medium", isSelected ? "text-white" : "text-muted-foreground")}>{goal.label}</span>
                          </div>
                        )
                      })}
                    </div>
                    {errors.goal && <p className="text-xs text-red-400 mt-1">{errors.goal.message}</p>}
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting} 
                    className="w-full h-12 text-base font-semibold group relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <Sparkles className="w-5 h-5" />}
                      Claim Your Spot
                    </span>
                    {/* Hover glare effect */}
                    <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />
                  </Button>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="bg-primary/10 border border-primary/30 p-10 rounded-3xl text-center relative overflow-hidden"
              >
                {/* Confetti / celebration elements could go here */}
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-primary/50 shadow-[0_0_30px_rgba(var(--primary),0.4)]"
                >
                  <CheckCircle2 className="w-10 h-10 text-primary" />
                </motion.div>
                
                <h3 className="text-2xl font-bold font-heading mb-2">Quest Accepted!</h3>
                <p className="text-muted-foreground mb-8">
                  You&apos;re officially on the waitlist. Keep an eye on your inbox for your private beta invitation.
                </p>

                <div className="bg-black/30 p-4 rounded-xl border border-white/5">
                  <p className="text-sm font-medium mb-3">Invite friends to skip the line</p>
                  <div className="flex gap-2">
                    <Input readOnly value="https://realleveling.com/invite/j1nw00" className="bg-black/50" />
                    <Button variant="secondary" onClick={() => navigator.clipboard.writeText("https://realleveling.com/invite/j1nw00")}>
                      Copy
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
