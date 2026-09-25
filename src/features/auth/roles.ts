import { UserRole, Permission } from "./types";

/**
 * Role to permissions matrix.
 * Enforces least privilege for administrative capabilities.
 */
export const ROLE_PERMISSIONS: Record<UserRole, Permission[]> = {
  admin: [
    "events:create",
    "events:edit_own",
    "events:edit_all",
    "events:delete",
    "announcements:create_own",
    "announcements:manage_all",
    "projects:manage",
    "academic_info:manage",
    "users:approve",
    "users:manage_roles",
  ],
  centro_academico: [
    "events:create",
    "events:edit_own",
    "announcements:create_own",
    "projects:manage",
  ],
  atletica: [
    "events:create",
    "events:edit_own",
    "announcements:create_own",
  ],
  coordenacao: [
    "events:create",
    "events:edit_own",
    "academic_info:manage",
    "announcements:create_own",
  ],
};

export function hasPermission(role: UserRole, permission: Permission): boolean {
  return ROLE_PERMISSIONS[role]?.includes(permission) ?? false;
}

export const ROLE_LABELS: Record<UserRole, { title: string; description: string; scope: string }> = {
  admin: {
    title: "Administrador Geral",
    description: "Acesso total à plataforma, aprovação de novas contas e auditoria de conteúdos.",
    scope: "Todo o portal e gerenciamento de usuários",
  },
  centro_academico: {
    title: "Gestão do Centro Acadêmico",
    description: "Criação e edição de comunicados, propostas, membros da gestão e eventos do CA.",
    scope: "Página do CA e Eventos do CA",
  },
  atletica: {
    title: "Diretoria da Atlética",
    description: "Gerenciamento de treinos, modalidades, produtos, campeonatos e eventos da Atlética.",
    scope: "Página da Atlética e Eventos Esportivos",
  },
  coordenacao: {
    title: "Coordenação de Curso",
    description: "Validação de informações acadêmicas oficiais, horas complementares e comunicados de curso.",
    scope: "Informações Acadêmicas e Comunicados Oficiais",
  },
};
