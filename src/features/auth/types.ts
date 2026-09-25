/**
 * Authentication and Role-Based Access Control (RBAC) types
 * Prepared for future Supabase Auth + Postgres Row Level Security (RLS)
 */

export type UserRole = "admin" | "centro_academico" | "atletica" | "coordenacao";

export interface UserProfile {
  id: string;
  email: string;
  fullName: string;
  role: UserRole;
  isActive: boolean;
  createdAt: string;
  approvedBy?: string; // ID do admin que aprovou o acesso
}

export type Permission = 
  | "events:create"
  | "events:edit_own"
  | "events:edit_all"
  | "events:delete"
  | "announcements:create_own"
  | "announcements:manage_all"
  | "projects:manage"
  | "academic_info:manage"
  | "users:approve"
  | "users:manage_roles";
