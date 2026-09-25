# Arquitetura do Sistema

Este documento descreve as decisões técnicas, a topologia de componentes e o plano de integração do **Portal de Psicologia UNIVALI**.

---

## 1. Visão Geral da Topologia

O projeto adota o padrão **Next.js App Router (React Server & Client Components)** organizado de maneira orientada a funcionalidades (*Feature-Based Architecture*).

```text
[ Cliente Web / Navegador ]
            │
            ▼
[ Next.js 14/15 App Router ] ──── (Rotas Públicas & Painel Admin)
            │
            ├─► Módulos de Feature (mock-data.ts no MVP)
            │
            ▼  (Futuro Plug & Play)
[ Supabase Backend ]
    ├── Supabase Auth (Magic Link ou Email/Senha para gestores)
    ├── PostgreSQL Database (Tabelas normalizadas)
    └── Row Level Security (RLS com validação de papéis)
```

---

## 2. Princípios Arquiteturais

1. **Baixo Custo & Simplicidade:** Não requer servidores dedicados complexos ou clusters Kubernetes. Pode rodar gratuitamente ou a custo mínimo no tier gratuito da Vercel e do Supabase.
2. **Independência de Fornecedor:** O código não depende de bibliotecas proprietárias de plataformas específicas. Roda perfeitamente em qualquer máquina via `npm run dev`.
3. **Desacoplamento de Dados:** Cada feature possui seu próprio conjunto de tipos e dados iniciais (`mock-data.ts`), permitindo que a interface seja 100% testada antes da infraestrutura de banco de dados.
4. **Isolamento de Responsabilidades:** O portal atua como **agregador informativo**, redirecionando demandas acadêmicas formais para os sistemas oficiais da UNIVALI (como o Sistema Elis) e demandas de saúde mental para o Programa Acolher / CVV.

---

## 3. Especificação do Banco de Dados (Supabase / PostgreSQL)

Quando o projeto for conectado ao Supabase, utilize o seguinte esquema SQL:

```sql
-- Habilita extensão de UUID
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Tabela de Perfis de Usuários Administrativos
CREATE TYPE user_role AS ENUM ('admin', 'centro_academico', 'atletica', 'coordenacao');

CREATE TABLE profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT NOT NULL UNIQUE,
    full_name TEXT NOT NULL,
    role user_role NOT NULL DEFAULT 'centro_academico',
    is_active BOOLEAN NOT NULL DEFAULT true,
    approved_by UUID REFERENCES auth.users(id),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Tabela de Eventos
CREATE TYPE event_category AS ENUM (
    'Centro Acadêmico', 
    'Atlética', 
    'Acadêmico', 
    'Esportivo', 
    'Social', 
    'Outros'
);

CREATE TYPE event_status AS ENUM (
    'confirmado', 
    'inscricoes_abertas', 
    'encerrado', 
    'em_breve'
);

CREATE TABLE events (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    event_date DATE NOT NULL,
    event_time TEXT NOT NULL,
    location TEXT NOT NULL,
    category event_category NOT NULL,
    entity_owner TEXT NOT NULL, -- 'centro_academico', 'atletica', 'univali'
    status event_status NOT NULL DEFAULT 'confirmado',
    workload_hours INTEGER DEFAULT 0,
    registration_url TEXT,
    additional_info TEXT,
    created_by UUID REFERENCES profiles(id),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Tabela de Comunicados
CREATE TABLE announcements (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    summary TEXT NOT NULL,
    content TEXT NOT NULL,
    publish_date DATE NOT NULL DEFAULT CURRENT_DATE,
    author TEXT NOT NULL,
    entity_owner TEXT NOT NULL,
    is_important BOOLEAN NOT NULL DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 4. Tabela de Projetos
CREATE TABLE projects (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    category TEXT NOT NULL,
    entity_owner TEXT NOT NULL,
    contact_email TEXT,
    contact_phone TEXT,
    official_url TEXT,
    access_info TEXT,
    is_institutional BOOLEAN DEFAULT false,
    details JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);
```

---

## 4. Políticas de Segurança (Row Level Security - RLS)

As tabelas públicas contam com leitura irrestrita para qualquer visitante e escrita restrita aos usuários autenticados com o papel correspondente:

```sql
-- Ativação do RLS
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE announcements ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Regra de leitura pública para todos os visitantes
CREATE POLICY "Leitura pública de eventos" 
ON events FOR SELECT USING (true);

CREATE POLICY "Leitura pública de avisos" 
ON announcements FOR SELECT USING (true);

CREATE POLICY "Leitura pública de projetos" 
ON projects FOR SELECT USING (true);

-- Inserção de eventos pelo CA
CREATE POLICY "CA gerencia seus eventos" 
ON events FOR ALL 
TO authenticated 
USING (
    EXISTS (
        SELECT 1 FROM profiles 
        WHERE profiles.id = auth.uid() 
        AND (profiles.role = 'admin' OR (profiles.role = 'centro_academico' AND events.entity_owner = 'centro_academico'))
    )
);

-- Inserção de eventos pela Atlética
CREATE POLICY "Atlética gerencia seus eventos" 
ON events FOR ALL 
TO authenticated 
USING (
    EXISTS (
        SELECT 1 FROM profiles 
        WHERE profiles.id = auth.uid() 
        AND (profiles.role = 'admin' OR (profiles.role = 'atletica' AND events.entity_owner = 'atletica'))
    )
);
```

---

## 5. Passos para Migração dos Mocks para Supabase

1. Instale o cliente Supabase:
   ```bash
   npm install @supabase/supabase-js @supabase/ssr
   ```
2. Adicione as variáveis no `.env.local`:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://exemplo.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=sua-chave-anon
   ```
3. Crie a função de consulta unificada em `src/features/events/api.ts` que retorna os dados do Supabase se o cliente estiver configurado, ou o fallback de `mock-data.ts` caso contrário.
