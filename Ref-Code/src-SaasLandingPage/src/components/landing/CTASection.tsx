import React from "react";
import { Section } from "./Section";
import { Button } from "./Button";
import { Sparkles, ArrowRight } from "lucide-react";

export const CTASection = () => {
  return (
    <Section className="pb-32">
      <div className="relative overflow-hidden bg-primary rounded-3xl p-12 md:p-24 text-center">
        {/* Background Decor */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cta/20 rounded-full -ml-32 -mb-32 blur-3xl" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm font-semibold mb-8 backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            <span>立即加入卓越企業的行列</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 leading-tight">
            準備好將生產力<br />
            <span className="text-cta">推向極限</span> 了嗎？
          </h2>

          <p className="text-xl text-white/80 mb-12">
            只需 2 分鐘即可完成設定。現在開始您的 14 天免費試用，無需輸入信用卡，隨時可以取消。
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button
              variant="cta"
              size="lg"
              className="bg-white text-primary hover:bg-white/90 shadow-2xl w-full sm:w-auto h-16 px-10 text-xl"
            >
              免費開始使用
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10 w-full sm:w-auto h-16 px-10 text-xl"
            >
              預約產品演示
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-x-12 gap-y-4 text-white/60 text-sm font-medium">
            <span>🛡️ SOC2 Type II 合規</span>
            <span>⚡ 99.99% 上線率保證</span>
            <span>🌍 24/7 全球客戶支援</span>
          </div>
        </div>
      </div>
    </Section>
  );
};
