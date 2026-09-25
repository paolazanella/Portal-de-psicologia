import React from "react";
import { Project } from "@/types";
import { FolderGit2, Mail, ExternalLink, MapPin, Check } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const isCA = project.entityOwner === "centro_academico";
  const isAtletica = project.entityOwner === "atletica";

  const ownerLabel = isCA
    ? "Centro Acadêmico"
    : isAtletica
    ? "Atlética"
    : "Institucional UNIVALI";

  return (
    <div className="bg-white border border-slate-200/90 rounded-xl p-5 hover:border-slate-300 transition-all flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between gap-2 text-xs text-slate-500 mb-2">
          <span className="font-semibold text-slate-700">
            {project.category}
          </span>
          <span aria-hidden="true">·</span>
          <span>{ownerLabel}</span>
        </div>

        <h3 className="text-base font-bold text-slate-900 leading-snug mb-2 flex items-center gap-2">
          <FolderGit2 className="w-4 h-4 text-brand-600 shrink-0" />
          <span>{project.title}</span>
        </h3>

        <p className="text-xs text-slate-600 leading-relaxed mb-4">
          {project.description}
        </p>

        {project.details?.features && (
          <ul className="space-y-1.5 mb-4 text-xs text-slate-600">
            {project.details.features.slice(0, 3).map((feat, idx) => (
              <li key={idx} className="flex items-start gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        )}

        {project.details?.location && (
          <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-2">
            <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="truncate">{project.details.location}</span>
          </div>
        )}
      </div>

      <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2 text-xs">
        {project.contactEmail ? (
          <a
            href={`mailto:${project.contactEmail}`}
            className="text-brand-700 hover:text-brand-800 flex items-center gap-1 font-medium"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Falar com projeto</span>
          </a>
        ) : (
          <span className="text-slate-400 text-[11px]">Iniciativa contínua</span>
        )}

        {project.officialUrl && (
          <a
            href={project.officialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-slate-800 flex items-center gap-1"
          >
            <span>Saiba mais</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        )}
      </div>
    </div>
  );
}
