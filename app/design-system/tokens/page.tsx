import {
  fluvosComponentTokens,
  fluvosGreenColors,
  fluvosMotion,
  fluvosNeutralColors,
  fluvosOfficialColors,
  fluvosOrangeColors,
  fluvosProgressiveGradientBlurTokens,
  fluvosRadii,
  fluvosSemanticTokens,
  fluvosShadows,
  fluvosSpacing,
  fluvosSupportColors,
  fluvosTypography,
  fluvosZIndex,
} from "@/lib/design-system/fluvos"
import { FluvosBadge, FluvosPanel, FluvosSection } from "@/componentes/design-system/fluvos/primitives"

function ColorGrid({ colors }: { readonly colors: readonly (readonly [string, `#${string}`, string])[] }) {
  return (
    <div className="fds-color-grid">
      {colors.map(([name, value, role]) => (
        <article className="fds-swatch" key={name}>
          <div className="fds-swatch-color" style={{ background: value }} />
          <div className="fds-swatch-copy">
            <p className="fds-swatch-name">{name}</p>
            <p className="fds-swatch-value">{value}</p>
            <p className="mt-2 text-xs leading-5 text-[var(--fds-text-secondary)]">{role}</p>
          </div>
        </article>
      ))}
    </div>
  )
}

function TokenRows({ rows }: { readonly rows: readonly (readonly [string, string, string])[] }) {
  return (
    <div className="fds-token-list">
      {rows.map(([name, value, description]) => (
        <div className="fds-token-row" key={name}>
          <span className="fds-token-name">{name}</span>
          <code className="fds-token-code">{value}</code>
          <span className="fds-token-description">{description}</span>
        </div>
      ))}
    </div>
  )
}

