import React from "react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ProgramaAcolherSection } from "@/features/projects/components/ProgramaAcolherModal";
import { ProjectCard } from "@/features/projects/components/ProjectCard";
import {
  PROGRAMA_ACOLHER_DATA,
  MOCK_PROJECTS,
} from "@/features/projects/mock-data";
import { HeartHandshake, ShieldAlert } from "lucide-react";

export default function ProjectsPage() {
  const otherProjects = MOCK_PROJECTS.filter((p) => p.id !== "proj_acolher");

  return (
    <div className="space-y-16 pb-20">
      <PageHero
        badge="Iniciativas & Extensão"
        title="Projetos & Ações Sociais"
        description="Conheça os programas institucionais da UNIVALI, iniciativas de solidariedade do Centro Acadêmico e projetos de integração esportiva da Atlética."
        breadcrumbs={[
          { label: "Início", href: "/" },
          { label: "Projetos" },
        ]}
      />

      {/* Destaque Obrigatório: Programa Acolher */}
      <section>
        <Container>
          <div className="mb-4">
            <span className="text-xs font-semibold text-purple-700 uppercase tracking-wider block mb-1">
              Saúde Mental & Apoio ao Estudante
            </span>
            <h2 className="text-2xl font-bold text-slate-900">
              Programa Acolher (UNIVALI)
            </h2>
          </div>

          <ProgramaAcolherSection data={PROGRAMA_ACOLHER_DATA} />
        </Container>
      </section>

      {/* Disclaimer Ético & Legal */}
      <section>
        <Container>
          <div className="bg-slate-100/90 border border-slate-200/90 rounded-xl p-5 text-xs text-slate-600 flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
            <div className="leading-relaxed">
              <strong className="text-slate-900 block mb-0.5">Nota de Esclarecimento Ético e Institucional:</strong>
              O Portal de Psicologia é um repositório informativo mantido pelos próprios acadêmicos. 
              <strong> Não oferecemos aconselhamento psicológico, suporte clínico, triagens diagnósticas ou atendimentos sob qualquer forma.</strong> 
              Todas as informações sobre projetos e serviços de saúde mental disponibilizadas aqui têm o propósito exclusivo de orientar e encaminhar estudantes e a comunidade aos órgãos institucionais devidamente regulamentados da UNIVALI e da rede pública de saúde.
            </div>
          </div>
        </Container>
      </section>

      {/* Demais Projetos Estudantis e de Extensão */}
      <section>
        <Container>
          <SectionTitle
            tag="Iniciativas da Comunidade"
            title="Projetos Discentes e Comunitários"
            subtitle="Campanhas de trote solidário, cine-debates, saúde no esporte e clínicas-escola."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
