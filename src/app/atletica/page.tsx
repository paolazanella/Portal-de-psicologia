import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { MemberCard } from "@/features/academic-center/components/MemberCard";
import { AthleticModalities } from "@/features/athletics/components/AthleticModalities";
import { AthleticProducts } from "@/features/athletics/components/AthleticProducts";
import {
  ATLETICA_MEMBERS,
  TOURNAMENTS,
  GUAXAS_MASCOT_INFO,
} from "@/features/athletics/mock-data";
import {
  Trophy,
  ShoppingBag,
  UserPlus,
  Instagram,
  MapPin,
  Shield,
  Zap,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { LogoGuaxas } from "@/features/athletics/components/LogoGuaxas";

export default function AtleticaPage() {
  return (
    <div className="space-y-16 pb-20">
      {/* Athletics Hero with Guaxas Mascot Integration */}
      <PageHero
        theme="atletica"
        badge="A.A.A.P.U. · Associação Atlética Acadêmica de Psicologia UNIVALI"
        title="Atlética de Psicologia · Guaxas"
        description="Garra, resiliência e mente forte dentro e fora de quadra. Promovendo a integração esportiva, bem-estar físico e a torcida mais apaixonada da UNIVALI."
        breadcrumbs={[
          { label: "Início", href: "/" },
          { label: "Atlética Guaxas" },
        ]}
        imageSrc="/images/guaxas-mascote.jpg"
        imageAlt="Mascote Guaxas da Atlética de Psicologia UNIVALI"
        actions={
          <>
            <a
              href="#mascote"
              className="px-5 py-2.5 text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-all shadow-sm flex items-center gap-1.5"
            >
              <Shield className="w-4 h-4" />
              <span>Conhecer o Mascote Guaxas</span>
            </a>
            <a
              href="#modalidades"
              className="px-5 py-2.5 text-xs font-semibold text-white bg-slate-900/80 hover:bg-slate-800 border border-cyan-800/60 rounded-xl transition-colors flex items-center gap-1.5"
            >
              <Trophy className="w-4 h-4 text-cyan-400" />
              <span>Treinos & Modalidades</span>
            </a>
            <a
              href="#produtos"
              className="px-5 py-2.5 text-xs font-semibold text-cyan-200 hover:text-white bg-transparent hover:bg-cyan-950/40 rounded-xl transition-colors flex items-center gap-1.5"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Mantos & Produtos</span>
            </a>
          </>
        }
      />

      {/* Seção de Apresentação do Mascote Guaxas */}
      <section id="mascote" className="scroll-mt-20">
        <Container>
          <div className="bg-gradient-to-br from-[#071320] via-[#0b1d30] to-[#0a253d] text-white rounded-3xl p-6 sm:p-10 border border-cyan-900/40 shadow-xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              {/* Mascot Art Frame */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-2xl overflow-hidden border-2 border-cyan-500/40 shadow-2xl bg-[#091422] group">
                  <Image
                    src="/images/guaxas-mascote.jpg"
                    alt="Guaxas - Mascote Oficial A.A.A.P.U."
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#071320] via-[#071320]/80 to-transparent p-3 text-center">
                    <span className="text-xs font-black tracking-widest text-cyan-300 uppercase">
                      GUAXAS · A.A.A.P.U.
                    </span>
                  </div>
                </div>
              </div>

              {/* Mascot Narrative */}
              <div className="lg:col-span-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-300 text-xs font-bold">
                    <Zap className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Símbolo de Garra & Inteligência</span>
                  </div>
                  <div className="hidden sm:block">
                    <LogoGuaxas size="sm" showText={false} />
                  </div>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                  Guaxas: A Força Coletiva da Psicologia
                </h2>

                <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                  {GUAXAS_MASCOT_INFO.description}
                </p>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-cyan-950 text-xs">
                    <span className="text-cyan-400 font-bold block mb-1">Estratégia & Agilidade</span>
                    Capacidade tática nas modalidades coletivas e individuais.
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-cyan-950 text-xs">
                    <span className="text-cyan-400 font-bold block mb-1">União de Todos os Períodos</span>
                    Integração dos calouros aos veteranos em todas as disputas.
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-cyan-950 text-xs">
                    <span className="text-cyan-400 font-bold block mb-1">Identidade Visual Oficial</span>
                    Azul escuro, azul petróleo, ciano elétrico, cinza e preto.
                  </div>
                </div>

                {/* Color Palette Indicators */}
                <div className="mt-6 pt-5 border-t border-cyan-950 flex flex-wrap items-center gap-3 text-xs text-slate-300">
                  <span className="font-semibold text-cyan-200">Cores Oficiais:</span>
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-[#071320] border border-cyan-800" title="Azul Escuro" />
                    <span className="w-4 h-4 rounded-full bg-[#0e7490] border border-cyan-800" title="Azul Petróleo" />
                    <span className="w-4 h-4 rounded-full bg-[#06b6d4] border border-cyan-800" title="Ciano Elétrico" />
                    <span className="w-4 h-4 rounded-full bg-[#cbd5e1] border border-slate-600" title="Cinza Prateado" />
                    <span className="w-4 h-4 rounded-full bg-[#09121d] border border-slate-800" title="Preto" />
                  </div>
                  <span className="text-slate-400 text-[11px]">(A.A.A.P.U. Guaxas)</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Sobre a Atlética & Convite a Atletas */}
      <section>
        <Container>
          <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <span className="text-xs font-bold text-cyan-800 uppercase tracking-wider block mb-2">
                Nossa Proposta
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Esporte, saúde e pertencimento universitário
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                A Associação Atlética Acadêmica de Psicologia UNIVALI (A.A.A.P.U.) reúne os acadêmicos de todos os semestres através de treinos regulares, campeonatos intercursos e eventos de confraternização.
              </p>
              <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
                Acreditamos na prática esportiva coletiva como potente fator de proteção à saúde mental dos graduandos e fortalecimento da camaradagem universitária.
              </p>

              <div className="mt-6 flex flex-wrap gap-3 text-xs font-semibold text-slate-700">
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-50 text-cyan-950 border border-cyan-200">
                  <Shield className="w-3.5 h-3.5 text-cyan-700" />
                  6 Modalidades Ativas
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 text-slate-800">
                  <Trophy className="w-3.5 h-3.5 text-slate-600" />
                  Vice-campeã Geral JAU
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50 text-brand-900 border border-blue-200">
                  Bateria Ritmo Guaxas
                </span>
              </div>
            </div>

            {/* Registration Callout */}
            <div className="bg-gradient-to-br from-[#071320] via-[#0b1d30] to-[#07111c] text-white rounded-2xl p-6 border border-cyan-900/60 shadow-md">
              <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-500/40 text-cyan-400 flex items-center justify-center font-bold mb-3">
                <UserPlus className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                Quer jogar pela Psicologia?
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Não é necessário ter experiência prévia para participar dos nossos treinos recreativos. Nossas equipes são abertas a todos os estudantes de Psicologia!
              </p>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <span>Inscreva-se pelo Instagram</span>
                <Instagram className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Modalidades & Treinos */}
      <section id="modalidades" className="scroll-mt-20">
        <Container>
          <SectionTitle
            tag="Modalidades Esportivas Guaxas"
            title="Treinos Semanais & Horários"
            subtitle="Confira dias, horários e responsáveis pelas equipes de quadra, campo e e-sports da A.A.A.P.U."
          />

          <AthleticModalities />
        </Container>
      </section>

      {/* Campeonatos */}
      <section>
        <Container>
          <SectionTitle
            tag="Competições Universitárias"
            title="Campeonatos & Jogos Oficiais"
            subtitle="Onde o manto azul petróleo e ciano da Psicologia entra em quadra para disputar o troféu."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TOURNAMENTS.map((t) => (
              <div
                key={t.id}
                className="bg-white border border-slate-200/90 rounded-2xl p-5 hover:border-cyan-500/80 hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-bold text-cyan-800">{t.season}</span>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-cyan-50 text-cyan-950 border border-cyan-200">
                      {t.status}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-slate-900 mb-2 group-hover:text-cyan-800 transition-colors flex items-center gap-2">
                    <Shield className="w-4 h-4 text-cyan-600 shrink-0" />
                    <span>{t.name}</span>
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
      <section id="produtos" className="scroll-mt-20">
        <Container>
          <SectionTitle
            tag="Lojinha Oficial Guaxas"
            title="Mantos & Produtos da Psicologia"
            subtitle="Vista as cores da A.A.A.P.U. Pedidos sob encomenda com retirada facilitada no campus."
          />

          <AthleticProducts />
        </Container>
      </section>

      {/* Diretoria da Atlética */}
      <section>
        <Container>
          <SectionTitle
            tag="Diretoria Guaxas"
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