export default function TokensPage() {
  const official = fluvosOfficialColors.map(({ name, value, role }) => [name, value, role] as const)

  return (
    <div>
      <header className="fds-page-header">
        <div>
          <p className="fds-eyebrow">Fundações</p>
          <h1 className="fds-page-title">Tokens que carregam intenção.</h1>
          <p className="fds-page-description">Três camadas — primitivas, semânticas e de componente — mantêm cor, tipo, espaço, profundidade e movimento consistentes sem aliases arbitrários.</p>
        </div>
        <FluvosBadge variant="brand">White-only · 42dot Sans</FluvosBadge>
      </header>

      <FluvosSection eyebrow="Cor" title="Paleta oficial e croma digital" description="A paleta institucional permanece intacta nos masters. As escalas vivid ampliam a energia do produto e usam versões mais escuras quando o contraste exige.">
        <h3 className="text-lg font-bold">Cores oficiais da identidade</h3>
        <ColorGrid colors={official} />
        <div className="fds-inset-note"><strong>Regra:</strong> Heritage Orange é a assinatura institucional. Orange 500 é o pico visual; Orange 600 assume texto e CTA quando o contraste em branco é prioritário.</div>
        <h3 className="mt-6 text-lg font-bold">Neutros white-mode</h3>
        <ColorGrid colors={fluvosNeutralColors} />
        <h3 className="mt-6 text-lg font-bold">Orange vivid</h3>
        <ColorGrid colors={fluvosOrangeColors} />
        <h3 className="mt-6 text-lg font-bold">Green vivid</h3>
        <ColorGrid colors={fluvosGreenColors} />
        <h3 className="mt-6 text-lg font-bold">Cores de suporte</h3>
        <ColorGrid colors={fluvosSupportColors} />
      </FluvosSection>

      <FluvosSection eyebrow="Arquitetura" title="Primitivo → semântico → componente" description="Componentes consomem função, nunca pigmento cru. Isso preserva a paleta oficial e permite evolução sem drift.">
        <div className="fds-grid-2">
          <div><h3 className="mb-3 text-lg font-bold">Tokens semânticos</h3><TokenRows rows={fluvosSemanticTokens} /></div>
          <div><h3 className="mb-3 text-lg font-bold">Tokens de componente</h3><TokenRows rows={fluvosComponentTokens} /></div>
        </div>
      </FluvosSection>

      <FluvosSection eyebrow="Gradientes" title="Progressive Gradient Blur" description="O padrão oficial é um campo cromático vertical monohue com blur gaussiano progressivo controlado por máscara. Ele preserva uma área branca dominante e substitui os antigos mesh/freeform multicoloridos.">
        <div className="fds-grid-2">
          <article className="fds-progressive-gradient-blur fds-gradient-specimen">
            <div className="fds-progressive-gradient-blur__chromatic" aria-hidden="true" />
            <div className="fds-progressive-gradient-blur__content fds-gradient-specimen-copy"><FluvosBadge variant="brand">Orange · marca</FluvosBadge><h3>Clareza primeiro. Energia no momento certo.</h3><p>Branco → névoa transitória → orange vivid → heritage orange.</p></div>
          </article>
          <article className="fds-progressive-gradient-blur fds-progressive-gradient-blur--green fds-gradient-specimen">
            <div className="fds-progressive-gradient-blur__chromatic" aria-hidden="true" />
            <div className="fds-progressive-gradient-blur__content fds-gradient-specimen-copy"><FluvosBadge variant="success">Green · crescimento</FluvosBadge><h3>Avanço visível sem poluir a interface.</h3><p>Branco → névoa transitória → green vivid → green deep.</p></div>
          </article>
        </div>
        <div className="fds-inset-note"><strong>Não é mesh:</strong> não existem pontos cromáticos em uma malha 2D. O efeito combina gradiente vertical multistop, interpolação OKLab/OKLCH, camada duplicada com blur e <code>mask-image</code> progressiva. Conteúdo de leitura permanece acima do material e nunca recebe blur.</div>
        <div className="mt-5"><TokenRows rows={fluvosProgressiveGradientBlurTokens.map(token => [token.cssVariable, token.value, token.role] as const)} /></div>
      </FluvosSection>

      <FluvosSection eyebrow="Tipografia" title="Uma única voz sans-serif" description="42dot Sans, carregada pelo Google Fonts, cobre display, conteúdo, controles e dados. Nenhuma fonte serif é usada no produto.">
        <div className="fds-token-list">
          {fluvosTypography.map(([role, family, scale, weight, use]) => (
            <div className="fds-token-row" key={role}>
              <div><p className="fds-token-name">{role}</p><p className="fds-token-code">{family} · {weight}</p></div>
              <span className="font-bold" style={{ fontSize: role.startsWith("Display") ? 28 : role.startsWith("Heading") ? 21 : 16 }}>{role === "Display hero" ? "Organize o que importa." : "Fluidez para o seu dia."}</span>
              <span className="fds-token-description">{scale} · {use}</span>
            </div>
          ))}
        </div>
        <div className="fds-inset-note"><code>@import … family=42dot+Sans:wght@300;400;500;600;700;800</code>. Fallback: <code>system-ui, -apple-system, sans-serif</code>.</div>
      </FluvosSection>

      <FluvosSection eyebrow="Geometria" title="Espaço, raio e profundidade">
        <div className="fds-grid-3">
          <FluvosPanel className="p-6"><h3 className="text-lg font-bold">Escala de espaço</h3><div className="mt-5 flex flex-wrap items-end gap-3">{fluvosSpacing.map((value) => <span key={value} className="grid place-items-center bg-[#FF5A1F] text-[10px] font-bold text-white" style={{ width: Math.max(value, 24), height: Math.max(value, 24) }}>{value}</span>)}</div></FluvosPanel>
          <FluvosPanel className="p-6"><h3 className="text-lg font-bold">Raios</h3><div className="mt-5 grid grid-cols-2 gap-3">{fluvosRadii.map(([name, value, use]) => <div key={name} className="border border-[var(--fds-border)] bg-[var(--fds-surface-low)] p-4 text-xs" style={{ borderRadius: value }}><strong>{name} · {value}px</strong><br />{use}</div>)}</div></FluvosPanel>
          <FluvosPanel className="p-6"><h3 className="text-lg font-bold">Elevação</h3><div className="mt-5 space-y-4">{fluvosShadows.map(([name, value, use]) => <div key={name} className="rounded-2xl border border-[var(--fds-border)] bg-white p-4 text-xs" style={{ boxShadow: value }}><strong>{name}</strong> · {use}</div>)}</div></FluvosPanel>
        </div>
      </FluvosSection>

      <FluvosSection eyebrow="Motion" title="Movimento explica causa e efeito" description="Nada importante depende de animação. Reduced motion colapsa transições e gestos mantêm alternativas explícitas.">
        <div className="fds-grid-2"><div><h3 className="mb-3 text-lg font-bold">Durações</h3><TokenRows rows={fluvosMotion.map(([name, duration, use]) => [name, duration, use] as const)} /></div><div><h3 className="mb-3 text-lg font-bold">Camadas</h3><TokenRows rows={fluvosZIndex} /></div></div>
      </FluvosSection>
    </div>
  )
}
