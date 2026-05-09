"use client"

import Link from "next/link"
import { ArrowLeft, MapPin, Calendar, Layers, Target, Users, Sparkles, MessageSquare, Lightbulb } from "lucide-react"
import { motion } from "framer-motion"
import { asset } from "@/lib/asset"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollProgress } from "@/components/scroll-progress"
import { FloatingNav } from "@/components/floating-nav"

export default function CanyonProjectPage() {
  return (
    <div className="min-h-screen bg-cream text-ink overflow-hidden">
      <ScrollProgress />
      <FloatingNav />

      {/* 返回导航 */}
      <div className="fixed top-6 left-6 z-50">
        <Button
          variant="ghost"
          className="rounded-full bg-cream/90 backdrop-blur-md border border-ink/10 shadow-sm text-ink/70 hover:text-ink hover:bg-white/80"
          asChild
        >
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            返回首页
          </Link>
        </Button>
      </div>

      {/* Hero Banner */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-rose rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-2000"></div>
        </div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge className="bg-sky/20 text-ink/80 hover:bg-sky/30">AI Agent</Badge>
              <Badge className="bg-rose/20 text-ink/80 hover:bg-rose/30">LBS</Badge>
              <Badge className="bg-sky/20 text-ink/80 hover:bg-sky/30">多模态AI</Badge>
              <Badge className="bg-rose/20 text-ink/80 hover:bg-rose/30">TTS</Badge>
              <Badge className="bg-sky/20 text-ink/80 hover:bg-sky/30">微信小程序</Badge>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky to-rose">
                《峡谷寻城记》
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-ink/60 max-w-3xl">
              沉浸式电竞文旅伴游系统 — 以王者荣耀电竞 IP 为情感内核，以 AI 英雄为智能伴游，将真实城市转化为游戏化「开放世界野区」
            </p>
          </motion.div>
        </div>
      </section>

      {/* 项目封面图 — 双手机 UI 展示 */}
      <section className="pb-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center items-center gap-6 md:gap-12"
          >
            {/* 手机 1 */}
            <div className="relative w-[180px] md:w-[260px] shrink-0">
              {/* 手机外框 */}
              <div className="relative bg-ink rounded-[2rem] p-2 shadow-2xl shadow-ink/30">
                {/* 顶部刘海 */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-ink rounded-b-xl z-10"></div>
                {/* 屏幕 */}
                <div className="relative rounded-[1.5rem] overflow-hidden bg-ink aspect-[9/19.5]">
                  <img
                    src={asset("/canyon-1.png")}
                    alt="峡谷寻城记截图 1"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* 底部阴影 */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[80%] h-4 bg-ink/20 rounded-full blur-md"></div>
            </div>

            {/* 手机 2 */}
            <div className="relative w-[180px] md:w-[260px] shrink-0 md:mt-12">
              {/* 手机外框 */}
              <div className="relative bg-ink rounded-[2rem] p-2 shadow-2xl shadow-ink/30">
                {/* 顶部刘海 */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-ink rounded-b-xl z-10"></div>
                {/* 屏幕 */}
                <div className="relative rounded-[1.5rem] overflow-hidden bg-ink aspect-[9/19.5]">
                  <img
                    src={asset("/canyon-2.png")}
                    alt="峡谷寻城记截图 2"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* 底部阴影 */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[80%] h-4 bg-ink/20 rounded-full blur-md"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 项目基础信息 */}
      <section className="py-16 relative">
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8 text-ink">项目基础信息</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: MapPin, label: "产品形态", value: "微信小程序" },
              { icon: Layers, label: "项目版本", value: "V2.0（最终定稿版）" },
              { icon: Calendar, label: "开发周期", value: "约 7 周（1 个月）" },
              { icon: Sparkles, label: "核心技术", value: "腾讯元器 AI Agent + LBS + GPT-SoVITS" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-xl bg-white/60 backdrop-blur-sm border border-ink/10 p-6 transition-all duration-300 hover:border-rose/50 shadow-sm hover:shadow-md"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-sky/10 to-rose/10 rounded-xl blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-200"></div>
                <div className="relative">
                  <item.icon className="w-6 h-6 text-sky mb-3" />
                  <div className="text-sm text-ink/50 mb-1">{item.label}</div>
                  <div className="text-base font-medium text-ink">{item.value}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 项目定位 & 设计哲学 */}
      <section className="py-16 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-sky rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-xl bg-white/60 backdrop-blur-sm border border-ink/10 p-8 transition-all duration-300 hover:border-rose/50 shadow-sm hover:shadow-md"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-sky/10 to-rose/10 rounded-xl blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-200"></div>
              <div className="relative">
                <h3 className="text-2xl font-bold mb-4 text-ink">项目定位</h3>
                <p className="text-ink/70 leading-relaxed">
                  以《王者荣耀》顶级电竞 IP 为情感内核，以腾讯元器 AI 英雄为智能伴游，以 LBS 为交互载体，将真实城市转化为游戏化「开放世界野区」，融合城市文旅、电竞文化、赛事精神、选手故事、本地消费于一体的下一代沉浸式电竞文旅体验产品。
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-xl bg-white/60 backdrop-blur-sm border border-ink/10 p-8 transition-all duration-300 hover:border-rose/50 shadow-sm hover:shadow-md"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-sky/10 to-rose/10 rounded-xl blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-200"></div>
              <div className="relative">
                <h3 className="text-2xl font-bold mb-4 text-ink">设计哲学</h3>
                <p className="text-ink/70 leading-relaxed">
                  以轻量化、不喧宾夺主的方式，将电竞赛事精神、选手与选手以及选手与城市的羁绊故事嵌入旅行全流程，让功能体验为情感服务，让用户从「使用工具」转变为「热爱产品」。
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 三层体验金字塔 */}
      <section className="py-16 relative">
        <div className="container relative z-10">
          <motion.h2
            className="text-3xl font-bold mb-10 text-ink text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            三层体验金字塔
          </motion.h2>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                level: "顶层",
                title: "情感共鸣层",
                desc: "引发情感共鸣、传递正向价值的电竞赛事文化与选手羁绊人文故事",
                color: "from-rose to-rose/70",
              },
              {
                level: "中层",
                title: "游戏化互动层",
                desc: "有趣、强互动、高激励的游戏化城市探索玩法",
                color: "from-sky to-sky/70",
              },
              {
                level: "底层",
                title: "技术功能层",
                desc: "稳定可靠的技术与基础功能支撑",
                color: "from-ink/40 to-ink/20",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative overflow-hidden rounded-xl bg-gradient-to-r ${item.color} p-1`}
              >
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6">
                  <div className="flex items-center gap-3">
                    <span className="inline-block px-3 py-1 text-xs font-bold rounded-full bg-ink/5 text-ink/50">
                      {item.level}
                    </span>
                    <h4 className="text-lg font-bold text-ink">{item.title}</h4>
                  </div>
                  <p className="mt-2 text-ink/70">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 行业背景 */}
      <section className="py-16 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-rose rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <motion.h2
            className="text-3xl font-bold mb-10 text-ink text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            行业背景洞察
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "电竞产业",
                points: [
                  "2024 年中国电竞用户规模达 4.9 亿，18-30 岁核心用户占比超 65%",
                  "《王者荣耀》累计注册用户突破 5 亿，KPL 已与 30+ 城市签署「电竞城市发展计划」",
                  "电竞精神缺乏线下载体，粉丝与选手的羁绊故事零散分布",
                ],
              },
              {
                title: "文旅产业",
                points: [
                  "2024 年国内旅游总人次达 56 亿，CityWalk 成为年轻人主流旅行方式",
                  "传统旅行信息高度碎片化，智慧导游类产品使用率不足 12%",
                  "文旅行业面临年轻用户触达困难、传统文化难以活化的核心困境",
                ],
              },
              {
                title: "技术成熟度",
                points: [
                  "腾讯元器可低门槛创建具备长期记忆、人格化的个性化 AI Agent",
                  "小程序生态完善，LBS、云存储已有成熟技术支持",
                  "图像生成、语音合成、实时交互等多模态 AI 技术成熟可用",
                ],
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-xl bg-white/60 backdrop-blur-sm border border-ink/10 p-6 transition-all duration-300 hover:border-rose/50 shadow-sm hover:shadow-md"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-sky/10 to-rose/10 rounded-xl blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-200"></div>
                <div className="relative">
                  <h3 className="text-xl font-bold mb-4 text-ink">{item.title}</h3>
                  <ul className="space-y-3">
                    {item.points.map((point, i) => (
                      <li key={i} className="text-sm text-ink/70 leading-relaxed flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose mt-1.5 shrink-0"></span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 项目目标 */}
      <section className="py-16 relative">
        <div className="container relative z-10">
          <motion.h2
            className="text-3xl font-bold mb-10 text-ink text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            项目目标
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Target, title: "产业目标", desc: "打造国内首个「电竞IP+AI+LBS+赛事文旅」融合标杆产品，实现电竞流量向线下文旅场景高效转化" },
              { icon: Users, title: "用户目标", desc: "让用户获得「现实世界RPG」沉浸体验，解决攻略碎片化、导游枯燥、电竞热爱无线下载体等痛点" },
              { icon: Lightbulb, title: "商业目标", desc: "实现电竞赛事流量到本地消费的转化闭环，支撑产品长期运营" },
              { icon: MessageSquare, title: "文化目标", desc: "让电竞精神走出屏幕融入城市街巷，打破大众对电竞的刻板印象" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-xl bg-white/60 backdrop-blur-sm border border-ink/10 p-6 transition-all duration-300 hover:border-rose/50 shadow-sm hover:shadow-md"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-sky/10 to-rose/10 rounded-xl blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-200"></div>
                <div className="relative">
                  <item.icon className="w-8 h-8 text-sky mb-4" />
                  <h3 className="text-lg font-bold mb-2 text-ink">{item.title}</h3>
                  <p className="text-sm text-ink/70 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 核心需求与竞品分析 */}
      <section className="py-16 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-sky rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8 text-ink">竞品分析与差异化</h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                name: "王者荣耀官方文旅联动",
                status: "现状：以皮肤联动、主题地铁/公交、线下装置为主",
                gap: "短板：无沉浸式互动、无 AI 陪伴、无游戏化探索、无赛事精神与选手故事落地",
              },
              {
                name: "传统智慧导游 APP（三毛游等）",
                status: "现状：覆盖主流景区，提供预录制语音讲解",
                gap: "短板：内容固定无个性化、无实时交互、无游戏化激励、用户留存极低",
              },
              {
                name: "CityWalk 社区（小红书等）",
                status: "现状：UGC 攻略分享，路线信息丰富但杂乱",
                gap: "短板：无一站式闭环体验，无导航、无讲解、无打卡激励、无消费联动",
              },
              {
                name: "LBS+AR 手游（Pokémon GO 等）",
                status: "现状：以地理定位为核心的游戏化探索",
                gap: "短板：无真实文旅内容、无情感叙事、无本地化消费闭环",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-xl bg-white/60 backdrop-blur-sm border border-ink/10 p-6 transition-all duration-300 hover:border-rose/50 shadow-sm hover:shadow-md"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-sky/10 to-rose/10 rounded-xl blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-200"></div>
                <div className="relative">
                  <h4 className="text-lg font-bold text-ink mb-2">{item.name}</h4>
                  <p className="text-sm text-ink/50 mb-1">{item.status}</p>
                  <p className="text-sm text-rose/80">{item.gap}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Agent 核心设计 — 李白 */}
      <section className="py-16 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-rose rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4 text-ink">AI Agent 核心设计</h2>
            <p className="text-ink/60 mb-8">以腾讯元器构建「李白」英雄智能体为例，展示 Agent 角色设定与 Prompt 工程实践</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-xl bg-white/60 backdrop-blur-sm border border-ink/10 p-8 transition-all duration-300 hover:border-rose/50 shadow-sm hover:shadow-md"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-sky/10 to-rose/10 rounded-xl blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-200"></div>
              <div className="relative">
                <h3 className="text-xl font-bold mb-4 text-ink">角色设定</h3>
                <div className="space-y-4 text-sm text-ink/70 leading-relaxed">
                  <p>
                    <strong className="text-ink">角色名称：</strong>李白，《王者荣耀》中的青莲剑仙，「峡谷寻城记」小程序的 AI 英雄伴游。正陪伴召唤师探索蜀地成都，既是旅行向导，也是能聊游戏、聊赛事、聊人生的知己伙伴。
                  </p>
                  <p>
                    <strong className="text-ink">风格特点：</strong>自信潇洒近乎自恋但让人讨厌不起来，崇尚自由、嗜酒如命、剑不离身。说话永远举重若轻，好像天下没什么事难住你。
                  </p>
                  <p>
                    <strong className="text-ink">语言融合：</strong>自然融合王者荣耀李白台词风格（「大河之剑天上来」「将进酒杯莫停」）与诗仙文学底蕴（《蜀道难》《将进酒》），并引用 KPL 选手语录，用剑客惺惺相惜的口吻表达对电竞少年的敬意。
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-xl bg-white/60 backdrop-blur-sm border border-ink/10 p-8 transition-all duration-300 hover:border-rose/50 shadow-sm hover:shadow-md"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-sky/10 to-rose/10 rounded-xl blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-200"></div>
              <div className="relative">
                <h3 className="text-xl font-bold mb-4 text-ink">核心能力</h3>
                <div className="space-y-4">
                  {[
                    { title: "闲聊寒暄", desc: "用李白性格自然回应，展现角色魅力和陪伴感，像朋友一样聊天，不急于推荐景点" },
                    { title: "旅行指导", desc: "提供景点介绍、美食推荐、交通指引、行程规划，用李白口吻追问偏好后给出个性化建议" },
                    { title: "电竞赛事交流", desc: "以峡谷剑客视角聊 KPL 赛事与选手，用李白口吻重新讲述选手羁绊与赛事精神" },
                  ].map((item, i) => (
                    <div key={i} className="p-4 rounded-lg bg-sky/5 border border-sky/10">
                      <h4 className="font-bold text-ink mb-1">{item.title}</h4>
                      <p className="text-sm text-ink/60">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 技术栈 */}
      <section className="py-16 relative">
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8 text-ink text-center">技术架构</h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-xl bg-white/60 backdrop-blur-sm border border-ink/10 p-8 transition-all duration-300 hover:border-rose/50 shadow-sm hover:shadow-md"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-sky/10 to-rose/10 rounded-xl blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-200"></div>
              <div className="relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-ink mb-3">前端层</h4>
                    <ul className="space-y-2 text-sm text-ink/70">
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-sky"></span>微信小程序原生框架</li>
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-sky"></span>腾讯地图 SDK（LBS 定位与地理围栏）</li>
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-sky"></span>InnerAudioContext（语音播放）</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-ink mb-3">AI 层</h4>
                    <ul className="space-y-2 text-sm text-ink/70">
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-rose"></span>腾讯元器 AI Agent（多英雄智能体）</li>
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-rose"></span>GPT-SoVITS 语音合成（流式 TTS）</li>
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-rose"></span>腾讯元宝图像生成</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-ink mb-3">数据层</h4>
                    <ul className="space-y-2 text-sm text-ink/70">
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-sky"></span>腾讯云存储（多媒体资源）</li>
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-sky"></span>知识库（景点/美食/赛事/选手）</li>
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-sky"></span>实时服务话术库</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-ink mb-3">交互流程</h4>
                    <ul className="space-y-2 text-sm text-ink/70">
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-rose"></span>用户输入 → 意图识别</li>
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-rose"></span>知识库检索 → Agent 生成回复</li>
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-rose"></span>TTS 合成 → 异步语音播放</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 核心亮点总结 */}
      <section className="py-16 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/3 w-72 h-72 bg-sky rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto relative overflow-hidden rounded-xl bg-gradient-to-r from-sky/20 to-rose/20 border border-ink/10 p-8 md:p-12"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-sky/20 to-rose/20 rounded-xl blur opacity-40"></div>
            <div className="relative">
              <h2 className="text-3xl font-bold mb-6 text-ink text-center">项目核心亮点</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "首创「电竞 IP + AI Agent + LBS 游戏化」模式",
                  "设计 6 位英雄 AI 智能体的性格、剧情及互动逻辑",
                  "情感化交互：赛事精神转化为地图彩蛋与记忆碎片",
                  "多模态 AI 体验：首字响应延迟从 8s 优化至 500ms",
                  "LBS 地理围栏触发历史名场面视频，创造「朝圣」体验",
                  "深度践行 AI-Native 全生命周期研发范式",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-gradient-to-r from-sky to-rose flex items-center justify-center text-white text-xs font-bold shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    <p className="text-ink/80">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16">
        <div className="container">
          <div className="text-center space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Button
                className="relative overflow-hidden group bg-gradient-to-r from-sky to-rose border-0 text-white px-8 py-6 text-lg"
                asChild
              >
                <Link href="/">
                  <ArrowLeft className="mr-2 h-5 w-5 transition-transform group-hover:-translate-x-1" />
                  返回首页
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-ink/10 py-12 bg-cream">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <Link href="/" className="font-bold text-xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky to-rose">刘松昊</span>
            </Link>
            <p className="text-sm text-ink/50 mt-2">
              &copy; {new Date().getFullYear()} 刘松昊. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
