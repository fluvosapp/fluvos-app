# Documento de Escopo: Web App SaaS "FluvOS"

**Objetivo Principal**: Criar o APP CENTRAL de rotina diária para alunos da comunidade Builders, aumentando performance e foco através de gamificação profunda e IA personalizada.

**Timeline**: Em torno de 75 dias (16 de Dezembro 2025 → 25 de Fevereiro 2026)

---

## Visão do Produto

O FluvOS não é apenas um app de produtividade com gamificação — **é um jogo de desenvolvimento pessoal** onde cada ação do usuário contribui para sua evolução. A proposta é que o aluno abra o app toda manhã como parte essencial da sua rotina, interaja ao longo do dia, e tenha no **Builder Assistant** um copiloto de IA que conhece profundamente seu contexto, objetivos e padrões.

**Diferenciação competitiva**:
- Apps como TickTick e Todoist adicionam gamificação como feature secundária
- Habitica gamifica mas com estética infantil e sem IA
- **Builders gamifica tudo E adiciona IA contextual** — experiência única no mercado

---

## Arquitetura de Gamificação como Core

A gamificação não é uma camada sobre o app — **é o app**. Toda interação gera feedback, progresso e recompensa.

### Sistema de Progressão Central

**Builder Level (Nível do Builder)**

O usuário começa como "Builder Aprendiz" e evolui através de níveis que representam sua jornada:

| Nível | Título | XP Necessário | Desbloqueios |
|-------|--------|---------------|--------------|
| 1-5 | Aprendiz | 0-2.500 | Tutorial, features básicas |
| 6-15 | Construtor | 2.500-15.000 | Temas, sons customizados |
| 16-30 | Arquiteto | 15.000-50.000 | Badges especiais, estatísticas avançadas |
| 31-50 | Mestre | 50.000-150.000 | Acesso beta features, mentoria |
| 51+ | Lendário | 150.000+ | Status permanente, reconhecimento comunidade |

**Fontes de XP (TUDO dá XP)**:

| Ação | XP Base | Observação |
|------|---------|------------|
| Completar tarefa | 10-50 XP | Baseado em prioridade |
| Sessão de foco completa | 25-40 XP | Baseado em duração |
| Hábito do dia | 15 XP | + multiplicador de streak |
| Meta concluída | 100-500 XP | Baseado em complexidade |
| Interação com Builder Assistant | 5 XP | Incentiva uso da IA |
| Login diário | 10 XP | + streak bônus |
| Assistir aula completa | 30 XP | Por aula |
| Registrar financeiro | 5 XP | Por lançamento |
| Registrar treino/dieta | 10 XP | Por registro |

### Sistema de Energia do Builder

Inspirado em jogos móveis, mas com propósito positivo:

**"Energia do Builder"** — Barra que representa seu momentum diário:
- Começa em 100% toda manhã
- **Aumenta** ao completar ações positivas
- **Não diminui por inação** (evita punição, foca em recompensa)
- Bônus de multiplicador de XP quando energia > 80%
- Visual: barra colorida no topo do app, sempre visível

### Streak System Resiliente

- **Streak Shields**: 2 proteções por semana ganhas automaticamente
- **Múltiplos Streaks**: Categorias separadas (Foco, Hábitos, Login, Finanças)
- **Histórico preservado**: Maior streak de todos os tempos sempre visível
- **Linguagem positiva**: "47 de 50 dias — progresso incrível!" vs "Você quebrou seu streak"

### Conquistas e Badges

**5 Categorias de Badges**:

**1. Jornada** (Milestones de progressão)
- "Primeira Vitória" — 1ª tarefa concluída
- "Centurião" — 100 tarefas
- "Maratonista" — 1.000 tarefas
- "Imparável" — 5.000 tarefas

**2. Maestria** (Excelência em áreas)
- "Mestre do Foco" — 50 horas de timer
- "Arquiteto Financeiro" — 3 meses de controle consistente
- "Leitor Voraz" — 10 horas de leitura/foco
- "Estudante Dedicado" — 100% de um módulo completo

