import React from "react";
import { Button } from "./Button";
import { Section } from "./Section";
import { Sparkles, ArrowRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <Section className="pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden relative">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />

      <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 animate-fade-in">
            <Sparkles className="w-4 h-4" />
            <span>全新版本 2.0 現已發佈</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground leading-tight mb-6">
            為現代企業打造的<br />
            <span className="text-primary italic">極致效率</span> 生態系統
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto lg:mx-0">
            透過 AI 驅動的自動化工具與無縫協作平台，讓您的團隊專注於真正重要的事情。提升生產力，不只是喊口號。
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <Button variant="cta" size="lg" className="w-full sm:w-auto group">
              免費試用 14 天
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              查看產品介紹
            </Button>
          </div>

          <div className="mt-10 flex items-center justify-center lg:justify-start gap-4 text-sm text-foreground/60 font-medium">
            <span className="flex items-center gap-1">✅ 無需信用卡</span>
            <span className="flex items-center gap-1">✨ 自定義工作流</span>
            <span className="flex items-center gap-1">🔒 企業級安全性</span>
          </div>
        </div>

        <div className="flex-1 relative w-full max-w-2xl">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white dark:border-white/10 aspect-video glass">
            {/* Placeholder for Product UI - I will use a placeholder UI visualization */}
            <div className="w-full h-full bg-linear-to-br from-primary/10 via-background to-secondary/10 flex items-center justify-center">
              <div className="w-4/5 h-4/5 flex flex-col gap-4 p-6">
                <div className="h-8 bg-muted rounded-md w-1/3" />
                <div className="flex gap-4">
                  <div className="flex-1 h-32 bg-muted/50 rounded-lg" />
                  <div className="flex-1 h-32 bg-muted/50 rounded-lg" />
                </div>
                <div className="h-48 bg-primary/10 rounded-lg border-2 border-dashed border-primary/30 flex items-center justify-center">
                  <LayoutGrid className="w-12 h-12 text-primary/40" />
                </div>
              </div>
            </div>
          </div>

          {/* Floating Element */}
          <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl shadow-xl border border-white/20 hidden md:block animate-bounce-slow">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center text-green-600">
                <LayoutGrid className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">生產力提升 45%</p>
                <p className="text-xs text-muted-foreground">基於 2,000+ 企業實測</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

// Add LayoutGrid import to Button if not there, or generic SVG
import { LayoutGrid as LayoutIcon } from "lucide-react";
const LayoutGrid = LayoutIcon;
