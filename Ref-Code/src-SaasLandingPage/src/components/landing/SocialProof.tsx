import React from "react";
import { Section } from "./Section";
import { Card } from "./Card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "林小美",
    role: "產品設計經理 @ InnovateUI",
    text: "自從導入 AngeloSaaS 後，我們團隊的溝通效率提升了驚人的 60%。自動化流程真的把我們從繁瑣的手動操作中解放了出來。",
    avatar: "https://i.pravatar.cc/150?u=1",
  },
  {
    name: "王大明",
    role: "技術長 @ DevFlow",
    text: "安全性是我首要考慮的因素，這裡提供的加密技術與權限控管非常令人滿意。UI/UX 也是我見過最精美流暢的落地平台。",
    avatar: "https://i.pravatar.cc/150?u=2",
  },
  {
    name: "張志豪",
    role: "行銷總監 @ GrowthPixel",
    text: "數據分析功能非常強大且直觀。我不需要專業背景就能看懂我們所有的 KPI，這讓決策變得非常容易且準確。",
    avatar: "https://i.pravatar.cc/150?u=3",
  },
];

const brands = [
  "Google", "Amazon", "Microsoft", "Netflix", "Spotify", "Stripe"
];

export const SocialProof = () => {
  return (
    <Section id="用戶評價" className="relative">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -z-10 w-full h-1/2 bg-primary/5 skew-y-3" />

      <div className="text-center mb-12">
        <p className="text-sm font-bold text-primary uppercase tracking-widest mb-6">
          在全球範圍內受 2,000+ 企業信賴
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {brands.map((brand) => (
            <span key={brand} className="text-2xl font-display font-bold text-foreground pointer-events-none cursor-default">
              {brand}
            </span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
        {testimonials.map((t, i) => (
          <Card key={i} className="relative pt-12">
            <Quote className="absolute top-6 left-6 w-10 h-10 text-primary/10" />
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-cta text-cta" />
              ))}
            </div>
            <p className="text-foreground/80 italic mb-8 leading-relaxed">
              "{t.text}"
            </p>
            <div className="flex items-center gap-4 border-t border-border pt-6">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-12 h-12 rounded-full border-2 border-primary/20"
              />
              <div>
                <p className="font-bold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};
