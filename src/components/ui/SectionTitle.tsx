import React from "react";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  tag?: string;
  align?: "left" | "center";
  action?: React.ReactNode;
  className?: string;
}

export function SectionTitle({
  title,
  subtitle,
  tag,
  align = "left",
  action,
  className,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8",
        align === "center" && "text-center md:items-center",
        className
      )}
    >
      <div className={align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl"}>
        {tag && (
          <span className="text-xs font-semibold tracking-wider text-brand-600 uppercase mb-1.5 block">
            {tag}
          </span>
        )}
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-2 text-base text-slate-600 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
