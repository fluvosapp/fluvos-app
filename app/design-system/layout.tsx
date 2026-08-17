import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

import { BrandMark } from "@/componentes/design-system/fluvos/primitives"
import { DesignSystemNavigation } from "@/componentes/design-system/fluvos/navigation"

import "./fluvos-design-system.css"

export const metadata: Metadata = {
  title: "Design System | FluvOS",
  description: "Catálogo vivo de marca, tokens, componentes e padrões do FluvOS.",
  robots: { index: false, follow: false },
}

export default function DesignSystemLayout({
  children,
}: {
  readonly children: React.ReactNode
}) {
  if (process.env.NODE_ENV === "production") {
    notFound()
  }

  return (
    <div className="fluvos-design-system">
      <a
        href="#fds-main"
        className="sr-only z-[100] rounded-full bg-white px-4 py-3 font-bold focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Ir para o conteúdo
      </a>

      <div className="fds-layout">
        <aside className="fds-sidebar" aria-label="Navegação do design system">
          <div className="fds-sidebar-brand">
            <Link href="/design-system" aria-label="FluvOS Design System — início">
              <BrandMark
                className="h-8 w-28"
                asset="lockup-horizontal-pine"
                purpose="home-link"
                priority
              />
            </Link>
          </div>

          <DesignSystemNavigation />

          <div className="fds-sidebar-foot">
            <strong className="block text-[var(--fds-ink)]">White mode · v0.1</strong>
            42dot Sans via Google Fonts. Marca oficial, croma vivid e componentes
            rastreáveis.
          </div>
        </aside>

        <main id="fds-main" className="fds-content">
          <div className="fds-content-inner">{children}</div>
        </main>

        <DesignSystemNavigation mobile />
      </div>
    </div>
  )
}
