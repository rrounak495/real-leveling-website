"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/919309775855"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-black border border-white/20 rounded-full shadow-2xl overflow-hidden group"
      aria-label="Chat with us on WhatsApp"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <MessageCircle className="w-6 h-6 text-green-400 drop-shadow-[0_0_8px_rgba(74,222,128,0.5)]" />
      {/* Pulse effect */}
      <div className="absolute inset-0 rounded-full border border-green-500/30 animate-ping" style={{ animationDuration: '3s' }} />
    </motion.a>
  );
}
