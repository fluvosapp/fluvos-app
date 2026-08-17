# Backend Review - FluvOS

> Análise completa do backend realizada em 28/01/2026

---

## Sumário Executivo

### Completude do Backend: **45%**

| Métrica | Valor |
|---------|-------|
| **Páginas com Backend Completo** | 8 de 20 (40%) |
| **Páginas com Dados Mockados** | 8 de 20 (40%) |
| **Páginas Parciais** | 3 de 20 (15%) |
| **Tabelas Supabase Ativas** | 9 tabelas |
| **Tabelas com Problemas de Nomeação** | ✅ 0 (corrigido) |
| **Tabelas Faltantes** | ✅ 0 (criadas) |
| **Hooks Implementados** | ~40 funções em 5 arquivos |
| **Hooks Faltantes Críticos** | ~15 hooks |
| **Vulnerabilidades de Segurança** | 10 críticas, 10 altas |

---

## 1. Status das Páginas

### Legenda de Status
- ✅ **COMPLETO**: Backend 100% funcional
- ⚠️ **PARCIAL**: Algumas funcionalidades faltando
- ❌ **MOCK**: Usa dados hardcoded/estáticos
- ➖ **SEM_BACKEND**: Não requer backend

### Tabela Completa

| Página | Caminho | Status | Dados Mockados | Hooks Usados | Hooks Necessários |
|--------|---------|--------|----------------|--------------|-------------------|
| Inicial | `/` | ➖ | N/A | Redirect only | N/A |
| **Entrar** | `/entrar` | ✅ | Não | `signInWithEmail`, `signInWithOAuth` | - |
| **Criar Conta** | `/criar-conta` | ✅ | Não | `signUpWithEmail` | - |
| **Recuperar Senha** | `/recuperar-senha` | ✅ | Não | `resetPassword` | - |
| **Redefinir Senha** | `/redefinir-senha` | ✅ | Não | `updatePassword` | - |
| **Tarefas** | `/tarefas` | ✅ | Não | `useTarefas`, `usePendencias`, CRUD completo | - |
| **Hábitos** | `/habitos` | ✅ | Não | `useHabitos`, `useCategoriasHabitos`, CRUD | - |
| **Foco** | `/foco` | ✅ | Não | Server actions completas | - |
| **Termos** | `/termos` | ✅ | Não | Texto estático | - |
| **Privacidade** | `/privacidade` | ✅ | Não | Texto estático | - |
| Onboarding | `/onboarding` | ⚠️ | Sim (`dados-onboarding.ts`) | `useRouter` | `useOnboarding` |
| Perfil | `/perfil` | ⚠️ | Preferências locais | `useAuth` | `useUpdateProfile`, `useChangePassword` |
| Metas | `/habitos` (aba) | ⚠️ | Não | `useMetas` | Tabelas faltando |
| **Dashboard** | `/inicio` | ❌ | Sim (`dados-dashboard.ts`) | `useAuth` (só nome) | `useDashboard`, `useStats`, `useMissoes` |
| **Cursos** | `/cursos` | ✅ | Não | `useCursosData` | - |
| Curso Individual | `/cursos/[curso]` | ✅ | Não | `useCursoBySlug` | - |
| Aula | `/cursos/[curso]/[aula]` | ✅ | Não | `useCursoBySlug`, `useCompleteLesson` | Comentários pendentes |
| **Assistente** | `/assistente` | ❌ | Sim (`dados-assistente.ts`) | `useAuth` | `useChat`, API de IA |
| **Agenda** | `/agenda` | ❌ | Sim (`dados-agenda.ts`) | localStorage | `useEventos`, OAuth calendars |
| Teste Daily | `/testes/abertura-diaria` | ❌ | Sim | - | N/A (página de teste) |

### Prioridade de Implementação

