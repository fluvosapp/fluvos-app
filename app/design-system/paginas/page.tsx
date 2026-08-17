"use client"

import { useEffect, useId, useRef, useState, type PointerEvent as ReactPointerEvent, type RefObject } from "react"
import {
  ArrowRight,
  Bell,
  BriefcaseBusiness,
  CalendarDays,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Crown,
  Focus,
  Home,
  Inbox,
  ListTodo,
  MapPin,
  Mic,
  MoreHorizontal,
  Pause,
  Pencil,
  Plus,
  RotateCcw,
  Search,
  Sparkles,
  Star,
  Trash2,
  Undo2,
  UserRound,
  WalletCards,
  X,
} from "lucide-react"

import {
  BrandMark,
  FluvosAvatarStack,
  FluvosBadge,
  FluvosButton,
  FluvosCard,
  FluvosInput,
  FluvosSection,
} from "@/componentes/design-system/fluvos/primitives"
import { cn } from "@/lib/utilidades"
import { useAuth } from "@/lib/providers/auth-provider"

type NavigationKey = "home" | "schedule" | "lists" | "profile"
type CreationMode = "task" | "list" | "voice"
type VoiceStatus = "permission" | "listening" | "paused" | "processing" | "review" | "error"
type MeetingTab = "full" | "key" | "summary"

type AccountIdentity = {
  readonly avatarUrl?: string | null
  readonly name: string
}

function AccountAvatar({ avatarUrl, name, className }: AccountIdentity & { readonly className?: string }) {
  const [failedAvatarUrl, setFailedAvatarUrl] = useState<string | null>(null)
  const initials = name.split(" ").filter(Boolean).map(part => part[0]).join("").slice(0, 2).toUpperCase() || "U"
  const showAvatar = Boolean(avatarUrl && failedAvatarUrl !== avatarUrl)

  return (
    <span className={cn("fds-account-avatar", className)} aria-hidden="true">
      <span>{initials}</span>
      {avatarUrl && showAvatar && (
        // OAuth avatars may come from provider-specific hosts that cannot be known at build time.
        // eslint-disable-next-line @next/next/no-img-element
        <img src={avatarUrl} alt="" referrerPolicy="no-referrer" onError={() => setFailedAvatarUrl(avatarUrl)} />
      )}
    </span>
  )
}

function Device({
  title,
  reference,
  children,
}: {
  readonly title: string
  readonly reference: string
  readonly children: React.ReactNode
}) {
  return (
    <article className="min-w-0">
      <div className="fds-device">
        <div className="fds-device-island" aria-hidden="true" />
        <div className="fds-device-content">{children}</div>
      </div>
      <div className="mt-4 flex items-center justify-center gap-2 text-center">
        <FluvosBadge variant="brand">{reference}</FluvosBadge>
        <p className="text-sm font-bold">{title}</p>
      </div>
    </article>
  )
}

function IconButton({
  label,
  children,
  className,
  onClick,
}: {
  readonly label: string
  readonly children: React.ReactNode
  readonly className?: string
  readonly onClick?: () => void
}) {
  return (
    <button type="button" aria-label={label} className={cn("fds-app-icon-button", className)} onClick={onClick}>
      {children}
    </button>
  )
}

function IconOnlyNav({
  active,
  onCreate,
  onNavigate,
  createButtonRef,
  createActive = false,
  account,
}: {
  readonly active: NavigationKey
  readonly onCreate?: () => void
  readonly onNavigate?: (key: NavigationKey) => void
  readonly createButtonRef?: RefObject<HTMLButtonElement | null>
  readonly createActive?: boolean
  readonly account: AccountIdentity
}) {
  const items = [
    ["home", Home, "Hoje"],
    ["schedule", CalendarDays, "Agenda"],
    ["new", Plus, "Criar"],
    ["lists", ListTodo, "Listas"],
    ["profile", UserRound, "Perfil"],
  ] as const

  return (
    <nav className="fds-app-tabbar mt-auto" aria-label="Navegação do aplicativo">
      {items.map(([key, Icon, label]) => {
        const itemActive = key === "new" ? createActive : !createActive && active === key
        return (
          <button
            type="button"
            aria-label={label}
            aria-current={key !== "new" && itemActive ? "page" : undefined}
            aria-pressed={key === "new" ? createActive : undefined}
            className="fds-app-tab"
            data-active={itemActive}
            data-create={key === "new"}
            data-profile={key === "profile"}
            key={key}
            onClick={key === "new" ? onCreate : () => onNavigate?.(key)}
            ref={key === "new" ? createButtonRef : undefined}
          >
            {key === "profile" ? <AccountAvatar {...account} /> : <Icon className="size-[18px]" aria-hidden="true" />}
          </button>
        )
      })}
    </nav>
  )
}

function AppHeader() {
  const [feedback, setFeedback] = useState("")

  return (
    <>
      <div className="flex items-center justify-between">
        <BrandMark asset="symbol-open-pine" className="size-8" />
        <div className="flex gap-2">
          <IconButton label="Buscar" onClick={() => setFeedback("Busca contextual aberta no protótipo.")}><Search className="size-4" /></IconButton>
          <IconButton label="Notificações, 1 não lida" className="relative" onClick={() => setFeedback("1 lembrete pendente para hoje.")}>
            <Bell className="size-4" />
            <span className="absolute right-2 top-2 size-1.5 rounded-full bg-[var(--fds-action)]" aria-hidden="true" />
          </IconButton>
        </div>
      </div>
      {feedback && <div className="fds-inline-feedback mt-2" role="status"><span>{feedback}</span><button type="button" onClick={() => setFeedback("")}><X className="size-4" />Fechar</button></div>}
    </>
  )
}

function TodayDashboard() {
  const [showAll, setShowAll] = useState(false)
  const [assistantFeedback, setAssistantFeedback] = useState("")

  return (
    <>
      <AppHeader />
      <div className="mt-5">
        <p className="text-xs font-semibold text-[var(--fds-text-secondary)]">Quinta, 15 de janeiro</p>
        <h2 className="mt-1 text-[26px] font-bold leading-tight">Bom dia, Maria</h2>
      </div>

      <section className="fds-day-hero fds-progressive-gradient-blur fds-progressive-gradient-blur--compact mt-4" aria-label="Resumo de hoje">
        <div className="fds-progressive-gradient-blur__chromatic" aria-hidden="true" />
        <div className="fds-day-hero-content fds-progressive-gradient-blur__content">
          <div className="fds-day-hero-date">
            <span>Hoje</span>
            <strong>15</strong>
            <small>Quinta</small>
          </div>
          <div className="grid min-w-0 gap-2">
            <div className="fds-day-event">
              <span className="fds-day-event-dot" />
              <span className="min-w-0"><strong>Daily do produto</strong><small>09:15–09:45</small></span>
            </div>
            <div className="fds-day-event">
              <span className="fds-day-event-dot fds-day-event-dot--green" />
              <span className="min-w-0"><strong>Revisão do sistema</strong><small>13:30–14:15</small></span>
            </div>
          </div>
        </div>
      </section>

      <div className="fds-utility-grid mt-3">
        <button type="button" className="fds-utility-card" onClick={() => setAssistantFeedback("3 sugestões abertas para revisão.")}>
          <span className="fds-utility-icon fds-utility-icon--brand"><Sparkles className="size-4" /></span>
          <span><small>Assistente</small><strong>3 sugestões</strong></span>
          <ChevronRight className="ml-auto size-4" aria-hidden="true" />
        </button>
        <FluvosCard className="fds-utility-card">
          <span className="fds-utility-icon fds-utility-icon--growth"><Focus className="size-4" /></span>
          <span><small>Tempo em foco</small><strong>02:30 h</strong></span>
        </FluvosCard>
      </div>
      {assistantFeedback && <div className="fds-inline-feedback mt-2" role="status"><span>{assistantFeedback}</span><button type="button" onClick={() => setAssistantFeedback("")}><X className="size-4" />Fechar</button></div>}

      <div className="mt-5 flex items-center justify-between">
        <h3 className="text-base font-bold">Em andamento</h3>
        <button type="button" className="min-h-11 rounded-full px-2 text-xs font-bold text-[var(--fds-action)]" aria-expanded={showAll} onClick={() => setShowAll(value => !value)}>{showAll ? "Ver menos" : "Ver todos"}</button>
      </div>
      <FluvosCard className="mt-2 p-3.5">
        <div className="flex items-start gap-3">
          <div className="fds-project-tile"><ListTodo className="size-5" /></div>
          <div className="min-w-0 flex-1">
            <FluvosAvatarStack count={3} label="3 pessoas no projeto" />
            <h4 className="mt-2 line-clamp-2 text-sm font-bold leading-snug">Design system FluvOS</h4>
            <p className="mt-1 text-xs text-[var(--fds-text-secondary)]">12 de 18 entregas</p>
          </div>
        </div>
        <div className="fds-segmented-progress mt-3" role="progressbar" aria-label="12 de 18 entregas concluídas" aria-valuemin={0} aria-valuemax={18} aria-valuenow={12}>
          <div aria-hidden="true">{Array.from({ length: 18 }, (_, index) => <span data-complete={index < 12} key={index} />)}</div>
          <small>6 restantes</small>
        </div>
      </FluvosCard>
      {showAll && <FluvosCard className="mt-2 flex min-h-16 items-center gap-3 p-3.5"><span className="fds-project-tile"><CalendarDays className="size-5" /></span><span className="min-w-0"><strong className="block truncate text-sm">Planejamento semanal</strong><small className="text-[var(--fds-text-secondary)]">4 de 7 entregas · compartilhado</small></span></FluvosCard>}
    </>
  )
}

