export type FluvosColorToken = {
  readonly name: string
  readonly value: `#${string}`
  readonly role: string
  readonly foreground?: "ink" | "white"
}

export const fluvosOfficialColors = [
  {
    name: "Heritage Orange",
    value: "#BD6D3B",
    role: "Assinatura institucional e masters oficiais",
    foreground: "ink",
  },
  {
    name: "Pine",
    value: "#213638",
    role: "Marca, headings e iconografia institucional",
    foreground: "white",
  },
  {
    name: "Ink",
    value: "#0D1F22",
    role: "Texto principal e contraste máximo",
    foreground: "white",
  },
  {
    name: "Cream",
    value: "#F8F0E4",
    role: "Calor editorial e versão clara da marca",
    foreground: "ink",
  },
] as const satisfies readonly FluvosColorToken[]

export const fluvosNeutralColors = [
  ["White", "#FFFFFF", "Canvas e superfície principal"],
  ["Neutral 50", "#FAFBFA", "Região alternada"],
  ["Neutral 100", "#F4F7F6", "Superfície baixa"],
  ["Neutral 200", "#E8EEEC", "Trilha e hover discreto"],
  ["Neutral 300", "#DCE4E2", "Borda e divisor"],
  ["Neutral 400", "#A9B8B5", "Borda forte"],
  ["Neutral 500", "#647678", "Placeholder e disabled com contraste AA"],
  ["Neutral 600", "#5A6E70", "Metadado intermediário"],
  ["Neutral 700", "#42585A", "Texto secundário"],
  ["Neutral 800", "#2B4244", "Texto forte secundário"],
  ["Neutral 900", "#213638", "Pine institucional"],
  ["Neutral 950", "#0D1F22", "Ink principal"],
] as const

export const fluvosOrangeColors = [
  ["Orange 50", "#FFF4ED", "Tint local"],
  ["Orange 100", "#FFE4D5", "Badge local"],
  ["Orange 200", "#FFC4A5", "Borda e track"],
  ["Orange 300", "#FF9A68", "Ilustração"],
  ["Orange 400", "#FF7137", "Gradiente"],
  ["Orange 500", "#FF5A1F", "Vivid brand"],
  ["Orange 600", "#D43F00", "Ação primária AA"],
  ["Orange 700", "#B93600", "Hover, pressed e texto sobre tint AA"],
  ["Orange 800", "#8F2A0B", "Ênfase alta"],
  ["Orange 900", "#73260F", "Contraste máximo"],
] as const

export const fluvosGreenColors = [
  ["Green 50", "#EDFFF6", "Tint local"],
  ["Green 100", "#D2FFE8", "Badge local"],
  ["Green 200", "#9BFFD0", "Borda e track"],
  ["Green 300", "#55F3AA", "Visualização"],
  ["Green 400", "#20DF86", "Progresso vivo"],
  ["Green 500", "#00C975", "Crescimento vivid"],
  ["Green 600", "#00A861", "Progresso forte"],
  ["Green 700", "#087E4C", "Ação de sucesso AA"],
  ["Green 800", "#0C633F", "Texto de sucesso"],
  ["Green 900", "#0D5136", "Contraste máximo"],
] as const

export const fluvosSupportColors = [
  ["Information", "#0162FB", "Informação, link e foco"],
  ["Cyan", "#00C2FF", "Voz e visualização informativa contextual"],
  ["AI", "#7A3FF2", "Transformação assistida"],
  ["Danger", "#D92D20", "Erro e exclusão"],
  ["Warning", "#8F2A0B", "Aviso pela família orange"],
  ["Premium", "#FF7137", "Premium alinhado à energia da marca"],
] as const

export const fluvosGradients = [
  {
    name: "Progress brand",
    value: "linear-gradient(90deg, #D43F00, #FF7137)",
    use: "Preenchimento de progresso orientado à marca",
  },
  {
    name: "Progress growth",
    value: "linear-gradient(90deg, #087E4C, #00C975)",
    use: "Hábitos, metas e conclusão",
  },
  {
    name: "Progress information",
    value: "linear-gradient(90deg, #0162FB, #00C2FF)",
    use: "Voz e processamento informativo contextual",
  },
] as const

export type FluvosProgressiveGradientBlurToken = {
  readonly name: string
  readonly cssVariable: `--fds-${string}`
  readonly value: string
  readonly fallback?: string
  readonly role: string
}

