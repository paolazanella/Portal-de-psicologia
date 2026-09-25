import React from "react";
import { ACADEMIC_HOURS_GUIDE } from "../mock-data";
import { Award, CheckCircle, FileCheck, ExternalLink } from "lucide-react";

export function HoursGuide() {
  return (
    <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-brand-700 flex items-center justify-center">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-semibold text-brand-700 uppercase tracking-wider">
              Guia Prático
            </span>
            <h3 className="text-xl font-bold text-slate-900">
              Horas Complementares (Atividades de Extensão)
            </h3>
          </div>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 flex items-center gap-2 text-xs">
          <span className="text-slate-500">Carga Obrigatória:</span>
          <span className="text-base font-extrabold text-brand-800">
            {ACADEMIC_HOURS_GUIDE.totalRequired} horas
          </span>
        </div>
      </div>

      <div className="py-6 border-b border-slate-100">
        <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
          Passo a Passo para Validação no Sistema Elis
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {ACADEMIC_HOURS_GUIDE.stepByStep.map((item) => (
            <div
              key={item.step}
              className="p-4 rounded-xl bg-slate-50 border border-slate-200/70"
            >
              <div className="w-7 h-7 rounded-full bg-brand-700 text-white flex items-center justify-center text-xs font-bold mb-2">
                {item.step}
              </div>
              <h5 className="text-sm font-semibold text-slate-900 mb-1">
                {item.title}
              </h5>
              <p className="text-xs text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-6">
        <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
          Modalidades Válidas Segundo o PPC do Curso
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
          {ACADEMIC_HOURS_GUIDE.rulesSummary.map((rule, idx) => (
            <div key={idx} className="flex items-start gap-2 p-2 rounded-lg hover:bg-slate-50">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>{rule}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-4 border-t border-slate-100">
          <span className="text-xs text-slate-500">
            Dúvidas sobre aproveitamento? Procure a Diretoria de Assuntos Acadêmicos do CA ou a secretaria do curso.
          </span>
          <a
            href="https://elis.univali.br"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-brand-700 hover:bg-brand-800 rounded-lg transition-colors whitespace-nowrap"
          >
            <FileCheck className="w-3.5 h-3.5" />
            <span>Abrir Protocolo no Elis</span>
            <ExternalLink className="w-3 h-3 ml-0.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