**3. Consistência** (Streaks e regularidade)
- "Semana Perfeita" — 7 dias consecutivos
- "Mês de Ferro" — 30 dias consecutivos
- "Trimestre de Ouro" — 90 dias
- "Lendário" — 365 dias

**4. Secretos** (Descoberta e surprise/delight)
- "Coruja Noturna" — Tarefa concluída às 3am
- "Madrugador" — 5 tarefas antes das 7am
- "Speedrunner" — 10 tarefas em 1 hora
- "Zen Master" — 4 horas de foco em um dia

**5. Sociais** (para implementação futura)
- "Inspirador" — Top 10% da turma
- "Mentor" — Ajudou 5 colegas
- "Líder" — Top 3 por 4 semanas

### Daily Quests (Missões Diárias)

Todo dia o app gera **3-5 missões personalizadas** baseadas no contexto do usuário:

**Exemplos de Daily Quests**:
- "Complete 3 tarefas do projeto X" — 50 XP
- "Faça 2 sessões de foco de 25min" — 40 XP
- "Registre suas refeições de hoje" — 30 XP
- "Assista 1 aula do módulo Y" — 35 XP
- "Mantenha seu streak de hábitos" — 25 XP

**Bônus de Conclusão Total**: Completar todas as daily quests = 100 XP extra + badge diário especial

### Weekly Challenges (Desafios Semanais)

Renovam toda segunda-feira:

- "Acumule 5 horas de foco" — Recompensa: tema exclusivo
- "Mantenha streak de hábitos por 7 dias" — Recompensa: badge semanal
- "Complete todas as daily quests por 5 dias" — Recompensa: 500 XP
- "Zero tarefas atrasadas por 7 dias" — Recompensa: título especial

---

## Builder Assistant — Agente de IA Integrado

O **Builder Assistant** é o diferencial definitivo do app. Um agente de IA que conhece TUDO sobre o aluno e funciona como um coach pessoal disponível 24/7.

### Contexto Total do Assistant

O Builder Assistant tem acesso a TODOS os dados do usuário:

- ✅ Todas as tarefas (pendentes, concluídas, atrasadas, padrões)
- ✅ Histórico completo de hábitos e streaks
- ✅ Sessões de foco (duração, horários, produtividade)
- ✅ Metas e progresso atual
- ✅ Dados financeiros (receitas, despesas, categorias)
- ✅ Progresso no LMS (aulas assistidas, módulos completos)
- ✅ Rotinas de treino e dieta
- ✅ Padrões de comportamento (horários mais produtivos, dias mais ativos)
- ✅ Histórico de XP e evolução de nível
- ✅ Calendário e compromissos

### Modos de Interação

**1. Chat por Texto**
- Interface de chat dedicada dentro do app
- Histórico de conversas preservado
- Respostas contextuais baseadas nos dados

**2. Comando de Voz**
- Botão de microfone sempre acessível
- Transcrição em tempo real
- Resposta por texto (MVP) ou voz (futuro)

**3. Proativo (Notificações Inteligentes)**
- Morning briefing ao abrir o app
- Alertas de streak prestes a quebrar
- Sugestões baseadas em padrões detectados
- Celebração de conquistas

### Casos de Uso Detalhados

**Morning Briefing (Automático)**
```
🤖 "Bom dia, João! 

Ontem você foi incrível: 8 tarefas completas e 2h45min de foco — 
acima da sua média semanal!

Hoje você tem:
• 5 tarefas pendentes (2 de alta prioridade)
• Reunião às 14h (Google Calendar)
• Streak de hábitos: 12 dias 🔥

Quer que eu sugira a ordem ideal de execução das tarefas?"
```

**Análise de Performance**
```
👤 "Como foi meu foco essa semana?"

🤖 "Essa semana você focou 12h35min — 23% acima da semana passada! 🎉

📊 Breakdown:
• Melhor dia: Quarta (3h20min)
• Pior dia: Segunda (45min)
• Horário mais produtivo: 9h-11h

💡 Insight: Você rende mais pela manhã. Quer que eu sugira 
bloquear 9h-11h no seu calendário para deep work?"
```

