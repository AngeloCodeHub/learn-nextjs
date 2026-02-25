import React from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}

export const Card = ({ children, className, hoverable = true }: CardProps) => {
  return (
    <div
      className={cn(
        "bg-card border border-border p-8 rounded-2xl shadow-md transition-all duration-300",
        hoverable && "hover:shadow-xl hover:-translate-y-2 cursor-pointer",
        className
      )}
    >
      {children}
    </div>
  );
};