/**
 * Material white-first que traduz o orange/green oficial para uma aplicação
 * digital viva. O gradiente preserva o canvas branco e deve ficar atrás de
 * conteúdo protegido; nunca substitui uma superfície de leitura.
 */
export const fluvosProgressiveGradientBlurTokens = [
  {
    name: "Orange vivid",
    cssVariable: "--fds-pgb-orange",
    value: "oklch(0.7 0.22 43)",
    fallback: "#FF5A1F",
    role: "Âncora cromática de marca derivada do heritage orange",
  },
  {
    name: "Orange warm",
    cssVariable: "--fds-pgb-orange-warm",
    value: "oklch(0.76 0.18 55)",
    fallback: "#FF7137",
    role: "Transição quente da camada cromática",
  },
  {
    name: "Green vivid",
    cssVariable: "--fds-pgb-green",
    value: "oklch(0.75 0.2 151)",
    fallback: "#00C975",
    role: "Âncora de crescimento e fluidez",
  },
  {
    name: "Green deep",
    cssVariable: "--fds-pgb-green-deep",
    value: "oklch(0.58 0.15 153)",
    fallback: "#087E4C",
    role: "Profundidade verde sem criar uma superfície dark",
  },
  {
    name: "Orange vertical color field",
    cssVariable: "--fds-pgb-gradient",
    value:
      "linear-gradient(to bottom in oklab, oklch(1 0 0 / 0) 0%, oklch(0.91 0.08 50 / 0.36) 18%, var(--fds-pgb-orange-warm) 46%, var(--fds-pgb-orange) 72%, oklch(0.62 0.14 49) 100%)",
    fallback:
      "linear-gradient(to bottom, rgb(255 255 255 / 0) 0%, rgb(255 224 208 / 0.36) 18%, rgb(255 113 55 / 0.86) 46%, rgb(255 90 31 / 0.98) 72%, rgb(189 109 59) 100%)",
    role: "Campo cromático monohue orange; evita a aparência de mesh e preserva branco no topo",
  },
  {
    name: "Green vertical color field",
    cssVariable: "--fds-pgb-gradient-green",
    value:
      "linear-gradient(to bottom in oklab, oklch(1 0 0 / 0) 0%, oklch(0.92 0.07 151 / 0.34) 18%, oklch(0.82 0.17 151 / 0.84) 46%, var(--fds-pgb-green) 72%, var(--fds-pgb-green-deep) 100%)",
    fallback:
      "linear-gradient(to bottom, rgb(255 255 255 / 0) 0%, rgb(210 255 232 / 0.34) 18%, rgb(32 223 134 / 0.82) 46%, rgb(0 201 117 / 0.98) 72%, rgb(8 126 76) 100%)",
    role: "Variante monohue green para crescimento e sessões de progresso",
  },
  {
    name: "Blur radius",
    cssVariable: "--fds-pgb-blur",
    value: "clamp(32px, 6vw, 72px)",
    role: "Difusão responsiva aplicada somente ao pseudo-elemento",
  },
  {
    name: "Progressive mask",
    cssVariable: "--fds-pgb-mask",
    value:
      "linear-gradient(to bottom, transparent 0%, rgb(0 0 0 / 0.24) 22%, black 58%, black 100%)",
    role: "Aumenta a opacidade do blur em direção à borda inferior",
  },
] as const satisfies readonly FluvosProgressiveGradientBlurToken[]

/** Classes públicas do Progressive Gradient Blur. */
export const fluvosProgressiveGradientBlurClasses = {
  root: "fds-progressive-gradient-blur",
  chromaticLayer: "fds-progressive-gradient-blur__chromatic",
  content: "fds-progressive-gradient-blur__content",
  compact: "fds-progressive-gradient-blur--compact",
  green: "fds-progressive-gradient-blur--green",
  /** @deprecated Use `green`. Mantido para consumidores da classe legada. */
  reverse: "fds-progressive-gradient-blur--reverse",
  ambient: "fds-progressive-gradient-blur--ambient",
} as const