```
🔴 ALTA (Páginas core com mock):
1. Dashboard (/inicio) - Página principal do usuário
2. Assistente (/assistente) - Diferencial do produto

🟡 MÉDIA:
3. Perfil (/perfil) - Edição de dados
4. Onboarding (/onboarding) - Tracking de progresso

🟢 BAIXA:
5. Metas - Tabelas faltando no DB

✅ IMPLEMENTADO:
- Cursos (/cursos, /cursos/[curso], /cursos/[curso]/[aula])
- Agenda (/agenda)
```

---

## 2. Hooks - Existentes vs Necessários

### Hooks Implementados (✅ Funcionando)

| Arquivo | Hooks Exportados | Tabelas | CRUD | Status |
|---------|------------------|---------|------|--------|
| `useHabitos.ts` | 13 hooks | `habits`, `habit_categories`, `habit_checks` | ✅ Completo | ✅ |
| `useTarefas.ts` | 8 hooks | `tasks` | ✅ Completo | ✅ |
| `usePendencias.ts` | 6 hooks | `pending_items` | ✅ Completo | ✅ |
| `useMetas.ts` | 18 hooks | `goals`, `objectives`* | ✅ Completo | ⚠️ Tabelas erradas |
| `useConfirmar.ts` | 2 hooks | - | UI only | ✅ |

### Hooks que Precisam Ser Criados

#### 🔴 CRÍTICOS (Features ativas quebradas)

| Hook | Tabela | Justificativa |
|------|--------|---------------|
| `useFocusSessions` | `focus_sessions` | Página `/foco` usa server actions, mas falta hook para histórico |
| `useUser` | `users` | Perfil do usuário, XP, level |
| `useUpdatePerfil` | `users` | Atualizar dados pessoais |
| `useDashboard` | Múltiplas | Stats diárias/semanais para dashboard |

#### 🟡 IMPORTANTES (Features mockadas)

| Hook | Propósito |
|------|-----------|
| `useCursos` | Listar cursos do banco |
| `useCurso(id)` | Detalhes de um curso |
| `useAula(cursoId, aulaId)` | Conteúdo da aula |
| `useProgressoCurso` | Tracking de progresso |
| `useComentarios` | Sistema de comentários |
| `useEventos` | Eventos da agenda |
| `useChat` | Conversas do assistente |
| `useMissoes` | Missões diárias/semanais |

#### 🟢 CONVENIÊNCIA (Filtros e derivados)

| Hook | Propósito |
|------|-----------|
| `useTarefasFiltered` | Filtrar por status, prioridade, tags |
| `useTarefasVencidas` | Tarefas com prazo passado |
| `useHabitosPorCategoria` | Agrupar por categoria |
| `useProximosVencimentos` | Tarefas + Pendências próximas |
| `useTotalXP` | Somar XP para gamification |
| `useResumoSemanal` | Stats agregadas |

---

## 3. Supabase - Tabelas e Tipos

### Tabelas Existentes (✅)

| Tabela | RLS | Status | Hooks |
|--------|-----|--------|-------|
| `users` | ✅ | Funcional | Apenas `useAuth` |
| `tasks` | ✅ | Funcional | `useTarefas` (8) |
| `pending_items` | ✅ | Funcional | `usePendencias` (6) |
| `focus_sessions` | ✅ | Funcional | Server actions |
| `habits` | ✅ | Funcional | `useHabitos` (7) |
| `habit_categories` | ✅ | Funcional | `useCategoriasHabitos` (2) |
| `habit_checks` | ✅ | Funcional | Hook usa nome errado |
| `goals` | ✅ | Funcional | `useMetas` (5) |
| `development_objectives` | ✅ | Funcional | Hook usa nome errado |

### ✅ PROBLEMAS DE NOMEAÇÃO (RESOLVIDOS)

```
✅ habit_checks → RENOMEADA para habit_history (corresponde ao hook)
✅ development_objectives → RENOMEADA para objectives (corresponde ao hook)
```