const agendaDays = [
  {
    date: "17", day: "Ter", items: [
      { time: "10:30", title: "Revisão da interface", meta: "45 min · AI Assist", tone: "brand", kind: "task" },
    ],
  },
  {
    date: "18", day: "Qua", items: [
      { time: "08:15", title: "Daily do produto", meta: "30 min · 6 pessoas", tone: "brand", kind: "meeting" },
      { time: "15:00", title: "Preparar retrospectiva", meta: "30 min · Trabalho", tone: "growth", kind: "task" },
    ],
  },
  {
    date: "19", day: "Qui", items: [
      { time: "09:00", title: "Treino · superiores", meta: "45 min · Academia", tone: "growth", kind: "task" },
    ],
  },
  {
    date: "20", day: "Sex", items: [
      { time: "08:15", title: "Daily do produto", meta: "30 min · 6 pessoas", tone: "brand", kind: "meeting" },
      { time: "09:00", title: "Treino · superiores", meta: "45 min · Academia", tone: "growth", kind: "task" },
      { time: "10:30", title: "Revisão da interface", meta: "45 min · AI Assist", tone: "brand", kind: "task" },
    ],
  },
  { date: "21", day: "Sáb", items: [] },
] as const

function AgendaScreen({ onOpenMeeting }: { readonly onOpenMeeting: () => void }) {
  const [selectedDay, setSelectedDay] = useState(3)
  const [feedback, setFeedback] = useState("")
  const day = agendaDays[selectedDay]
  const meetingCount = day.items.filter(item => item.kind === "meeting").length
  const taskCount = day.items.filter(item => item.kind === "task").length

  return (
    <>
      <div className="flex items-start justify-between">
        <div><p className="text-xs font-semibold text-[var(--fds-text-secondary)]">2026</p><h2 className="text-[26px] font-bold">Junho</h2></div>
        <div className="flex gap-2"><IconButton label="Pesquisar agenda" onClick={() => setFeedback("Busca da agenda pronta para receber um termo.")}><Search className="size-4" /></IconButton><IconButton label="Mais opções" onClick={() => setFeedback("Filtros: reuniões, tarefas e tempo livre.")}><MoreHorizontal className="size-4" /></IconButton></div>
      </div>
      <div className="fds-date-strip mt-4" aria-label="Semana de 17 a 21 de junho">
        {agendaDays.map((item, index) => (
          <button type="button" className="fds-date-pill" data-active={index === selectedDay} aria-current={index === selectedDay ? "date" : undefined} key={item.date} onClick={() => { setSelectedDay(index); setFeedback("") }}>
            <span>{item.day}</span><strong>{item.date}</strong><small>{item.items.length ? `${item.items.length} ${item.items.length === 1 ? "item" : "itens"}` : "Livre"}</small>
          </button>
        ))}
      </div>
      <div className="fds-schedule-summary mt-3" aria-label="Resumo do dia"><span><strong>{meetingCount}</strong> {meetingCount === 1 ? "reunião" : "reuniões"}</span><span><strong>{taskCount}</strong> {taskCount === 1 ? "tarefa" : "tarefas"}</span></div>
      <div className="mt-4 flex items-center justify-between"><h3 className="text-base font-bold">A fazer</h3><span className="text-xs font-semibold text-[var(--fds-text-secondary)]">{day.items.length ? `${day.items.length} itens` : "Sem itens"}</span></div>
      <div className="fds-agenda-list mt-2" aria-live="polite">
        {day.items.map((item) => (
          <div className="fds-agenda-row" key={item.title}>
            <time>{item.time}</time>
            <button type="button" className="fds-agenda-card" data-tone={item.tone} onClick={() => item.kind === "meeting" ? onOpenMeeting() : setFeedback(`${item.title}: detalhe aberto no protótipo.`)}>
              <span className="fds-agenda-card-icon">{item.kind === "meeting" ? <CalendarDays className="size-4" /> : <Check className="size-4" />}</span>
              <span><strong>{item.title}</strong><small>{item.meta}</small></span>
              <ChevronRight className="size-4" aria-hidden="true" />
            </button>
          </div>
        ))}
        {!day.items.length && <div className="fds-empty-state"><CalendarDays className="size-5" /><strong>Dia livre</strong><small>Nenhuma reunião ou tarefa agendada.</small></div>}
      </div>
      {feedback && <div className="fds-inline-feedback mt-3" role="status"><span>{feedback}</span><button type="button" onClick={() => setFeedback("")}><X className="size-4" />Fechar</button></div>}
    </>
  )
}

const listItems = [
  { name: "Trabalho", description: "6 tarefas e prioridades", icon: BriefcaseBusiness, tone: "brand" },
  { name: "Finanças", description: "1 conta esta semana", icon: WalletCards, tone: "growth" },
  { name: "Casa", description: "7 tarefas compartilhadas", icon: Home, tone: "pine" },
] as const

