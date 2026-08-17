# - Tela de produtividade - Kanban de Tarefas: 

## Funcionará como um sistema de CAPTURA

### Página 1: Processo de Onboarding

#### Esta página (1) será apenas para novos usuários CADASTRADOS na plataforma.

- A página de onboarding será bem intuitiva, com um passo a passo para o usuário entender como utilizar o app.

- Cada passo será bem detalhado, com título no topo, vídeo abaixo do título e uma breve descrição.

- Em cada passo, o usuário terá a opção de clicar em "Próximo" para ir para o próximo passo (OBS: aqui deve ter uma função de cronometro/função invisivel, se o vídeo tem 5 minutos, o cronometro deve começar a contar 5 minutos a partir do momento que o vídeo começar a reproduzir e o usuário só poderá clicar no botão próximo após concluir no mínimo 4 minutos de vídeo, porém cada passo/etapa terá um video de 4 à 5 minutos, então a função de cronometro deve ser personalizada para cada duração do vídeo).

- No final do onboarding, o usuário terá acesso ao app.

---

### Página 2: Tela de Abertura (Daily Start)

#### Não será exatamente uma página, mas sim o pop-up que deve-se abrir a cada 24horas contando a partir do cadastro do usuário na plataforma.

- A primeira coisa que o usuário vê ao abrir o app.

- Um pop-up/modal com as informações (exemplo):

┌─────────────────────────────────────────────────────────────┐
│                                                             │
│     ☀️ Bom dia, [nome do usuário]!                                       │
│                                                             │
│  ┌───────────────────────────────────────────────────────┐ │
│  │  🤖 Builder Assistant                                  │ │
│  │                                                        │ │
│  │  "Ontem você foi incrível! 8 tarefas completas e      │ │
│  │   2h45min de foco — acima da sua média!               │ │
│  │                                                        │ │
│  │   Hoje tem 5 tarefas pendentes, 2 de alta prioridade. │ │
│  │   Bora manter o ritmo? 💪"                            │ │
│  │                                                       │ │
│  │  [Falar com Assistant]                                │ │
│  └───────────────────────────────────────────────────────┘ │
│                                                            │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐         │
│  │ 🔥 STREAK   │  │ ⚡ ENERGI A  │   │ ⭐ LEVEL   │         │
│  │    12 dias  │  │    100%     │  │   7         │         │
│  │             │  │             │  │ ━━━━━░░ 68% │         │
│  └─────────────┘  └─────────────┘  └─────────────┘         │
│                                                            │
│  📋 DAILY QUESTS                              2/5 ✓        │
│  ┌───────────────────────────────────────────────────────┐ │
│  │ ✓ Login diário                              +10 XP    │ │
│  │ ✓ Check hábito matinal                      +15 XP    │ │
│  │ ○ Complete 3 tarefas                        +50 XP    │ │
│  │ ○ 2 sessões de foco de 25min                +40 XP    │ │
│  │ ○ Registre suas refeições                   +30 XP    │ │
│  └───────────────────────────────────────────────────────┘ │
│                                                             │
│     [ 📋 TAREFAS ]        [ ⏱️ INICIAR FOCO ]              │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│   [🏠]      [📋]      [⏱️]      [✓]      [🤖]             │
│   Home     Tarefas   Timer    Hábitos    AI               │
└─────────────────────────────────────────────────────────────┘

### Página 3: Dashboard Principal

#### Será a página PRINCIPAL da plataforma e será como este exemplo:

┌─────────────────────────────────────────────────────────────┐
│  ☰  FluvOS                    🔔  👤 Lv.7    │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ ⭐ LEVEL 7 — CONSTRUTOR                              │   │
│  │ ━━━━━━━━━━━━━━━━━━━━━━━━━━░░░░░░░░░░ 68%            │   │
│  │ 2.150 / 3.200 XP para Level 8                       │   │
│  └─────────────────────────────────────────────────────┘   │
│               Cards:                                              │
│  ┌───────────┐  ┌───────────┐  ┌───────────┐  ┌─────────┐ │
│  │ 📋 HOJE   │  │ ⏱️ FOCO   │  │ ✓ HÁBITOS │  │ 🔥 STREAK│ │
│  │           │  │           │  │           │  │          │ │
│  │  5 tasks  │  │  1h 20m   │  │   4/6     │  │  12 dias │ │
│  │  2 urgent │  │  ↑ 15%    │  │  hoje     │  │          │ │
│  └───────────┘  └───────────┘  └───────────┘  └──────────┘ │
│                                                             │
│  📊 PROGRESSO SEMANAL                                       │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ Tarefas: ████████████████░░░░ 18/25 (72%)           │   │
│  │ Foco:    █████████████░░░░░░░ 8h/12h (67%)          │   │
│  │ Hábitos: ██████████████████░░ 85% consistência      │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  🎯 DAILY QUESTS                              3/5 ✓        │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ ✓ Login diário                              +10 XP   │   │
│  │ ✓ Check hábitos matinais                    +15 XP   │   │
│  │ ✓ 1 tarefa de alta prioridade               +50 XP   │   │
│  │ ○ 2 sessões de foco                                  │   │
│  │ ○ Registrar financeiro                              │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  📅 AGENDA DE HOJE (Google Calendar)                        │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ 14:00 — Reunião de alinhamento                      │   │
│  │ 16:30 — Call com cliente                            │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  🏆 CONQUISTAS RECENTES                                     │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ 🥇 "Semana Perfeita" — 7 dias de streak!            │   │
│  │ 🎯 "Focado" — 25 horas de timer                      │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│   [🏠]      [📋]      [⏱️]      [✓]      [🤖]             │
│   Home     Tarefas   Timer    Hábitos    AI               │
└─────────────────────────────────────────────────────────────┘

