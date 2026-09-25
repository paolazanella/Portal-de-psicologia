# Portal de Psicologia - UNIVALI

Portal unificado para a comunidade acadêmica do curso de Psicologia da **UNIVALI (Universidade do Vale do Itajaí - Campus Itajaí)**.

O objetivo do portal é centralizar a comunicação do **Centro Acadêmico (CA)**, da **Atlética de Psicologia**, o calendário de eventos e as informações acadêmicas essenciais, evitando a dispersão de comunicados em grupos de WhatsApp e redes sociais.

> **Importante:** Este portal é uma iniciativa de integração e comunicação estudantil. Ele **não substitui** os sistemas acadêmicos oficiais da UNIVALI (como o Sistema Elis) e **não realiza atendimentos ou triagens psicológicas**. Para acolhimento oficial, utilize o [Programa Acolher da UNIVALI](https://www.univali.br/vida-no-campus/acolher/Paginas/default.aspx) ou o CVV (188).

---

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído com tecnologias abertas, modernas e de fácil manutenção, sem qualquer vínculo com ferramentas proprietárias:

- **Framework:** [Next.js](https://nextjs.org/) (App Router, React 18/19)
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/) (tipagem estrita em todo o domínio)
- **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
- **Ícones:** [Lucide React](https://lucide.dev/)
- **Deploy Recomendado:** [Vercel](https://vercel.com/) ou qualquer provedor Node.js / Docker
- **Banco de Dados & Auth Futuro:** [Supabase](https://supabase.com/) (estrutura e esquemas SQL prontos)

---

## 🚀 Como Executar Localmente

### Pré-requisitos
- Node.js 18.18+ ou 20+ (testado no Node.js v22)
- npm, yarn ou pnpm

### Passo a passo
1. Clone o repositório ou baixe os arquivos:
   ```bash
   git clone https://github.com/paolazanella/Portal-de-psicologia.git
   cd Portal-de-psicologia
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

### Build de Produção
Para verificar se o código compila corretamente antes do deploy:
```bash
npm run build
npm start
```

---

## 📁 Estrutura do Projeto

O projeto segue arquitetura **orientada a features (Feature-Based Architecture)**:

```text
src/
├── app/                        # Rotas e páginas do Next.js App Router
│   ├── page.tsx                # 1. Home (Apresentação, atalhos, eventos, avisos)
│   ├── centro-academico/       # 2. Centro Acadêmico (Função, gestão, propostas, comunicados)
│   ├── atletica/               # 3. Atlética (Modalidades, treinos, campeonatos, lojinha)
│   ├── eventos/                # 4. Eventos (Calendário, filtros por categoria/status)
│   ├── informacoes-academicas/ # 5. Informações Acadêmicas (Horas complementares, Elis, FAQ)
│   ├── projetos/               # 6. Projetos & Programa Acolher UNIVALI
│   ├── contato/                # 7. Canais de Contato & Formulário
│   ├── admin/                  # 8. Painel Administrativo & Simulador RBAC
│   ├── layout.tsx              # Layout mestre com Header, Footer e Metadados
│   └── globals.css             # Tailwind base e resets
├── components/
│   ├── ui/                     # Primitivos visuais reutilizáveis (Container, SectionTitle, PageHero, Badge, EmptyState)
│   └── shared/                 # Componentes globais (Header com Top-Bar Contract, Footer com canal de apoio)
├── features/
│   ├── academic-center/        # Tipos, mocks e componentes do CA
│   ├── athletics/              # Tipos, mocks e componentes da Atlética
│   ├── events/                 # Filtros e listagem de eventos com horas complementares
│   ├── projects/               # Detalhes de projetos e modal do Programa Acolher
│   ├── academic-info/          # Guia de horas, accordion de FAQ, links oficiais
│   ├── contact/                # Formulário enxuto e canais institucionais
│   └── auth/                   # Definição de papéis (RBAC) e cliente Supabase scaffold
├── lib/                        # Utilitários (cn, formatadores de data pt-BR)
└── types/                      # Tipos de domínio centrais
```

---

## 🧭 Como Continuar o Desenvolvimento

Este projeto foi projetado especificamente para ser assumido por outro desenvolvedor usando **VS Code, Cursor, Claude Code, GitHub Copilot** ou qualquer editor:

1. **Estado Atual (MVP):**
   - Todas as 7 páginas públicas estão implementadas e navegáveis;
   - Os dados estão centralizados em arquivos `mock-data.ts` dentro de cada pasta de feature;
   - Nenhum dado é gerado aleatoriamente no render, permitindo transição transparente para consultas remotas;
   - A área administrativa possui tela informativa e interativa com visualização dos papéis de acesso.

2. **Como plugar o Supabase:**
   - Leia a documentação em `docs/architecture.md` e `docs/permissions.md`;
   - Crie um projeto gratuito no [Supabase](https://supabase.com);
   - Execute o script SQL contido em `docs/architecture.md` no SQL Editor do Supabase;
   - Crie o arquivo `.env.local` na raiz com:
     ```env
     NEXT_PUBLIC_SUPABASE_URL=https://seu-projeto.supabase.co
     NEXT_PUBLIC_SUPABASE_ANON_KEY=sua-chave-anonima
     ```
   - Substitua as importações de `mock-data.ts` pelas consultas `supabase.from('events').select('*')` etc.

3. **Deploy na Vercel:**
   - Conecte o repositório do GitHub à sua conta na Vercel;
   - O framework Next.js será detectado automaticamente;
   - O comando de build é `npm run build` e não requer configurações adicionais.

---

## 📚 Documentação Complementar

- [`AGENTS.md`](./AGENTS.md) - Diretrizes para agentes de IA que forem editar este repositório
- [`docs/architecture.md`](./docs/architecture.md) - Arquitetura do sistema e SQL do Supabase
- [`docs/design-system.md`](./docs/design-system.md) - Guia visual, cores e regras de componentes
- [`docs/feature-scope.md`](./docs/feature-scope.md) - Escopo de funcionalidades e o que **não** deve ser feito
- [`docs/permissions.md`](./docs/permissions.md) - Matriz de segurança e RBAC
- [`docs/domain-model.md`](./docs/domain-model.md) - Modelagem das entidades de dados
- [`docs/folder-structure.md`](./docs/folder-structure.md) - Convenções de pastas e arquivos

---

## 📄 Licença e Uso

Desenvolvido para fins acadêmicos e comunitários para o curso de Psicologia da UNIVALI.