function ListsScreen({ onCreate }: { readonly onCreate: () => void }) {
  const [favoritesOnly, setFavoritesOnly] = useState(false)
  const [favorites, setFavorites] = useState<readonly string[]>(["Trabalho"])
  const [swipeOpen, setSwipeOpen] = useState(false)
  const [personalVisible, setPersonalVisible] = useState(true)

  const toggleFavorite = (name: string) => {
    setFavorites(current => current.includes(name) ? current.filter(item => item !== name) : [...current, name])
  }

  const visibleItems = favoritesOnly ? listItems.filter(item => favorites.includes(item.name)) : listItems

  return (
    <>
      <div className="flex items-center justify-between"><div><p className="text-xs font-semibold text-[var(--fds-text-secondary)]">Organização</p><h2 className="text-[26px] font-bold">Listas</h2></div><FluvosButton size="icon" aria-label="Criar lista" onClick={onCreate}><Plus className="size-4" /></FluvosButton></div>
      <div className="fds-segmented mt-4" role="group" aria-label="Filtrar listas"><button type="button" aria-pressed={!favoritesOnly} data-active={!favoritesOnly} onClick={() => setFavoritesOnly(false)}>Todas</button><button type="button" aria-pressed={favoritesOnly} data-active={favoritesOnly} onClick={() => setFavoritesOnly(true)}>Favoritas</button></div>
      <div className="mt-3 grid gap-2.5">
        {visibleItems.map(({ name, description, icon: Icon, tone }) => (
          <FluvosCard className="fds-category-row" key={name}>
            <span className="fds-category-tile" data-tone={tone}><Icon className="size-5" /></span>
            <span className="min-w-0 flex-1"><strong>{name}</strong><small>{description}</small></span>
            <button type="button" aria-label={`${favorites.includes(name) ? "Remover" : "Adicionar"} ${name} ${favorites.includes(name) ? "dos" : "aos"} favoritos`} aria-pressed={favorites.includes(name)} className="fds-favorite" data-active={favorites.includes(name)} onClick={() => toggleFavorite(name)}><Star className="size-4" /></button>
          </FluvosCard>
        ))}
        {personalVisible ? <div className="fds-swipe-row" data-revealed={swipeOpen} aria-label="Lista Pessoal com ação de excluir">
          <button type="button" className="fds-category-row fds-swipe-row-card" aria-expanded={swipeOpen} onClick={() => setSwipeOpen(value => !value)}>
            <span className="fds-category-tile" data-tone="brand"><Inbox className="size-5" /></span>
            <span className="min-w-0 flex-1 text-left"><strong>Pessoal</strong><small>12 notas e tarefas · toque para ações</small></span>
            <ChevronLeft className="size-4" aria-hidden="true" />
          </button>
          {swipeOpen && <button type="button" className="fds-swipe-delete" aria-label="Mover lista Pessoal para a lixeira" onClick={() => setPersonalVisible(false)}><Trash2 className="size-4" /></button>}
        </div> : <div className="fds-inline-feedback" role="status"><span>Lista movida para a lixeira.</span><button type="button" onClick={() => setPersonalVisible(true)}><Undo2 className="size-4" />Desfazer</button></div>}
      </div>
    </>
  )
}

function ProfileScreen({ account }: { readonly account: AccountIdentity }) {
  const [feedback, setFeedback] = useState("")

  return (
    <>
      <AppHeader />
      <div className="mt-8 text-center">
        <AccountAvatar {...account} className="mx-auto size-20 text-xl" />
        <h2 className="mt-4 text-[24px] font-bold">{account.name}</h2>
        <p className="mt-1 text-xs text-[var(--fds-text-secondary)]">Fluxo pessoal · 18 tarefas ativas</p>
      </div>
      <div className="mt-6 grid gap-2">
        {["Preferências", "Notificações", "Privacidade"].map(item => <button type="button" className="fds-profile-row" key={item} onClick={() => setFeedback(`${item}: seção aberta no protótipo.`)}><strong>{item}</strong><ChevronRight className="size-4" /></button>)}
      </div>
      {feedback && <div className="fds-inline-feedback mt-3" role="status"><span>{feedback}</span><button type="button" onClick={() => setFeedback("")}><X className="size-4" />Fechar</button></div>}
    </>
  )
}

function AppPrototype({ initial = "home", account }: { readonly initial?: NavigationKey; readonly account: AccountIdentity }) {
  const [active, setActive] = useState<NavigationKey>(initial)
  const [detail, setDetail] = useState<"meeting" | null>(null)
  const [meetingTab, setMeetingTab] = useState<MeetingTab>("summary")
  const [sheetOpen, setSheetOpen] = useState(false)
  const [creationMode, setCreationMode] = useState<CreationMode>("task")
  const [feedback, setFeedback] = useState("")
  const createButtonRef = useRef<HTMLButtonElement | null>(null)

  const openCreation = (mode: Exclude<CreationMode, "voice"> = "task") => {
    setCreationMode(mode)
    setSheetOpen(true)
    setFeedback("")
  }

  const submitCreation = () => {
    setSheetOpen(false)
    setFeedback(creationMode === "list" ? "Lista criada." : "Tarefa criada e pronta para revisão.")
  }

  return (
    <div className="fds-product-prototype">
      <div className="fds-prototype-underlay" inert={sheetOpen ? true : undefined} aria-hidden={sheetOpen || undefined}>
      <div className="fds-prototype-page">
        {detail === "meeting" ? <MeetingAiScreen tab={meetingTab} onTabChange={setMeetingTab} onBack={() => setDetail(null)} /> : <>
          {active === "home" && <TodayDashboard />}
          {active === "schedule" && <AgendaScreen onOpenMeeting={() => setDetail("meeting")} />}
          {active === "lists" && <ListsScreen onCreate={() => openCreation("list")} />}
          {active === "profile" && <ProfileScreen account={account} />}
        </>}
      </div>
      {feedback && <div className="fds-prototype-toast" role="status"><Check className="size-4" />{feedback}<button type="button" aria-label="Dispensar confirmação" onClick={() => setFeedback("")}><X className="size-3" /></button></div>}
      {!detail && <IconOnlyNav active={active} onCreate={() => openCreation("task")} onNavigate={key => { setActive(key); setDetail(null) }} createButtonRef={createButtonRef} createActive={sheetOpen} account={account} />}
      </div>
      {sheetOpen && <CreationSheet mode={creationMode} onChange={setCreationMode} overlay onClose={() => setSheetOpen(false)} onSubmit={submitCreation} returnFocusRef={createButtonRef} />}
    </div>
  )
}

function FlowSteps({ items }: { readonly items: readonly string[] }) {
  return (
    <ol className="fds-flow-steps">
      {items.map((item, index) => <li key={item}><span>{index + 1}</span><strong>{item}</strong>{index < items.length - 1 && <ArrowRight aria-hidden="true" />}</li>)}
    </ol>
  )
}

