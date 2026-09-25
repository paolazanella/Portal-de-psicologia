/**
 * Supabase Integration Scaffold
 * 
 * Este arquivo foi estruturado para a futura integração com Supabase.
 * Para ativar quando for exportado para o GitHub / Vercel:
 * 1. Instale: npm install @supabase/supabase-js @supabase/ssr
 * 2. Configure .env.local com NEXT_PUBLIC_SUPABASE_URL e NEXT_PUBLIC_SUPABASE_ANON_KEY
 * 3. Descomente e ative o cliente conforme o padrão do Supabase App Router.
 */

export const isSupabaseConfigured = (): boolean => {
  return Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL && 
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );
};

// Mock de sessão administrativa atual para demonstração visual da arquitetura
export interface MockAdminSession {
  user: {
    id: string;
    email: string;
    fullName: string;
    role: "admin" | "centro_academico" | "atletica" | "coordenacao";
  };
}

export const MOCK_ADMIN_ACCOUNTS: MockAdminSession["user"][] = [
  {
    id: "usr_admin_01",
    email: "admin.psico@univali.br",
    fullName: "Coordenação de TI Estudantil",
    role: "admin",
  },
  {
    id: "usr_ca_01",
    email: "ca.psicologia@univali.br",
    fullName: "Gestão Centro Acadêmico (Presidência)",
    role: "centro_academico",
  },
  {
    id: "usr_atletica_01",
    email: "atletica.psico@univali.br",
    fullName: "Diretoria Atlética de Psicologia",
    role: "atletica",
  },
  {
    id: "usr_coord_01",
    email: "psicologia.itajai@univali.br",
    fullName: "Secretaria / Coordenação do Curso",
    role: "coordenacao",
  },
];
