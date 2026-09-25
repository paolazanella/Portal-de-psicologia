# Estrutura de Pastas e Convenções (Folder Structure)

O projeto adota uma arquitetura modular orientada a funcionalidades (**Feature-Driven Architecture**). Essa abordagem evita que pastas genéricas (como `components/` ou `utils/`) fiquem sobrecarregadas à medida que novas funcionalidades são adicionadas.

---

## 1. Árvore de Diretórios

```text
src/
├── app/                        # Next.js App Router (Camada de Apresentação & Rotas)
│   ├── layout.tsx              # Layout raiz com fontes, Header, Footer e metadados
│   ├── page.tsx                # Página Inicial (Home)
│   ├── globals.css             # Configurações globais do Tailwind CSS
│   ├── centro-academico/
│   │   └── page.tsx            # Página do Centro Acadêmico
│   ├── atletica/
│   │   └── page.tsx            # Página da Atlética de Psicologia
│   ├── eventos/
│   │   └── page.tsx            # Página de Eventos e Calendário
│   ├── informacoes-academicas/
│   │   └── page.tsx            # Página de Informações Acadêmicas e Elis
│   ├── projetos/
│   │   └── page.tsx            # Página de Projetos e Programa Acolher
│   ├── contato/
│   │   └── page.tsx            # Página de Contato e Formulário
│   └── admin/
│       └── page.tsx            # Painel Administrativo e Simulador RBAC
│
├── components/
│   ├── ui/                     # Componentes primitivos puros e agnósticos a regras de negócio
│   │   ├── Container.tsx       # Contêiner responsivo de largura controlada
│   │   ├── PageHero.tsx        # Hero padronizado com breadcrumbs
│   │   ├── SectionTitle.tsx    # Título de seção com kicker e ação
│   │   ├── Badge.tsx           # Tags discretas sem poluição visual
│   │   └── EmptyState.tsx      # Feedback para listas vazias
│   └── shared/                 # Componentes compartilhados por toda a aplicação
│       ├── Header.tsx          # Top Bar Contract com navegação e atalhos
│       └── Footer.tsx          # Rodapé institucional com aviso do Programa Acolher
│
├── features/                   # Módulos isolados por domínio de negócio
│   ├── academic-center/        # Módulo do Centro Acadêmico
│   │   ├── mock-data.ts        # Dados de integrantes, propostas e comunicados
│   │   └── components/         # MemberCard, ProposalCard, AnnouncementCard
│   ├── athletics/              # Módulo da Atlética
│   │   ├── mock-data.ts        # Modalidades, treinos, produtos e competições
│   │   └── components/         # AthleticModalities, AthleticProducts
│   ├── events/                 # Módulo de Eventos
│   │   ├── mock-data.ts        # Lista de eventos com horas complementares
│   │   └── components/         # EventCard, EventsList com filtros interativos
│   ├── projects/               # Módulo de Projetos
│   │   ├── mock-data.ts        # Dados do Programa Acolher e iniciativas
│   │   └── components/         # ProgramaAcolherModal, ProjectCard
│   ├── academic-info/          # Módulo de Informações Acadêmicas
│   │   ├── mock-data.ts        # Links do Elis, FAQ e regras de horas
│   │   └── components/         # QuickLinkCard, FaqAccordion, HoursGuide
│   ├── contact/                # Módulo de Contato
│   │   └── components/         # ContactForm, ContactChannels
│   └── auth/                   # Módulo de Autenticação e RBAC
│       ├── types.ts            # Tipos de perfil e permissões
│       ├── roles.ts            # Matriz de privilégios por papel
│       └── supabase-client.ts  # Scaffold preparado para cliente Supabase
│
├── lib/                        # Utilitários puros
│   ├── utils.ts                # Função cn para junção de classes Tailwind
│   └── date.ts                 # Formatadores de data para pt-BR
│
└── types/                      # Tipos de domínio globais
    └── index.ts                # Interfaces de Evento, Projeto, Membro, etc.
```

---

## 2. Convenções de Nomenclatura

- **Componentes React:** PascalCase (ex: `EventCard.tsx`, `PageHero.tsx`).
- **Arquivos Utilitários e Mocks:** kebab-case (ex: `mock-data.ts`, `supabase-client.ts`).
- **Rotas:** kebab-case alinhado com a convenção do App Router (ex: `/centro-academico`, `/informacoes-academicas`).
- **Interfaces e Tipos:** PascalCase (ex: `AcademicEvent`, `BoardMember`).
- **Imports:** Usar sempre o alias `@/*` mapeado para `./src/*` conforme definido no `tsconfig.json`.
