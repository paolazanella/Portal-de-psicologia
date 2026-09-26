import React from "react";
import Image from "next/image";
import { Container } from "./Container";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  badge?: string;
  title: string;
  description: string;
  theme?: "brand" | "atletica" | "psi";
  actions?: React.ReactNode;
  children?: React.ReactNode;
  breadcrumbs?: Array<{ label: string; href?: string }>;
  imageSrc?: string;
  imageAlt?: string;
}

export function PageHero({
  badge,
  title,
  description,
  theme = "brand",
  actions,
  children,
  breadcrumbs,
  imageSrc,
  imageAlt,
}: PageHeroProps) {
  const themeStyles = {
    brand: "bg-gradient-to-b from-blue-50/70 via-slate-50/50 to-white border-b border-slate-200/90",
    psi: "bg-gradient-to-b from-purple-50/70 via-slate-50/50 to-white border-b border-purple-100/90",
    // Atlética Guaxas: Deep navy, petroleum blue & cyan
    atletica: "bg-gradient-to-b from-[#071320] via-[#0b1d30] to-[#07111c] text-white border-b border-cyan-950/60",
  };

  const isDark = theme === "atletica";

  return (
    <div className={cn("py-12 sm:py-16 transition-colors relative overflow-hidden", themeStyles[theme])}>
      {/* Subtle texture / ambient glow for Atletica */}
      {isDark && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        </div>
      )}

      <Container>
        {breadcrumbs && (
          <nav className="flex items-center gap-2 text-xs mb-4 text-slate-500 relative z-10">
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                {idx > 0 && <span className="opacity-40">/</span>}
                {crumb.href ? (
                  <a
                    href={crumb.href}
                    className={cn(
                      "hover:underline transition-colors",
                      isDark ? "text-cyan-200/70 hover:text-white" : "text-slate-500 hover:text-slate-900"
                    )}
                  >
                    {crumb.label}
                  </a>
                ) : (
                  <span className={isDark ? "text-cyan-300 font-semibold" : "text-slate-800 font-semibold"}>
                    {crumb.label}
                  </span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          <div className={imageSrc ? "lg:col-span-7" : "lg:col-span-9 max-w-3xl"}>
            {badge && (
              <p
                className={cn(
                  "text-xs font-bold tracking-wider uppercase mb-2.5 inline-flex items-center gap-1.5",
                  isDark ? "text-cyan-400" : theme === "psi" ? "text-purple-700" : "text-brand-700"
                )}
              >
                {badge}
              </p>
            )}

            <h1
              className={cn(
                "text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15]",
                isDark ? "text-white" : "text-slate-950"
              )}
              style={{ textWrap: "balance" }}
            >
              {title}
            </h1>

            <p
              className={cn(
                "mt-4 text-base sm:text-lg leading-relaxed",
                isDark ? "text-slate-300" : "text-slate-600"
              )}
            >
              {description}
            </p>

            {actions && <div className="mt-6 flex flex-wrap items-center gap-3">{actions}</div>}
          </div>

          {imageSrc && (
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className={cn(
                "relative rounded-2xl overflow-hidden shadow-lg border w-full max-w-md aspect-[4/3]",
                isDark ? "border-cyan-800/50 bg-slate-900" : "border-slate-200 bg-white"
              )}>
                <Image
                  src={imageSrc}
                  alt={imageAlt || title}
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          )}
        </div>

        {children && <div className="mt-8 relative z-10">{children}</div>}
      </Container>
    </div>
  );
}
