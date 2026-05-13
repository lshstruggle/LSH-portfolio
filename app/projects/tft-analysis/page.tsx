"use client"

import Link from "next/link"
import { ArrowLeft, Target, Swords, Scale, Lightbulb, TrendingUp, Shield, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { asset } from "@/lib/asset"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollProgress } from "@/components/scroll-progress"
import { FloatingNav } from "@/components/floating-nav"
import { GlassmorphicCard } from "@/components/glassmorphic-card"

export default function TFTAnalysisPage() {
  return (
    <div className="min-h-screen bg-cream text-ink overflow-hidden">
      <ScrollProgress />
      <FloatingNav />

      {/* Hero Header */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-sky rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-rose rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-ink/50 hover:text-rose transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              返回首页
            </Link>

            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className="bg-sky/20 text-ink/80 hover:bg-sky/30">产品拆解</Badge>
              <Badge className="bg-rose/20 text-ink/80 hover:bg-rose/30">竞品分析</Badge>
              <Badge className="bg-sky/20 text-ink/80 hover:bg-sky/30">游戏策划</Badge>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-ink">
              《金铲铲之战》系统拆解与竞品分析报告
            </h1>
            <p className="text-xl text-ink/60 max-w-3xl">
              对英雄联盟IP下自走棋品类进行深度系统拆解，从经济系统、概率系统、战斗逻辑到变量机制逐层剖析，并与主流竞品进行多维度对比。
            </p>
          </motion.div>
        </div>
      </section>

      {/* 核心心流 Overview */}
      <section className="pb-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <GlassmorphicCard>
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-sky/20 flex items-center justify-center">
                    <Target className="w-5 h-5 text-sky" />
                  </div>
                  <h2 className="text-2xl font-bold text-ink">产品概述与核心心流</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-4 rounded-xl bg-sky/5 border border-sky/10">
                    <div className="text-sm font-semibold text-ink mb-2">产品定位</div>
                    <p className="text-sm text-ink/70 leading-relaxed">
                      英雄联盟大IP下的回合制自动战斗品类（Auto-Battler）移动端游戏，主打高重玩价值、深策略深度与轻操作门槛的零和博弈。
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-rose/5 border border-rose/10">
                    <div className="text-sm font-semibold text-ink mb-2">核心心流</div>
                    <p className="text-sm text-ink/70 leading-relaxed">
                      资源获取（经济/装备/血量）→ 资源转化（搜牌/升人口/合装备）→ 阵容验证（自动战斗/羁绊对抗）→ 目标调整（博弈纠偏）
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-sky/5 border border-sky/10">
                    <div className="text-sm font-semibold text-ink mb-2">核心乐趣</div>
                    <p className="text-sm text-ink/70 leading-relaxed">
                      <span className="text-rose font-medium">构筑感</span>：阵容养成的爽感；
                      <span className="text-rose font-medium">博弈感</span>：预测对手的智力碾压；
                      <span className="text-rose font-medium">赌博感</span>：随机性的多巴胺刺激。
                    </p>
                  </div>
                </div>
              </div>
            </GlassmorphicCard>
          </motion.div>
        </div>
      </section>

      {/* 核心单局系统拆解 */}
      <section className="pb-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-10 h-10 rounded-lg bg-rose/20 flex items-center justify-center">
              <Swords className="w-5 h-5 text-rose" />
            </div>
            <h2 className="text-2xl font-bold text-ink">核心单局系统拆解</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 经济系统 */}
            <GlassmorphicCard>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-sky/20 flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-sky" />
                </div>
                <h3 className="text-lg font-bold text-ink">经济系统</h3>
              </div>
              <div className="space-y-3 text-sm text-ink/70 leading-relaxed">
                <p><span className="font-medium text-ink">基础收益：</span>每回合固定基础金币收益。</p>
                <p><span className="font-medium text-ink">利息机制：</span>每持有 10 金币产生 1 金币利息（最高 5 金币 / 50 块存款）。设计逻辑：鼓励玩家进行"延迟满足"，是区分高阶玩家与新手/低级 AI 的分水岭。</p>
                <p><span className="font-medium text-ink">连胜/连败机制：</span>连续胜负可获得额外金币。为劣势方提供"卧薪尝胆"的翻盘资本，为优势方提供"滚雪球"的节奏压制力。</p>
              </div>
            </GlassmorphicCard>

            {/* 成长与概率系统 */}
            <GlassmorphicCard>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-rose/20 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-rose" />
                </div>
                <h3 className="text-lg font-bold text-ink">成长与概率系统</h3>
              </div>
              <div className="space-y-3 text-sm text-ink/70 leading-relaxed">
                <p><span className="font-medium text-ink">经验与等级：</span>消费金币购买经验（4g=4xp）。人口等级直接决定各品质（Cost 1-5）棋子的刷新概率。</p>
                <p><span className="font-medium text-ink">公共卡池博弈：</span>8 人共享卡池设定。天然的"反同质化"机制，当多家争抢 T0 阵容时，会因卡池枯竭而两败俱伤。</p>
                <p><span className="font-medium text-ink">升星机制：</span>3个一星 = 1个二星，3个二星 = 1个三星，提供数值的质变飞跃。</p>
              </div>
            </GlassmorphicCard>

            {/* 战斗与逻辑系统 */}
            <GlassmorphicCard>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-sky/20 flex items-center justify-center">
                  <Shield className="w-4 h-4 text-sky" />
                </div>
                <h3 className="text-lg font-bold text-ink">战斗与逻辑系统</h3>
              </div>
              <div className="space-y-3 text-sm text-ink/70 leading-relaxed">
                <p><span className="font-medium text-ink">棋盘结构：</span>己方 4×7，双方交战 8×7 的六边形网格（Hex Grid），影响寻路与技能覆盖。</p>
                <p><span className="font-medium text-ink">寻敌逻辑：</span>基于带有优先级权重的状态机（State Machine）和行为树（Behavior Tree）。刺客开局隐身跳跃至最远敌方后排；近战优先锁定直线距离最近的目标。</p>
                <p><span className="font-medium text-ink">能量/蓝量机制：</span>普攻与受击均产生蓝量，满蓝释放技能。将"攻速"和"坦度"巧妙转化为"施法频率"。</p>
              </div>
            </GlassmorphicCard>

            {/* 变量系统 */}
            <GlassmorphicCard>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-rose/20 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-rose" />
                </div>
                <h3 className="text-lg font-bold text-ink">变量系统</h3>
              </div>
              <div className="space-y-3 text-sm text-ink/70 leading-relaxed">
                <p><span className="font-medium text-ink">强化符文（海克斯）：</span>阶段 2-1、3-2、4-2 提供三选一的全局被动或一次性资源。彻底打破对局的确定性，强制玩家根据变量调整既定路线。</p>
                <p><span className="font-medium text-ink">装备系统：</span>散件合成大件。二次限制阵容选择空间——即便胡了法系棋子，若掉落物理散件，玩家也必须痛苦地进行取舍与变阵。</p>
              </div>
            </GlassmorphicCard>
          </div>
        </div>
      </section>

      {/* 竞品分析表格 */}
      <section className="pb-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-10 h-10 rounded-lg bg-sky/20 flex items-center justify-center">
              <Scale className="w-5 h-5 text-sky" />
            </div>
            <h2 className="text-2xl font-bold text-ink">竞品分析：自走棋品类的差异化演进</h2>
          </motion.div>

          <div className="space-y-6">
            {/* 表头卡片 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <GlassmorphicCard className="border-l-4 border-l-rose">
                <h3 className="text-lg font-bold text-ink mb-1">《金铲铲之战》</h3>
                <p className="text-xs text-ink/50">TFT · 英雄联盟IP</p>
              </GlassmorphicCard>
              <GlassmorphicCard className="border-l-4 border-l-sky">
                <h3 className="text-lg font-bold text-ink mb-1">《王者万象棋》</h3>
                <p className="text-xs text-ink/50">同厂竞品 / 赛道新星</p>
              </GlassmorphicCard>
              <GlassmorphicCard className="border-l-4 border-l-ink/30">
                <h3 className="text-lg font-bold text-ink mb-1">《炉石传说：酒馆战棋》</h3>
                <p className="text-xs text-ink/50">西方经典竞品</p>
              </GlassmorphicCard>
            </div>

            {/* 对比维度 */}
            {[
              {
                dim: "IP 受众与认知",
                tft: "英雄联盟IP。受众偏端游核心向，注重暗黑/奇幻风格的羁绊组合。",
                wxq: "王者荣耀IP。受众更偏泛娱乐与移动端，对英雄技能与'名场面'的肌肉记忆极深。",
                hs: "魔兽世界IP。卡牌玩家基数大，接受静态卡面碰撞。",
              },
              {
                dim: "单局节奏与时长",
                tft: "偏长（30-40分钟）。需要大量的过渡与换阵，中后期运营压力极大。",
                wxq: "极速/紧凑（预估20分钟左右）。强调快速成型、技能爽感反馈，适合碎片化时间。",
                hs: "适中。无利息机制，节奏由酒馆等级固定，偏向每回合的即时抉择。",
              },
              {
                dim: "核心机制差异化",
                tft: "装备合成 + 站位博弈 + 蓝量技能释放。策略维度最广，包含经济、血量、站位、装备。",
                wxq: "专属战场技能 + 王者英雄特性。玩家（棋手）可能拥有更强的主动干预手段，技能表现更加华丽。",
                hs: "纯随从身材Buff + 随从站位顺序。无装备，无蓝量，核心乐趣在于找核心卡进行数值无限膨胀。",
              },
              {
                dim: "操作门槛与APM",
                tft: "极高。阶段4的'D牌'环节，需在30秒内完成卖牌、买牌、上阵、换装备、调整站位。",
                wxq: "优化移动端体验，预计简化过渡期操作繁琐度，加强推荐系统易用性。",
                hs: "较低。以拖拽为主，主要考验算数与购买决策，无需复杂高频操作。",
              },
            ].map((row, i) => (
              <motion.div
                key={row.dim}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
              >
                <GlassmorphicCard>
                  <div className="mb-4 pb-3 border-b border-ink/10">
                    <span className="text-sm font-bold text-rose uppercase tracking-wider">{row.dim}</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-sm text-ink/70 leading-relaxed">
                      <span className="font-medium text-ink">TFT：</span>{row.tft}
                    </div>
                    <div className="text-sm text-ink/70 leading-relaxed">
                      <span className="font-medium text-ink">万象棋：</span>{row.wxq}
                    </div>
                    <div className="text-sm text-ink/70 leading-relaxed">
                      <span className="font-medium text-ink">酒馆战棋：</span>{row.hs}
                    </div>
                  </div>
                </GlassmorphicCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 核心痛点与优化建议 */}
      <section className="pb-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-10 h-10 rounded-lg bg-rose/20 flex items-center justify-center">
              <Lightbulb className="w-5 h-5 text-rose" />
            </div>
            <h2 className="text-2xl font-bold text-ink">核心痛点与优化建议</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <GlassmorphicCard>
              <div className="flex items-start gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-sky/20 flex items-center justify-center shrink-0">
                  <Target className="w-4 h-4 text-sky" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-ink">信息过载与新手断层</h3>
                  <p className="text-xs text-ink/50 mt-1">产品体验视角</p>
                </div>
              </div>
              <div className="space-y-3 text-sm text-ink/70 leading-relaxed">
                <p><span className="font-medium text-ink">现状：</span>每 3-4 个月一次大赛季更新，完全颠覆棋子与羁绊。记忆 60+ 新棋子与几十种羁绊的成本极高，非重度玩家易产生畏难情绪被劝退。</p>
                <p><span className="font-medium text-ink">建议：</span>在局内引入更智能的<span className="text-rose font-medium">动态上下文引导</span>。当前"推荐阵容"过于静态，容易导致死板的硬玩。可以设计一套基于局内状态流转（State Machine）的轻量级陪伴系统，当玩家连败且经济良好时，系统高亮提示核心 D 牌轮次，将生硬的"阵容背板"转化为"情境式决策教学"。</p>
              </div>
            </GlassmorphicCard>

            <GlassmorphicCard>
              <div className="flex items-start gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-rose/20 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-4 h-4 text-rose" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-ink">极端随机性带来的挫败感</h3>
                  <p className="text-xs text-ink/50 mt-1">竞技公平性视角</p>
                </div>
              </div>
              <div className="space-y-3 text-sm text-ink/70 leading-relaxed">
                <p><span className="font-medium text-ink">现状：</span>在高端局（宗师、王者分段），实力相近的玩家极度依赖关键节点（如 4-2 选海克斯或 4-3 D 牌）的运气。连续的"非酋"极易造成极强的负反馈。</p>
                <p><span className="font-medium text-ink">建议：</span>强化保底机制的感知或增加局内微调干预手段（如增加可消费金币刷新单件装备的机制），在维持"天胡"爽感的同时，给予硬核玩家更多通过操作和决策逆转局势的<span className="text-rose font-medium">"微操空间"</span>。</p>
              </div>
            </GlassmorphicCard>
          </div>
        </div>
      </section>

      {/* 总结 */}
      <section className="pb-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <GlassmorphicCard>
              <div className="text-center space-y-4">
                <p className="text-lg text-ink/70 leading-relaxed max-w-3xl mx-auto">
                  这份报告系统地展示了作为资深玩家的深度洞察，以及作为产品人的结构化拆解能力。
                  从底层经济调控到高阶博弈策略，从单局系统到长线运营，体现了对<span className="text-rose font-medium">复杂系统设计与用户体验平衡</span>的深度思考。
                </p>
                <div className="flex justify-center gap-2 pt-2">
                  <Badge variant="outline" className="border-sky/30 text-ink/70">系统思维</Badge>
                  <Badge variant="outline" className="border-rose/30 text-ink/70">竞品洞察</Badge>
                  <Badge variant="outline" className="border-sky/30 text-ink/70">用户同理心</Badge>
                  <Badge variant="outline" className="border-rose/30 text-ink/70">数据驱动</Badge>
                </div>
              </div>
            </GlassmorphicCard>
          </motion.div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="pb-16">
        <div className="container flex justify-center">
          <Button
            className="relative overflow-hidden group bg-gradient-to-r from-sky to-rose border-0 text-white"
            asChild
          >
            <Link href="/">
              <span className="relative z-10 flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                返回首页
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-rose to-sky opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
