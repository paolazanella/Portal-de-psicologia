# Modelo de Domínio (Domain Model)

Este documento detalha os modelos de dados e tipagens utilizadas em todo o **Portal de Psicologia UNIVALI**, declaradas no arquivo central `src/types/index.ts`.

---

## 1. Entidades Principais

### A. AcademicEvent (Evento)
Representa qualquer atividade, semana científica, partida esportiva ou momento de integração.
- **Campos:**
  - `id`: identificador único;
  - `title`: título do evento;
  - `description`: descrição detalhada;
  - `date`: data no formato ISO (`YYYY-MM-DD`);
  - `time`: faixa de horário;
  - `location`: local no campus ou link remoto;
  - `category`: `Centro Acadêmico` | `Atlética` | `Acadêmico` | `Esportivo` | `Social` | `Outros`;
  - `entityOwner`: `centro_academico` | `atletica` | `univali` | `parceria`;
  - `status`: `confirmado` | `inscricoes_abertas` | `encerrado` | `em_breve`;
  - `workloadHours`: carga horária complementar gerada para o acadêmico;
  - `registrationUrl`: link de inscrição oficial (ex: Elis ou formulário);
  - `additionalInfo`: orientações adicionais.

---

### B. Project (Projeto / Programa)
Ações de extensão, programas de acolhimento e iniciativas sociais.
- **Campos:**
  - `id`: identificador único;
  - `title`: nome do projeto;
  - `description`: apresentação da proposta;
  - `category`: `Acolhimento & Saúde Mental` | `Extensão Universitária` | `Iniciativa Estudantil` | `Ação Social` | `Esporte & Integração`;
  - `entityOwner`: entidade mantenedora;
  - `isInstitutional`: booleano indicando projeto oficial UNIVALI (ex: **Programa Acolher**);
  - `contactEmail` / `contactPhone`: canais diretos;
  - `officialUrl`: link institucional;
  - `details`: objeto contendo local, horários, público-alvo e lista de características.

---

### C. BoardMember (Membro de Gestão)
Integrantes eleitos do Centro Acadêmico ou diretores da Atlética.
- **Campos:**
  - `id`: identificador único;
  - `name`: nome completo;
  - `role`: cargo na diretoria (ex: Presidente, Diretora de Esportes);
  - `semester`: período atual do acadêmico no curso;
  - `bio`: resumo de atuação;
  - `email` / `instagram`: canais públicos de contato.

---

### D. Announcement (Comunicado)
Notas e informativos emitidos pela gestão discente.
- **Campos:**
  - `id`: identificador único;
  - `title`: título do comunicado;
  - `summary`: resumo em uma linha;
  - `content`: texto completo da nota;
  - `publishDate`: data de publicação;
  - `author`: assinatura do autor/diretoria;
  - `isImportant`: destaque prioritário.

---

### E. SportModality (Modalidade Esportiva)
Modalidades organizadas pela Atlética de Psicologia.
- **Campos:**
  - `name`: nome da modalidade (Futsal, Vôlei, E-Sports, etc.);
  - `category`: `coletivo` | `individual` | `e-sports`;
  - `schedule`: horários semanais;
  - `location`: ginásio ou quadra;
  - `coachOrLeader`: capitão ou técnico responsável;
  - `status`: `treinos_abertos` | `em_competicao` | `recesso`.

---

### F. AthleticProduct (Produto da Lojinha)
Itens promocionais e de identificação visual da Psicologia.
- **Campos:**
  - `name`: nome do manto ou acessório;
  - `description`: tecido, modelo e detalhes;
  - `price`: valor em reais (formato numérico);
  - `status`: `disponivel` | `sob_encomenda` | `esgotado`;
  - `sizes`: opções de tamanho disponíveis.
