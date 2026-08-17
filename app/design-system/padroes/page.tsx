import { ArrowRight, ChevronRight, Clock3, Crown, Mic, Sparkles, Trash2 } from "lucide-react"

import { FluvosBadge, FluvosButton, FluvosCard, FluvosPanel, FluvosProgress, FluvosSection, StateRow } from "@/componentes/design-system/fluvos/primitives"

const patterns = [
  ["P01", "Dashboard modular", "Resumo diário + agenda + progresso + ação imediata", "Priorizar; aprofundar sob demanda"],
  ["P02", "Agenda temporal", "Date strip + grade horária + eventos sobrepostos", "Tempo é o eixo; cor diferencia categoria"],
  ["P03", "Task deck", "Uma tarefa focal + detalhes + conclusão", "Gesto acelera; botão preserva acesso"],
  ["P04", "Creation sheet", "Tipo + campos + metadados + voz", "Input rápido; revisão antes de salvar"],
  ["P05", "Moments", "Fila de manutenção + decisão + lixeira", "Excluir é recuperável e explicado"],
  ["P06", "Listas e Premium", "Categorias + favorito + planos + benefícios", "Valor antes de preço; seleção explícita"],
  ["P07", "Reunião e IA", "Contexto + resumo + transformação + action items", "IA mostra origem, saída e confirmação"],
] as const

const operationalFlows = [
  ["F01", "Planejar o dia", "Hoje → resumo vivo → tarefa focal → concluir → desfazer", "P01 · P03"],
  ["F02", "Criar trabalho", "CTA + → bottom sheet → tarefa/lista/voz → revisão → salvar", "P04"],
  ["F03", "Administrar o tempo", "Mês → data → agenda → reunião → resumo → ações de IA", "P02 · P07"],
  ["F04", "Limpar pendências", "Moments → decisão → lixeira temporária → recuperar ou confirmar", "P05 · P06"],
  ["F05", "Organizar contextos", "Listas → favorito/detalhe → swipe revelado → exclusão recuperável", "P06"],
  ["F06", "Ampliar capacidades", "Recurso bloqueado → benefícios → plano → compra/restauração", "P06"],
] as const

