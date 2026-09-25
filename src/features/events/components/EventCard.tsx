import React from "react";
import { AcademicEvent } from "@/types";
import { formatDayAndMonth, formatDate } from "@/lib/date";
import { Clock, MapPin, Award, ExternalLink, Users } from "lucide-react";

interface EventCardProps {
  event: AcademicEvent;
  compact?: boolean;
}

export function EventCard({ event, compact = false }: EventCardProps) {
  const { day, month } = formatDayAndMonth(event.date);

  const statusLabels: Record<string, { label: string; color: string }> = {
    inscricoes_abertas: {
      label: "Inscrições Abertas",
      color: "text-emerald-700 bg-emerald-50 border border-emerald-200",
    },
    confirmado: {
      label: "Confirmado",
      color: "text-blue-700 bg-blue-50 border border-blue-200",
    },
    em_breve: {
      label: "Em Breve",
      color: "text-amber-700 bg-amber-50 border border-amber-200",
    },
    encerrado: {
      label: "Encerrado",
      color: "text-slate-600 bg-slate-100 border border-slate-200",
    },
  };

  const statusInfo = statusLabels[event.status] || {
    label: event.status,
    color: "text-slate-700 bg-slate-50",
  };

  const isAtletica = event.entityOwner === "atletica";

  return (
    <article className="bg-white border border-slate-200/90 rounded-xl p-5 hover:border-slate-300 transition-all flex flex-col justify-between">
      <div>
        <div className="flex items-start gap-4 mb-4">
          {/* Calendar Badge Indicator */}
          <div
            className={`w-14 h-14 rounded-lg flex flex-col items-center justify-center shrink-0 border ${
              isAtletica
                ? "bg-amber-50 border-amber-200 text-amber-950"
                : "bg-blue-50 border-blue-200 text-brand-950"
            }`}
          >
            <span className="text-[11px] font-bold tracking-wider uppercase leading-none opacity-80">
              {month}
            </span>
            <span className="text-xl font-extrabold leading-none mt-1">
              {day}
            </span>
          </div>

          <div className="flex-1 min-w-0">
            {/* Zero-Pill Unboxed Metadata Line with typographic separators */}
            <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-500 mb-1.5">
              <span className="font-semibold text-slate-700">
                {event.category}
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <Users className="w-3 h-3 text-slate-400" />
                <span>
                  {event.entityOwner === "atletica"
                    ? "Atlética de Psicologia"
                    : "Centro Acadêmico"}
                </span>
              </span>
            </div>

            <h3 className="text-base font-bold text-slate-900 leading-snug line-clamp-2">
              {event.title}
            </h3>
          </div>
        </div>

        {/* Description */}
        {!compact && (
          <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
            {event.description}
          </p>
        )}

        {/* Clean details list */}
        <div className="space-y-1.5 text-xs text-slate-600 mb-4">
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="truncate">{event.location}</span>
          </div>
          {event.workloadHours && (
            <div className="flex items-center gap-2 font-medium text-brand-800">
              <Award className="w-3.5 h-3.5 text-brand-600 shrink-0" />
              <span>{event.workloadHours} horas complementares</span>
            </div>
          )}
        </div>
      </div>

      {/* Footer action and status */}
      <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
        <span
          className={`text-[11px] font-semibold px-2 py-0.5 rounded ${statusInfo.color}`}
        >
          {statusInfo.label}
        </span>

        {event.registrationUrl && event.status === "inscricoes_abertas" ? (
          <a
            href={event.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-semibold text-brand-700 hover:text-brand-900 transition-colors"
          >
            <span>Inscrever-se</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        ) : (
          <span className="text-[11px] text-slate-400">
            {formatDate(event.date)}
          </span>
        )}
      </div>
    </article>
  );
}
