"use client";

import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { cn } from "@/lib/utils";
import { LayoutGrid } from "lucide-react";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "glass py-3 shadow-lg" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg">
            <LayoutGrid className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-display font-bold text-foreground">
            Angelo<span className="text-primary">SaaS</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {["核心功能", "產品特色", "用戶評價", "方案定價"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
            登入
          </Button>
          <Button variant="cta" size="sm">
            立即體驗
          </Button>
        </div>
      </div>
    </nav>
  );
};
