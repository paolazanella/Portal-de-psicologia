import React from "react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { ContactForm } from "@/features/contact/components/ContactForm";
import { ContactChannels } from "@/features/contact/components/ContactChannels";

export default function ContactPage() {
  return (
    <div className="space-y-16 pb-20">
      <PageHero
        badge="Fale com as Entidades"
        title="Canais de Atendimento e Contato"
        description="Dúvidas, sugestões de pauta para o CA, inscrições em treinos da Atlética ou informações sobre o curso de Psicologia da UNIVALI."
        breadcrumbs={[
          { label: "Início", href: "/" },
          { label: "Contato" },
        ]}
      />

      <section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Form Column */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Channels Column */}
            <div className="lg:col-span-5">
              <ContactChannels />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