export default function PadroesPage() {
  return (
    <div>
      <header className="fds-page-header"><div><p className="fds-eyebrow">Composição</p><h1 className="fds-page-title">Sete padrões, uma lógica operacional.</h1><p className="fds-page-description">P01–P07 deixam de ser screenshots inspiracionais e viram contratos repetíveis de estrutura, hierarquia, comportamento, fallback e acessibilidade.</p></div><FluvosBadge variant="brand">P01–P07</FluvosBadge></header>

      <FluvosSection eyebrow="Mapa" title="Padrões rastreáveis">
        <div className="fds-token-list">{patterns.map(([id,name,formula,rule]) => <div className="fds-token-row" key={id}><div><FluvosBadge variant="brand">{id}</FluvosBadge><strong className="ml-2">{name}</strong></div><span>{formula}</span><span className="fds-token-description">{rule}</span></div>)}</div>
      </FluvosSection>

      <FluvosSection eyebrow="Operacional" title="Seis jornadas de ponta a ponta" description="Cada padrão entra em uma jornada observável. A tela deixa de ser um destino isolado e passa a declarar disparador, estado intermediário, confirmação e recuperação.">
        <div className="fds-flow-contract-grid">{operationalFlows.map(([id,name,path,refs]) => <FluvosCard className="fds-flow-contract" key={id}><div className="flex items-center justify-between gap-3"><FluvosBadge variant="brand">{id}</FluvosBadge><span className="text-[10px] font-bold text-[var(--fds-text-secondary)]">{refs}</span></div><h3>{name}</h3><p>{path}</p></FluvosCard>)}</div>
      </FluvosSection>

      <FluvosSection eyebrow="P01" title="Dashboard modular" description="O primeiro viewport responde: o que acontece hoje, o que devo fazer agora e como estou avançando.">
        <FluvosPanel className="fds-progressive-gradient-blur p-6"><div className="fds-progressive-gradient-blur__chromatic" aria-hidden="true" /><div className="fds-progressive-gradient-blur__content fds-grid-3"><FluvosCard className="p-5"><p className="text-sm font-bold">Hoje</p><p className="mt-2 text-4xl font-bold">5 tarefas</p><FluvosButton className="mt-6 w-full">Organizar agora</FluvosButton></FluvosCard><FluvosCard accent="growth" className="p-5"><FluvosBadge variant="success">Foco</FluvosBadge><p className="mt-4 text-3xl font-bold">02:30</p><div className="mt-6"><FluvosProgress value={68} label="Meta do dia" tone="growth" /></div></FluvosCard><FluvosCard accent="brand" className="p-5"><FluvosBadge variant="brand">Próximo</FluvosBadge><h3 className="mt-4 font-bold">Reunião de produto</h3><p className="mt-2 text-sm text-[var(--fds-text-secondary)]">09:15–10:00 · 6 pessoas</p><FluvosButton className="mt-5">Abrir agenda</FluvosButton></FluvosCard></div></FluvosPanel>
      </FluvosSection>

      <FluvosSection eyebrow="P02" title="Agenda temporal" description="Seleção de data, rótulos de hora e eventos compartilham o mesmo eixo. O layout reflowa em mobile sem depender de hover.">
        <FluvosPanel className="p-6"><div className="flex gap-2 overflow-x-auto">{["13 Ter","14 Qua","15 Qui","16 Sex","17 Sáb"].map((day,index)=><button key={day} className="min-h-[72px] min-w-20 rounded-3xl border border-[var(--fds-border)] px-3 text-sm font-bold" style={index===2?{background:"#D43F00",color:"white",borderColor:"#D43F00"}:undefined}>{day}</button>)}</div><div className="mt-6 grid grid-cols-[52px_1fr] gap-x-3"><span className="text-xs text-[var(--fds-text-secondary)]">09h</span><FluvosCard accent="brand" className="p-4"><p className="text-xs">09:15–11:45</p><h3 className="mt-1 font-bold">Introdução ao Front-End</h3></FluvosCard><span className="mt-5 text-xs text-[var(--fds-text-secondary)]">13h</span><FluvosCard accent="growth" className="mt-5 p-4"><p className="text-xs">12:45–15:00</p><h3 className="mt-1 font-bold">Desenvolvimento de produto</h3></FluvosCard></div></FluvosPanel>
      </FluvosSection>

      <FluvosSection eyebrow="P03" title="Task deck" description="A tarefa atual recebe profundidade; próximas cartas aparecem apenas como contexto. Swipe não substitui controles explícitos.">
        <div className="fds-grid-2"><FluvosPanel className="relative min-h-[390px] overflow-hidden bg-[var(--fds-surface-low)] p-8"><div className="absolute inset-x-16 bottom-8 top-20 translate-y-8 rounded-[32px] bg-white/70 shadow-[var(--fds-shadow-1)]" /><FluvosCard elevated className="relative p-6"><FluvosBadge variant="brand">Alta prioridade</FluvosBadge><h3 className="mt-5 text-2xl font-bold">Repor mantimentos</h3><p className="mt-2 text-[var(--fds-text-secondary)]">Faça uma compra rápida de itens frescos.</p><p className="mt-5 flex items-center gap-2 text-sm"><Clock3 className="size-4" />10:00–11:30</p><FluvosButton className="mt-7 w-full" size="lg">Marcar como concluída <ArrowRight className="size-4" /></FluvosButton></FluvosCard></FluvosPanel><FluvosPanel className="p-6"><h3 className="font-bold">Alternativas equivalentes</h3><StateRow label="Teclado" state="Enter / Espaço" done /><StateRow label="Botão visível" state="Obrigatório" done /><StateRow label="Swipe" state="Aprimoramento" done /><StateRow label="Desfazer" state="Temporário" done /></FluvosPanel></div>
      </FluvosSection>

      <FluvosSection eyebrow="P04" title="Creation sheet e voz" description="A camada nasce do contexto, preserva o fundo e mantém uma única decisão primária.">
        <FluvosPanel className="bg-[var(--fds-surface-low)] p-6"><div className="mx-auto max-w-2xl rounded-[32px] bg-white p-6 shadow-[var(--fds-shadow-3)]"><div className="mx-auto h-1 w-12 rounded-full bg-[var(--fds-border-strong)]" /><div className="mt-5 flex gap-2"><FluvosBadge variant="brand">Tarefa</FluvosBadge><FluvosBadge>Lista</FluvosBadge><FluvosBadge><Mic className="size-3" />Voz</FluvosBadge></div><h3 className="mt-7 text-xl font-bold">O que você quer criar?</h3><div className="mt-4 rounded-2xl border-2 border-[var(--fds-action)] p-4 text-[var(--fds-text-secondary)]">Eu quero…</div><div className="mt-5 flex flex-wrap gap-2"><FluvosBadge>Hoje</FluvosBadge><FluvosBadge>Prioridade</FluvosBadge><FluvosBadge>Responsável</FluvosBadge></div><FluvosButton className="mt-7 w-full" size="lg">Revisar e criar</FluvosButton></div></FluvosPanel>
      </FluvosSection>

      <FluvosSection eyebrow="P05" title="Moments: manutenção recuperável" description="Itens antigos são tratados um a um. Snooze, manter e excluir são explícitos; a lixeira exige confirmação posterior.">
        <div className="fds-grid-2"><FluvosPanel className="fds-progressive-gradient-blur fds-progressive-gradient-blur--green p-7"><div className="fds-progressive-gradient-blur__chromatic" aria-hidden="true" /><div className="fds-progressive-gradient-blur__content"><FluvosBadge variant="success">5 Moments restantes</FluvosBadge><FluvosCard className="mt-8 rotate-[-2deg] p-6 text-[var(--fds-ink)]"><FluvosBadge variant="neutral">Adiada por 5 dias</FluvosBadge><h3 className="mt-5 text-2xl font-bold">Revisar planejamento</h3><p className="mt-2 text-[var(--fds-text-secondary)]">Essa tarefa ainda é relevante?</p><div className="mt-6 flex gap-3"><FluvosButton variant="outline" className="flex-1">Depois</FluvosButton><FluvosButton variant="success" className="flex-1">Manter</FluvosButton></div></FluvosCard></div></FluvosPanel><FluvosPanel className="p-7"><FluvosBadge variant="danger"><Trash2 className="size-3" />2 na lixeira</FluvosBadge><h3 className="mt-5 text-xl font-bold">Exclusão em duas etapas</h3><p className="mt-2 text-sm leading-6 text-[var(--fds-text-secondary)]">A tarefa sai do fluxo, mas permanece recuperável até a confirmação final.</p><FluvosButton className="mt-6" variant="danger">Abrir lixeira</FluvosButton></FluvosPanel></div>
      </FluvosSection>

      <FluvosSection eyebrow="P06" title="Listas e Premium" description="A lista prioriza reconhecimento rápido. O paywall explica capacidade antes de pedir escolha.">
        <div className="fds-grid-2"><FluvosPanel className="p-4">{["Trabalho","Finanças","Esporte","Casa","Pessoal"].map((item,index)=><div key={item} className="flex min-h-[72px] items-center gap-3 border-b border-[var(--fds-border)] last:border-0"><span className="grid size-11 place-items-center rounded-2xl bg-[var(--fds-surface-low)] font-bold">{item[0]}</span><span className="flex-1"><strong>{item}</strong><span className="block text-sm text-[var(--fds-text-secondary)]">{index+1} tarefas vinculadas</span></span><ChevronRight className="size-4" /></div>)}</FluvosPanel><FluvosPanel className="p-6"><FluvosBadge variant="premium"><Crown className="size-3" />FluvOS Premium</FluvosBadge><h3 className="mt-5 text-2xl font-bold">Mais controle, sem mais ruído.</h3><div className="mt-5"><StateRow label="Planejamento inteligente" state="Incluído" done /><StateRow label="Moments ilimitados" state="Incluído" done /><StateRow label="Lembretes avançados" state="Incluído" done /></div><FluvosButton className="mt-6 w-full" size="lg">Continuar</FluvosButton></FluvosPanel></div>
      </FluvosSection>

      <FluvosSection eyebrow="P07" title="Reunião e IA revisável" description="Resumo, transcrição e ações derivadas mantêm vínculo com a reunião original. Sugestão nunca vira tarefa sem confirmação.">
        <FluvosPanel className="p-6"><div className="flex flex-wrap items-start justify-between gap-4"><div><FluvosBadge variant="ai"><Sparkles className="size-3" />AI Assist</FluvosBadge><h3 className="mt-4 text-2xl font-bold">Daily de produto</h3><p className="mt-2 text-sm text-[var(--fds-text-secondary)]">08:15–08:30 · 6 participantes</p></div><FluvosButton variant="info"><Sparkles className="size-4" />Gerar ações</FluvosButton></div><div className="mt-6 grid gap-3">{["Revisar ajustes visuais","Validar regressões responsivas","Preparar teaser de lançamento"].map((item)=><label key={item} className="flex min-h-14 items-center gap-3 rounded-2xl border border-[var(--fds-border)] p-4"><input type="checkbox" /><span className="flex-1 font-semibold">{item}</span><FluvosBadge variant="ai">Sugestão</FluvosBadge></label>)}</div></FluvosPanel>
      </FluvosSection>
    </div>
  )
}
