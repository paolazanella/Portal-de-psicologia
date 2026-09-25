# Matriz de Permissões e Segurança (RBAC)

Este documento especifica a política de controle de acesso baseada em papéis (*Role-Based Access Control - RBAC*) projetada para o **Portal de Psicologia UNIVALI**.

---

## 1. Papéis de Usuário (Roles)

| Papel | Identificador | Responsabilidade Principal |
| :--- | :--- | :--- |
| **Administrador Geral** | `admin` | Acesso total ao portal, aprovação manual de novas contas e auditoria de conteúdos. |
| **Centro Acadêmico** | `centro_academico` | Gestão de comunicados, propostas discentes, membros de gestão e eventos do CA. |
| **Atlética** | `atletica` | Gestão de treinos, modalidades, produtos da lojinha e eventos esportivos. |
| **Coordenação de Curso**| `coordenacao` | Validação de diretrizes de horas complementares e comunicados oficiais do colegiado. |

---

## 2. Matriz de Permissões por Recurso

| Permissão | Admin | Centro Acadêmico | Atlética | Coordenação |
| :--- | :---: | :---: | :---: | :---: |
| `events:create` (Criar eventos) | Sim | Sim (do CA) | Sim (da Atlética) | Sim |
| `events:edit_own` (Editar eventos próprios) | Sim | Sim | Sim | Sim |
| `events:edit_all` (Editar qualquer evento) | Sim | Não | Não | Não |
| `events:delete` (Excluir eventos) | Sim | Não | Não | Não |
| `announcements:create_own` | Sim | Sim | Sim | Sim |
| `announcements:manage_all` | Sim | Não | Não | Não |
| `projects:manage` (Gerenciar projetos) | Sim | Sim | Não | Não |
| `academic_info:manage` (Editar guias) | Sim | Não | Não | Sim |
| `users:approve` (Aprovar novas contas) | Sim | Não | Não | Não |
| `users:manage_roles` (Alterar papéis) | Sim | Não | Não | Não |

---

## 3. Política de Cadastro e Aprovação de Usuários

- **Proibição de Auto-Cadastro Público:** Ao contrário de fóruns ou redes sociais, o portal não possui tela de criação de conta aberta.
- **Fluxo de Onboarding de Novos Gestores:**
  1. O novo integrante de uma gestão (ex: novo diretor de eventos da Atlética) recebe um convite direto ou é cadastrado manualmente pelo `admin`.
  2. A conta é criada na tabela `profiles` com `is_active: false` até a confirmação do vínculo com o curso.
  3. Após aprovação, a coluna `approved_by` armazena o ID do gestor que concedeu o acesso para fins de auditoria.

---

## 4. Diretrizes de Privacidade e LGPD

- **Minimização de Dados:** O formulário de contato solicita apenas nome e e-mail necessários para o retorno.
- **Vedação de Dados Sensíveis:** Nenhuma funcionalidade presente ou futura poderá solicitar histórico médico, relatórios psicológicos ou dados sensíveis nos termos do Art. 5º, II da Lei Geral de Proteção de Dados (LGPD).