function TaskFocus({ done, onDone, account }: { readonly done: boolean; readonly onDone: () => void; readonly account: AccountIdentity }) {
  const [dragProgress, setDragProgress] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)
  const [sheetOpen, setSheetOpen] = useState(false)
  const [creationMode, setCreationMode] = useState<CreationMode>("task")
  const [destination, setDestination] = useState<NavigationKey | null>(null)
  const suppressNextClick = useRef(false)
  const createButtonRef = useRef<HTMLButtonElement | null>(null)

  const progressFromPointer = (event: ReactPointerEvent<HTMLButtonElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    const progress = Math.max(0, Math.min(1, (event.clientX - bounds.left - 24) / Math.max(1, bounds.width - 72)))
    setDragOffset(progress * Math.max(0, bounds.width - 74))
    return progress
  }

  if (destination) return <AppPrototype initial={destination} account={account} />

  return (
    <div className="fds-product-prototype">
      <div className="fds-prototype-underlay" inert={sheetOpen ? true : undefined} aria-hidden={sheetOpen || undefined}>
      <AppHeader />
      <p className="fds-eyebrow mt-5">Vamos organizar</p>
      <h2 className="mt-1 text-[26px] font-bold leading-tight">{done ? "Boa. Próxima tarefa?" : "5 tarefas hoje"}</h2>
      <div className="fds-task-deck mt-5" data-done={done}>
        <div className="fds-task-card-back" aria-hidden="true" />
        <FluvosCard elevated className="fds-task-focus-card">
          <div className="flex items-start gap-3">
            <span className="fds-category-tile" data-tone="growth"><Home className="size-5" /></span>
            <div className="min-w-0 flex-1"><FluvosBadge variant={done ? "success" : "brand"}>{done ? "Concluída" : "Alta prioridade"}</FluvosBadge><h3 className="mt-2 text-lg font-bold">Repor mantimentos</h3><p className="mt-1 line-clamp-2 text-sm text-[var(--fds-text-secondary)]">Comprar itens frescos para a semana.</p></div>
          </div>
          <div className="mt-4 grid gap-2 text-xs text-[var(--fds-text-secondary)]"><span><MapPin className="mr-2 inline size-4" />Mercado do bairro</span><span><Clock3 className="mr-2 inline size-4" />10:00–11:30</span></div>
          <div className="mt-5 flex gap-2">
            <button
              type="button"
              className="fds-drag-action"
              data-dragging={dragProgress > 0}
              onClick={() => { if (suppressNextClick.current) { suppressNextClick.current = false; return }; onDone() }}
              onPointerDown={event => { event.currentTarget.setPointerCapture(event.pointerId); setDragProgress(progressFromPointer(event)) }}
              onPointerMove={event => { if (event.currentTarget.hasPointerCapture(event.pointerId)) setDragProgress(progressFromPointer(event)) }}
              onPointerUp={event => { const progress = progressFromPointer(event); if (progress >= 0.72) { suppressNextClick.current = true; onDone() }; setDragProgress(0); setDragOffset(0); if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId) }}
              onPointerCancel={() => { setDragProgress(0); setDragOffset(0) }}
              aria-pressed={done}
            ><span style={{ transform: `translateX(${dragOffset}px)` }}><Check className="size-4" /></span>{done ? "Desfazer conclusão" : dragProgress >= 0.72 ? "Solte para concluir" : "Arraste ou toque para concluir"}</button>
            <IconButton label="Editar tarefa" onClick={() => setSheetOpen(true)}><Pencil className="size-4" /></IconButton>
          </div>
        </FluvosCard>
      </div>
      <div className="mt-5"><p className="text-xs font-bold text-[var(--fds-text-secondary)]">Categorias</p><div className="mt-2 flex gap-2"><FluvosBadge variant="brand">Caixa de entrada · 2</FluvosBadge><FluvosBadge variant="success">Casa · 7</FluvosBadge></div></div>
      <IconOnlyNav active="home" onNavigate={setDestination} onCreate={() => { setCreationMode("task"); setSheetOpen(true) }} createButtonRef={createButtonRef} createActive={sheetOpen} account={account} />
      </div>
      {sheetOpen && <CreationSheet mode={creationMode} onChange={setCreationMode} overlay onClose={() => setSheetOpen(false)} onSubmit={() => setSheetOpen(false)} returnFocusRef={createButtonRef} />}
    </div>
  )
}

function ModeTabs({ mode, onChange, panelId }: { readonly mode: CreationMode; readonly onChange: (mode: CreationMode) => void; readonly panelId: string }) {
  const modes = [["task", ListTodo, "Tarefa"], ["list", Inbox, "Lista"], ["voice", Mic, "Voz"]] as const
  return <div className="fds-mode-tabs" role="tablist" aria-label="Modo de criação">{modes.map(([value, Icon, label], index) => <button
    type="button"
    role="tab"
    id={`${panelId}-tab-${value}`}
    aria-controls={panelId}
    aria-selected={mode === value}
    data-active={mode === value}
    tabIndex={mode === value ? 0 : -1}
    key={value}
    onClick={() => onChange(value)}
    onKeyDown={event => {
      if (!(["ArrowLeft", "ArrowRight", "Home", "End"] as string[]).includes(event.key)) return
      event.preventDefault()
      const nextIndex = event.key === "Home" ? 0 : event.key === "End" ? modes.length - 1 : (index + (event.key === "ArrowRight" ? 1 : -1) + modes.length) % modes.length
      const nextMode = modes[nextIndex][0]
      onChange(nextMode)
      requestAnimationFrame(() => document.getElementById(`${panelId}-tab-${nextMode}`)?.focus())
    }}
  ><Icon className="size-4" />{label}</button>)}</div>
}

function CreationSheet({
  mode,
  onChange,
  overlay = false,
  onClose,
  onSubmit,
  returnFocusRef,
  exposeVoiceError = false,
}: {
  readonly mode: CreationMode
  readonly onChange: (mode: CreationMode) => void
  readonly overlay?: boolean
  readonly onClose?: () => void
  readonly onSubmit?: () => void
  readonly returnFocusRef?: RefObject<HTMLElement | null>
  readonly exposeVoiceError?: boolean
}) {
  const [voiceStatus, setVoiceStatus] = useState<VoiceStatus>("permission")
  const [title, setTitle] = useState("")
  const [touched, setTouched] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [selectedMetadata, setSelectedMetadata] = useState<readonly string[]>(["Entrada", "Hoje"])
  const sheetRef = useRef<HTMLElement | null>(null)
  const submitTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const fieldId = useId()
  const panelId = `${fieldId}-panel`
  const invalid = touched && !title.trim()

  useEffect(() => () => {
    if (submitTimerRef.current) clearTimeout(submitTimerRef.current)
  }, [])

  useEffect(() => {
    if (!overlay) return

    const previouslyFocused = document.activeElement instanceof HTMLElement ? document.activeElement : null
    const providedReturnTarget = returnFocusRef?.current
    const sheet = sheetRef.current
    const focusable = sheet?.querySelector<HTMLElement>("button:not([disabled]), input:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])")
    const focusFrame = requestAnimationFrame(() => focusable?.focus())

    return () => {
      cancelAnimationFrame(focusFrame)
      const returnTarget = providedReturnTarget ?? previouslyFocused
      requestAnimationFrame(() => returnTarget?.focus())
    }
  }, [overlay, returnFocusRef])

  const handleDialogKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (!overlay) return
    if (event.key === "Escape") {
      event.preventDefault()
      onClose?.()
      return
    }
    if (event.key !== "Tab") return

    const focusable = Array.from(sheetRef.current?.querySelectorAll<HTMLElement>("button:not([disabled]), input:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])") ?? [])
    if (!focusable.length) return
    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault()
      last.focus()
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault()
      first.focus()
    }
  }

  const handleSubmit = () => {
    setTouched(true)
    if (!title.trim() || submitting) return
    setSubmitting(true)
    submitTimerRef.current = setTimeout(() => {
      setSubmitting(false)
      onSubmit?.()
    }, 420)
  }

  const dialogTitle = mode === "task" ? "Criar nova tarefa" : mode === "list" ? "Criar nova lista" : "Criar por voz"

  return (
    <div className={cn("fds-sheet-stage", overlay && "fds-sheet-stage--overlay")} onKeyDown={handleDialogKeyDown}>
      {!overlay && <div className="fds-sheet-underlay" aria-hidden="true"><div className="h-12 w-24 rounded-2xl bg-[var(--fds-border)]" /><div className="mt-5 flex gap-2">{[1, 2, 3, 4].map(item => <span className="h-14 flex-1 rounded-2xl bg-white" key={item} />)}</div><div className="mt-8 h-24 rounded-3xl bg-white" /></div>}
      {overlay ? <button type="button" className="fds-sheet-scrim" aria-label="Fechar criação" onClick={onClose} /> : <div className="fds-sheet-scrim" aria-hidden="true" />}
      <section ref={sheetRef} className="fds-creation-sheet" role={overlay ? "dialog" : undefined} aria-modal={overlay || undefined} aria-labelledby={`${fieldId}-dialog-title`}>
        <h2 id={`${fieldId}-dialog-title`} className="sr-only">{dialogTitle}</h2>
        <div className="fds-sheet-topline"><div className="fds-sheet-handle" aria-hidden="true" />{overlay && <button type="button" className="fds-sheet-close" aria-label="Fechar criação" onClick={onClose}><X className="size-4" /></button>}</div>
        <ModeTabs mode={mode} onChange={nextMode => { onChange(nextMode); setTouched(false); setTitle("") }} panelId={panelId} />
        <div role="tabpanel" id={panelId} aria-labelledby={`${panelId}-tab-${mode}`} className="fds-creation-panel">
        {mode === "voice" ? <VoicePanel compact status={voiceStatus} onStatusChange={setVoiceStatus} onDone={onSubmit} exposeError={exposeVoiceError} /> : <>
          <label className="fds-field-label" htmlFor={`${fieldId}-title`}>{mode === "task" ? "Título da tarefa" : "Nome da lista"}</label>
          <FluvosInput id={`${fieldId}-title`} placeholder={mode === "task" ? "Eu quero…" : "Ex.: Projeto FluvOS"} value={title} onChange={event => setTitle(event.target.value)} onBlur={() => setTouched(true)} aria-invalid={invalid} aria-describedby={`${fieldId}-title-help`} />
          <p id={`${fieldId}-title-help`} className={cn("fds-field-help", invalid && "fds-field-help--error")}>{invalid ? "Digite um título antes de continuar." : "Obrigatório · você pode revisar antes de salvar."}</p>
          <label className="fds-field-label" htmlFor={`${fieldId}-description`}>Descrição <span>(opcional)</span></label>
          <textarea id={`${fieldId}-description`} className="fds-textarea" placeholder="Adicione contexto curto" />
          <div className="fds-metadata-chips">{([
            ["Entrada", Inbox],
            ["Hoje", CalendarDays],
            ["Responsável", UserRound],
            ["Prioridade", Star],
          ] as const).map(([label, Icon]) => {
            const selected = selectedMetadata.includes(label)
            return <button type="button" aria-pressed={selected} data-active={selected} key={label} onClick={() => setSelectedMetadata(current => selected ? current.filter(item => item !== label) : [...current, label])}><Icon className="size-4" />{label}</button>
          })}</div>
          <FluvosButton className="mt-auto w-full" size="lg" disabled={!title.trim() || submitting} onClick={handleSubmit}>{submitting ? "Criando…" : mode === "task" ? "Criar tarefa" : "Criar lista"}</FluvosButton>
        </>}
        </div>
      </section>
    </div>
  )
}

