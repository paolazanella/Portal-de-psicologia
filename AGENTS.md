# AGENTS.md — Instruções para Agentes de Inteligência Artificial

Este repositório foi estruturado com convenções claras para permitir que assistentes inteligentes (Cursor, Claude Code, GitHub Copilot, Codex, etc.) continuem a evolução do projeto com alta qualidade e sem degradação arquitetural.

Ao realizar qualquer alteração neste código, siga rigorosamente as instruções abaixo:

---

## 1. Regra de Ouro: Leia a Documentação Antes de Alterar
Antes de propor mudanças arquiteturais, criar novas rotas ou alterar esquemas de dados, leia os arquivos correspondentes na pasta `docs/`:
- `docs/architecture.md`
- `docs/design-system.md`
- `docs/feature-scope.md`
- `docs/permissions.md`
- `docs/domain-model.md`
- `docs/folder-structure.md`

Não modifique a arquitetura do projeto sem justificar e documentar a decisão.

---

## 2. Dependências Mínimas e Tecnologias Abertas
- **NÃO** adicione bibliotecas pesadas ou redundantes sem justificativa clara.
- **NÃO** instale bibliotecas de componentes se os componentes reutilizáveis já existem em `src/components/ui/` ou `src/components/shared/`.
- Mantenha o ecossistema centrado em Next.js padrão, TypeScript, Tailwind CSS e Lucide Icons.
- **NUNCA** utilize SDKs ou serviços proprietários restritos a um único ambiente de desenvolvimento. O projeto deve sempre compilar e rodar via `npm run build` em qualquer máquina local e na Vercel.

---

## 3. Reutilização de Componentes e Design System
- Sempre reutilize:
  - `Container` (`src/components/ui/Container.tsx`) para limites de largura e respiros responsivos;
  - `PageHero` (`src/components/ui/PageHero.tsx`) para topos de página com migalhas de pão (*breadcrumbs*);
  - `SectionTitle` (`src/components/ui/SectionTitle.tsx`) para títulos padronizados;
  - `Badge` (`src/components/ui/Badge.tsx`) para estados semânticos;
  - `EmptyState` (`src/components/ui/EmptyState.tsx`) para listas sem resultados.
- **Zero-Pill Discipline:** Nunca envolva metadados estáticos (datas, locais, contagens) em cápsulas com bordas arredondadas e cores berrantes ("pill clutter"). Use tipografia limpa separada por pontos médios (`·`) ou barras (`/`).
- Preserve a paleta de cores institucional:
  - Azul Institucional: `brand-*` (#0A3D78 / #1e40af / #1d4ed8)
  - Roxo Psi: `psi-*` (#7c3aed / #9333ea)
  - Identidade da Atlética (A.A.A.P.U. Guaxas): tons escuros (azul escuro/preto) combinados com azul petróleo, ciano elétrico e cinza prateado (NUNCA usar dourado ou amarelo)

---

## 4. Limites de Escopo e Proteção Ética
- **NÃO implemente:**
  - Chatbots clínicos, assistentes de autoajuda ou qualquer forma de aconselhamento psicológico automático;
  - Módulos de prontuário, triagem ou registro de saúde mental;
  - Loja virtual completa com gateways de pagamento (Pix/cartão) até que haja exigência formal;
  - Integrações privadas invasivas com os sistemas fechados da UNIVALI.
- Em caso de dúvidas sobre novas funcionalidades, consulte `docs/feature-scope.md`.

---

## 5. Tipagem Estrita e Qualidade de Código
- Todo código deve ser escrito em **TypeScript estrito**.
- **PROIBIDO** o uso de `any`. Use os tipos definidos em `src/types/index.ts` ou crie interfaces específicas no módulo da respectiva feature.
- Evite duplicação de lógica ou de tipos. Se uma entidade pertencer a mais de uma feature, declare-a em `src/types/index.ts`.

---

## 6. Organização Orientada a Features
- Mantenha a separação por pastas de feature (`src/features/<nome-da-feature>/`):
  - `types.ts`
  - `mock-data.ts`
  - `components/`
- As páginas em `src/app/` devem atuar apenas como montadoras e orquestradoras dos componentes de features, evitando lógica de negócio excessiva no arquivo `page.tsx`.

---

## 7. Alterações Pequenas, Focadas e Rastreadas
- Faça alterações incrementais e atômicas.
- Não refatore arquivos inteiros desnecessariamente se a demanda for a inclusão de um campo ou ajuste de layout.
- Após qualquer modificação em código TypeScript ou React, execute `npm run build` ou o linter para assegurar que não foram introduzidos erros de sintaxe ou de tipagem.