export const fluvosTypography = [
  ["Display hero", "42dot Sans", "48–88 / 0.96", "700–800", "Hero institucional"],
  ["Display", "42dot Sans", "40–64 / 1.00", "700–800", "Onboarding"],
  ["Heading 1", "42dot Sans", "32–48 / 1.08", "700", "Título de página"],
  ["Heading 2", "42dot Sans", "24–32 / 1.15", "700", "Seção editorial"],
  ["Heading 3", "42dot Sans", "20 / 26", "700", "Card e dialog"],
  ["Body large", "42dot Sans", "18 / 28", "400–500", "Intro"],
  ["Body", "42dot Sans", "16 / 24", "400", "Texto padrão"],
  ["Body small", "42dot Sans", "14 / 20", "400–500", "Metadados"],
  ["Label", "42dot Sans", "14 / 18", "600–700", "Botão e chip"],
  ["Caption", "42dot Sans", "12 / 16", "500", "Status e tempo"],
] as const

export const fluvosSpacing = [4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80] as const
export const fluvosRadii = [
  ["xs", 8, "Badge"],
  ["sm", 12, "Input compacto"],
  ["md", 16, "Card utilitário"],
  ["lg", 20, "Card principal"],
  ["xl", 24, "Sheet e painel"],
  ["2xl", 32, "Hero e glass"],
  ["pill", 999, "Botão e navegação"],
] as const

export const fluvosShadows = [
  ["Shadow 1", "0 1px 2px rgb(13 31 34 / 0.08)", "Separação mínima"],
  ["Shadow 2", "0 8px 24px rgb(13 31 34 / 0.12)", "Card flutuante"],
  ["Shadow 3", "0 20px 60px rgb(13 31 34 / 0.18)", "Modal e sheet"],
] as const

export const fluvosMotion = [
  ["Instant", "80ms", "Press visual"],
  ["Fast", "120ms", "Ícone e toggle"],
  ["Feedback", "160ms", "Botão e seleção"],
  ["Standard", "200ms", "Controle local"],
  ["Enter", "280ms", "Sheet e card"],
  ["Emphasis", "400ms", "Onboarding one-shot"],
] as const

export const fluvosZIndex = [
  ["base", "0", "Conteúdo comum"],
  ["raised", "10", "Card elevado local"],
  ["sticky", "20", "Header e rail"],
  ["overlay", "40", "Scrim"],
  ["navigation", "50", "Navegação flutuante"],
  ["modal", "60", "Dialog e sheet"],
  ["toast", "70", "Feedback transitório"],
] as const

export const fluvosSemanticTokens = [
  ["canvas", "neutral.white", "Fundo global white-only"],
  ["surface.default", "neutral.white", "Cards e sheets"],
  ["surface.subtle", "neutral.100", "Região secundária"],
  ["text.primary", "brand.ink", "Texto principal"],
  ["text.secondary", "neutral.700", "Descrição e metadado"],
  ["border.default", "neutral.300", "Separação estrutural"],
  ["interactive.primary", "orange.600", "Ação principal acessível"],
  ["interactive.focus", "support.information", "Foco de teclado"],
  ["feedback.success", "green.700", "Conclusão e confirmação"],
  ["feedback.danger", "support.danger", "Erro e exclusão"],
  ["content.ai", "support.ai", "Conteúdo transformado por IA"],
  ["content.premium", "support.premium", "Plano e recurso premium"],
] as const

