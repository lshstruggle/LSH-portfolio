"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export function ContactForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "消息已发送！",
      description: "感谢您的联系，我会尽快回复。",
    })

    setIsSubmitting(false)
    e.currentTarget.reset()
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="relative overflow-hidden rounded-xl bg-white/60 backdrop-blur-sm border border-ink/10 p-6 transition-all duration-300 hover:border-rose/50 shadow-sm hover:shadow-md">
        <div className="absolute -inset-1 bg-gradient-to-r from-sky/10 to-rose/10 rounded-xl blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-200"></div>

        <div className="relative">
          <h3 className="text-2xl font-bold mb-6 text-ink">给我留言</h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Input
                placeholder="您的姓名"
                required
                className="bg-cream/50 border-ink/20 focus:border-rose focus:ring-rose/20 text-ink"
              />
            </div>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="您的邮箱"
                required
                className="bg-cream/50 border-ink/20 focus:border-rose focus:ring-rose/20 text-ink"
              />
            </div>
            <div className="space-y-2">
              <Input
                placeholder="主题"
                required
                className="bg-cream/50 border-ink/20 focus:border-rose focus:ring-rose/20 text-ink"
              />
            </div>
            <div className="space-y-2">
              <Textarea
                placeholder="您的留言"
                rows={5}
                required
                className="bg-cream/50 border-ink/20 focus:border-rose focus:ring-rose/20 text-ink"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-sky to-rose hover:from-rose hover:to-sky border-0 text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>发送中...</>
              ) : (
                <>
                  发送消息 <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </motion.div>
  )
}
