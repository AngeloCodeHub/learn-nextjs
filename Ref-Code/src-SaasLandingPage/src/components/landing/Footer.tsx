import React from "react";
import { LayoutGrid, Github, Twitter, Linkedin, Facebook } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <LayoutGrid className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-display font-bold text-foreground">
              Angelo<span className="text-primary">SaaS</span>
            </span>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            為現代數位團隊打造的最強生產力平台。我們相信好的工具可以讓工作變得更純粹、更高效。
          </p>
          <div className="flex items-center gap-4">
            {[Twitter, Github, Linkedin, Facebook].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-bold text-foreground mb-6">產品功能</h4>
          <ul className="flex flex-col gap-4">
            {["自動化流程", "即時協作", "智能分析", "外掛擴充", "企業安全性"].map((item) => (
              <li key={item}>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-foreground mb-6">資源中心</h4>
          <ul className="flex flex-col gap-4">
            {["用戶指南", "開發者 API", "案例研究", "部落格文章", "常見問題"].map((item) => (
              <li key={item}>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-foreground mb-6">聯絡我們</h4>
          <ul className="flex flex-col gap-4">
            <li className="text-sm text-muted-foreground">
              台北市信義區忠孝東路五段 X 號
            </li>
            <li className="text-sm text-muted-foreground">
              support@angelosaas.com
            </li>
            <li className="text-sm text-muted-foreground">
              +886 2 XXXX XXXX
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-border pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-muted-foreground">
          © {currentYear} AngeloSaaS 科技股份有限公司。保留所有權限。
        </p>
        <div className="flex items-center gap-8">
          {["隱私政策", "使用條款", "Cookie 設定"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