**Status**: Resolvido via migration `004_fix_database_naming.sql`

### ✅ TABELAS FALTANTES (CRIADAS)

| Tabela | Onde é Usada | Status |
|--------|--------------|--------|
| `goal_milestones` | `useMetas.ts` | ✅ Criada via migration |
| `objective_columns` | `useMetas.ts` | ✅ Criada via migration |

**Status**: Resolvido via migration `004_fix_database_naming.sql`

**SQL original para referência**:

```sql
-- goal_milestones
CREATE TABLE public.goal_milestones (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  meta_id UUID NOT NULL REFERENCES public.goals(id) ON DELETE CASCADE,
  titulo TEXT NOT NULL,
  descricao TEXT,
  concluido BOOLEAN NOT NULL DEFAULT false,
  data_conclusao TIMESTAMPTZ,
  ordem INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
ALTER TABLE public.goal_milestones ENABLE ROW LEVEL SECURITY;

-- objective_columns
CREATE TABLE public.objective_columns (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  titulo TEXT NOT NULL,
  descricao TEXT,
  icone TEXT,
  cor TEXT,
  ordem INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
ALTER TABLE public.objective_columns ENABLE ROW LEVEL SECURITY;
```

### Tabelas Futuras (para features mockadas)

| Tabela | Propósito |
|--------|-----------|
| `courses` | Cursos disponíveis |
| `course_modules` | Módulos de cada curso |
| `course_lessons` | Aulas de cada módulo |
| `user_course_progress` | Progresso do usuário |
| `lesson_comments` | Comentários em aulas |
| `events` | Eventos da agenda |
| `calendar_integrations` | OAuth tokens calendários |
| `conversations` | Histórico do assistente |
| `messages` | Mensagens das conversas |
| `daily_missions` | Missões diárias |
| `weekly_challenges` | Desafios semanais |
| `xp_transactions` | Log de ganho de XP |

---

## 4. Dados Mockados por Página

### `/inicio` (Dashboard)

| Arquivo Mock | Conteúdo | Endpoint Necessário |
|--------------|----------|---------------------|
| `dados-dashboard.ts` | `nivelAtual` (level 7, XP) | `GET /api/user/level-progress` |
| | `cardsResumo` (tarefas, foco, hábitos) | `GET /api/user/daily-stats` |
| | `progressoSemanal` | `GET /api/user/weekly-progress` |
| | `missoesDiarias` (5 missões) | `GET /api/user/daily-quests` |
| | `missoesSemanais` (4 desafios) | `GET /api/user/weekly-challenges` |
| | `textoAssistant` | `GET /api/assistant/daily-brief` |

### `/cursos` ✅ IMPLEMENTADO

| Fonte | Conteúdo | Hook/Query |
|-------|----------|------------|
| Supabase `courses` | Lista de cursos | `useCursosData()` |
| Supabase `course_modules` | Módulos por curso | `useCursoBySlug()` |
| Supabase `lessons` | Aulas por módulo | `useCursoBySlug()` |
| Supabase `lesson_progress` | Progresso do usuário | `fetchUserProgress()` |
| RPC `complete_lesson` | Marcar aula como concluída | `useCompleteLesson()` |
| Hardcoded | `NOVOS_CONTEUDOS` (em breve) | Placeholder para cursos futuros |

### `/assistente`

| Arquivo Mock | Conteúdo | Endpoint Necessário |
|--------------|----------|---------------------|
| `dados-assistente.ts` | `sugestoesRapidas` | `GET /api/assistant/suggestions` |
| | `mensagensIniciais` | `POST /api/assistant/chat` |
| | `cartoesSugestao` | `GET /api/assistant/capabilities` |
| | `conversasIniciais` | `GET /api/user/conversations` |

### `/agenda`