function VoicePanel({
  compact = false,
  status = "listening",
  onStatusChange,
  onDone,
  exposeError = false,
}: {
  readonly compact?: boolean
  readonly status?: VoiceStatus
  readonly onStatusChange?: (status: VoiceStatus) => void
  readonly onDone?: () => void
  readonly exposeError?: boolean
}) {
  const copy: Record<VoiceStatus, { title: string; helper: string }> = {
    permission: { title: "Ative o microfone", helper: "A voz só começa depois da sua autorização." },
    listening: { title: "Ouvindo…", helper: "Fale naturalmente. Você poderá editar antes de salvar." },
    paused: { title: "Gravação pausada", helper: "Continue quando estiver pronta." },
    processing: { title: "Organizando sua fala…", helper: "Transformando áudio em uma tarefa revisável." },
    review: { title: "Revise antes de criar", helper: "A transcrição continua totalmente editável." },
    error: { title: "Não conseguimos ouvir", helper: "Tente novamente ou continue pelo formulário." },
  }

  const advance = () => {
    if (status === "permission") onStatusChange?.("listening")
    else if (status === "listening" || status === "paused") onStatusChange?.("processing")
    else if (status === "processing") onStatusChange?.("review")
    else if (status === "review") onDone?.()
    else onStatusChange?.("listening")
  }

  return (
    <div className={cn("fds-voice-panel", compact && "fds-voice-panel--compact")} data-status={status}>
      <div className="flex items-center justify-between"><span className="fds-language-chip">PT-BR</span><button type="button" className="fds-voice-pause" aria-label={status === "paused" ? "Continuar gravação" : "Pausar gravação"} disabled={!(["listening", "paused"] as VoiceStatus[]).includes(status)} onClick={() => onStatusChange?.(status === "paused" ? "listening" : "paused")}>{status === "paused" ? <RotateCcw className="size-4" /> : <Pause className="size-4" />}</button></div>
      <div className="fds-voice-orb" aria-hidden="true"><Mic className="size-8" /></div>
      <h3 aria-live="polite">{copy[status].title}</h3>
      {status === "review" ? <textarea className="fds-voice-transcript" defaultValue="Revisar o design system amanhã às dez." aria-label="Transcrição da tarefa" /> : <p>{copy[status].helper}</p>}
      <div className="fds-voice-state-rail" {...(status === "error" ? { role: "status", "aria-label": "Falha no fluxo de voz" } : { role: "progressbar", "aria-label": `Fluxo de voz: ${copy[status].title}`, "aria-valuemin": 1, "aria-valuemax": 4, "aria-valuenow": status === "permission" ? 1 : status === "listening" || status === "paused" ? 2 : status === "processing" ? 3 : 4 })}>{(["permission", "listening", "processing", "review"] as VoiceStatus[]).map(item => <span key={item} data-active={item === status || (status === "paused" && item === "listening")} />)}</div>
      {exposeError && status !== "error" && <button type="button" className="fds-voice-error-preview" onClick={() => onStatusChange?.("error")}>Visualizar falha de áudio</button>}
      <FluvosButton className="mt-auto w-full" variant="info" size="lg" onClick={advance}>{status === "permission" ? "Ativar microfone" : status === "review" ? "Criar tarefa" : status === "error" ? "Tentar novamente" : status === "processing" ? "Ver revisão" : "Processar fala"}</FluvosButton>
    </div>
  )
}

function CreationExample({ initial }: { readonly initial: CreationMode }) {
  const [mode, setMode] = useState<CreationMode>(initial)
  const [submitted, setSubmitted] = useState(false)

  return (
    <div className="relative h-full">
      <CreationSheet
        mode={mode}
        onChange={nextMode => { setMode(nextMode); setSubmitted(false) }}
        onSubmit={() => setSubmitted(true)}
        exposeVoiceError
      />
      {submitted && <div className="fds-prototype-toast" role="status"><Check className="size-4" />{mode === "list" ? "Lista criada." : "Tarefa criada."}<button type="button" aria-label="Dispensar confirmação" onClick={() => setSubmitted(false)}><X className="size-3" /></button></div>}
    </div>
  )
}

function MomentsIntro() {
  const [started, setStarted] = useState(false)

  if (started) return <MomentsReview />

  return (
    <div className="fds-moments-stage fds-progressive-gradient-blur fds-progressive-gradient-blur--green">
      <div className="fds-progressive-gradient-blur__chromatic" aria-hidden="true" />
      <div className="fds-moments-intro">
        <BrandMark asset="symbol-framed-pine" className="mx-auto size-12" />
        <p className="fds-eyebrow mt-5 text-center">Revisão guiada</p>
        <h2>Seus Moments</h2>
        <p>Organizamos tarefas antigas para você manter, adiar ou mover para a lixeira com segurança.</p>
        <FluvosButton className="mt-6 w-full" size="lg" onClick={() => setStarted(true)}>Começar revisão</FluvosButton>
      </div>
    </div>
  )
}

