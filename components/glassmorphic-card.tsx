"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface GlassmorphicCardProps {
  children: ReactNode
}

export function GlassmorphicCard({ children }: GlassmorphicCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className="relative overflow-hidden rounded-xl bg-white/60 backdrop-blur-sm border border-ink/10 p-6 transition-all duration-300 hover:border-rose/50 shadow-sm hover:shadow-md">
        <div className="absolute -inset-1 bg-gradient-to-r from-sky/10 to-rose/10 rounded-xl blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-200"></div>

        <div className="relative">{children}</div>
      </div>
    </motion.div>
  )
}