**Coaching de Hábitos**
```
👤 "Tô com dificuldade de manter o hábito de leitura"

🤖 "Entendo. Vi que você leu apenas 2 dos últimos 7 dias.

Analisando seus padrões, você costuma ter tempo livre às 21h, 
logo após o jantar. Interessante que você já mantém o hábito 
'Rotina noturna' há 15 dias nesse horário.

💡 Sugestão: Que tal vincular 15min de leitura à sua rotina 
noturna? Criar um 'habit stack' aumenta em 40% a chance de 
manter o novo hábito.

Posso criar esse link pra você?"
```

**Planejamento de Projeto**
```
👤 "Preciso entregar o projeto X até sexta, me ajuda a planejar"

🤖 "Vamos lá! O projeto X tem 8 subtarefas pendentes.

Considerando:
• Sua média de 2h de foco por dia
• Hoje é terça (3 dias úteis)
• Você tem reunião quarta às 14h

📋 Plano sugerido:

TERÇA (hoje):
• Tarefas A e B (estimativa: 2h)

QUARTA:
• Tarefa C pela manhã (antes da reunião)
• Tarefas D e E à tarde

QUINTA:
• Tarefas F e G

SEXTA:
• Tarefa H + revisão final

Quer que eu crie esse plano no seu Kanban automaticamente?"
```

**Motivacional Proativo**
```
🤖 [Notificação às 16h]
"Você está a 2 tarefas de bater seu recorde semanal! 💪
Que tal uma sessão de foco de 25min pra fechar com chave de ouro?"

[Iniciar Foco] [Depois]
```

**Análise Financeira**
```
👤 "Como estão minhas finanças esse mês?"

🤖 "Até agora em novembro:

💰 Receitas: R$ 8.500
💸 Despesas: R$ 6.230
📊 Saldo: R$ 2.270 positivo

Comparado ao mês passado, você gastou 15% menos em 
'Alimentação fora' — ótimo progresso no seu objetivo 
de economizar!

⚠️ Atenção: 'Assinaturas' aumentou 30%. Quer revisar?"
```

### Stack Técnica para IA

**LLM Principal**: Claude API (Anthropic)
- Melhor qualidade de raciocínio
- Contexto longo (200K tokens)
- System prompts ricos com dados do usuário

**Voice-to-Text**: 
- Web Speech API (grátis, nativo do browser) — MVP
- Whisper API (OpenAI) — upgrade futuro para maior precisão

**Text-to-Speech** (resposta por voz):
- Web Speech Synthesis API (grátis) — MVP
- ElevenLabs — upgrade futuro para voz mais natural

**Arquitetura de Contexto**:
```
┌─────────────────────────────────────────────────────────────┐
│                      USER INPUT                              │
│                    (Texto ou Voz)                            │
└─────────────────────┬───────────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────────┐
│                   CONTEXT BUILDER                            │
│  Coleta dados relevantes do Supabase:                       │
│  • Últimas 50 tarefas + status                              │
│  • Hábitos ativos + streaks                                 │
│  • Sessões de foco (últimos 30 dias)                        │
│  • Metas ativas + progresso                                 │
│  • Financeiro (mês atual + anterior)                        │
│  • Padrões detectados (horários, dias)                      │
└─────────────────────┬───────────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────────┐
│                    CLAUDE API                                │
│  System Prompt:                                             │
│  "Você é o Builder Assistant, coach pessoal do {nome}.     │
│   Contexto atual: {dados_estruturados}                      │
│   Seja motivador, prático e baseie-se nos dados reais."    │
│                                                             │
│  User Message: {input_do_usuario}                          │
└─────────────────────┬───────────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────────┐
│                    RESPONSE                                  │
│              (Texto e/ou Voz)                                │
└─────────────────────────────────────────────────────────────┘
```

**Estimativa de Custo de IA**:
- Claude Sonnet: ~$3/1M tokens input, ~$15/1M tokens output
- Média por interação: ~2K tokens input, ~500 tokens output
- Custo por interação: ~$0.01
- Estimativa por usuário ativo: $0.50-2.00/mês (50-200 interações)

---