### Página 4: Tela Kanban de Tarefas:

#### Será uma tela que funcionará como um sistema de CAPTURA (página de alta produtividade):

##### Aqui está um exemplo de como eu quero esta página e abaixo do exemplo deixarei algumas considerações:

┌─────────────────────────────────────────────────────────────┐
│  ← Tarefas                        🔍  ⚙️  + Nova - Pendente       │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  A FAZER (5)     EM PROGRESSO (2)    CONCLUÍDO (12) ✓      │
│  ┌───────────┐   ┌───────────┐       ┌───────────┐         │
│  │ 🔴 Alta    │   │ 🟡 Média  │       │ ✓ Tarefa  │         │
│  │           │   │           │       │   antiga  │         │
│  │ Finalizar │   │ Revisar   │       │   +25 XP  │         │
│  │ relatório │   │ documento │       │           │         │
│  │           │   │           │       └───────────┘         │
│  │ 📅 Hoje   │   │ 📅 Amanhã │       ┌───────────┐         │
│  └───────────┘   └───────────┘       │ ✓ Outra   │         │
│  ┌───────────┐   ┌───────────┐       │   tarefa  │         │
│  │ 🔴 Alta    │   │ 🟢 Baixa  │       │   +10 XP  │         │
│  │           │   │           │       │           │         │
│  │ Preparar  │   │ Organizar │       └───────────┘         │
│  │ apresent. │   │ arquivos  │                             │
│  │           │   │           │                             │
│  │ 📅 Hoje   │   │ 📅 Sexta  │                             │
│  └───────────┘   └───────────┘                             │
│  ┌───────────┐                                             │
│  │ 🟡 Média  │   ← Arraste para                            │
│  │           │     mover cards                             │
│  │ Responder │                                             │
│  │ emails    │                                             │
│  │           │                                             │
│  │ 📅 Amanhã │                                             │
│  └───────────┘                                             │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│   [🏠]      [📋]      [⏱️]      [✓]      [🤖]             │
└─────────────────────────────────────────────────────────────┘

##### Funções:

- Ao usuário clicar no botão "+ Nova Tarefa" abrirá um pop-up/modal com um formulário para o usuário preencher com as informações da nova tarefa. Titulo da tarefa, prioridade, data de vencimento, categoria, qual estágio ficará a tarefa, se é "A FAZER", "EM PROGRESSO", etc...

- O usuário poderá adicionar quantas tarefas quiser.
- As tarefas serão exibidas na coluna correspondente à sua prioridade e data de vencimento.
- O usuário poderá arrastar as tarefas para mudar sua prioridade ou data de vencimento.
- O usuário poderá marcar as tarefas como concluídas clicando no botão "Concluir" ao lado de cada tarefa e vai automaticamente para o estágio "CONCLUÍDO".
- O usuário poderá excluir as tarefas clicando no botão "Excluir" ao lado de cada tarefa.
- O usuário pode editar as tarefas clicando no botão "Editar" ao lado de cada tarefa.
- O usuário pode criar novos estágios de tarefas, como "EM PROGRESSO", "CONCLUÍDO", etc...

- Ao usuário clicar no botão "Pendente" abrirá um pop-up/modal com todas as tarefas pendentes do usuário e ele poderá adicionar novas tarefas pendentes ao clicar no botão "Adicionar" e depois disso ele poderá atribuir a cada tarefa uma prioridade e uma data de vencimento, estágio da tarefa, etc... clicando no botão de engranagem/configuração ao lado de cada tarefa dentro do modal.

### Página 5: Timer de Foco (Modo Imersivo)

