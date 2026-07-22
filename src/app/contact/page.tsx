"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, CheckCircle2 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  subject: z.string().min(2, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [showToast, setShowToast] = useState(false);

  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simulate network delay for frontend validation
    await new Promise((resolve) => setTimeout(resolve, 800));
    console.log("Form data (frontend only):", data);
    
    // Show success toast
    setShowToast(true);
    reset();
    
    // Hide toast after 3 seconds
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen pt-32 pb-24 bg-[#03030A] relative">

      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 bg-primary/20 border border-primary/50 text-white px-6 py-4 rounded-xl shadow-[0_0_30px_rgba(var(--primary),0.3)] backdrop-blur-md flex items-center gap-3"
          >
            <CheckCircle2 className="w-5 h-5 text-primary" />
            <span className="font-medium">Message submitted successfully.</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-4 max-w-xl relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/20 mb-6 shadow-[0_0_30px_rgba(var(--primary),0.2)]">
            <Mail className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black font-heading mb-4 text-white tracking-tight">
            Contact Support
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Have questions about your hunter journey? Need technical assistance? Reach out to our guild masters.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 mb-6">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="flex flex-col items-center justify-center p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-lg transition-colors hover:bg-white/[0.08]"
            >
              <div className="text-2xl mb-3">📧</div>
              <span className="text-xs text-white/60 font-semibold mb-1 uppercase tracking-widest">Email</span>
              <a href="mailto:reallevling@gmail.com" className="text-primary font-bold hover:underline text-base sm:text-lg">
                reallevling@gmail.com
              </a>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="flex flex-col items-center justify-center p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-lg transition-colors hover:bg-white/[0.08]"
            >
              <div className="text-2xl mb-3">📱</div>
              <span className="text-xs text-white/60 font-semibold mb-1 uppercase tracking-widest">Phone / WhatsApp</span>
              <div className="flex items-center gap-3">
                <a href="tel:+919309775855" className="text-primary font-bold hover:underline text-base sm:text-lg">
                  +91 9309775855
                </a>
                <a 
                  href="https://wa.me/919309775855" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-1.5 bg-green-500/20 text-green-400 rounded-full hover:bg-green-500/40 hover:scale-110 transition-all cursor-pointer shadow-[0_0_10px_rgba(34,197,94,0.2)]"
                  aria-label="Chat on WhatsApp"
                >
                  <FaWhatsapp className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
          
          <p className="mb-8 text-sm text-muted-foreground text-balance mx-auto">
            We're happy to answer your questions about REAL LEVELING, partnerships, or early access.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 p-8 rounded-3xl shadow-2xl backdrop-blur-sm">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">Your Name</label>
                <Input 
                  placeholder="Sung Jin-woo" 
                  {...register("name")}
                  className={cn(errors.name && "border-red-500/50 focus-visible:ring-red-500/50")}
                />
                {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">Email Address</label>
                <Input 
                  type="email" 
                  placeholder="hunter@shadows.com" 
                  {...register("email")}
                  className={cn(errors.email && "border-red-500/50 focus-visible:ring-red-500/50")}
                />
                {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email.message}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-white/80">Subject</label>
              <Input 
                placeholder="Quest Issue / Bug Report" 
                {...register("subject")}
                className={cn(errors.subject && "border-red-500/50 focus-visible:ring-red-500/50")}
              />
              {errors.subject && <p className="text-xs text-red-400 mt-1">{errors.subject.message}</p>}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-white/80">Message</label>
              <textarea 
                placeholder="Describe your issue in detail..." 
                {...register("message")}
                rows={5}
                className={cn(
                  "flex w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-colors duration-200 resize-none",
                  errors.message && "border-red-500/50 focus-visible:ring-red-500/50"
                )}
              />
              {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message.message}</p>}
            </div>

            <Button 
              type="submit" 
              disabled={isSubmitting} 
              className="w-full h-12 text-base font-semibold group relative overflow-hidden"
            >
              <span className="relative z-10">
                {isSubmitting ? "Transmitting..." : "Send Message"}
              </span>
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
