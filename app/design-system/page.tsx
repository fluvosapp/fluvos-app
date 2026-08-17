import Link from "next/link"
import {
  ArrowRight,
  Bell,
  BookOpen,
  CalendarDays,
  Check,
  Clock3,
  Home,
  MessageSquare,
  Search,
  Sparkles,
  Target,
} from "lucide-react"

import {
  BrandMark,
  FluvosAvatarStack,
  FluvosBadge,
  FluvosButton,
  FluvosCard,
  FluvosPanel,
  FluvosProgress,
  FluvosSection,
  ReferenceCard,
  StateRow,
} from "@/componentes/design-system/fluvos/primitives"
import { fluvosPriorityReferences } from "@/lib/design-system/fluvos"

const principles = [
  ["01", "White mode estrutural", "Canvas e cards brancos. Ink e pine sustentam leitura; não existe tema escuro."],
  ["02", "Cor viva com função", "Orange marca e ação; green crescimento; blue informação; purple IA; red risco."],
  ["03", "Operação antes do efeito", "Agenda, tarefa, progresso e decisão permanecem escaneáveis e acessíveis."],
  ["04", "Gestos aceleram", "Swipe, drag e voz sempre preservam botão, teclado, revisão e desfazer."],
] as const

export default function DesignSystemOverviewPage() {
  return (
    <div>
      <section className="fds-hero fds-progressive-gradient-blur rounded-[var(--fds-radius-panel)]">
        <div className="fds-progressive-gradient-blur__chromatic" aria-hidden="true" />
        <div className="fds-hero-copy">
          <FluvosBadge variant="brand">FluvOS Design System · v0.1</FluvosBadge>
          <h1 className="fds-hero-title">
            Fluidez para organizar. <em>Energia para agir.</em>
          </h1>
          <p className="fds-hero-description">
            Um sistema white-only construído a partir da identidade oficial, das sete
            referências prioritárias e de quinze pins secundários — convertido em tokens,
            componentes e padrões reais.
          </p>
          <div className="fds-hero-actions">
            <FluvosButton asChild size="lg">
              <Link href="/design-system/tokens">
                Explorar fundações <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </FluvosButton>
            <FluvosButton asChild size="lg" variant="outline">
              <Link href="/design-system/referencias">Ver referências</Link>
            </FluvosButton>
          </div>
        </div>

        <div className="fds-phone" aria-label="Preview móvel do FluvOS">
          <div className="fds-phone-screen">
            <div className="flex items-center justify-between px-2">
              <BrandMark
                className="h-9 w-9"
                asset="symbol-open-pine"
              />
              <div className="flex gap-2">
                <button className="grid size-11 place-items-center rounded-full bg-white shadow-[var(--fds-shadow-1)]" aria-label="Buscar">
                  <Search className="size-4" />
                </button>
                <button className="relative grid size-11 place-items-center rounded-full bg-white shadow-[var(--fds-shadow-1)]" aria-label="Notificações, uma não lida">
                  <Bell className="size-4" />
                  <span className="absolute right-2.5 top-2 size-2 rounded-full bg-[#D92D20]" />
                </button>
              </div>
            </div>

            <div className="mt-6 rounded-3xl bg-[#0D1F22] p-5 text-white">
              <p className="text-xs font-semibold text-white/70">Quinta, 15 de janeiro</p>
              <h2 className="mt-2 text-2xl font-bold leading-tight">Seu dia em fluxo</h2>
              <div className="mt-5 flex items-center justify-between gap-3">
                <div>
                  <p className="text-3xl font-bold tabular-nums">21:30</p>
                  <p className="text-xs text-white/65">horas investidas</p>
                </div>
                <div className="grid size-16 place-items-center rounded-full border-[7px] border-[#0162FB] border-r-white/20">
                  <Clock3 className="size-5" aria-hidden="true" />
                </div>
              </div>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-3">
              <FluvosCard accent="brand" className="p-4">
                <Sparkles className="size-5 text-[#D43F00]" aria-hidden="true" />
                <p className="mt-6 text-sm font-bold">Planejar agora</p>
                <p className="mt-1 text-xs text-[var(--fds-text-secondary)]">3 prioridades</p>
              </FluvosCard>
              <FluvosCard accent="growth" className="p-4">
                <Target className="size-5 text-[#087E4C]" aria-hidden="true" />
                <p className="mt-6 text-sm font-bold">Foco profundo</p>
                <p className="mt-1 text-xs text-[var(--fds-text-secondary)]">2 sessões</p>
              </FluvosCard>
            </div>

            <FluvosCard className="mt-3 p-4" elevated>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <FluvosBadge variant="info">Em andamento</FluvosBadge>
                  <h3 className="mt-3 text-base font-bold">Fundamentos de Produto</h3>
                  <p className="text-xs text-[var(--fds-text-secondary)]">28 lições · 17 horas</p>
                </div>
                <FluvosAvatarStack count={5} label="5 participantes" />
              </div>
              <div className="mt-4">
                <FluvosProgress value={23} max={28} label="Progresso do curso" tone="info" />
              </div>
            </FluvosCard>

            <div className="fds-bottom-nav mt-4">
              <span className="fds-bottom-nav-item" data-active="true"><Home className="size-4" /><span>Hoje</span></span>
              <span className="fds-bottom-nav-item"><CalendarDays className="size-4" /><span>Agenda</span></span>
              <span className="fds-bottom-nav-item"><Target className="size-4" /><span>Foco</span></span>
              <span className="fds-bottom-nav-item"><BookOpen className="size-4" /><span>Cursos</span></span>
              <span className="fds-bottom-nav-item"><MessageSquare className="size-4" /><span>IA</span></span>
            </div>
          </div>
        </div>
      </section>

      <FluvosSection
        eyebrow="Autoridade"
        title="Uma hierarquia explícita evita decisões por gosto"
        description="Quando as fontes divergem, a direção atual do produto prevalece: sans-serif via Google Fonts, white mode e cores digitais mais vivas."
      >
        <div className="fds-priority-rule">
          <strong>Produto atual</strong><ArrowRight className="size-4" />
          <strong>Identidade FluvOS</strong><ArrowRight className="size-4" />
          <strong>P01–P07</strong><ArrowRight className="size-4" />
          <strong>Sistema consolidado</strong><ArrowRight className="size-4" />
          <span>Pins 01–15</span>
        </div>
        <div className="fds-grid-4">
          {principles.map(([number, title, description]) => (
            <FluvosPanel key={number} className="fds-principle">
              <span className="fds-principle-number">{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </FluvosPanel>
          ))}
        </div>
      </FluvosSection>

      <FluvosSection
        eyebrow="Cobertura"
        title="Do token ao fluxo composto"
        description="O catálogo demonstra fundações, primitives, estados e composições — não apenas uma coleção de swatches."
      >
        <div className="fds-grid-3">
          <FluvosPanel className="p-6">
            <FluvosBadge variant="brand">Fundações</FluvosBadge>
            <h3 className="mt-5 text-xl font-bold">Três camadas de tokens</h3>
            <p className="mt-2 text-sm leading-6 text-[var(--fds-text-secondary)]">Primitivo → semântico → componente, com white mode como contrato único.</p>
            <div className="mt-5 space-y-2 text-sm font-semibold">
              <p>orange-600</p><p className="pl-4 text-[var(--fds-action)]">interactive-primary</p><p className="pl-8">button-primary-bg</p>
            </div>
          </FluvosPanel>
          <FluvosPanel className="p-6">
            <FluvosBadge variant="success">Componentes</FluvosBadge>
            <h3 className="mt-5 text-xl font-bold">Estados que contam a verdade</h3>
            <div className="mt-4">
              <StateRow label="Sincronização" state="Concluída" done />
              <StateRow label="Revisão de IA" state="Pendente" />
              <StateRow label="Publicação" state="Bloqueada" />
            </div>
          </FluvosPanel>
          <FluvosPanel className="p-6">
            <FluvosBadge variant="ai">Padrões</FluvosBadge>
            <h3 className="mt-5 text-xl font-bold">IA revisável por padrão</h3>
            <p className="mt-2 text-sm leading-6 text-[var(--fds-text-secondary)]">Origem, transformação e resultado permanecem próximos. Nenhuma mudança importante é aplicada silenciosamente.</p>
            <FluvosButton className="mt-5 w-full" variant="info"><Sparkles className="size-4" />Revisar sugestão</FluvosButton>
          </FluvosPanel>
        </div>
      </FluvosSection>

      <FluvosSection
        eyebrow="Prioridade máxima"
        title="Sete referências definem a linguagem operacional"
        description="As imagens abaixo são autoridade para densidade, forma, navegação, tarefas, calendário, progresso e IA. Cor e marca foram reinterpretadas para o FluvOS."
      >
        <div className="fds-reference-grid">
          {fluvosPriorityReferences.map((reference, index) => (
            <ReferenceCard
              key={reference.id}
              {...reference}
              description={reference.contribution}
              priority={index === 0}
            />
          ))}
        </div>
        <div className="fds-inset-note">
          As marcas, textos, personagens, preços e ilustrações presentes nas referências não
          são assets do produto. O sistema extrai estrutura e comportamento; não copia autoria.
        </div>
      </FluvosSection>

      <FluvosSection
        eyebrow="Próximos mapas"
        title="Navegue pelo sistema vivo"
        description="Cada área expõe o contrato e o exemplo visual correspondente."
      >
        <div className="fds-grid-3">
          {[
            ["/design-system/marca", "Marca", "16 masters, combinações e antiusos"],
            ["/design-system/tokens", "Fundações", "Cores, tipo, espaço, gradiente e motion"],
            ["/design-system/componentes", "Componentes", "Primitives e estados reais"],
            ["/design-system/padroes", "Padrões", "Dashboard, agenda, voz, Premium e IA"],
            ["/design-system/paginas", "Páginas", "Previews responsivos do produto"],
            ["/design-system/referencias", "Referências", "P01–P07 e pins 01–15"],
          ].map(([href, title, description]) => (
            <Link key={href} href={href} className="group">
              <FluvosPanel className="h-full p-5 transition-transform duration-200 group-hover:-translate-y-1 group-hover:shadow-[var(--fds-shadow-2)]">
                <div className="flex items-center justify-between gap-4">
                  <div><h3 className="font-bold">{title}</h3><p className="mt-1 text-sm text-[var(--fds-text-secondary)]">{description}</p></div>
                  <ArrowRight className="size-5 shrink-0 text-[var(--fds-action)]" />
                </div>
              </FluvosPanel>
            </Link>
          ))}
        </div>
      </FluvosSection>
    </div>
  )
}
