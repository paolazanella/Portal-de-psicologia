"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ExternalLink, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "../ui/Container";

const NAV_LINKS = [
  { href: "/", label: "Início" },
  { href: "/centro-academico", label: "Centro Acadêmico" },
  { href: "/atletica", label: "Atlética" },
  { href: "/eventos", label: "Eventos" },
  { href: "/informacoes-academicas", label: "Informações" },
  { href: "/projetos", label: "Projetos" },
  { href: "/contato", label: "Contato" },
];

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-200">
      <Container size="wide">
        <div className="flex items-center justify-between h-16">
          {/* Zone 1: Single text element wordmark */}
          <Link
            href="/"
            className="flex items-center gap-2.5 text-slate-900 group shrink-0"
          >
            <div className="w-8 h-8 rounded-lg bg-brand-700 text-white flex items-center justify-center font-serif text-lg font-bold shadow-sm transition-transform group-hover:scale-105">
              Ψ
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-bold text-base tracking-tight text-slate-900">
                Portal de Psicologia
              </span>
              <span className="text-[10px] text-slate-500 font-medium tracking-wide">
                UNIVALI · Campus Itajaí
              </span>
            </div>
          </Link>

          {/* Zone 2: 4-7 clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "transition-colors relative py-1 text-sm whitespace-nowrap",
                    isActive
                      ? "text-brand-700 font-semibold"
                      : "hover:text-slate-900 text-slate-600"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-700 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/admin"
              className="text-xs text-slate-500 hover:text-slate-800 flex items-center gap-1 px-2.5 py-1.5 rounded hover:bg-slate-100 transition-colors"
              title="Acesso Administrativo (Estrutura Preparada)"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
              <span>Painel</span>
            </Link>

            <a
              href="https://elis.univali.br"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-brand-700 rounded-lg shadow-sm hover:bg-brand-800 transition-colors whitespace-nowrap"
            >
              <span>Sistema Elis</span>
              <ExternalLink className="w-3 h-3 opacity-80" />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500"
            aria-label="Abrir menu de navegação"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-1 shadow-lg animate-in slide-in-from-top-2">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "block px-3 py-2 rounded-md text-base font-medium transition-colors",
                  isActive
                    ? "bg-brand-50 text-brand-700 font-semibold"
                    : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                )}
              >
                {link.label}
              </Link>
            );
          })}

          <div className="pt-4 border-t border-slate-100 flex flex-col gap-2 mt-2">
            <Link
              href="/admin"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm text-slate-600 flex items-center gap-2 hover:bg-slate-50 rounded"
            >
              <ShieldCheck className="w-4 h-4 text-slate-400" />
              <span>Área Administrativa (Gestão)</span>
            </Link>
            <a
              href="https://elis.univali.br"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-sm font-semibold text-white bg-brand-700 rounded-lg hover:bg-brand-800"
            >
              <span>Acessar Elis UNIVALI</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
