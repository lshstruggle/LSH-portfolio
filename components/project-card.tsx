"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowUpRight, Github } from "lucide-react"
import { motion } from "framer-motion"
import { asset } from "@/lib/asset"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  image: string
  demoUrl?: string
  repoUrl?: string
}

export function ProjectCard({ title, description, tags, image, demoUrl, repoUrl }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group"
    >
      <div
        className="relative h-full overflow-hidden rounded-xl bg-white/60 backdrop-blur-sm border border-ink/10 transition-all duration-300 group-hover:border-rose/50 shadow-sm hover:shadow-md"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-sky/10 to-rose/10 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

        <div className="relative h-full flex flex-col">
          <div className="relative overflow-hidden h-48">
            <div className="absolute inset-0 bg-gradient-to-b from-sky/20 to-rose/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
            <img
              src={image || asset("/placeholder.svg")}
              alt={title}
              className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? "scale-110" : "scale-100"}`}
            />
          </div>

          <div className="p-6 flex-grow">
            <h3 className="text-xl font-bold mb-2 text-ink">{title}</h3>
            <p className="text-ink/60 mb-4">{description}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {tags.map((tag, index) => (
                <Badge key={index} variant="secondary" className="bg-sky/20 hover:bg-sky/30 text-ink/80">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="flex justify-between mt-auto pt-4 border-t border-ink/10">
              {repoUrl && (
                <Button variant="ghost" size="sm" className="text-ink/60 hover:text-ink hover:bg-ink/5" asChild>
                  <Link href={repoUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    源码
                  </Link>
                </Button>
              )}
              {demoUrl && (
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-sky to-rose hover:from-rose hover:to-sky border-0 text-white"
                  asChild
                >
                  <Link href={demoUrl} target={demoUrl.startsWith("http") ? "_blank" : undefined} rel={demoUrl.startsWith("http") ? "noopener noreferrer" : undefined}>
                    查看详情
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              )}
            </div>
          </div>

          <div className="absolute top-3 right-3 z-20">
            <div
              className={`w-3 h-3 rounded-full ${isHovered ? "bg-rose" : "bg-ink/20"} transition-colors duration-300`}
            ></div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
