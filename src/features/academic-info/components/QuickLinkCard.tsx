import React from "react";
import { QuickLink } from "@/types";
import { ExternalLink, BookOpen, Laptop, ShieldCheck, FileText } from "lucide-react";

interface QuickLinkCardProps {
  link: QuickLink;
}

export function QuickLinkCard({ link }: QuickLinkCardProps) {
  const categoryIcons = {
    sistemas: Laptop,
    documentos: FileText,
    servicos: BookOpen,
    academico: ShieldCheck,
  };

  const IconComponent = categoryIcons[link.category] || Laptop;

  return (
    <a
      href={link.url}
      target={link.isExternal ? "_blank" : undefined}
      rel={link.isExternal ? "noopener noreferrer" : undefined}
      className="group bg-white border border-slate-200/90 rounded-xl p-5 hover:border-brand-500 hover:shadow-sm transition-all flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="w-10 h-10 rounded-lg bg-blue-50 text-brand-700 flex items-center justify-center group-hover:scale-105 transition-transform">
            <IconComponent className="w-5 h-5" />
          </div>

          <div className="flex items-center gap-1 text-slate-400 group-hover:text-brand-600 transition-colors">
            <span className="text-[11px] font-medium">Acessar</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </div>
        </div>

        <h4 className="text-base font-bold text-slate-900 group-hover:text-brand-700 transition-colors mb-1.5 leading-snug">
          {link.title}
        </h4>

        <p className="text-xs text-slate-600 leading-relaxed">
          {link.description}
        </p>
      </div>

      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
        <span className="capitalize">{link.category}</span>
        <span className="text-slate-500 group-hover:underline">Fonte Oficial UNIVALI</span>
      </div>
    </a>
  );
}
