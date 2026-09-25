# Sistema de Design & Identidade Visual

O design do **Portal de Psicologia UNIVALI** foi desenvolvido seguindo princípios modernos de design institucional e regras rigorosas contra "AI slop" (sem pílulas genéricas, sem gradientes falsos e sem elementos vazios).

---

## 1. Filosofia Visual

- **Fundo Predominantemente Claro:** O portal utiliza `bg-slate-50` e `bg-white` para assegurar máxima legibilidade de textos acadêmicos e comunicados.
- **Azul Institucional UNIVALI:** Cor primária que remete à tradição universitária e seriedade acadêmica (`brand-700` #1d4ed8 / #1e40af).
- **Roxo / Lavanda Psicológico:** Utilizado em acentos culturais, saúde mental e no símbolo Ψ (Psi) (`psi-700` #7e22ce / #9333ea).
- **Identidade da Atlética:** A página da Atlética preserva suas cores oficiais (preto, grafite e dourado/âmbar `amber-400`), mantendo harmonia com o restante do portal sem parecer um site desconectado.

---

## 2. Paleta de Cores (Tailwind)

| Nome da Cor | Token Tailwind | Hex Principal | Aplicação |
| :--- | :--- | :--- | :--- |
| **Azul Brand** | `brand-700` | `#1d4ed8` | Botões primários, links ativos, cabeçalhos institucionais |
| **Azul Brand Deep** | `brand-950` | `#081944` | Textos em alto contraste |
| **Roxo Psi** | `psi-700` | `#7e22ce` | Destaques do Programa Acolher, símbolo Psi |
| **Dourado Atlética**| `amber-400` / `amber-500` | `#f59e0b` | Botões, medalhas e badges da Atlética |
| **Cinza Canvas** | `slate-50` | `#f8fafc` | Fundo principal de todas as páginas |
| **Cinza Borda** | `slate-200` | `#e2e8f0` | Divisores sutis e bordas de cards |

---

## 3. Disciplina Zero-Pill (Zero-Pill & Metadata Discipline)

Uma das maiores marcas de interfaces de baixa qualidade é o excesso de "pílulas" (cápsulas arredondadas coloridas) para exibir datas, nomes e categorias comuns.

### Regra de Formatação de Metadados:
- **Metadados Estáticos (Sem pílulas):** Devem ser exibidos como texto limpo e legível, separado por pontos médios (`·`) ou barras (`/`).
  ```tsx
  // ✅ CORRETO:
  <div className="flex items-center gap-1.5 text-xs text-slate-500">
    <span>Acadêmico</span>
    <span>·</span>
    <span>19 de Outubro, 2026</span>
    <span>·</span>
    <span>Auditório F1</span>
  </div>
  ```
- **Filtros e Controles Interativos (Permitidos):** Botões de abas segmentadas e seletores de status com clique funcional (`<button onClick={...}>`) podem ter fundo ativo e inativo bem definidos.

---

## 4. Top Bar Contract (Cabeçalho de Linha Única)

O cabeçalho do portal obedece rigorosamente ao contrato de 3 zonas em uma única linha horizontal:
1. **Zona 1 (Marca):** Logotipo com o símbolo Psi + "Portal de Psicologia UNIVALI".
2. **Zona 2 (Navegação):** Links de texto diretos com indicador sutil de página ativa:
   - Início
   - Centro Acadêmico
   - Atlética
   - Eventos
   - Informações
   - Projetos
   - Contato
3. **Zona 3 (Ações):** Atalho para a Área Administrativa e botão direto para o Sistema Elis da UNIVALI.

---

## 5. Catálogo de Componentes Reutilizáveis

| Componente | Caminho | Finalidade |
| :--- | :--- | :--- |
| `Container` | `src/components/ui/Container.tsx` | Garante larguras máximas padronizadas (`max-w-6xl` e `max-w-7xl`) |
| `PageHero` | `src/components/ui/PageHero.tsx` | Cabeçalho editorial para todas as páginas com breadcrumbs |
| `SectionTitle` | `src/components/ui/SectionTitle.tsx` | Título de seção com kicker opcional e ação alinhada à direita |
| `Badge` | `src/components/ui/Badge.tsx` | Indicador discreto para status pontuais |
| `EmptyState` | `src/components/ui/EmptyState.tsx` | Feedback visual quando filtros não retornam dados |
| `EventCard` | `src/features/events/components/EventCard.tsx` | Card com calendário lateral e informações de horas complementares |
| `MemberCard` | `src/features/academic-center/components/MemberCard.tsx` | Card de integrantes do CA e da Atlética com canais de contato |
| `ProjectCard` | `src/features/projects/components/ProjectCard.tsx` | Card de iniciativas sociais e projetos discentes |
| `QuickLinkCard` | `src/features/academic-info/components/QuickLinkCard.tsx` | Atalho visual com ícone para portais oficiais |
