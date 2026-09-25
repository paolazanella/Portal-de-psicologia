import React from "react";
import { Proposal } from "../mock-data";
import { CheckCircle2, Clock, Calendar } from "lucide-react";

export function ProposalCard({ proposal }: { proposal: Proposal }) {
  const statusConfig = {
    "Concluída": {
      icon: CheckCircle2,
      color: "text-emerald-700 bg-emerald-50 border-emerald-200",
      textColor: "text-emerald-800",
    },
    "Em andamento": {
      icon: Clock,
      color: "text-blue-700 bg-blue-50 border-blue-200",
      textColor: "text-blue-800",
    },
    "Planejada": {
      icon: Calendar,
      color: "text-slate-700 bg-slate-50 border-slate-200",
      textColor: "text-slate-700",
    },
  };

  const currentStatus = statusConfig[proposal.status];
  const StatusIcon = currentStatus.icon;

  return (
    <div className="bg-white border border-slate-200/90 rounded-xl p-5 hover:border-slate-300 transition-colors flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between gap-2 mb-2.5">
          <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
            {proposal.category}
          </span>
          <span
            className={`inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded border ${currentStatus.color}`}
          >
            <StatusIcon className="w-3 h-3" />
            <span>{proposal.status}</span>
          </span>
        </div>

        <h4 className="text-base font-semibold text-slate-900 leading-snug mb-2">
          {proposal.title}
        </h4>

        <p className="text-xs text-slate-600 leading-relaxed">
          {proposal.description}
        </p>
      </div>
    </div>
  );
}
