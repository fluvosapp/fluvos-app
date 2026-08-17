import Image from "next/image"

import { FluvosBadge, FluvosPanel, FluvosSection } from "@/componentes/design-system/fluvos/primitives"
import { fluvosBrandAssets } from "@/lib/design-system/fluvos"

const useMatrix = [
  ["App icon e avatar", "symbol-framed", "Pine ou orange sobre branco"],
  ["Header compacto", "symbol-open", "Pine; orange em momento de marca"],
  ["Splash e institucional", "lockup-stacked", "Versão de maior contraste"],
  ["Navegação e assinatura", "lockup-horizontal", "Pine no canvas branco"],
] as const

export default function MarcaPage() {
  return (
    <div>
      <header className="fds-page-header">
        <div>
          <p className="fds-eyebrow">Identidade oficial</p>
          <h1 className="fds-page-title">A marca é um master, não uma aproximação.</h1>
          <p className="fds-page-description">Dezesseis arquivos oficiais cobrem quatro composições e quatro famílias cromáticas. O lettering nunca é redigitado, reconstruído ou recolorido por CSS.</p>
        </div>
        <FluvosBadge variant="brand">16 masters catalogados</FluvosBadge>
      </header>

      <FluvosSection eyebrow="Masters" title="Biblioteca oficial completa" description="Cada tile usa o PNG fornecido, com dimensões intrínsecas registradas. O fundo escuro aparece apenas como superfície de demonstração da marca clara; não define um modo escuro do produto.">
        <div className="fds-logo-grid">
          {fluvosBrandAssets.map((asset) => {
            const inverse = asset.tone === "cream"
            return (
              <article className="fds-logo-tile" key={asset.id}>
                <div className="fds-logo-stage rounded-2xl" style={{ background: inverse ? "#213638" : "#FFFFFF" }}>
                  <Image src={asset.path} alt={asset.name} fill sizes="(max-width: 720px) 100vw, 25vw" className="object-contain p-5" />
                </div>
                <div className="fds-logo-meta"><p>{asset.name}</p><code className="fds-token-code">{asset.id} · {asset.width}×{asset.height}</code></div>
              </article>
            )
          })}
        </div>
      </FluvosSection>

      <FluvosSection eyebrow="Arquitetura" title="Quatro composições, quatro contextos">
        <div className="fds-token-list">
          {useMatrix.map(([context, asset, rule]) => (
            <div className="fds-token-row" key={context}><strong>{context}</strong><code className="fds-token-code">{asset}</code><span className="fds-token-description">{rule}</span></div>
          ))}
        </div>
      </FluvosSection>

      <FluvosSection eyebrow="Aplicação" title="Área de proteção e contraste" description="Use como referência uma área livre mínima igual à espessura visual do traço externo do símbolo. Em layouts responsivos, reduza o lockup antes de reduzir essa proteção.">
        <div className="fds-grid-2">
          <FluvosPanel className="p-8">
            <p className="fds-eyebrow">Correto</p>
            <div className="relative mt-6 aspect-[16/6] rounded-3xl border border-dashed border-[#A9B8B5] bg-white p-8"><Image src="/design-system/fluvos/brand/lockup-horizontal-pine.png" alt="Lockup horizontal FluvOS em pine com área de proteção" fill className="object-contain p-10" sizes="50vw" /></div>
            <ul className="mt-5 space-y-2 text-sm leading-6 text-[var(--fds-text-secondary)]"><li>• Master oficial e proporção preservada.</li><li>• Contraste simples e área livre estável.</li><li>• Um único lockup por região.</li></ul>
          </FluvosPanel>
          <FluvosPanel className="p-8">
            <p className="fds-eyebrow">Não fazer</p>
            <div className="mt-6 grid gap-3 text-sm">
              {["Redigitar o lettering em 42dot Sans", "Esticar, inclinar, cortar ou rotacionar", "Aplicar sombra, contorno, glow ou gradiente", "Recolorir fora dos masters aprovados", "Usar cream sobre branco ou ink sobre pine", "Empilhar símbolo e lockup como marcas separadas"].map((rule) => <div key={rule} className="rounded-2xl bg-[#FFF1F0] p-4 font-semibold text-[#8F1D16]">× {rule}</div>)}
            </div>
          </FluvosPanel>
        </div>
      </FluvosSection>

      <FluvosSection eyebrow="Acessibilidade" title="Nome, função e uso assistivo">
        <div className="fds-grid-3">
          <FluvosPanel className="p-6"><h3 className="font-bold">Marca com destino</h3><p className="mt-2 text-sm leading-6 text-[var(--fds-text-secondary)]">Em link para o início, use “FluvOS — início”.</p></FluvosPanel>
          <FluvosPanel className="p-6"><h3 className="font-bold">Marca decorativa</h3><p className="mt-2 text-sm leading-6 text-[var(--fds-text-secondary)]">Se o nome já estiver adjacente, use alt vazio para evitar repetição.</p></FluvosPanel>
          <FluvosPanel className="p-6"><h3 className="font-bold">Imagem com texto</h3><p className="mt-2 text-sm leading-6 text-[var(--fds-text-secondary)]">O lettering é marca, não substituto para headings ou conteúdo real.</p></FluvosPanel>
        </div>
      </FluvosSection>
    </div>
  )
}
