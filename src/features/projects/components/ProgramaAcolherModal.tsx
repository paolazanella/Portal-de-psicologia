"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Project } from "@/types";
import {
  HeartHandshake,
  CheckCircle,
  AlertTriangle,
  Mail,
  Phone,
  MapPin,
  Clock,
  ExternalLink,
  X,
  Info,
} from "lucide-react";

interface ProgramaAcolherProps {
  data: Project;
}

export function ProgramaAcolherSection({ data }: ProgramaAcolherProps) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div
        id="programa-acolher"
        className="rounded-3xl bg-gradient-to-br from-[#1a1236] via-[#16193b] to-[#0c162c] text-white p-6 sm:p-8 md:p-10 shadow-lg relative overflow-hidden border border-purple-800/40"
      >
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-8 rounded-lg bg-purple-400/20 text-purple-300 flex items-center justify-center">
                <HeartHandshake className="w-4 h-4" />
              </span>
              <span className="text-xs font-bold text-purple-300 tracking-wider uppercase">
                Programa Institucional UNIVALI
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              {data.title}
            </h3>

            <p className="mt-3 text-sm sm:text-base text-purple-100/90 leading-relaxed">
              {data.description}
            </p>

            {/* Crucial institutional disclaimer banner */}
            <div className="mt-4 p-3.5 rounded-xl bg-purple-950/80 border border-purple-500/30 text-xs text-purple-200 flex items-start gap-2.5">
              <Info className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
              <div>
                <strong>Atenção institucional:</strong> O Portal de Psicologia é um canal informativo discente e <strong>não presta atendimento psicológico, diagnóstico ou consultas diretas</strong>. Todo o acolhimento é conduzido exclusivamente pelos profissionais do Programa Acolher da UNIVALI.
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-purple-200">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-purple-400 shrink-0" />
                <span>{data.details?.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-purple-400 shrink-0" />
                <span>{data.details?.hours}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-purple-400 shrink-0" />
                <span>{data.contactPhone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-purple-400 shrink-0" />
                <span>{data.contactEmail}</span>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <button
                onClick={() => setModalOpen(true)}
                className="px-5 py-2.5 text-xs font-bold text-slate-900 bg-white hover:bg-purple-50 rounded-xl transition-all shadow-sm"
              >
                Ver Detalhes do Atendimento
              </button>

              {data.officialUrl && (
                <a
                  href={data.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 text-xs font-semibold text-purple-200 bg-purple-900/60 hover:bg-purple-800/80 border border-purple-500/40 rounded-xl transition-colors flex items-center gap-1.5"
                >
                  <span>Página Oficial UNIVALI</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>

          {/* Visual card thumbnail showing the therapeutic space */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative rounded-2xl overflow-hidden border border-purple-500/30 w-full max-w-sm aspect-[4/3] shadow-md group">
              <Image
                src="/images/acolher-espaco.jpg"
                alt="Espaço de acolhimento e escuta qualificada da UNIVALI"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-xs text-purple-100 font-medium">
                Espaço de Acolhimento e Escuta Breve · Bloco F1
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Details Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 text-slate-900 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-5 right-5 p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2.5 mb-2">
              <span className="p-2 rounded-lg bg-purple-100 text-purple-800">
                <HeartHandshake className="w-5 h-5" />
              </span>
              <div>
                <span className="text-[11px] font-bold text-purple-700 uppercase tracking-wider">
                  Serviço Oficial UNIVALI
                </span>
                <h3 className="text-xl font-bold text-slate-950">
                  {data.title}
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 mt-2 mb-5 leading-relaxed">
              {data.description}
            </p>

            <div className="p-4 rounded-xl bg-purple-50/70 border border-purple-200/80 mb-5">
              <h4 className="text-xs font-bold text-purple-950 uppercase tracking-wider mb-2.5">
                Características do Atendimento
              </h4>
              <ul className="space-y-2 text-xs text-slate-700">
                {data.details?.features?.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2.5 text-xs text-slate-700 border-t border-slate-100 pt-4 mb-6">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-slate-500 shrink-0" />
                <span>
                  <strong>Local:</strong> {data.details?.location}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-slate-500 shrink-0" />
                <span>
                  <strong>Horário:</strong> {data.details?.hours}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-slate-500 shrink-0" />
                <span>
                  <strong>E-mail de Contato:</strong> {data.contactEmail}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-slate-500 shrink-0" />
                <span>
                  <strong>Telefone / WhatsApp:</strong> {data.contactPhone}
                </span>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-amber-50 border border-amber-200 text-xs text-amber-900 mb-6 flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <span>
                <strong>Importante:</strong> Em casos de crise aguda, emergência psiquiátrica ou risco iminente, contate o <strong>SAMU (192)</strong> ou ligue gratuitamente para o <strong>CVV (188)</strong>.
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-2.5 justify-end">
              <button
                onClick={() => setModalOpen(false)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
              >
                Fechar
              </button>
              {data.officialUrl && (
                <a
                  href={data.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs font-semibold text-white bg-purple-700 hover:bg-purple-800 rounded-lg transition-colors inline-flex items-center justify-center gap-1.5"
                >
                  <span>Acessar Portal da UNIVALI</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