#### Será a página de foco e produtividade do usuário, como no exemplo abaixo:

┌─────────────────────────────────────────────────────────────┐
│                                                             │
│                                                             │
│                                                             │
│                      ┌─────────────┐                        │
│                      │             │                        │
│                      │             │                        │
│                      │   18:42     │                        │
│                      │             │                        │
│                      │  ───────    │                        │
│                      │             │                        │
│                      └─────────────┘                        │
│                                                             │
│                     SESSÃO DE FOCO                          │
│                     Pomodoro 25min                          │
│                                                             │
│                     📋 Finalizar relatório                  │
│                                                             │
│                     ● ● ● ○  Sessão 3 de 4                  │
│                                                             │
│                                                             │
│                                                             │
│               [ ⏸️ Pausar ]    [ 🚫 Encerrar ]              │
│                                                             │
│                                                             │
│                                                             │
│                                                             │
│  ⚡ Ao completar: +30 XP                                    │
│                                                             │
└─────────────────────────────────────────────────────────────┘

##### Observações e funções desta página:

- Por sessões, o usuário define a tarefa que quer iniciar, puxa diretamente da pagina Kanban de Tarefas...
- Insere o modo de FOCO (pomodoro por exemplo)
- Ao finalizar o tempo do modo FOCO aparece um pop-up/modal como uma notificaçao avisando ao usuário que foi finalizado o MODO FOCO e sugere para que ele conclua a tarefa e automaticamente finaliza a tarefa e vai para CONCLUÍDO para a pagina 4 - Kanban de Tarefas.

### Página 6: Página de cursos e aulas

- Será uma página de cursos e aulas, com um catálogo de cursos e aulas como NETFLIX por exemplo, onde terá na página todos os cursos disponiveis do FluvOS (Júnior) e ao clicar em cada curso, o usuário verá todas as aulas do determinado curso e ao clicar em cada aula, o usuário poderá assistir a aula, concluir o progresso dá aula, deixar um comentário, deixar um like na aula, etc...

- Na lateral esquerda de cada página de cada aula terá uma barra lateral que o usuário pode expandir e ocultar e todas as aulas listadas daquele determinado curso.

### Página 7: Página de perfil do usuário

#### Será a página de perfil do usuário, que na parte superior da plataforma terá um topnav que o usuário poderá clicar no icone de perfil para ir para essa página.

- Será uma página com o perfil do usuário, com as informações do usuário, como nome, email, foto de perfil, etc...
- O usuário poderá editar as informações do seu perfil, como nome, email, foto de perfil, senha, etc...

### Página 8: Tela de Hábitos

#### Será uma página de hábitos que o usuário poderá ter, será uma página igual a página KANBAN de TAREFAS (página 4), porém será uma experiência diferente...

- O usuário poderá alternar de telas nesta página:

- Tela 1: Plano de desenvolvimento INDIVIDUAL (Ex: aprender ingles, entrar no mestrado, entrar no curso, etc…). Está tela tanto servirá para a vida profissional e pessoal do usuário, como por exemplo, se ele quer aprender um novo idioma, se ele quer entrar em um curso, se ele quer entrar em um mestrado, etc...
- Tela 2: Plano de desenvolvimento METAS prioritárias do ANO (Ex: fazer 100 push-ups, fazer 100 sit-ups, fazer 100 corridas, etc...). Nesta tela, o usuário poderá definir metas prioritárias do ano, como por exemplo, fazer 100 push-ups, fazer 100 sit-ups, fazer 100 corridas, etc...

### Página 9: Tela da AGENDA

#### Será uma página de agendamento, onde o usuário poderá agendar tarefas, eventos, compromissos, etc...

- O usuário poderá agendar tarefas, eventos, compromissos, etc... na página de agendamento.
- O usuário poderá visualizar as tarefas, eventos, compromissos, etc... na página de agendamento.
- O usuário poderá editar as tarefas, eventos, compromissos, etc... na página de agendamento.
- O usuário poderá excluir as tarefas, eventos, compromissos, etc... na página de agendamento.

Será uma página com um calendário onde o usuário DEVERÁ integrar com GOOGLE CALENDAR ou OUTLOOK CALENDAR

### Páginas extras:

1. Página de CADASTRO;
2. Página de recuperar senha;
3. Página de confirmação de email;
4. Página de ERRO 404 (Página não encontrada)

### Modais Extras:

1. Modal de confirmação de exclusão;
2. Modal de confirmação de edição;
3. Modal de confirmação de criação;
4. Modal de confirmação de login;
5. Modal de confirmação de registro;
6. Modal de confirmação de recuperação de senha;
7. Modal de confirmação de confirmação de email;