## Funcionalidades do MVP — Detalhamento

### FASE 1: Fundação (Dias 1-20)

#### Infraestrutura Base
- [ ] Setup projeto Next.js 15 com App Router
- [ ] Configuração Supabase (DB + Auth + Realtime)
- [ ] Schema completo do banco de dados
- [ ] CI/CD pipeline com Vercel
- [ ] Estrutura de pastas e arquitetura

#### Sistema de Gamificação Core
- [ ] Tabela de XP e sistema de cálculo
- [ ] Sistema de níveis com progressão
- [ ] Engine de badges/conquistas
- [ ] Daily login tracking + streak
- [ ] Componente de notificação de XP ganho
- [ ] Animações de level up

#### Autenticação + Onboarding
- [ ] Login com email/senha
- [ ] Login com Google OAuth
- [ ] Fluxo de onboarding gamificado (3-4 telas)
- [ ] Criação de perfil + avatar/foto
- [ ] Tutorial interativo que dá XP
- [ ] Primeira Daily Quest guiada

### FASE 2: Features Principais (Dias 21-50)

#### Kanban de Atividades
- [ ] Board com 4 colunas padrão (A Fazer, Em Progresso, Revisão, Concluído)
- [ ] Drag-and-drop responsivo (@hello-pangea/dnd)
- [ ] Cards com: título, descrição, prioridade, due date, tags
- [ ] Criação rápida de tarefas
- [ ] Edição inline
- [ ] XP ao mover para "Concluído"
- [ ] Animação satisfatória de conclusão
- [ ] Filtros por prioridade/tag/data
- [ ] Vinculação com projetos/metas

#### Timer de Foco
- [ ] Pomodoro clássico (25/5)
- [ ] Deep Work (45/10, 90/20)
- [ ] Custom (configurável)
- [ ] Flowtime (livre com sugestão)
- [ ] Vinculação com tarefa específica
- [ ] Tela imersiva durante sessão (modo foco)
- [ ] Contador visual circular
- [ ] Sons/notificações configuráveis
- [ ] Pausa e retomada
- [ ] XP ao completar sessão
- [ ] Histórico de sessões
- [ ] Estatísticas (diário/semanal/mensal)

#### Sistema de Hábitos
- [ ] Criação de hábitos customizados
- [ ] Frequência configurável (diário, X dias/semana)
- [ ] Categorias (Saúde, Produtividade, Pessoal, Estudo)
- [ ] Check diário com animação
- [ ] Streak tracking com shields
- [ ] Heatmap de consistência (estilo GitHub)
- [ ] Lembretes configuráveis
- [ ] XP por check + multiplicador de streak

#### Integração Google Calendar
- [ ] OAuth 2.0 completo
- [ ] Visualização de eventos do dia no dashboard
- [ ] Sincronização bidirecional
- [ ] Criação de eventos a partir de tarefas com due date

#### Daily Quests System
- [ ] Engine de geração de quests baseada em contexto
- [ ] 3-5 quests diárias personalizadas
- [ ] UI de lista de quests no dashboard
- [ ] Tracking de progresso em tempo real
- [ ] Bônus de conclusão total
- [ ] Reset automático à meia-noite

### FASE 3: IA + LMS + Expansão (Dias 51-70)

#### Builder Assistant (MVP)
- [ ] Interface de chat dedicada
- [ ] Integração com Claude API
- [ ] Context builder (coleta dados do usuário)
- [ ] System prompt otimizado
- [ ] Morning briefing automático
- [ ] Análise de performance (foco, tarefas, hábitos)
- [ ] Sugestões contextuais
- [ ] Input por voz (Web Speech API)
- [ ] Histórico de conversas
- [ ] XP por interação

#### Mini-LMS (Módulos e Aulas)
- [ ] Estrutura: Módulos → Aulas
- [ ] Player de vídeo (react-player)
- [ ] Suporte: Vimeo, YouTube, Panda Video
- [ ] Progress tracking por aula
- [ ] Marcação automática de conclusão
- [ ] XP ao completar aulas
- [ ] Listagem de módulos/aulas
- [ ] Progresso visual por módulo

