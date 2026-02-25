import React from "react";
import { Section } from "./Section";
import { Card } from "./Card";
import {
  BarChart3,
  Zap,
  ShieldCheck,
  Users,
  Globe,
  Cpu
} from "lucide-react";

const features = [
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "數據洞察",
    description: "透過即時視覺化圖表，深度分析業務數據，幫助您做出明智決策。",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "自動化流程",
    description: "自定義觸發條件與動作，讓重複性任務自動完成，節省寶貴時間。",
    color: "bg-orange-500/10 text-orange-600",
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "企業級安全",
    description: "提供端到端加密、SOC2 合規性與多因素驗證，確保數據萬無一失。",
    color: "bg-green-500/10 text-green-600",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "團隊協作",
    description: "流暢的留言評論、文件共享與權限管理，同步所有團隊成員的腳步。",
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "全球分佈",
    description: "支援多語言與多時區協作，無論您的團隊身在何處，溝通零距離。",
    color: "bg-sky-500/10 text-sky-600",
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "AI 核心",
    description: "內建最新語言模型，協助生成草稿、摘要重點並提供智能建議。",
    color: "bg-indigo-500/10 text-indigo-600",
  },
];

export const FeaturesGrid = () => {
  return (
    <Section id="核心功能" className="bg-secondary/5">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
          不僅僅是工具，更是您的<br />
          <span className="text-primary italic">生產力加速引擎</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          我們整合了所有必要的效率組件，讓您在單一平台內完成所有工作流程，無需在多個分頁間跳轉。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card key={index} className="flex flex-col items-start text-left group">
            <div className={`p-4 rounded-xl mb-6 transition-transform group-hover:scale-110 duration-300 ${feature.color}`}>
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {feature.description}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
};
