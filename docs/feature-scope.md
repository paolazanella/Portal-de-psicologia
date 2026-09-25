# Escopo de Funcionalidades (Feature Scope)

Este documento estabelece o que foi construído nesta primeira fase (MVP) e demarca expressamente os limites do sistema para evitar acúmulo desnecessário de complexidade (*feature creep*).

---

## 1. Funcionalidades Incluídas no MVP

| Página / Módulo | Funcionalidades Entregues |
| :--- | :--- |
| **Home** | Apresentação geral do portal, atalhos rápidos para as 6 seções, feed dos próximos eventos com visual clean, avisos recentes do CA e banner prioritário do Programa Acolher. |
| **Centro Acadêmico** | Explicação institucional sobre a função do CA, quadro da diretoria com cargos e contatos, acompanhamento de propostas de gestão, comunicados oficiais e horários de atendimento na sala. |
| **Atlética** | Identidade temática integrada (preto e dourado), modalidades esportivas, horários e locais de treinos semanais, histórico de campeonatos universitários, vitrine de produtos e canal de inscrições. |
| **Eventos** | Calendário unificado com busca em tempo real por texto, filtros por categoria (CA, Atlética, Acadêmico, Esportivo, Social) e status (Inscrições abertas, confirmado, etc.), além de indicação de horas complementares. |
| **Informações Acadêmicas** | Guia completo de validação de horas complementares, links diretos para o Elis e Moodle, visão da estrutura curricular e perguntas frequentes (FAQ) sanando dúvidas de estudantes. |
| **Projetos** | Card e modal detalhado do **Programa Acolher da UNIVALI** com todas as informações institucionais, além de iniciativas discentes como o Trote Solidário, Cine-Psi e PsicoEmMovimento. |
| **Contato** | Canais de comunicação oficiais (Instagram, e-mail e endereço físico) e formulário direto e sem coleta invasiva de dados. |
| **Área Administrativa** | Simulador interativo da matriz de papéis (RBAC) com visão customizada para Admin, CA, Atlética e Coordenação, demonstrando como as permissões serão aplicadas no Supabase. |

---

## 2. O Que Está Expressamente FORA do Escopo

Para garantir a segurança, a conformidade ética e a viabilidade do projeto, as seguintes funcionalidades **NÃO** devem ser implementadas neste estágio:

1. **Aconselhamento Psicológico ou Chatbot Clínico:**
   - O portal é um espaço puramente informativo. É expressamente vedada a criação de chats terapêuticos ou diagnósticos automatizados.
2. **Prontuários e Dados Clínicos:**
   - Nenhum dado médico, psicológico ou de saúde do acadêmico ou da comunidade deve trafegar ou ser armazenado na plataforma.
3. **Gateway de Pagamento / E-Commerce Completo:**
   - A lojinha da Atlética funciona como vitrine; os pedidos continuam sendo formalizados via canais diretos da diretoria (WhatsApp), sem retenção de cartões ou transações bancárias no portal.
4. **Substituição dos Sistemas da UNIVALI:**
   - O portal não realiza matrículas, lançamentos de faltas ou emissão de históricos. O canal oficial para estes fins permanece sendo o Sistema Elis.
5. **Cadastro Administrativo Aberto ao Público:**
   - Não há formulário de "Criar Conta de Gestor" para visitantes. O acesso administrativo futuro deve ser cadastrado manualmente pela diretoria em exercício.

---

## 3. Critérios para Evoluções Futuras

Toda nova solicitação deve responder afirmativamente a estas três perguntas:
1. *A funcionalidade beneficia a coletividade dos acadêmicos de Psicologia?*
2. *A informação preserva a privacidade e o código de ética do Conselho Federal de Psicologia?*
3. *A funcionalidade pode ser mantida facilmente por estudantes de futuras gestões sem custo de servidor?*
