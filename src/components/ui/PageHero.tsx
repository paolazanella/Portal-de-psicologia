import React from "react";
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
}

export function PageHero({
  badge,
  title,
  description,
  theme = "brand",
  actions,
  children,
  breadcrumbs,
}: PageHeroProps) {
  const themeStyles = {
    brand: "bg-gradient-to-b from-blue-50/60 via-slate-50/40 to-white border-b border-slate-200/80",
    psi: "bg-gradient-to-b from-purple-50/60 via-slate-50/40 to-white border-b border-purple-100/80",
    atletica: "bg-gradient-to-b from-slate-900 via-slate-800 to-slate-950 text-white border-b border-slate-700",
  };

  const isDark = theme === "atletica";

  return (
    <div className={cn("py-12 sm:py-16 transition-colors", themeStyles[theme])}>
      <Container>
        {breadcrumbs && (
          <nav className="flex items-center gap-2 text-xs mb-4 text-slate-500">
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                {idx > 0 && <span className="opacity-40">/</span>}
                {crumb.href ? (
                  <a
                    href={crumb.href}
                    className={cn(
                      "hover:underline transition-colors",
                      isDark ? "text-slate-300 hover:text-white" : "text-slate-500 hover:text-slate-900"
                    )}
                  >
                    {crumb.label}
                  </a>
                ) : (
                  <span className={isDark ? "text-amber-400 font-medium" : "text-slate-800 font-medium"}>
                    {crumb.label}
                  </span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        <div className="max-w-3xl">
          {badge && (
            <p
              className={cn(
                "text-xs font-semibold tracking-wider uppercase mb-2",
                isDark ? "text-amber-400" : "text-brand-700"
              )}
            >
              {badge}
            </p>
          )}

          <h1
            className={cn(
              "text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight",
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

        {children && <div className="mt-8">{children}</div>}
      </Container>
    </div>
  );
}
