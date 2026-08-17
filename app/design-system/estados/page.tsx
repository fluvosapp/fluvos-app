import { AlertCircle, Check, CloudOff, Loader2, RotateCcw, Sparkles, Trash2 } from "lucide-react"

import { FluvosBadge, FluvosButton, FluvosCard, FluvosPanel, FluvosSection, StateRow } from "@/componentes/design-system/fluvos/primitives"

const matrix = [
  ["Default", "Informação e próxima ação disponíveis", "Sempre"],
  ["Hover", "Mudança de superfície sem deslocar layout", "Pointer"],
  ["Pressed", "Feedback tátil/visual imediato", "Pointer e touch"],
  ["Focus", "Ring azul de 2 px + offset", "Teclado"],
  ["Disabled", "Opacidade + sem evento + motivo adjacente", "Quando necessário"],
  ["Loading", "Rótulo preservado + aria-busy", "Ações assíncronas"],
  ["Success", "Confirmação textual e visual", "Fim válido"],
  ["Error", "Problema, impacto e recuperação", "Falha recuperável"],
] as const

export default function EstadosPage() {
  return (
    <div>
      <header className="fds-page-header"><div><p className="fds-eyebrow">Comportamento</p><h1 className="fds-page-title">Todo estado precisa dizer a verdade.</h1><p className="fds-page-description">Loading, vazio, erro, offline, revisão e desfazer são parte do componente. Cor nunca é o único sinal, e nenhuma automação importante termina sem resultado verificável.</p></div><FluvosBadge variant="success">WCAG 2.2 AA como contrato</FluvosBadge></header>

      <FluvosSection eyebrow="Interação" title="Matriz obrigatória">
        <div className="fds-token-list">{matrix.map(([state,behavior,channel])=><div className="fds-token-row" key={state}><strong>{state}</strong><span>{behavior}</span><span className="fds-token-description">{channel}</span></div>)}</div>
        <FluvosPanel className="p-6"><div className="flex flex-wrap gap-3"><FluvosButton>Default</FluvosButton><FluvosButton className="ring-2 ring-[#0162FB] ring-offset-2">Focus</FluvosButton><FluvosButton loading>Salvando</FluvosButton><FluvosButton disabled>Indisponível</FluvosButton><FluvosButton variant="success"><Check className="size-4" />Concluído</FluvosButton><FluvosButton variant="danger">Corrigir erro</FluvosButton></div></FluvosPanel>
      </FluvosSection>

      <FluvosSection eyebrow="Progresso" title="Três linguagens das referências prioritárias" description="Segmentos, pontos e slide/action não são intercambiáveis: cada forma responde uma pergunta e preserva um valor textual.">
        <div className="fds-grid-3">
          <FluvosPanel className="p-6"><FluvosBadge variant="info">Barra segmentada</FluvosBadge><h3 className="mt-4 text-lg font-bold">8 de 12 etapas</h3><div className="mt-6 flex gap-1" role="progressbar" aria-label="Etapas concluídas" aria-valuemin={0} aria-valuemax={12} aria-valuenow={8}>{Array.from({length:12}).map((_,i)=><span key={i} className="h-8 flex-1 rounded-full" style={{background:i<8?"#0162FB":"#E8EEEC"}} />)}</div><p className="mt-4 text-sm text-[var(--fds-text-secondary)]">Lições e passos contáveis · P01/P02.</p></FluvosPanel>
          <FluvosPanel className="p-6"><FluvosBadge variant="success">Pontos / steps</FluvosBadge><h3 className="mt-4 text-lg font-bold">Passo 4 de 8</h3><ol className="mt-8 flex items-center justify-between" aria-label="Progresso da revisão">{Array.from({length:8}).map((_,i)=><li key={i} aria-current={i===3?"step":undefined} className="grid size-8 place-items-center rounded-full border-2 text-xs font-bold" style={{background:i<3?"#00C975":i===3?"#FFFFFF":"#F4F7F6",borderColor:i<=3?"#00A861":"#DCE4E2",color:i<3?"#0D1F22":"#42585A"}}>{i<3?<Check className="size-4" />:i+1}</li>)}</ol><p className="mt-6 text-sm text-[var(--fds-text-secondary)]">Onboarding e Moments · P05.</p></FluvosPanel>
          <FluvosPanel className="p-6"><FluvosBadge variant="brand">Slide / action</FluvosBadge><h3 className="mt-4 text-lg font-bold">Arraste ou use o botão</h3><div className="mt-6 flex min-h-16 items-center rounded-full bg-[#0162FB] p-1.5 text-white"><button className="grid size-12 shrink-0 place-items-center rounded-full bg-white/20" aria-label="Marcar tarefa como concluída"><Check className="size-5" /></button><strong className="flex-1 text-center text-sm">Marcar como concluída</strong></div><p className="mt-4 text-sm text-[var(--fds-text-secondary)]">Conclusão focal com alternativa explícita · P03.</p></FluvosPanel>
        </div>
      </FluvosSection>

      <FluvosSection eyebrow="Sistema" title="Loading e skeleton" description="Skeleton replica o contorno do conteúdo para reduzir mudança de layout. Spinner aparece apenas dentro da ação que aguarda.">
        <div className="fds-grid-2"><FluvosPanel className="p-6"><div className="animate-pulse"><div className="h-5 w-28 rounded-full bg-[var(--fds-border)]" /><div className="mt-5 h-9 w-3/4 rounded-xl bg-[var(--fds-border)]" /><div className="mt-3 h-4 w-full rounded-full bg-[var(--fds-surface-low)]" /><div className="mt-2 h-4 w-2/3 rounded-full bg-[var(--fds-surface-low)]" /><div className="mt-6 h-12 rounded-full bg-[var(--fds-border)]" /></div></FluvosPanel><FluvosPanel className="grid place-items-center p-10 text-center"><Loader2 className="size-8 animate-spin text-[#0162FB]" /><p className="mt-4 font-bold">Sincronizando calendário</p><p className="mt-2 text-sm text-[var(--fds-text-secondary)]">Você pode continuar usando o app.</p></FluvosPanel></div>
      </FluvosSection>

      <FluvosSection eyebrow="Zero data" title="Vazio é orientação, não decoração">
        <div className="fds-grid-3"><FluvosPanel className="p-7 text-center"><div className="mx-auto grid size-14 place-items-center rounded-2xl bg-[#EDFFF6]"><Check className="size-6 text-[#087E4C]" /></div><h3 className="mt-5 font-bold">Tudo em dia</h3><p className="mt-2 text-sm text-[var(--fds-text-secondary)]">Nenhuma tarefa pendente para hoje.</p><FluvosButton className="mt-5" variant="outline">Planejar amanhã</FluvosButton></FluvosPanel><FluvosPanel className="p-7 text-center"><div className="mx-auto grid size-14 place-items-center rounded-2xl bg-[#EEF4FF]"><Sparkles className="size-6 text-[#7A3FF2]" /></div><h3 className="mt-5 font-bold">Ainda sem resumo</h3><p className="mt-2 text-sm text-[var(--fds-text-secondary)]">Finalize a reunião para gerar um rascunho revisável.</p></FluvosPanel><FluvosPanel className="p-7 text-center"><div className="mx-auto grid size-14 place-items-center rounded-2xl bg-[#FFF4ED]"><Trash2 className="size-6 text-[#D43F00]" /></div><h3 className="mt-5 font-bold">Lixeira vazia</h3><p className="mt-2 text-sm text-[var(--fds-text-secondary)]">Itens removidos aparecerão aqui antes da exclusão final.</p></FluvosPanel></div>
      </FluvosSection>

      <FluvosSection eyebrow="Recuperação" title="Erro, offline e desfazer">
        <div className="fds-grid-3"><FluvosCard accent="danger" className="p-6"><AlertCircle className="size-6 text-[#D92D20]" /><h3 className="mt-4 font-bold">Não foi possível salvar</h3><p className="mt-2 text-sm text-[var(--fds-text-secondary)]">Seu rascunho continua neste dispositivo.</p><FluvosButton className="mt-5" variant="danger">Tentar novamente</FluvosButton></FluvosCard><FluvosCard className="p-6"><CloudOff className="size-6 text-[#42585A]" /><h3 className="mt-4 font-bold">Você está offline</h3><p className="mt-2 text-sm text-[var(--fds-text-secondary)]">Alterações entram na fila e sincronizam quando a conexão voltar.</p><FluvosBadge className="mt-5">3 alterações na fila</FluvosBadge></FluvosCard><FluvosCard accent="brand" className="p-6"><RotateCcw className="size-6 text-[#D43F00]" /><h3 className="mt-4 font-bold">Tarefa movida para a lixeira</h3><p className="mt-2 text-sm text-[var(--fds-text-secondary)]">A remoção final ainda não aconteceu.</p><FluvosButton className="mt-5" variant="outline"><RotateCcw className="size-4" />Desfazer</FluvosButton></FluvosCard></div>
      </FluvosSection>

      <FluvosSection eyebrow="IA" title="Draft → revisão → aplicado" description="O usuário vê o que foi gerado, compara com a origem e confirma a transformação.">
        <FluvosPanel className="p-6"><StateRow label="Transcrição original" state="Disponível" done /><StateRow label="Resumo gerado" state="Revisão" /><StateRow label="3 action items" state="Selecionar" /><StateRow label="Criação de tarefas" state="Não aplicada" /></FluvosPanel>
      </FluvosSection>
    </div>
  )
}