| Arquivo Mock | Conteúdo | Endpoint Necessário |
|--------------|----------|---------------------|
| `dados-agenda.ts` | `eventosAgenda` (5 eventos) | `GET /api/user/events` |
| localStorage | Eventos salvos localmente | `POST/PUT/DELETE /api/user/events` |
| - | Integrações (Google, Outlook) | OAuth2 flow |

### `/onboarding`

| Arquivo Mock | Conteúdo | Endpoint Necessário |
|--------------|----------|---------------------|
| `dados-onboarding.ts` | `etapasOnboarding` (8 etapas) | `GET /api/user/onboarding-status` |
| | `VIDEO_DEMO` (URL mockada) | URLs reais de vídeos |

---

## 5. Segurança - Vulnerabilidades Identificadas

### 🔴 CRÍTICAS (Corrigir IMEDIATAMENTE)

| # | Vulnerabilidade | Local | Impacto |
|---|-----------------|-------|---------|
| 1 | **Open Redirect** | `/entrar?redirectTo=` | Atacante pode redirecionar para site malicioso |
| 2 | **Reset senha sem token** | `/redefinir-senha` | Qualquer um pode acessar página de redefinir |
| 3 | **API sem autenticação** | `/api/foco/save-partial` | Qualquer pessoa pode chamar endpoint |
| 4 | **Sem validação de ownership** | `savePartialSession()` | Pode manipular sessão de outro usuário |
| 5 | **Secrets no .env** | `.env` no repositório | Service key e senha DB expostos |
| 6 | **Senha fraca permitida** | Signup | Aceita senhas como "123456" |
| 7 | **Força bruta** | Login | Sem rate limiting |
| 8 | **Logout incompleto** | `signOut()` | Token pode não ser revogado |
| 9 | **getSession sem try/catch** | `auth-provider.tsx` | App quebra se falhar |
| 10 | **getUser sem tratamento** | `middleware.ts` | Permite acesso se erro |

### 🟠 ALTAS (Próximo sprint)

| # | Vulnerabilidade | Impacto |
|---|-----------------|---------|
| 11 | Sem session timeout | Sessão infinita |
| 12 | Sem refresh token automático | Token expira sem renovar |
| 13 | Sem email verification | Contas com email falso |
| 14 | Sem CAPTCHA | Automação de signup |
| 15 | Sem rate limiting geral | DoS em endpoints |
| 16 | Sem audit logging | Sem rastreio de ações |
| 17 | Sem MFA | Apenas senha |
| 18 | Sem validação de escopo | Qualquer user acessa tudo |
| 19 | Sem CSRF protection | Ataques cross-site |
| 20 | CORS não configurado | Requisições de qualquer origem |

### Correções Prioritárias

```typescript
// 1. Validar redirectTo
function isValidRedirect(url: string): boolean {
  try {
    const parsed = new URL(url, location.origin)
    return parsed.origin === location.origin
  } catch {
    return false
  }
}

// 2. Rate limiting
import rateLimit from 'express-rate-limit'
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 min
  max: 5,
  message: 'Muitas tentativas, aguarde 15 minutos'
})

// 3. Força de senha
const senhaSchema = z.string()
  .min(12, "Mínimo 12 caracteres")
  .regex(/[A-Z]/, "Precisa maiúscula")
  .regex(/[0-9]/, "Precisa número")
  .regex(/[!@#$%^&*]/, "Precisa símbolo")

// 4. Autenticação em API
export async function POST(request: Request) {
  const session = await getServerSession()
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }
  // ...
}
```

---

## 6. Roadmap de Implementação

### Fase 1: Correções Críticas (1-2 semanas)

```
[x] Corrigir nomes de tabelas (habit_checks → habit_history, development_objectives → objectives)
    → Migration: supabase/migrations/004_fix_database_naming.sql
[x] Criar tabelas faltantes (goal_milestones, objective_columns)
    → Migration: supabase/migrations/004_fix_database_naming.sql
[ ] Corrigir vulnerabilidades de segurança críticas
[ ] Adicionar autenticação em /api/foco/save-partial
[ ] Validar redirectTo no login
[ ] Remover .env do repositório
```

