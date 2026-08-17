import {
  Bell, CalendarDays, Check, ChevronRight, Clock3, Crown, MapPin, Mic,
  Pencil, Plus, Search, Sparkles, Target, Trash2, Video,
} from "lucide-react"

import {
  FluvosAvatarStack, FluvosBadge, FluvosButton, FluvosCard, FluvosInput,
  FluvosPanel, FluvosProgress, FluvosSection, StateRow,
} from "@/componentes/design-system/fluvos/primitives"

export default function ComponentesPage() {
  return (
    <div>
      <header className="fds-page-header">
        <div><p className="fds-eyebrow">Biblioteca</p><h1 className="fds-page-title">Componentes com contrato, não só aparência.</h1><p className="fds-page-description">Cada primitive expõe variantes fechadas, alvo mínimo, foco visível, loading, disabled e regras de conteúdo. Os compostos traduzem P01–P07 para o domínio FluvOS.</p></div>
        <FluvosBadge variant="success">CVA · tokens semânticos</FluvosBadge>
      </header>

      <FluvosSection eyebrow="Ações" title="Botões e badges" description="A ação principal é uma pill de alto contraste. Cor semanticamente especial só aparece quando o significado também é especial.">
        <FluvosPanel className="p-6"><div className="flex flex-wrap items-center gap-3"><FluvosButton>Primário</FluvosButton><FluvosButton variant="success">Concluir</FluvosButton><FluvosButton variant="info">Informação</FluvosButton><FluvosButton variant="secondary">Secundário</FluvosButton><FluvosButton variant="outline">Outline</FluvosButton><FluvosButton variant="ghost">Ghost</FluvosButton><FluvosButton variant="danger"><Trash2 className="size-4" />Excluir</FluvosButton><FluvosButton loading>Salvando</FluvosButton><FluvosButton disabled>Indisponível</FluvosButton><FluvosButton size="icon" aria-label="Adicionar"><Plus className="size-4" /></FluvosButton></div><div className="mt-6 flex flex-wrap gap-2"><FluvosBadge variant="brand">Prioridade</FluvosBadge><FluvosBadge variant="success">Concluído</FluvosBadge><FluvosBadge variant="info">Em curso</FluvosBadge><FluvosBadge variant="ai"><Sparkles className="size-3" />AI Assist</FluvosBadge><FluvosBadge variant="premium"><Crown className="size-3" />Premium</FluvosBadge><FluvosBadge variant="danger">Atrasado</FluvosBadge><FluvosBadge>Rascunho</FluvosBadge></div></FluvosPanel>
      </FluvosSection>

      <FluvosSection eyebrow="Entrada" title="Campos e metadados" description="Controles mobile usam 52 px e texto de 16 px. Label visível nunca é substituída por placeholder.">
        <div className="fds-grid-2">
          <FluvosPanel className="p-6"><label className="text-sm font-bold" htmlFor="task-title">Título da tarefa</label><FluvosInput id="task-title" className="mt-2" placeholder="O que você quer realizar?" /><p className="mt-2 text-xs text-[var(--fds-text-secondary)]">Até 80 caracteres. Exemplo de estado default.</p><label className="mt-5 block text-sm font-bold" htmlFor="task-error">Campo com erro</label><FluvosInput id="task-error" aria-invalid="true" aria-describedby="task-error-message" className="mt-2 border-[#D92D20]" defaultValue="" /><p id="task-error-message" className="mt-2 text-xs font-semibold text-[#B42318]">Informe um título para continuar.</p></FluvosPanel>
          <FluvosPanel className="p-6"><h3 className="font-bold">Metadata chips</h3><div className="mt-4 flex flex-wrap gap-2">{[[CalendarDays,"Hoje"],[Clock3,"10:00"],[MapPin,"Recife"],[Target,"Alta prioridade"]].map(([Icon,label]) => { const Glyph = Icon as typeof CalendarDays; return <button key={String(label)} className="inline-flex min-h-11 items-center gap-2 rounded-full border border-dashed border-[var(--fds-border-strong)] bg-white px-4 text-sm font-semibold"><Glyph className="size-4" />{String(label)}</button> })}</div><p className="mt-6 text-sm leading-6 text-[var(--fds-text-secondary)]">Chips abrem escolha contextual; não escondem valores irreversíveis e mantêm nome textual além do ícone.</p></FluvosPanel>
        </div>
      </FluvosSection>

      <FluvosSection eyebrow="Cards" title="Superfícies modulares" description="Bordas neutras dão estrutura; acentos são curtos e sem faixas laterais decorativas dominantes.">
        <div className="fds-grid-3">
          <FluvosCard accent="brand" elevated className="p-5"><div className="flex items-start justify-between"><div><FluvosBadge variant="brand">Prioridade</FluvosBadge><h3 className="mt-4 text-lg font-bold">Planejar apresentação</h3><p className="mt-1 text-sm text-[var(--fds-text-secondary)]">Preparar a narrativa do produto.</p></div><FluvosButton size="icon" variant="ghost" aria-label="Editar"><Pencil className="size-4" /></FluvosButton></div><div className="mt-5 flex items-center gap-2 text-xs text-[var(--fds-text-secondary)]"><Clock3 className="size-4" />09:15–10:45</div></FluvosCard>
          <FluvosCard accent="info" elevated className="p-5"><div className="flex justify-between gap-3"><div><FluvosBadge variant="info">Curso ativo</FluvosBadge><h3 className="mt-4 text-lg font-bold">Fundamentos de Produto</h3><p className="text-sm text-[var(--fds-text-secondary)]">28 lições · 17 horas</p></div><FluvosAvatarStack count={6} /></div><div className="mt-6"><FluvosProgress value={23} max={28} label="Lições concluídas" /></div></FluvosCard>
          <FluvosCard accent="growth" elevated className="p-5"><FluvosBadge variant="success">Foco</FluvosBadge><p className="mt-5 text-4xl font-bold tabular-nums">21:30</p><p className="text-sm text-[var(--fds-text-secondary)]">horas investidas</p><div className="mt-5"><FluvosProgress value={72} label="Meta semanal" tone="growth" /></div></FluvosCard>
        </div>
      </FluvosSection>

      <FluvosSection eyebrow="Agenda" title="Date strip e evento" description="A seleção usa forma, peso e cor. Horário permanece tabular e o card respeita truncamento e reflow.">
        <FluvosPanel className="p-6"><div className="flex gap-2 overflow-x-auto pb-3">{[["13","Ter"],["14","Qua"],["15","Qui"],["16","Sex"],["17","Sáb"]].map(([day,label], index) => <button key={day} data-active={index===2} className="grid min-h-[88px] min-w-[68px] place-items-center rounded-[28px] border border-[var(--fds-border)] bg-[var(--fds-surface-low)] text-sm data-[active=true]:border-[#0D1F22] data-[active=true]:bg-[#0D1F22] data-[active=true]:text-white"><strong className="text-xl">{day}</strong><span>{label}</span></button>)}</div><FluvosCard accent="info" className="mt-4 p-5"><div className="flex items-start justify-between gap-4"><div><p className="text-xs font-semibold text-[var(--fds-text-secondary)]">09:15–11:45</p><h3 className="mt-1 text-lg font-bold">Introdução ao desenvolvimento front-end</h3><div className="mt-4 flex items-center gap-3"><FluvosAvatarStack count={7} /><FluvosBadge variant="info"><Video className="size-3" />Sala ativa</FluvosBadge></div></div><FluvosButton size="icon" variant="info" aria-label="Entrar na reunião"><Video className="size-4" /></FluvosButton></div></FluvosCard></FluvosPanel>
      </FluvosSection>

      <FluvosSection eyebrow="Criação" title="Sheet e captura por voz">
        <div className="fds-grid-2">
          <FluvosPanel className="p-6"><div className="mx-auto mb-5 h-1 w-12 rounded-full bg-[var(--fds-border-strong)]" /><div className="flex gap-2"><FluvosBadge variant="info">Tarefa</FluvosBadge><FluvosBadge>Lista</FluvosBadge><FluvosBadge><Mic className="size-3" />Voz</FluvosBadge></div><label className="mt-6 block text-sm font-bold" htmlFor="create-title">Título</label><FluvosInput id="create-title" className="mt-2" placeholder="Eu quero…" /><FluvosButton className="mt-6 w-full" size="lg">Criar</FluvosButton></FluvosPanel>
          <FluvosPanel className="p-6 text-center"><div className="mx-auto grid size-32 place-items-center rounded-full border-[14px] border-[#DCEAFF] bg-white shadow-[var(--fds-shadow-2)]"><Mic className="size-10 text-[#0162FB]" /></div><h3 className="mt-6 text-lg font-bold">Ouvindo…</h3><p className="mt-2 text-sm text-[var(--fds-text-secondary)]">“Criar tarefa para revisar o lançamento amanhã”</p><div className="mt-6 flex gap-3"><FluvosButton variant="outline" className="flex-1">Pausar</FluvosButton><FluvosButton variant="info" className="flex-1">Revisar</FluvosButton></div></FluvosPanel>
        </div>
      </FluvosSection>

      <FluvosSection eyebrow="Listas" title="Category row e plan selector">
        <div className="fds-grid-2">
          <FluvosPanel className="overflow-hidden p-3">{[["Trabalho","6 tarefas","#D92D20"],["Finanças","1 tarefa","#00C975"],["Casa","7 tarefas","#0162FB"]].map(([name,count,color]) => <button key={name} className="flex min-h-[76px] w-full items-center gap-3 border-b border-[var(--fds-border)] px-3 text-left last:border-0"><span className="grid size-11 place-items-center rounded-2xl font-bold text-white" style={{background:String(color)}}>{String(name).slice(0,1)}</span><span className="min-w-0 flex-1"><strong className="block truncate">{name}</strong><span className="text-sm text-[var(--fds-text-secondary)]">{count}</span></span><ChevronRight className="size-5" /></button>)}</FluvosPanel>
          <FluvosPanel className="p-6"><FluvosBadge variant="premium"><Crown className="size-3" />Premium</FluvosBadge><h3 className="mt-4 text-xl font-bold">Escolha seu plano</h3><div className="mt-5 overflow-hidden rounded-2xl border border-[var(--fds-border)]"><label className="flex min-h-20 items-center gap-3 border-b border-[var(--fds-border)] p-4"><input type="radio" name="plan" defaultChecked /><span className="flex-1"><strong>Anual</strong><span className="block text-sm text-[var(--fds-text-secondary)]">Melhor valor</span></span><strong>R$ 59,88</strong></label><label className="flex min-h-20 items-center gap-3 p-4"><input type="radio" name="plan" /><span className="flex-1"><strong>Mensal</strong><span className="block text-sm text-[var(--fds-text-secondary)]">Flexível</span></span><strong>R$ 7,99</strong></label></div></FluvosPanel>
        </div>
      </FluvosSection>

      <FluvosSection eyebrow="Estados" title="Informação operacional visível"><FluvosPanel className="p-6"><StateRow label="Rascunho local" state="Salvo" done /><StateRow label="Sincronização" state="Em andamento" /><StateRow label="Sugestão de IA" state="Revisar" /><StateRow label="Publicação" state="Bloqueada" /></FluvosPanel></FluvosSection>

      <FluvosSection eyebrow="Shell" title="Busca, notificação e ação central"><div className="fds-bottom-nav max-w-2xl"><span className="fds-bottom-nav-item" data-active="true"><Target className="size-4" />Hoje</span><span className="fds-bottom-nav-item"><CalendarDays className="size-4" />Agenda</span><span className="fds-bottom-nav-item"><Plus className="size-4" />Criar</span><span className="fds-bottom-nav-item"><Search className="size-4" />Buscar</span><span className="fds-bottom-nav-item"><Bell className="size-4" />Alertas</span></div></FluvosSection>
    </div>
  )
}
