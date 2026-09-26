import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "brand" | "psi" | "neutral" | "warning" | "success" | "outline" | "atletica";
  size?: "sm" | "md";
}

/**
 * Clean Badge Component
 * Adheres to Zero-Pill discipline: used strictly for semantic state or interactive tags.
 */
export function Badge({
  children,
  variant = "neutral",
  size = "sm",
  className,
  ...props
}: BadgeProps) {
  const variantStyles = {
    neutral: "bg-slate-100 text-slate-700 border border-slate-200/70",
    brand: "bg-blue-50 text-brand-800 border border-blue-200/70",
    psi: "bg-purple-50 text-purple-800 border border-purple-200/70",
    warning: "bg-amber-50 text-amber-800 border border-amber-200/70",
    success: "bg-emerald-50 text-emerald-800 border border-emerald-200/70",
    outline: "bg-transparent text-slate-600 border border-slate-300",
    // Atlética Guaxas: Azul petróleo e ciano sobre fundo suave, sem dourado
    atletica: "bg-cyan-50/80 text-cyan-950 border border-cyan-300/60 font-semibold",
  };

  const sizeStyles = {
    sm: "text-[11px] px-2 py-0.5 rounded",
    md: "text-xs px-2.5 py-1 rounded-md font-medium",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 font-medium transition-colors",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
