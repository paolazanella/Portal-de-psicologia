import React from "react";
import { Announcement } from "@/types";
import { formatDate } from "@/lib/date";
import { BellRing, Calendar } from "lucide-react";

export function AnnouncementCard({
  announcement,
}: {
  announcement: Announcement;
}) {
  return (
    <div
      className={`rounded-xl p-5 border transition-all ${
        announcement.isImportant
          ? "bg-blue-50/40 border-blue-200/90 shadow-sm"
          : "bg-white border-slate-200/90 hover:border-slate-300"
      }`}
    >
      <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
        {announcement.isImportant && (
          <span className="flex items-center gap-1 font-semibold text-brand-700">
            <BellRing className="w-3.5 h-3.5" />
            <span>Destaque</span>
            <span aria-hidden="true">·</span>
          </span>
        )}
        <span className="flex items-center gap-1">
          <Calendar className="w-3 h-3 text-slate-400" />
          <span>{formatDate(announcement.publishDate)}</span>
        </span>
        <span aria-hidden="true">·</span>
        <span>{announcement.author}</span>
      </div>

      <h4 className="text-base font-bold text-slate-900 leading-snug mb-2">
        {announcement.title}
      </h4>

      <p className="text-xs text-slate-600 leading-relaxed mb-3">
        {announcement.content}
      </p>
    </div>
  );
}
