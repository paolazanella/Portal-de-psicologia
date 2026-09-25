import React from "react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { MemberCard } from "@/features/academic-center/components/MemberCard";
import { AthleticModalities } from "@/features/athletics/components/AthleticModalities";
import { AthleticProducts } from "@/features/athletics/components/AthleticProducts";
import {
  ATLETICA_MEMBERS,
  TOURNAMENTS,
} from "@/features/athletics/mock-data";
import {
  Trophy,
  Flame,
  ShoppingBag,
  UserPlus,
  Instagram,
  Mail,
  MapPin,
  CheckCircle2,
  Calendar,
} from "lucide-react";

export default function AtleticaPage() {
  return (
    <div className="space-y-16 pb-20">
      {/* Athletics Hero with custom identity while fitting the portal */}
      <PageHero
        theme="atletica"
        badge="Esporte · Paixão · Integração"
        title="Atlética de Psicologia UNIVALI"
        description="Representando o manto da Psicologia nas quadras, campos e torcidas. Promovendo saúde, companheirismo e espírito universitário entre calouros e veteranos."
        breadcrumbs={[
          { label: "Início", href: "/" },
          { label: "Atlética" },
        ]}
        actions={
          <>
            <a
              href="#modalidades"
              className="px-5 py-2.5 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all shadow-sm flex items-center gap-1.5"
            >
              <Trophy className="w-4 h-4" />
              <span>Conhecer Modalidades & Treinos</span>
            </a>
            <a
              href="#produtos"
              className="px-5 py-2.5 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-xl transition-colors flex items-center gap-1.5"
            >
              <ShoppingBag className="w-4 h-4 text-amber-400" />
              <span>Lojinha Oficial</span>
            </a>
          </>
        }
      />

      {/* Sobre a Atlética */}
      <section>
        <Container>
          <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <span className="text-xs font-semibold text-amber-700 uppercase tracking-wider block mb-2">
                Nossa Missão
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Mais do que esporte: saúde mental e pertencimento
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                A Associação Atlética Acadêmica de Psicologia da UNIVALI nasceu para integrar os acadêmicos de todos os semestres por meio da prática esportiva regular, do lazer e de competições universitárias regionais e nacionais.
              </p>
              <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
                Acreditamos na atividade física e no convívio comunitário como pilares fundamentais para o alívio das tensões acadêmicas e fortalecimento dos laços durante a graduação.
              </p>

              <div className="mt-6 flex flex-wrap gap-4 text-xs font-medium text-slate-700">
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-50 text-amber-900 border border-amber-200">
                  <Flame className="w-3.5 h-3.5 text-amber-600" />
                  6 Modalidades Oficiais
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 text-slate-800">
                  <Trophy className="w-3.5 h-3.5 text-slate-600" />
                  Vice-campeã Geral JAU
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-50 text-purple-800 border border-purple-200">
                  Bateria Ritmo Psi
                </span>
              </div>
            </div>

            {/* Registration Callout */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-xl p-6 border border-slate-800 shadow-md">
              <div className="w-10 h-10 rounded-lg bg-amber-400/20 text-amber-400 flex items-center justify-center font-bold mb-3">
                <UserPlus className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                Quer jogar pela Psicologia?
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Não precisa ter experiência prévia para participar dos nossos treinos recreativos. Nossas equipes são abertas a todos os estudantes!
              </p>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 text-xs font-bold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <span>Inscreva-se pelo Instagram</span>
                <Instagram className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Modalidades & Treinos */}
      <section id="modalidades">
        <Container>
          <SectionTitle
            tag="Modalidades Esportivas"
            title="Treinos Semanais & Locais"
            subtitle="Confira dias, horários e responsáveis pelas equipes de quadra, pista e games."
          />

          <AthleticModalities />
        </Container>
      </section>

      {/* Campeonatos */}
      <section>
        <Container>
          <SectionTitle
            tag="Competições"
            title="Campeonatos & Jogos Universitários"
            subtitle="Onde o manto da Psicologia entra em quadra para disputar o troféu."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TOURNAMENTS.map((t) => (
              <div
                key={t.id}
                className="bg-white border border-slate-200/90 rounded-xl p-5 hover:border-amber-300 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-semibold text-amber-700">{t.season}</span>
                    <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-amber-50 text-amber-900 border border-amber-200">
                      {t.status}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-slate-900 mb-2">
                    {t.name}
                  </h4>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {t.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 text-xs text-slate-500 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{t.location}</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Produtos da Atlética */}
      <section id="produtos">
        <Container>
          <SectionTitle
            tag="Lojinha da Psicologia"
            title="Produtos & Mantos Oficiais"
            subtitle="Vista as cores da Psicologia. Pedidos via WhatsApp com retirada no campus."
          />

          <AthleticProducts />
        </Container>
      </section>

      {/* Diretoria da Atlética */}
      <section>
        <Container>
          <SectionTitle
            tag="Diretoria"
            title="Gestão da Atlética"
            subtitle="Acadêmicos à frente da organização esportiva, financeira e de produtos."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ATLETICA_MEMBERS.map((member) => (
              <MemberCard key={member.id} member={member} accent="atletica" />
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