/** Núcleo sólido dos custom properties públicos; gradientes, motion e elevação têm registros próprios. */
export const fluvosFunctionalColorTokens = [
  ["--fds-brand-orange", "#BD6D3B", "Assinatura institucional"],
  ["--fds-brand-pine", "#213638", "Marca e iconografia"],
  ["--fds-brand-ink", "#0D1F22", "Texto de contraste máximo"],
  ["--fds-brand-cream", "#F8F0E4", "Calor editorial"],
  ["--fds-brand-vivid", "#FF5A1F", "Acento vivo da marca"],
  ["--fds-growth-vivid", "#00C975", "Acento vivo de crescimento"],
  ["--fds-canvas", "#FFFFFF", "Canvas white-only"],
  ["--fds-surface", "#FFFFFF", "Cards, sheets e controles"],
  ["--fds-on-action", "#FFFFFF", "Conteúdo sobre ação preenchida"],
  ["--fds-avatar-ring", "#FFFFFF", "Anel de separação de avatar"],
  ["--fds-surface-low", "#F4F7F6", "Superfície secundária"],
  ["--fds-border", "#DCE4E2", "Borda padrão"],
  ["--fds-border-strong", "#A9B8B5", "Borda forte"],
  ["--fds-ink", "#0D1F22", "Texto principal"],
  ["--fds-text-secondary", "#42585A", "Texto secundário"],
  ["--fds-text-tertiary", "#647678", "Placeholder AA"],
  ["--fds-action", "#D43F00", "Ação primária"],
  ["--fds-action-hover", "#B93600", "Hover e texto sobre action soft"],
  ["--fds-action-soft", "#FFE4D5", "Tint interativo"],
  ["--fds-brand-soft", "#FFF4ED", "Seleção discreta do catálogo"],
  ["--fds-action-border", "rgb(255 90 31 / 0.25)", "Borda interativa"],
  ["--fds-success-action", "#087E4C", "Ação de sucesso"],
  ["--fds-success-action-hover", "#0C633F", "Hover de sucesso"],
  ["--fds-success-soft", "#D2FFE8", "Tint de sucesso"],
  ["--fds-success-border", "rgb(0 201 117 / 0.30)", "Borda de sucesso"],
  ["--fds-info", "#0162FB", "Informação e foco"],
  ["--fds-info-hover", "#0054D6", "Hover informativo"],
  ["--fds-info-ink", "#0054D6", "Texto sobre tint informativo"],
  ["--fds-info-soft", "#E2EDFF", "Tint informativo"],
  ["--fds-info-border", "rgb(1 98 251 / 0.25)", "Borda informativa"],
  ["--fds-ai", "#7A3FF2", "Assistência por IA"],
  ["--fds-ai-strong", "#6A32DA", "Texto de IA"],
  ["--fds-ai-border", "rgb(122 63 242 / 0.25)", "Borda de IA"],
  ["--fds-danger", "#D92D20", "Erro e exclusão"],
  ["--fds-danger-hover", "#B42318", "Hover de perigo"],
  ["--fds-danger-soft", "#FFF1F0", "Tint de perigo"],
  ["--fds-danger-border", "rgb(217 45 32 / 0.25)", "Borda de perigo"],
  ["--fds-premium", "#FF7137", "Acento Premium"],
  ["--fds-premium-ink", "#8F2A0B", "Texto Premium"],
  ["--fds-premium-border", "rgb(255 113 55 / 0.35)", "Borda Premium"],
] as const

export const fluvosComponentTokens = [
  ["button.primary.bg", "interactive.primary", "CTA preenchido"],
  ["button.primary.fg", "neutral.white", "Texto do CTA"],
  ["button.primary.radius", "radius.pill", "Forma do CTA"],
  ["card.bg", "surface.default", "Base de cards"],
  ["card.border", "border.default", "Contorno dos cards"],
  ["card.radius", "radius.xl", "Forma padrão"],
  ["input.height", "52px", "Controle mobile confortável"],
  ["input.focus", "interactive.focus", "Borda e ring"],
  ["appNav.active.bg", "orange.600", "Item selecionado no produto"],
  ["appNav.active.fg", "neutral.white", "Ícone ativo no produto"],
  ["catalogNav.active.bg", "orange.50", "Seleção discreta do catálogo"],
  ["catalogNav.active.fg", "orange.700", "Ícone e texto ativo do catálogo com AA"],
  ["progress.brand.fill", "gradient.progress-brand", "Progresso orientado à marca"],
  ["progress.info.fill", "gradient.progress-information", "Progresso de curso"],
  ["progress.growth.fill", "gradient.progress-growth", "Hábitos e metas"],
] as const

export type FluvosBrandAssetId =
  | "symbol-framed-orange" | "symbol-framed-pine" | "symbol-framed-cream" | "symbol-framed-ink"
  | "symbol-open-orange" | "symbol-open-pine" | "symbol-open-cream" | "symbol-open-ink"
  | "lockup-stacked-orange" | "lockup-stacked-pine" | "lockup-stacked-cream" | "lockup-stacked-ink"
  | "lockup-horizontal-orange" | "lockup-horizontal-pine" | "lockup-horizontal-cream" | "lockup-horizontal-black"

type FluvosBrandAsset = {
  readonly id: FluvosBrandAssetId
  readonly name: string
  readonly family: "symbol-framed" | "symbol-open" | "lockup-stacked" | "lockup-horizontal"
  readonly tone: "orange" | "pine" | "cream" | "ink" | "black"
  readonly path: string
  readonly width: number
  readonly height: number
}