#### Metas e Objetivos
- [ ] Criação de metas com título, descrição, deadline
- [ ] Vinculação com tarefas (meta → tarefas relacionadas)
- [ ] Vinculação com hábitos
- [ ] Progress bar visual automática
- [ ] XP ao atingir meta
- [ ] Celebração de conclusão

#### Vida Saudável
- [ ] Área de Treinos
  - [ ] Criação de rotinas de treino customizadas
  - [ ] Registro de treinos realizados
  - [ ] Histórico
- [ ] Área de Dieta/Alimentação
  - [ ] Registro livre de refeições
  - [ ] Categorização
  - [ ] Histórico
- [ ] Integração com sistema de hábitos
- [ ] XP por registros

### FASE 4: Financeiro + Admin + Polish (Dias 71-75)

#### Controle Financeiro
- [ ] Lançamento manual de receitas
- [ ] Lançamento manual de despesas
- [ ] Categorização customizável
- [ ] Dashboard com:
  - [ ] Saldo atual
  - [ ] Gráfico de receitas vs despesas
  - [ ] Breakdown por categoria
  - [ ] Comparativo com mês anterior
- [ ] XP por consistência de registro

#### Painel Admin
- [ ] Dashboard de métricas
  - [ ] Total de usuários
  - [ ] Usuários ativos (DAU, WAU, MAU)
  - [ ] Novos signups
  - [ ] Retention básica
- [ ] Gestão de usuários
  - [ ] Lista com busca
  - [ ] Detalhes do usuário
  - [ ] Enviar magic link
- [ ] Gestão do LMS
  - [ ] CRUD de módulos
  - [ ] CRUD de aulas
  - [ ] Reordenação

#### QA e Lançamento
- [ ] Testes end-to-end das features principais
- [ ] Performance optimization
- [ ] Bug fixes críticos
- [ ] Beta fechado (50-100 alunos)
- [ ] Coleta de feedback
- [ ] Ajustes finais
- [ ] Soft launch

---

## Cronograma Visual (75 dias)

```
DEZEMBRO 2025
══════════════════════════════════════════════════════════════════

Semana 1 │ 10-16 DEZ │ FUNDAÇÃO
─────────┼───────────┼─────────────────────────────────────────────
         │           │ • Setup Next.js + Supabase + Vercel
         │           │ • Schema do banco de dados
         │           │ • Autenticação completa
         │           │ • Estrutura de pastas

Semana 2 │ 17-23 DEZ │ GAMIFICAÇÃO CORE
─────────┼───────────┼─────────────────────────────────────────────
         │           │ • Sistema de XP e níveis
         │           │ • Engine de badges
         │           │ • Onboarding gamificado
         │           │ • Daily login streak

Semana 3 │ 24-31 DEZ │ KANBAN
─────────┼───────────┼─────────────────────────────────────────────
         │           │ • Board completo com drag-and-drop
         │           │ • CRUD de tarefas
         │           │ • Gamificação de conclusão
         │           │ ⚠️ Ritmo reduzido (feriados)


JANEIRO 2026
══════════════════════════════════════════════════════════════════

Semana 4 │ 01-06 JAN │ TIMER DE FOCO
─────────┼───────────┼─────────────────────────────────────────────
         │           │ • Timer com múltiplos modos
         │           │ • Tela imersiva
         │           │ • Tracking de sessões
         │           │ • Estatísticas

Semana 5 │ 07-13 JAN │ HÁBITOS
─────────┼───────────┼─────────────────────────────────────────────
         │           │ • Sistema completo de hábitos
         │           │ • Streaks com shields
         │           │ • Heatmap de consistência
         │           │ • Categorização

Semana 6 │ 14-20 JAN │ CALENDAR + QUESTS
─────────┼───────────┼─────────────────────────────────────────────
         │           │ • Integração Google Calendar
         │           │ • Sistema de Daily Quests
         │           │ • Weekly Challenges
         │           │ • Dashboard principal

Semana 7 │ 21-27 JAN │ BUILDER ASSISTANT (Parte 1)
─────────┼───────────┼─────────────────────────────────────────────
         │           │ • Interface de chat
         │           │ • Integração Claude API
         │           │ • Context builder
         │           │ • Morning briefing

Semana 8 │ 28-31 JAN │ BUILDER ASSISTANT (Parte 2)
─────────┼───────────┼─────────────────────────────────────────────
         │           │ • Análises de performance
         │           │ • Input por voz
         │           │ • Sugestões contextuais


FEVEREIRO 2026
══════════════════════════════════════════════════════════════════

Semana 9 │ 01-07 FEV │ LMS + METAS + VIDA SAUDÁVEL
─────────┼───────────┼─────────────────────────────────────────────
         │           │ • Mini-LMS (módulos/aulas)
         │           │ • Sistema de metas
         │           │ • Área de treinos
         │           │ • Área de dieta

Semana 10│ 08-12 FEV │ FINANCEIRO + ADMIN
─────────┼───────────┼─────────────────────────────────────────────
         │           │ • Controle financeiro manual
         │           │ • Painel admin básico
         │           │ • Gestão de LMS no admin

Semana 11│ 13-15 FEV │ POLISH + LAUNCH
─────────┼───────────┼─────────────────────────────────────────────
         │           │ • QA e bug fixes
         │           │ • Performance optimization
         │           │ • Beta fechado
         │           │ 🚀 LANÇAMENTO: 15 de Fevereiro
```

