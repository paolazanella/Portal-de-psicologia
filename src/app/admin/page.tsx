"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { UserRole } from "@/features/auth/types";
import { ROLE_LABELS, ROLE_PERMISSIONS } from "@/features/auth/roles";
import { MOCK_ADMIN_ACCOUNTS } from "@/features/auth/supabase-client";
import {
  ShieldCheck,
  Lock,
  KeyRound,
  Users,
  Database,
  CheckCircle2,
  AlertCircle,
  Code2,
  Calendar,
  Megaphone,
  BookOpen,
} from "lucide-react";

export default function AdminArchitecturePage() {
  const [activeRole, setActiveRole] = useState<UserRole>("admin");

  const currentRoleInfo = ROLE_LABELS[activeRole];
  const currentPermissions = ROLE_PERMISSIONS[activeRole];

  return (
    <div className="space-y-16 pb-24">
      <PageHero
        badge="Arquitetura de Segurança & Gestão"
        title="Painel Administrativo (Estrutura Preparada)"
        description="Esta área foi desenhada com arquitetura RBAC (Controle de Acesso Baseado em Papéis) para futura conexão com Supabase Auth e PostgreSQL RLS, garantindo que cada entidade gerencie apenas seus conteúdos."
        breadcrumbs={[
          { label: "Início", href: "/" },
          { label: "Área Administrativa" },
        ]}
      />

      {/* Security Principles Banner */}
      <section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-slate-200/90 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-brand-700 flex items-center justify-center mb-3">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">
                Sem Cadastro Público Aberto
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Nenhum usuário externo pode criar conta de acesso administrativo diretamente. Novos gestores devem ser cadastrados manualmente ou aprovados por um Administrador Geral.
              </p>
            </div>

            <div className="bg-white border border-slate-200/90 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center mb-3">
                <KeyRound className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">
                Isolamento por Papéis (RBAC)
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                O Centro Acadêmico só edita conteúdos do CA; a Atlética gerencia suas modalidades e eventos esportivos; a Coordenação valida informações acadêmicas oficiais.
              </p>
            </div>

            <div className="bg-white border border-slate-200/90 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">
                Privacidade & Dados Sensíveis
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Princípio de menor privilégio e minimização de dados: o portal nunca armazena prontuários, notas psicológicas ou dados médicos/clínicos.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Interactive Role Simulator */}
      <section>
        <Container>
          <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div>
                <span className="text-xs font-semibold text-brand-700 uppercase tracking-wider">
                  Simulador de Papéis Administrativos
                </span>
                <h2 className="text-2xl font-bold text-slate-900">
                  Visão de Acesso por Entidade
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Selecione um papel para visualizar seu escopo de permissões na plataforma:
                </p>
              </div>

              {/* Role Selector Buttons */}
              <div className="flex flex-wrap gap-2">
                {(["admin", "centro_academico", "atletica", "coordenacao"] as UserRole[]).map((role) => (
                  <button
                    key={role}
                    onClick={() => setActiveRole(role)}
                    className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                      activeRole === role
                        ? "bg-brand-700 text-white shadow-sm"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    {ROLE_LABELS[role].title.split(" ")[0]} ({role})
                  </button>
                ))}
              </div>
            </div>

            {/* Selected Role Active Card */}
            <div className="py-6 border-b border-slate-100 grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-1 p-5 rounded-xl bg-slate-50 border border-slate-200/80">
                <span className="text-[11px] font-bold text-brand-700 uppercase tracking-wider block mb-1">
                  Papel Ativo
                </span>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {currentRoleInfo.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {currentRoleInfo.description}
                </p>
                <div className="text-xs text-slate-700 bg-white p-3 rounded-lg border border-slate-200">
                  <strong>Escopo Autorizado:</strong>
                  <div className="text-slate-600 mt-0.5">{currentRoleInfo.scope}</div>
                </div>
              </div>

              <div className="lg:col-span-2">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                  Permissões Concedidas no Sistema
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {currentPermissions.map((perm) => (
                    <div
                      key={perm}
                      className="flex items-center gap-2 p-2.5 rounded-lg bg-emerald-50/60 border border-emerald-200/70 text-emerald-950 font-mono text-[11px]"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{perm}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 p-4 rounded-xl bg-blue-50/60 border border-blue-200/70 flex items-start gap-3 text-xs text-blue-950">
                  <Database className="w-4 h-4 text-brand-700 shrink-0 mt-0.5" />
                  <div className="leading-relaxed">
                    <strong>Mapeamento no Banco de Dados (Supabase RLS):</strong>
                    <div className="text-slate-600 mt-1 font-mono text-[11px]">
                      {activeRole === "admin"
                        ? "CREATE POLICY admin_all ON events FOR ALL USING (auth.jwt()->>'role' = 'admin');"
                        : activeRole === "centro_academico"
                        ? "CREATE POLICY ca_events ON events FOR INSERT WITH CHECK (auth.jwt()->>'role' = 'centro_academico' AND entity_owner = 'centro_academico');"
                        : activeRole === "atletica"
                        ? "CREATE POLICY atl_events ON events FOR INSERT WITH CHECK (auth.jwt()->>'role' = 'atletica' AND entity_owner = 'atletica');"
                        : "CREATE POLICY coord_info ON academic_info FOR ALL USING (auth.jwt()->>'role' = 'coordenacao');"}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contas Mockadas Configuradas */}
            <div className="pt-6">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                Perfis Pré-Configurados para Demonstração (Mocks)
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {MOCK_ADMIN_ACCOUNTS.map((acc) => (
                  <div
                    key={acc.id}
                    className={`p-4 rounded-xl border text-xs transition-colors ${
                      activeRole === acc.role
                        ? "border-brand-500 bg-brand-50/40"
                        : "border-slate-200 bg-slate-50/50"
                    }`}
                  >
                    <div className="font-bold text-slate-900">{acc.fullName}</div>
                    <div className="text-slate-500 truncate text-[11px]">{acc.email}</div>
                    <div className="mt-2 inline-block px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-white border border-slate-200 text-slate-700">
                      role: {acc.role}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Roadmap para o Desenvolvedor que continuar no GitHub */}
      <section>
        <Container>
          <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-brand-500/20 text-brand-400 flex items-center justify-center">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-semibold text-brand-400 uppercase tracking-wider">
                  Guia de Continuidade Técnica
                </span>
                <h3 className="text-xl font-bold text-white">
                  Como Ativar o Supabase no Projeto Exportado
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 max-w-3xl">
              Quando você exportar este código para o seu repositório no GitHub e abri-lo no VS Code, Cursor ou Claude Code, basta seguir estas etapas para plugar o banco real:
            </p>

            <div className="space-y-4 text-xs font-mono text-slate-300">
              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                <span className="text-amber-400 font-bold block mb-1"># 1. Instalar os pacotes oficiais</span>
                npm install @supabase/supabase-js @supabase/ssr
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                <span className="text-amber-400 font-bold block mb-1"># 2. Configurar variáveis de ambiente em .env.local</span>
                NEXT_PUBLIC_SUPABASE_URL=https://sua-instancia.supabase.co<br />
                NEXT_PUBLIC_SUPABASE_ANON_KEY=sua-chave-anon-aqui
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                <span className="text-amber-400 font-bold block mb-1"># 3. Executar o schema SQL fornecido em docs/architecture.md</span>
                As tabelas "events", "announcements", "projects" e "profiles" já têm o SQL e as políticas RLS documentadas em docs/architecture.md.
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
