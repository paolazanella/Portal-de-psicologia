import React from "react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { EventsList } from "@/features/events/components/EventsList";
import { MOCK_EVENTS } from "@/features/events/mock-data";

export default function EventsPage() {
  return (
    <div className="space-y-12 pb-20">
      <PageHero
        badge="Calendário Unificado"
        title="Eventos & Vivência Acadêmica"
        description="Acompanhe palestras, semanas acadêmicas, jogos, cine-debates e eventos culturais da Psicologia UNIVALI. Filtre por categoria ou entidade promotora."
        breadcrumbs={[
          { label: "Início", href: "/" },
          { label: "Eventos" },
        ]}
      />

      <section>
        <Container>
          <EventsList initialEvents={MOCK_EVENTS} />
        </Container>
      </section>
    </div>
  );
}
