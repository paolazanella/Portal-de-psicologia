"use client";

import React, { useState } from "react";
import { AcademicEvent, EventCategory } from "@/types";
import { EventCard } from "./EventCard";
import { EmptyState } from "@/components/ui/EmptyState";
import { Search, Calendar, Filter } from "lucide-react";

interface EventsListProps {
  initialEvents: AcademicEvent[];
}

const CATEGORIES: ("Todas" | EventCategory)[] = [
  "Todas",
  "Centro Acadêmico",
  "Atlética",
  "Acadêmico",
  "Esportivo",
  "Social",
  "Outros",
];

export function EventsList({ initialEvents }: EventsListProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todas");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [statusFilter, setStatusFilter] = useState<string>("todos");

  const filteredEvents = initialEvents.filter((event) => {
    const matchesCategory =
      selectedCategory === "Todas" || event.category === selectedCategory;

    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus =
      statusFilter === "todos" || event.status === statusFilter;

    return matchesCategory && matchesSearch && matchesStatus;
  });

  return (
    <div>
      {/* Search and Filters Bar */}
      <div className="bg-white border border-slate-200/90 rounded-xl p-4 mb-8 space-y-4">
        <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
          {/* Search Box */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por título, temática ou local..."
              className="w-full pl-9 pr-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all"
            />
          </div>

          {/* Status selector */}
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-slate-400 shrink-0" />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="text-xs bg-slate-50 border border-slate-200 rounded-lg py-2 px-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-500"
            >
              <option value="todos">Todos os status</option>
              <option value="inscricoes_abertas">Inscrições abertas</option>
              <option value="confirmado">Confirmados</option>
              <option value="em_breve">Em breve</option>
            </select>
          </div>
        </div>

        {/* Category Segmented Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 pt-1 border-t border-slate-100">
          <span className="text-xs font-medium text-slate-400 mr-1 shrink-0">
            Categorias:
          </span>
          {CATEGORIES.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                  isActive
                    ? "bg-brand-700 text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      {/* Events Results Count */}
      <div className="flex items-center justify-between text-xs text-slate-500 mb-4 px-1">
        <span>
          Mostrando <strong>{filteredEvents.length}</strong> evento
          {filteredEvents.length === 1 ? "" : "s"}
        </span>
        {(selectedCategory !== "Todas" || searchQuery || statusFilter !== "todos") && (
          <button
            onClick={() => {
              setSelectedCategory("Todas");
              setSearchQuery("");
              setStatusFilter("todos");
            }}
            className="text-brand-700 hover:underline font-medium"
          >
            Limpar filtros
          </button>
        )}
      </div>

      {/* Grid of Events */}
      {filteredEvents.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      ) : (
        <EmptyState
          title="Nenhum evento encontrado"
          description="Nenhum evento corresponde aos critérios de pesquisa selecionados no momento."
          icon={<Calendar className="w-6 h-6 text-slate-400" />}
          action={{
            label: "Ver todos os eventos",
            onClick: () => {
              setSelectedCategory("Todas");
              setSearchQuery("");
              setStatusFilter("todos");
            },
          }}
        />
      )}
    </div>
  );
}