function MomentsReview() {
  const [step, setStep] = useState(2)
  const trashCount = 2
  const [message, setMessage] = useState("")
  const [trashOpen, setTrashOpen] = useState(false)
  const [closed, setClosed] = useState(false)

  const decide = (decision: "later" | "done") => {
    setStep(current => Math.min(5, current + 1))
    setMessage(decision === "later" ? "Tarefa adiada e movida para revisão futura." : "Tarefa concluída.")
  }

  if (trashOpen) return <TrashConfirmation initialItems={Array.from({ length: trashCount }, (_, index) => index === 0 ? "Planejamento antigo" : index === 1 ? "Lista de compras" : `Item antigo ${index + 1}`)} onBack={() => setTrashOpen(false)} />

  if (closed) return <div className="fds-moments-stage"><div className="fds-empty-state my-auto"><Check className="size-5" /><strong>Sessão encerrada</strong><small>Suas decisões continuam salvas neste protótipo.</small><FluvosButton variant="outline" onClick={() => setClosed(false)}>Retomar Moments</FluvosButton></div></div>

  return (
    <div className="fds-moments-stage fds-moments-stage--active fds-progressive-gradient-blur fds-progressive-gradient-blur--green">
      <div className="fds-progressive-gradient-blur__chromatic" aria-hidden="true" />
      <div className="fds-moments-header"><div><p className="text-xs font-semibold text-[var(--fds-text-secondary)]">Moments · 5 usos restantes</p><h2 className="mt-1 text-2xl font-bold">Bom dia, Maria</h2></div><IconButton label="Fechar" onClick={() => setClosed(true)}><Plus className="size-4 rotate-45" /></IconButton></div>
      <div className="mt-4 flex items-center gap-2 text-xs font-bold"><span>{step} de 5</span><div className="fds-moment-dots" role="progressbar" aria-label={`Etapa ${step} de 5`} aria-valuemin={1} aria-valuemax={5} aria-valuenow={step}>{[0, 1, 2, 3, 4].map(index => <span data-active={index < step} key={index} />)}</div></div>
      <div className="fds-moment-card-stack">
        <div className="fds-moment-card-back" />
        <FluvosCard elevated className="fds-moment-card">
          <div className="flex items-center justify-between"><FluvosBadge variant="brand">Adiada 5 dias</FluvosBadge><span className="fds-category-tile" data-tone="growth"><Home className="size-5" /></span></div>
          <h3>Organizar documentos</h3><p>Isso ainda merece espaço no seu fluxo?</p>
          <div className="mt-4 grid gap-2 text-xs text-[var(--fds-text-secondary)]"><span><Clock3 className="mr-2 inline size-4" />15 de junho · 10:15</span></div>
          <div className="mt-5 grid grid-cols-2 gap-2"><FluvosButton variant="outline" disabled={step >= 5} onClick={() => decide("later")}>Depois</FluvosButton><FluvosButton variant="success" disabled={step >= 5} onClick={() => decide("done")}>Concluir</FluvosButton></div>
        </FluvosCard>
      </div>
      {message && <div className="fds-inline-feedback mt-4" role="status"><span>{message}</span><button type="button" onClick={() => { setStep(current => Math.max(1, current - 1)); setMessage("") }}><Undo2 className="size-4" />Desfazer</button></div>}
      <div className="fds-trash-dock"><span><strong>{trashCount}</strong><small>na lixeira</small></span><button type="button" onClick={() => setTrashOpen(true)}><Trash2 className="size-4" />Abrir lixeira</button></div>
    </div>
  )
}

function TrashConfirmation({ initialItems = ["Planejamento antigo", "Lista de compras"], onBack }: { readonly initialItems?: readonly string[]; readonly onBack?: () => void }) {
  const [items, setItems] = useState([...initialItems])
  const [confirmOpen, setConfirmOpen] = useState(false)
  const [coachmarkVisible, setCoachmarkVisible] = useState(true)
  const [closed, setClosed] = useState(false)
  const [feedback, setFeedback] = useState("")
  const alertRef = useRef<HTMLDivElement | null>(null)
  const alertTitleId = useId()
  const alertDescriptionId = useId()

  useEffect(() => {
    if (!confirmOpen) return
    const previouslyFocused = document.activeElement instanceof HTMLElement ? document.activeElement : null
    const focusFrame = requestAnimationFrame(() => alertRef.current?.querySelector<HTMLElement>("button")?.focus())
    return () => {
      cancelAnimationFrame(focusFrame)
      requestAnimationFrame(() => previouslyFocused?.focus())
    }
  }, [confirmOpen])

  const handleAlertKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      event.preventDefault()
      setConfirmOpen(false)
      return
    }
    if (event.key !== "Tab") return
    const focusable = Array.from(alertRef.current?.querySelectorAll<HTMLElement>("button:not([disabled])") ?? [])
    if (!focusable.length) return
    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus() }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus() }
  }

  if (closed) return <div className="fds-trash-screen"><div className="fds-empty-state my-auto"><Trash2 className="size-5" /><strong>Lixeira fechada</strong><small>O protótipo preservou o estado local.</small><FluvosButton variant="outline" onClick={() => setClosed(false)}>Reabrir lixeira</FluvosButton></div></div>

  return (
    <div className="fds-trash-screen relative">
      <div className="fds-trash-underlay" inert={confirmOpen ? true : undefined} aria-hidden={confirmOpen || undefined}>
      <div className="flex items-center justify-between"><IconButton label="Voltar" onClick={() => onBack ? onBack() : setClosed(true)}><ChevronLeft className="size-4" /></IconButton><h2 className="text-lg font-bold">Lixeira</h2><IconButton label="Mais opções" onClick={() => setFeedback("A retenção padrão é de 30 dias.")}><MoreHorizontal className="size-4" /></IconButton></div>
      <div className="mt-5 grid gap-2">{items.length ? items.map((item, index) => <FluvosCard className="flex items-center justify-between gap-2 p-4" key={item}><span className="min-w-0"><strong className="block truncate">{item}</strong><small className="mt-1 block text-[var(--fds-text-secondary)]">Excluída {index ? "ontem" : "hoje"}</small></span><button type="button" className="fds-restore-action" onClick={() => { setItems(current => current.filter(value => value !== item)); setFeedback(`${item} foi recuperada.`) }}><Undo2 className="size-4" />Recuperar</button></FluvosCard>) : <div className="fds-empty-state"><Trash2 className="size-5" /><strong>Lixeira vazia</strong><small>Os itens recuperados voltaram ao fluxo.</small></div>}</div>
      {feedback && <div className="fds-inline-feedback mt-3" role="status"><span>{feedback}</span><button type="button" onClick={() => setFeedback("")}><X className="size-4" />Fechar</button></div>}
      {coachmarkVisible && <div className="fds-coachmark"><FluvosBadge variant="brand">Etapa 3 de 3</FluvosBadge><h3>Você ainda pode recuperar tudo.</h3><p>A remoção definitiva só acontece depois de uma confirmação explícita.</p><div className="mt-5 flex justify-between"><IconButton label="Voltar etapa" onClick={() => setCoachmarkVisible(false)}><ChevronLeft className="size-4" /></IconButton><FluvosButton onClick={() => setCoachmarkVisible(false)}>Entendi</FluvosButton></div></div>}
      <FluvosButton className="mt-auto w-full" variant="danger" disabled={!items.length} onClick={() => setConfirmOpen(true)}><Trash2 className="size-4" />Esvaziar lixeira</FluvosButton>
      </div>
      {confirmOpen && <div className="fds-local-alert-stage" onKeyDown={handleAlertKeyDown}><button type="button" aria-label="Cancelar exclusão" className="fds-local-alert-scrim" onClick={() => setConfirmOpen(false)} /><div ref={alertRef} role="alertdialog" aria-modal="true" aria-labelledby={alertTitleId} aria-describedby={alertDescriptionId} className="fds-local-alert"><FluvosBadge variant="danger">Ação irreversível</FluvosBadge><h3 id={alertTitleId}>Remover definitivamente?</h3><p id={alertDescriptionId}>Depois desta confirmação, os {items.length} itens não poderão ser recuperados.</p><div className="mt-5 grid grid-cols-2 gap-2"><FluvosButton variant="outline" onClick={() => setConfirmOpen(false)}>Cancelar</FluvosButton><FluvosButton variant="danger" onClick={() => { setItems([]); setConfirmOpen(false); setFeedback("Lixeira esvaziada.") }}>Remover</FluvosButton></div></div></div>}
    </div>
  )
}

