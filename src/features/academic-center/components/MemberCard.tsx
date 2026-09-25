import React from "react";
import { BoardMember } from "@/types";
import { Mail, Instagram } from "lucide-react";

interface MemberCardProps {
  member: BoardMember;
  accent?: "brand" | "atletica";
}

export function MemberCard({ member, accent = "brand" }: MemberCardProps) {
  const isAtletica = accent === "atletica";

  return (
    <div className="bg-white border border-slate-200/90 rounded-xl p-5 hover:shadow-sm transition-shadow flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-3.5 mb-3.5">
          <div
            className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-base select-none shrink-0 ${
              isAtletica
                ? "bg-amber-100 text-amber-900 border border-amber-300/60"
                : "bg-blue-100 text-brand-800 border border-blue-200/60"
            }`}
          >
            {member.name
              .split(" ")
              .slice(0, 2)
              .map((n) => n[0])
              .join("")}
          </div>
          <div>
            <h4 className="text-base font-semibold text-slate-900 leading-snug">
              {member.name}
            </h4>
            <p
              className={`text-xs font-medium ${
                isAtletica ? "text-amber-700" : "text-brand-700"
              }`}
            >
              {member.role}
            </p>
          </div>
        </div>

        <div className="text-xs text-slate-500 mb-3 flex items-center gap-1.5">
          <span>{member.semester}</span>
        </div>

        {member.bio && (
          <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
            {member.bio}
          </p>
        )}
      </div>

      {(member.email || member.instagram) && (
        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-3 text-xs text-slate-500">
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              className="hover:text-brand-700 flex items-center gap-1 transition-colors"
              title={member.email}
            >
              <Mail className="w-3.5 h-3.5" />
              <span className="truncate max-w-[140px]">E-mail</span>
            </a>
          )}
          {member.instagram && (
            <span className="flex items-center gap-1 text-slate-600">
              <Instagram className="w-3.5 h-3.5 text-slate-400" />
              <span>{member.instagram}</span>
            </span>
          )}
        </div>
      )}
    </div>
  );
}