export const fluvosBrandAssets = [
  { id: "symbol-framed-orange", name: "Símbolo framed — orange", family: "symbol-framed", tone: "orange", path: "/design-system/fluvos/brand/symbol-framed-orange.png", width: 767, height: 788 },
  { id: "symbol-framed-pine", name: "Símbolo framed — pine", family: "symbol-framed", tone: "pine", path: "/design-system/fluvos/brand/symbol-framed-pine.png", width: 768, height: 788 },
  { id: "symbol-framed-cream", name: "Símbolo framed — cream", family: "symbol-framed", tone: "cream", path: "/design-system/fluvos/brand/symbol-framed-cream.png", width: 768, height: 787 },
  { id: "symbol-framed-ink", name: "Símbolo framed — ink", family: "symbol-framed", tone: "ink", path: "/design-system/fluvos/brand/symbol-framed-ink.png", width: 767, height: 787 },
  { id: "symbol-open-orange", name: "Símbolo open — orange", family: "symbol-open", tone: "orange", path: "/design-system/fluvos/brand/symbol-open-orange.png", width: 767, height: 787 },
  { id: "symbol-open-pine", name: "Símbolo open — pine", family: "symbol-open", tone: "pine", path: "/design-system/fluvos/brand/symbol-open-pine.png", width: 767, height: 787 },
  { id: "symbol-open-cream", name: "Símbolo open — cream", family: "symbol-open", tone: "cream", path: "/design-system/fluvos/brand/symbol-open-cream.png", width: 768, height: 787 },
  { id: "symbol-open-ink", name: "Símbolo open — ink", family: "symbol-open", tone: "ink", path: "/design-system/fluvos/brand/symbol-open-ink.png", width: 768, height: 787 },
  { id: "lockup-stacked-orange", name: "Lockup stacked — orange", family: "lockup-stacked", tone: "orange", path: "/design-system/fluvos/brand/lockup-stacked-orange.png", width: 768, height: 787 },
  { id: "lockup-stacked-pine", name: "Lockup stacked — pine", family: "lockup-stacked", tone: "pine", path: "/design-system/fluvos/brand/lockup-stacked-pine.png", width: 767, height: 787 },
  { id: "lockup-stacked-cream", name: "Lockup stacked — cream", family: "lockup-stacked", tone: "cream", path: "/design-system/fluvos/brand/lockup-stacked-cream.png", width: 767, height: 787 },
  { id: "lockup-stacked-ink", name: "Lockup stacked — ink", family: "lockup-stacked", tone: "ink", path: "/design-system/fluvos/brand/lockup-stacked-ink.png", width: 768, height: 787 },
  { id: "lockup-horizontal-orange", name: "Lockup horizontal — orange", family: "lockup-horizontal", tone: "orange", path: "/design-system/fluvos/brand/lockup-horizontal-orange.png", width: 1949, height: 594 },
  { id: "lockup-horizontal-pine", name: "Lockup horizontal — pine", family: "lockup-horizontal", tone: "pine", path: "/design-system/fluvos/brand/lockup-horizontal-pine.png", width: 1949, height: 594 },
  { id: "lockup-horizontal-cream", name: "Lockup horizontal — cream", family: "lockup-horizontal", tone: "cream", path: "/design-system/fluvos/brand/lockup-horizontal-cream.png", width: 1949, height: 594 },
  { id: "lockup-horizontal-black", name: "Lockup horizontal — black", family: "lockup-horizontal", tone: "black", path: "/design-system/fluvos/brand/lockup-horizontal-black.png", width: 1949, height: 595 },
] as const satisfies readonly FluvosBrandAsset[]

export const fluvosBrandAssetById = Object.fromEntries(
  fluvosBrandAssets.map((asset) => [asset.id, asset])
) as Record<FluvosBrandAssetId, (typeof fluvosBrandAssets)[number]>

