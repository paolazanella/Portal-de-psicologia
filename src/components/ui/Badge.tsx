import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "brand" | "psi" | "neutral" | "warning" | "success" | "outline" | "atletica";
  size?: "sm" | "md";
}

/**
 * Clean Badge Component
 * Adheres to Zero-Pill discipline: used strictly for semantic state or interactive tags,
 * avoiding decorative pill clutter over regular prose.
 */
export function Badge({
  children,
  variant = "neutral",
  size = "sm",
  className,
  ...props
}: BadgeProps) {
  const variantStyles = {
    neutral: "bg-slate-100 text-slate-700 border border-slate-200/60",
    brand: "bg-blue-50 text-blue-700 border border-blue-200/60",
    psi: "bg-purple-50 text-purple-700 border border-purple-200/60",
    warning: "bg-amber-50 text-amber-800 border border-amber-200/60",
    success: "bg-emerald-50 text-emerald-800 border border-emerald-200/60",
    outline: "bg-transparent text-slate-600 border border-slate-300",
    atletica: "bg-amber-400/10 text-amber-900 border border-amber-300/40",
  };

  const sizeStyles = {
    sm: "text-xs px-2 py-0.5 rounded",
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
