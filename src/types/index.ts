/**
 * Core Domain Types - Portal de Psicologia UNIVALI
 */

export type EntityOwner = "centro_academico" | "atletica" | "univali" | "parceria";

export type EventCategory = 
  | "Centro Acadêmico" 
  | "Atlética" 
  | "Acadêmico" 
  | "Esportivo" 
  | "Social" 
  | "Outros";

export type EventStatus = "confirmado" | "inscricoes_abertas" | "encerrado" | "em_breve";

export interface AcademicEvent {
  id: string;
  title: string;
  description: string;
  date: string; // YYYY-MM-DD
  time: string;
  location: string;
  category: EventCategory;
  entityOwner: EntityOwner;
  status: EventStatus;
  imageUrl?: string;
  registrationUrl?: string;
  additionalInfo?: string;
  workloadHours?: number; // horas complementares estimadas se aplicável
}

export type ProjectCategory = 
  | "Acolhimento & Saúde Mental"
  | "Extensão Universitária"
  | "Iniciativa Estudantil"
  | "Ação Social"
  | "Esporte & Integração";

export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  entityOwner: EntityOwner;
  imageUrl?: string;
  contactEmail?: string;
  contactPhone?: string;
  officialUrl?: string;
  accessInfo?: string;
  isInstitutional?: boolean; // ex: Programa Acolher
  details?: {
    location?: string;
    hours?: string;
    targetAudience?: string;
    features?: string[];
  };
}

export interface BoardMember {
  id: string;
  name: string;
  role: string;
  semester: string;
  bio?: string;
  photoUrl?: string;
  email?: string;
  instagram?: string;
}

export interface Announcement {
  id: string;
  title: string;
  summary: string;
  content: string;
  publishDate: string;
  author: string;
  entityOwner: EntityOwner;
  isImportant?: boolean;
}

export interface QuickLink {
  id: string;
  title: string;
  description: string;
  url: string;
  category: "sistemas" | "documentos" | "servicos" | "academico";
  badgeText?: string;
  isExternal: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface SportModality {
  id: string;
  name: string;
  category: "coletivo" | "individual" | "e-sports";
  schedule: string;
  location: string;
  coachOrLeader: string;
  status: "treinos_abertos" | "em_competicao" | "recesso";
}

export interface AthleticProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl?: string;
  status: "disponivel" | "sob_encomenda" | "esgotado";
  sizes?: string[];
}