### Fase 2: Dashboard e Perfil (2 semanas)

```
[ ] Criar hook useUser para dados do usuário
[ ] Criar hook useDashboard para stats
[ ] Implementar XP e level system
[ ] Criar tabela e hooks para missões
[ ] Conectar dashboard a dados reais
[ ] Implementar edição de perfil
```

### Fase 3: Cursos (3 semanas)

```
[ ] Criar tabelas courses, modules, lessons
[ ] Criar tabela user_course_progress
[ ] Implementar hooks useCursos, useCurso, useAula
[ ] Sistema de tracking de progresso
[ ] Sistema de comentários em aulas
```

### Fase 4: Assistente (2-3 semanas)

```
[ ] Definir API de IA (OpenAI, Anthropic, etc)
[ ] Criar tabelas conversations, messages
[ ] Implementar hooks useChat, useConversas
[ ] Histórico de conversas persistente
[ ] Sugestões contextuais baseadas em dados do usuário
```

### Fase 5: Agenda (2 semanas)

```
[ ] Criar tabela events
[ ] Migrar localStorage → Supabase
[ ] Implementar CRUD de eventos
[ ] OAuth2 com Google Calendar
[ ] OAuth2 com Outlook Calendar
```

### Fase 6: Melhorias de Segurança (ongoing)

```
[ ] Implementar MFA (TOTP)
[ ] Email verification obrigatória
[ ] Session management (ver sessões ativas)
[ ] Audit logging completo
[ ] Rate limiting em todos endpoints
[ ] CAPTCHA no signup
```

---

## 7. Arquitetura Atual vs Recomendada

### Atual

```
app/
├── página/
│   ├── page.tsx         # UI + dados mockados inline
│   └── dados-*.ts       # Dados hardcoded
├── hooks/               # Hooks existentes (parcial)
└── lib/supabase/        # Cliente Supabase
```

### Recomendada

```
app/
├── página/
│   └── page.tsx         # UI apenas
├── hooks/
│   ├── queries/         # React Query hooks (read)
│   └── mutations/       # React Query hooks (write)
├── lib/
│   ├── supabase/        # Cliente Supabase
│   ├── api/             # Server actions organizadas
│   └── validators/      # Zod schemas
├── types/
│   └── database.ts      # Types únicos (não duplicados)
└── api/
    └── [endpoint]/      # API routes com autenticação
```

---

## 8. Checklist Pré-Produção

### Backend

- [ ] Todas as páginas conectadas ao banco
- [ ] Nenhum dado mockado em produção
- [ ] Hooks para todas as features
- [ ] Tabelas Supabase corretas
- [ ] Types TypeScript sincronizados

### Segurança

- [ ] .env fora do repositório
- [ ] Secrets rotacionados
- [ ] Rate limiting ativo
- [ ] CAPTCHA configurado
- [ ] Email verification ativa
- [ ] Senhas fortes obrigatórias
- [ ] CORS configurado
- [ ] Audit logging ativo

### Performance

- [ ] Queries otimizadas
- [ ] Indexes corretos no banco
- [ ] React Query com cache
- [ ] Lazy loading de dados pesados

---

## Conclusão

O backend está **~45% completo**. As features principais de **Tarefas, Hábitos e Foco** funcionam bem, mas **Dashboard, Cursos, Assistente e Agenda** ainda dependem de dados mockados.

**Prioridades imediatas**:
1. Corrigir vulnerabilidades de segurança críticas
2. Corrigir nomes de tabelas no Supabase
3. Criar tabelas faltantes
4. Implementar backend do Dashboard

**Tempo estimado para 100%**: 8-12 semanas com equipe focada.

---

*Relatório gerado automaticamente por análise de código*