function OnboardingScreen() {
  const [started, setStarted] = useState(false)

  if (started) return <div className="fds-empty-state h-full"><Check className="size-6" /><strong>Onboarding concluído</strong><small>A próxima entrada abre o dashboard Hoje.</small><FluvosButton variant="outline" onClick={() => setStarted(false)}>Rever introdução</FluvosButton></div>

  return (
    <div className="flex h-full flex-col">
      <BrandMark asset="lockup-horizontal-pine" className="mt-4 h-12 w-36" />
      <div className="fds-onboarding-visual fds-progressive-gradient-blur fds-progressive-gradient-blur--compact mt-8"><div className="fds-progressive-gradient-blur__chromatic" aria-hidden="true" /><BrandMark asset="symbol-open-orange" purpose="decorative" className="size-28" /><span className="fds-onboarding-orbit fds-onboarding-orbit--one" /><span className="fds-onboarding-orbit fds-onboarding-orbit--two" /></div>
      <h2 className="mt-8 text-[30px] font-bold leading-[1.04]">Organize o que importa. Siga em fluxo.</h2>
      <p className="mt-3 text-sm leading-6 text-[var(--fds-text-secondary)]">Tarefas, agenda, foco e assistência no mesmo lugar — com clareza e ritmo.</p>
      <FluvosButton className="mt-auto w-full" size="lg" onClick={() => setStarted(true)}>Começar <ArrowRight className="size-4" /></FluvosButton>
      <p className="mt-3 text-center text-[11px] text-[var(--fds-text-secondary)]">Seus dados continuam sob seu controle.</p>
    </div>
  )
}

function MeetingAiScreen({ tab, onTabChange, onBack }: { readonly tab: MeetingTab; readonly onTabChange: (tab: MeetingTab) => void; readonly onBack?: () => void }) {
  const [aiMode, setAiMode] = useState<"idle" | "cleanup" | "rephrase" | "actions">("idle")
  const [applied, setApplied] = useState(false)
  const [confirming, setConfirming] = useState(false)
  const [actionItems, setActionItems] = useState(["Ajustar contraste do hero", "Validar 390 × 844", "Revisar estados da sheet"])
  const [selectedActions, setSelectedActions] = useState<readonly boolean[]>([true, true, false])
  const [closed, setClosed] = useState(false)
  const [feedback, setFeedback] = useState("")
  const selectedCount = selectedActions.filter(Boolean).length
  const meetingTabsId = useId()
  const meetingPanelId = `${meetingTabsId}-panel`
  const meetingTabId = (value: MeetingTab) => `${meetingTabsId}-tab-${value}`

  const tabCopy: Record<MeetingTab, string> = {
    full: "Maria abriu a reunião revisando o hero. A equipe debateu contraste, densidade mobile e o comportamento da sheet antes de definir três próximos passos.",
    key: "Contraste do hero, validação em 390 px e estados de criação são os três pontos que exigem revisão.",
    summary: "A equipe definiu três ajustes finais no sistema visual e um checkpoint responsivo antes do lançamento.",
  }

  if (closed) return <div className="fds-empty-state h-full"><Check className="size-6" /><strong>Reunião fechada</strong><small>As ações revisadas continuam preservadas.</small><FluvosButton variant="outline" onClick={() => setClosed(false)}>Reabrir reunião</FluvosButton></div>

  return (
    <>
      <div className="flex items-center justify-between"><IconButton label="Voltar" onClick={() => onBack ? onBack() : setClosed(true)}><ChevronLeft className="size-4" /></IconButton><div className="flex gap-2"><IconButton label="Compartilhar" onClick={() => setFeedback("Resumo da reunião copiado para compartilhar.")}><ArrowRight className="size-4 -rotate-45" /></IconButton><IconButton label="Mais opções" onClick={() => setFeedback("Opções: exportar, arquivar ou excluir transcrição.")}><MoreHorizontal className="size-4" /></IconButton></div></div>
      <div className="mt-5"><FluvosBadge variant="ai"><Sparkles className="size-3" />AI Assist</FluvosBadge><h2 className="mt-2 text-[26px] font-bold">Daily de produto</h2><p className="mt-1 text-xs text-[var(--fds-text-secondary)]">08:15–08:30 · 6 pessoas</p><p className="mt-2 block truncate text-xs font-bold text-[var(--fds-info)]">Origem: Google Meet · daily-produto</p></div>
      <div className="fds-segmented fds-segmented--3 mt-4" role="tablist" aria-label="Conteúdo da reunião">{(["full", "key", "summary"] as MeetingTab[]).map((value, index, values) => <button type="button" role="tab" id={meetingTabId(value)} aria-controls={meetingPanelId} aria-selected={tab === value} data-active={tab === value} tabIndex={tab === value ? 0 : -1} key={value} onClick={() => onTabChange(value)} onKeyDown={event => { if (!(["ArrowLeft", "ArrowRight", "Home", "End"] as string[]).includes(event.key)) return; event.preventDefault(); const nextIndex = event.key === "Home" ? 0 : event.key === "End" ? values.length - 1 : (index + (event.key === "ArrowRight" ? 1 : -1) + values.length) % values.length; onTabChange(values[nextIndex]); requestAnimationFrame(() => document.getElementById(meetingTabId(values[nextIndex]))?.focus()) }}>{value === "full" ? "Completo" : value === "key" ? "Pontos" : "Resumo"}</button>)}</div>
      <FluvosCard className="mt-3 p-4" role="tabpanel" id={meetingPanelId} aria-labelledby={meetingTabId(tab)}><p className="text-xs leading-5">{tabCopy[tab]}</p><div className="fds-ai-actions mt-4"><button type="button" aria-pressed={aiMode === "cleanup"} data-active={aiMode === "cleanup"} onClick={() => { setAiMode("cleanup"); setConfirming(false) }}>Limpar</button><button type="button" aria-pressed={aiMode === "rephrase"} data-active={aiMode === "rephrase"} onClick={() => { setAiMode("rephrase"); setConfirming(false) }}>Reescrever</button><button type="button" aria-pressed={aiMode === "actions"} data-active={aiMode === "actions"} onClick={() => { setAiMode("actions"); setConfirming(false); setApplied(false) }}>Extrair ações</button></div></FluvosCard>
      {aiMode === "actions" && <div className="mt-2 grid gap-2">{actionItems.map((item, index) => {
        const selectionId = `${meetingTabsId}-action-${index}`
        return <div className="fds-check-row" key={selectionId}><label className="fds-check-toggle" htmlFor={selectionId}><input id={selectionId} type="checkbox" checked={selectedActions[index]} onChange={event => { setSelectedActions(current => current.map((value, itemIndex) => itemIndex === index ? event.target.checked : value)); setConfirming(false); setApplied(false) }} /><span className="sr-only">Selecionar ação {index + 1}</span></label><input className="fds-action-item-input" value={item} aria-label={`Editar ação ${index + 1}`} onChange={event => setActionItems(current => current.map((value, itemIndex) => itemIndex === index ? event.target.value : value))} /></div>
      })}</div>}
      {aiMode !== "idle" && aiMode !== "actions" && <div className="fds-inline-feedback mt-2" role="status"><span>{aiMode === "cleanup" ? "Texto limpo; revise antes de aplicar." : "Nova formulação pronta para revisão."}</span><button type="button" onClick={() => setAiMode("idle")}><Undo2 className="size-4" />Cancelar</button></div>}
      {feedback && <div className="fds-inline-feedback mt-2" role="status"><span>{feedback}</span><button type="button" onClick={() => setFeedback("")}><X className="size-4" />Fechar</button></div>}
      {confirming && !applied && <div className="fds-batch-confirm mt-2" role="status"><strong>Confirmar {selectedCount} {selectedCount === 1 ? "tarefa" : "tarefas"}?</strong><span>Revise a seleção antes de criar no fluxo.</span></div>}
      <FluvosButton className="mt-auto w-full" variant="info" disabled={aiMode !== "actions" || selectedCount === 0 || applied} onClick={() => { if (!confirming) setConfirming(true); else { setApplied(true); setConfirming(false) } }}><Sparkles className="size-4" />{applied ? `${selectedCount} ${selectedCount === 1 ? "tarefa criada" : "tarefas criadas"}` : confirming ? `Confirmar ${selectedCount}` : "Gerar tarefas selecionadas"}</FluvosButton>
      {applied && <button type="button" className="fds-meeting-undo" onClick={() => { setApplied(false); setConfirming(false) }}><Undo2 className="size-4" />Desfazer criação em lote</button>}
    </>
  )
}