---

## Fluxo de Telas

### 1. Tela de Abertura (Daily Start)

A primeira coisa que o usuário vê ao abrir o app pela manhã:

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│     ☀️ Bom dia, João!                                       │
│                                                             │
│  ┌───────────────────────────────────────────────────────┐ │
│  │  🤖 Builder Assistant                                  │ │
│  │                                                        │ │
│  │  "Ontem você foi incrível! 8 tarefas completas e      │ │
│  │   2h45min de foco — acima da sua média!               │ │
│  │                                                        │ │
│  │   Hoje tem 5 tarefas pendentes, 2 de alta prioridade. │ │
│  │   Bora manter o ritmo? 💪"                            │ │
│  │                                                        │ │
│  │  [Falar com Assistant]                                │ │
│  └───────────────────────────────────────────────────────┘ │
│                                                             │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐        │
│  │ 🔥 STREAK   │  │ ⚡ ENERGIA  │  │ ⭐ LEVEL    │        │
│  │    12 dias  │  │    100%     │  │   7         │        │
│  │             │  │             │  │ ━━━━━░░ 68% │        │
│  └─────────────┘  └─────────────┘  └─────────────┘        │
│                                                             │
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
```

### 2. Dashboard Principal

```
┌─────────────────────────────────────────────────────────────┐
│  ☰  FluvOS                    🔔  👤 Lv.7    │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ ⭐ LEVEL 7 — CONSTRUTOR                              │   │
│  │ ━━━━━━━━━━━━━━━━━━━━━━━━━━░░░░░░░░░░ 68%            │   │
│  │ 2.150 / 3.200 XP para Level 8                       │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
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
```

### 3. Kanban de Tarefas

```
┌─────────────────────────────────────────────────────────────┐
│  ← Tarefas                           🔍  ⚙️  + Nova        │
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
```

### 4. Timer de Foco (Modo Imersivo)

```
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
```

### 5. Builder Assistant

```
┌─────────────────────────────────────────────────────────────┐
│  ← Builder Assistant                              🎤        │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│         ┌───────────────────────────────────────┐          │
│         │  🤖 Builder Assistant                  │          │
│         │                                        │          │
│         │  Como posso te ajudar hoje, João?     │          │
│         │                                        │          │
│         │  Algumas coisas que posso fazer:      │          │
│         │                                        │          │
│         │  📊 Analisar seu foco e produtividade │          │
│         │  📋 Planejar suas tarefas e semana    │          │
│         │  🎯 Revisar progresso nas metas       │          │
│         │  ✓ Dar insights sobre seus hábitos   │          │
│         │  💰 Analisar suas finanças            │          │
│         │                                        │          │
│         └───────────────────────────────────────┘          │
│                                                             │
│                                                             │
│  ┌───────────────────────────────────────────────────────┐ │
│  │ 👤 Como foi meu foco essa semana?                      │ │
│  └───────────────────────────────────────────────────────┘ │
│                                                             │
│  ┌───────────────────────────────────────────────────────┐ │
│  │ 🤖 Essa semana você focou 12h35min — 23% acima da     │ │
│  │    semana passada! 🎉                                  │ │
│  │                                                        │ │
│  │    📊 Breakdown:                                       │ │
│  │    • Melhor dia: Quarta (3h20min)                     │ │
│  │    • Pior dia: Segunda (45min)                        │ │
│  │    • Horário mais produtivo: 9h-11h                   │ │
│  │                                                        │ │
│  │    💡 Insight: Você rende mais pela manhã. Quer que   │ │
│  │    eu sugira bloquear 9h-11h no seu calendário para   │ │
│  │    deep work?                                          │ │
│  │                                                        │ │
│  │    [Sim, criar bloqueio] [Não, obrigado]              │ │
│  └───────────────────────────────────────────────────────┘ │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│  [ Digite sua mensagem...                          ] [🎤]  │
└─────────────────────────────────────────────────────────────┘
```

### 6. Tela de Hábitos

```
┌─────────────────────────────────────────────────────────────┐
│  ← Hábitos                                    + Novo        │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  🔥 STREAK GERAL: 12 dias                 🛡️ 2 shields     │
│                                                             │
│  HOJE — Sexta, 14 de Fevereiro                             │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ │
│                                                             │
│  🏃 SAÚDE                                          4/5      │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ [✓] Beber 2L de água              🔥 15 dias       │   │
│  │ [✓] Treinar                       🔥 8 dias        │   │
│  │ [✓] Dormir 7h+                    🔥 12 dias       │   │
│  │ [✓] Comer frutas                  🔥 5 dias        │   │
│  │ [ ] Meditar 10min                 ⚠️ fazer hoje    │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  📚 PRODUTIVIDADE                                  2/3      │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ [✓] Planejar o dia                🔥 20 dias       │   │
│  │ [✓] 2h de foco profundo           🔥 7 dias        │   │
│  │ [ ] Ler 30min                     ⚠️ fazer hoje    │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  📊 CONSISTÊNCIA (últimos 30 dias)                          │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ ░░▓▓▓▓▓▓▓░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓                     │   │
│  │ 28/30 dias — 93% de consistência                    │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│   [🏠]      [📋]      [⏱️]      [✓]      [🤖]             │
└─────────────────────────────────────────────────────────────┘
```

---

## Stack Técnica Completa

### Frontend
| Tecnologia | Propósito |
|------------|-----------|
| Next.js 15 | Framework React com App Router |
| TypeScript | Type safety |
| TailwindCSS | Styling |
| shadcn/ui | Componentes base |
| Radix UI | Primitivos acessíveis |
| Framer Motion | Animações de gamificação |
| Zustand | Estado global |
| TanStack Query | Data fetching/caching |
| @hello-pangea/dnd | Drag-and-drop Kanban |
| react-player | Player de vídeo (LMS) |
| Recharts | Gráficos e estatísticas |

### Backend
| Tecnologia | Propósito |
|------------|-----------|
| Next.js API Routes | Endpoints serverless |
| Supabase Edge Functions | Lógica complexa |
| @supabase/supabase-js | Cliente direto para queries |
| TanStack Query | Cache e estado no frontend |
| Zod | Validação de schemas |

### Banco de Dados
| Tecnologia | Propósito |
|------------|-----------|
| Supabase (PostgreSQL) | Banco principal |
| Row Level Security | Multi-tenancy seguro |
| Realtime | Atualizações live |

### IA
| Tecnologia | Propósito |
|------------|-----------|
| Claude API (Anthropic) | LLM principal |
| Web Speech API | Voice-to-text |
| Web Speech Synthesis | Text-to-speech (MVP) |

### Autenticação
| Tecnologia | Propósito |
|------------|-----------|
| Supabase Auth | Auth completa |
| Google OAuth | Login social |

### Pagamentos
| Tecnologia | Propósito |
|------------|-----------|
| Stripe | Pagamentos + PIX |
| Stripe Billing | Gestão de assinaturas |

### Infraestrutura
| Tecnologia | Propósito |
|------------|-----------|
| Vercel | Hosting frontend |
| Supabase Cloud | Backend services |
| GitHub Actions | CI/CD |

---

## Estimativa de Custos

### Custos de Infraestrutura (mensal)

| Estágio | Usuários | Vercel | Supabase | IA (Claude) | Total |
|---------|----------|--------|----------|-------------|-------|
| Beta | 0-100 | $0 | $0 | $50-100 | ~$100 |
| Launch | 100-500 | $0-20 | $25 | $250-500 | ~$500 |
| Growth | 500-2K | $20 | $25 | $1.000-2.000 | ~$2.000 |
| Scale | 2K-10K | $150 | $75 | $5.000-10.000 | ~$10.000 |

### Considerações de Pricing

**Custo de IA por usuário**: ~$1-2/mês (assumindo 100-200 interações/mês com Assistant)

**Sugestão de pricing**:
- Assinatura mensal: R$ 47-67/mês
- Assinatura anual: R$ 397-497/ano (desconto ~30%)

**Break-even por usuário** (estimativa):
- Custo: ~R$ 10-15/usuário/mês
- Margem saudável a partir de R$ 47/mês

---

## Métricas de Sucesso

### Métricas de Engajamento (Prioridade 1)

| Métrica | Target | Importância |
|---------|--------|-------------|
| DAU/MAU | >40% | App deve ser hábito diário |
| Sessões/dia | >2 | Múltiplas interações |
| Tempo médio/sessão | >5min | Engajamento profundo |
| Daily Quests completion | >60% | Gamificação funcionando |

### Métricas de Retenção (Prioridade 2)

| Métrica | Target | Importância |
|---------|--------|-------------|
| Retention D1 | >70% | Onboarding efetivo |
| Retention D7 | >50% | Formação de hábito |
| Retention D30 | >30% | Produto essencial |
| Churn mensal | <5% | Sustentabilidade |

### Métricas de IA (Prioridade 3)

| Métrica | Target | Importância |
|---------|--------|-------------|
| Interações/usuário/semana | >5 | Assistant é usado |
| Taxa de ação pós-sugestão | >30% | Sugestões úteis |
| NPS do Assistant | >50 | Qualidade percebida |

---

## Riscos e Mitigações

| Risco | Probabilidade | Impacto | Mitigação |
|-------|---------------|---------|-----------|
| Timeline apertado | Alta | Alto | Priorização rigorosa, MVP enxuto |
| Custo de IA alto | Média | Médio | Rate limiting, caching de contexto |
| Complexidade gamificação | Média | Médio | Começar simples, iterar |
| Integração Calendar | Baixa | Baixo | API madura, boa documentação |
| Performance com muitos dados | Baixa | Médio | Paginação, lazy loading |

---

## Próximos Passos Imediatos

1. **Validação deste escopo** com o cliente
2. **Definição do Design System** (cores, tipografia, identidade visual)
3. **Wireframes de alta fidelidade** no Figma
4. **Setup do ambiente de desenvolvimento**
5. **Início do Sprint 1** em 10 de Dezembro

---

## Conclusão

O FluvOS tem potencial para se tornar o **app central de rotina** dos alunos da comunidade Builders, combinando:

1. **Gamificação como DNA** — Não uma feature, mas a essência do produto
2. **Builder Assistant** — Diferencial competitivo único com IA contextual
3. **Integração completa** — Tarefas, foco, hábitos, metas, finanças, LMS em um só lugar
4. **Comunidade** — Contexto compartilhado da formação

O timeline de 75 dias é desafiador mas viável com foco rigoroso nas prioridades do MVP.

---

*Documento de Escopo v2.0*
*Atualizado em: 30 de Novembro de 2025*
*Timeline: 10 de Dezembro 2025 → 15 de Fevereiro 2026*
*Total: 75 dias de desenvolvimento*

---
