import React from "react";
import { SPORT_MODALITIES } from "../mock-data";
import { Trophy, Clock, MapPin, User, ChevronRight, Shield } from "lucide-react";

export function AthleticModalities() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {SPORT_MODALITIES.map((modality) => {
        const isRecruiting = modality.status === "treinos_abertos";

        return (
          <div
            key={modality.id}
            className="bg-white border border-slate-200/90 rounded-2xl p-5 hover:border-cyan-500/80 hover:shadow-md transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                  {modality.category}
                </span>
                <span
                  className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${
                    isRecruiting
                      ? "bg-cyan-50 text-cyan-900 border border-cyan-200/80"
                      : "bg-slate-100 text-slate-700"
                  }`}
                >
                  {isRecruiting ? "Treinos Abertos" : "Em Competição"}
                </span>
              </div>

              <h4 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2 group-hover:text-cyan-800 transition-colors">
                <div className="w-7 h-7 rounded-lg bg-[#0b1c2e] text-cyan-400 flex items-center justify-center shrink-0">
                  <Trophy className="w-3.5 h-3.5" />
                </div>
                <span>{modality.name}</span>
              </h4>

              <div className="space-y-2 text-xs text-slate-600">
                <div className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                  <span>{modality.schedule}</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                  <span>{modality.location}</span>
                </div>
                <div className="flex items-start gap-2">
                  <User className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                  <span>{modality.coachOrLeader}</span>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-3.5 border-t border-slate-100">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between w-full text-xs font-semibold text-cyan-900 hover:text-cyan-700 transition-colors"
              >
                <span className="flex items-center gap-1.5">
                  <Shield className="w-3 h-3 text-cyan-600" />
                  <span>Falar com o capitão</span>
                </span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