export const fluvosPriorityReferences = [
  {
    id: "P01",
    title: "Dashboard de estudo",
    image: "/design-system/fluvos/references/priority/P01-dashboard-learning.png",
    contribution: "Dashboard modular, agenda, progresso, glass e bottom navigation",
  },
  {
    id: "P02",
    title: "Calendário diário",
    image: "/design-system/fluvos/references/priority/P02-calendar-course-components.png",
    contribution: "Date strip, time grid, event cards e card de curso",
  },
  {
    id: "P03",
    title: "Onboarding e tarefas",
    image: "/design-system/fluvos/references/priority/P03-eversync-onboarding-tasks.png",
    contribution: "CTA expressivo, task deck, categorias e conclusão por gesto",
  },
  {
    id: "P04",
    title: "Criação e voz",
    image: "/design-system/fluvos/references/priority/P04-task-creation-voice.png",
    contribution: "Creation sheet, metadata chips, captura e revisão de voz",
  },
  {
    id: "P05",
    title: "Moments e limpeza",
    image: "/design-system/fluvos/references/priority/P05-moments-cleanup.png",
    contribution: "Swipe deck, lixeira recuperável, tutorial e confirmação",
  },
  {
    id: "P06",
    title: "Listas e Premium",
    image: "/design-system/fluvos/references/priority/P06-lists-premium.png",
    contribution: "Category rows, favoritos, swipe reveal e plan selector",
  },
  {
    id: "P07",
    title: "Agenda e IA",
    image: "/design-system/fluvos/references/priority/P07-schedule-meeting-ai.png",
    contribution: "Agenda, meeting detail, resumo e ações de IA revisáveis",
  },
] as const

export const fluvosPinterestReferences = [
  { id: "01", title: "Modern Mobile App Ideas", contribution: "Linguagem editorial e módulos mobile", image: "/design-system/fluvos/references/pinterest/01-433049320444857157.jpg" },
  { id: "02", title: "Exoplan onboarding", contribution: "Onboarding atmosférico e respiro", image: "/design-system/fluvos/references/pinterest/02-11259067814725431.jpg" },
  { id: "03", title: "UX Design Principles", contribution: "Hierarquia de tarefa e ação principal", image: "/design-system/fluvos/references/pinterest/03-776519160793213228.jpg" },
  { id: "04", title: "Luminar welcome", contribution: "Fundo imersivo e CTA isolado", image: "/design-system/fluvos/references/pinterest/04-962151907912347503.jpg" },
  { id: "05", title: "Effect panel", contribution: "Profundidade, glow pontual e sheet", image: "/design-system/fluvos/references/pinterest/05-1142788474381121982.jpg" },
  { id: "06", title: "Mobile App Features", contribution: "Cards de atividade e composer", image: "/design-system/fluvos/references/pinterest/06-1108941108256975989.jpg" },
  { id: "07", title: "Alert AI PA", contribution: "Dado hero, insight e alerta", image: "/design-system/fluvos/references/pinterest/07-1087830485019681698.png" },
  { id: "08", title: "Timeline UI", contribution: "Lista temporal e estados", image: "/design-system/fluvos/references/pinterest/08-720153796706695745.jpg" },
  { id: "09", title: "Fitness onboarding", contribution: "Carrossel com peek e CTA", image: "/design-system/fluvos/references/pinterest/09-754775218840541259.jpg" },
  { id: "10", title: "Invite UI", contribution: "Sheet claro; conteúdo interno não confiável", image: "/design-system/fluvos/references/pinterest/10-861102391293554179.jpg" },
  { id: "11", title: "Connected health", contribution: "Foto, dados e orientação contextual", image: "/design-system/fluvos/references/pinterest/11-1109292951993702767.jpg" },
  { id: "12", title: "Digital wallet", contribution: "Gradiente ciano e autenticação", image: "/design-system/fluvos/references/pinterest/12-898397825674327629.jpg" },
  { id: "13", title: "Meetings UI", contribution: "Vídeo, glass e agenda", image: "/design-system/fluvos/references/pinterest/13-606086062399319968.jpg" },
  { id: "14", title: "AI hub", contribution: "Chat, voz e ações sobre resposta", image: "/design-system/fluvos/references/pinterest/14-661255157831044813.webp" },
  { id: "15", title: "Voice assistant", contribution: "Orb, foco e composer de voz", image: "/design-system/fluvos/references/pinterest/15-134193263892521805.jpg" },
] as const

export const fluvosDesignSystemSections = [
  ["/design-system", "Visão geral", "overview"],
  ["/design-system/marca", "Marca", "brand"],
  ["/design-system/tokens", "Fundações", "tokens"],
  ["/design-system/componentes", "Componentes", "components"],
  ["/design-system/padroes", "Padrões", "patterns"],
  ["/design-system/paginas", "Páginas", "pages"],
  ["/design-system/estados", "Estados", "states"],
  ["/design-system/referencias", "Referências", "references"],
] as const
