"use client";

import React, { useState } from "react";
import { FAQ_ITEMS } from "../mock-data";
import { ChevronDown, HelpCircle } from "lucide-react";

export function FaqAccordion() {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0]?.id || null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-3">
      {FAQ_ITEMS.map((item) => {
        const isOpen = openId === item.id;

        return (
          <div
            key={item.id}
            className="border border-slate-200/90 rounded-xl bg-white overflow-hidden transition-colors"
          >
            <button
              type="button"
              onClick={() => toggle(item.id)}
              className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 hover:bg-slate-50/50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <HelpCircle className="w-4 h-4 text-brand-600 shrink-0" />
                <span className="text-sm font-semibold text-slate-900">
                  {item.question}
                </span>
              </div>
              <ChevronDown
                className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                  isOpen ? "rotate-180 text-brand-600" : ""
                }`}
              />
            </button>

            {isOpen && (
              <div className="px-4 pb-5 pt-1 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-600 border-t border-slate-100 bg-slate-50/30 leading-relaxed">
                <p>{item.answer}</p>
                <div className="mt-2 text-[11px] text-slate-400">
                  Categoria: {item.category}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