function PremiumScreen() {
  const [subscribed, setSubscribed] = useState(false)

  if (subscribed) return <div className="fds-empty-state h-full"><Crown className="size-6 text-[var(--fds-action)]" /><strong>Plano selecionado</strong><small>A confirmação final aconteceria no checkout do aplicativo.</small><FluvosButton variant="outline" onClick={() => setSubscribed(false)}>Voltar aos planos</FluvosButton></div>

  return (
    <div className="flex h-full flex-col">
      <div className="fds-premium-hero fds-progressive-gradient-blur fds-progressive-gradient-blur--compact"><div className="fds-progressive-gradient-blur__chromatic" aria-hidden="true" /><Crown className="size-7" /><FluvosBadge variant="premium">FluvOS Premium</FluvosBadge><h2>Mais fluxo. Menos ruído.</h2><p>Recursos avançados aparecem quando ajudam — nunca como distração permanente.</p></div>
      <fieldset className="fds-plan-selector mt-4"><legend>Escolha seu plano</legend><label><input type="radio" name="plan" defaultChecked /><span><strong>Anual</strong><small>R$ 59,88 por ano</small></span><b>R$ 4,99/mês</b></label><label><input type="radio" name="plan" /><span><strong>Mensal</strong><small>Cancele quando quiser</small></span><b>R$ 7,99/mês</b></label></fieldset>
      <div className="mt-3 grid gap-2">{["Planejamento inteligente", "Moments ilimitados", "Lembretes avançados"].map((item, index) => <div className="fds-benefit-row" key={item}><span data-tone={index % 2 ? "growth" : "brand"}><Check className="size-4" /></span><strong>{item}</strong></div>)}</div>
      <FluvosButton className="mt-auto w-full" size="lg" onClick={() => setSubscribed(true)}>Continuar</FluvosButton>
    </div>
  )
}

export default function PaginasPage() {
  const { user } = useAuth()
  const [taskDone, setTaskDone] = useState(false)
  const [meetingTab, setMeetingTab] = useState<MeetingTab>("summary")
  const accountName = typeof user?.user_metadata?.full_name === "string" && user.user_metadata.full_name.trim()
    ? user.user_metadata.full_name
    : user?.email?.split("@")[0] || "Maria Oliveira"
  const providerAvatar = [user?.user_metadata?.avatar_url, user?.user_metadata?.picture]
    .find(value => typeof value === "string" && value.trim())
  const account: AccountIdentity = {
    name: accountName,
    avatarUrl: typeof providerAvatar === "string"
      ? providerAvatar
      : user
        ? null
        : "/design-system/fluvos/avatars/account-demo-v1.jpg",
  }

  return (
    <div>
      <header className="fds-page-header">
        <div><p className="fds-eyebrow">Templates de produto · revisão P01–P07</p><h1 className="fds-page-title">Fluxos vivos, não telas soltas.</h1><p className="fds-page-description">A identidade FluvOS agora conduz a experiência: white mode, orange e green vivos, navegação compacta por ícones e criação contextual em bottom sheet. Cada sequência mostra entrada, ação, estado e saída.</p></div>
        <FluvosBadge variant="success">320–390 px · white-only</FluvosBadge>
      </header>

      <FluvosSection eyebrow="Fluxo 01" title="Hoje → Agenda → Listas" description="O núcleo do aplicativo preserva alta densidade sem inflar componentes. Laranja conduz a ação; verde comunica avanço; azul só aparece quando informação ou IA exigem.">
        <FlowSteps items={["Entender o dia", "Ver o tempo", "Organizar contextos"]} />
        <div className="fds-device-grid">
          <Device title="Hoje — dashboard modular" reference="P01"><AppPrototype initial="home" account={account} /></Device>
          <Device title="Agenda — trilho temporal" reference="P02 · P07"><AppPrototype initial="schedule" account={account} /></Device>
          <Device title="Listas — contexto e gesto" reference="P06"><AppPrototype initial="lists" account={account} /></Device>
        </div>
      </FluvosSection>

      <FluvosSection eyebrow="Fluxo 02" title="Priorizar → criar → concluir" description="A criação nasce sobre a tela atual, compartilha formulário e voz e só salva após revisão. A tarefa focal oferece gesto e botão equivalente.">
        <FlowSteps items={["Abrir tarefa", "Subir a sheet", "Preencher ou falar", "Revisar e concluir"]} />
        <div className="fds-device-grid">
          <Device title="Tarefa focal — ativo e concluído" reference="P03"><TaskFocus done={taskDone} onDone={() => setTaskDone(value => !value)} account={account} /></Device>
          <Device title="Creation sheet — formulário" reference="P04"><CreationExample initial="task" /></Device>
          <Device title="Creation sheet — voz" reference="P04"><CreationExample initial="voice" /></Device>
        </div>
      </FluvosSection>

      <FluvosSection eyebrow="Fluxo 03" title="Moments → decisão → lixeira recuperável" description="A limpeza é uma sessão curta, visualmente focada e sem destruição silenciosa. Gestos aceleram; botões e confirmação encerram.">
        <FlowSteps items={["Explicar a sessão", "Revisar um item", "Adiar ou concluir", "Recuperar ou apagar"]} />
        <div className="fds-device-grid">
          <Device title="Introdução contextual" reference="P05"><MomentsIntro /></Device>
          <Device title="Deck de revisão" reference="P05"><MomentsReview /></Device>
          <Device title="Tutorial e remoção final" reference="P05 · P06"><TrashConfirmation /></Device>
        </div>
      </FluvosSection>

      <FluvosSection eyebrow="Fluxo 04" title="Entrar → compreender → ampliar" description="Onboarding, reunião assistida e Premium compartilham a mesma marca, mas mantêm semânticas distintas. O azul fica contido na IA; Premium usa a energia orange/green da FluvOS.">
        <FlowSteps items={["Entender a proposta", "Revisar uma reunião", "Confirmar ações", "Avaliar o plano"]} />
        <div className="fds-device-grid">
          <Device title="Onboarding FluvOS" reference="P03"><OnboardingScreen /></Device>
          <Device title="Reunião e IA revisável" reference="P07"><MeetingAiScreen tab={meetingTab} onTabChange={setMeetingTab} /></Device>
          <Device title="Premium sem amarelo concorrente" reference="P06"><PremiumScreen /></Device>
        </div>
      </FluvosSection>

      <FluvosSection eyebrow="Contratos de estado" title="A interface sempre explica o que mudou." description="Esses estados são obrigatórios antes de um template virar tela de produto.">
        <div className="fds-state-contracts">
          {["Selecionado: forma + ícone + nome acessível", "Concluído: confirmação + desfazer", "Voz: ouvindo, pausado, processando e erro", "IA: fonte, seleção, confirmação e rollback", "Exclusão: revelar, mover para lixeira e confirmar", "Sheet: foco contido, retorno e descarte protegido"].map((item, index) => <FluvosCard className="fds-state-contract" key={item}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item}</strong></FluvosCard>)}
        </div>
      </FluvosSection>
    </div>
  )
}
