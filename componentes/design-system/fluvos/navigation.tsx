"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BookImage,
  Boxes,
  Component,
  GalleryHorizontalEnd,
  Images,
  LayoutDashboard,
  Palette,
  Shapes,
  type LucideIcon,
} from "lucide-react"

import { fluvosDesignSystemSections } from "@/lib/design-system/fluvos"

const icons: Record<(typeof fluvosDesignSystemSections)[number][2], LucideIcon> = {
  overview: LayoutDashboard,
  brand: Shapes,
  tokens: Palette,
  components: Component,
  patterns: Boxes,
  pages: GalleryHorizontalEnd,
  states: BookImage,
  references: Images,
}

export function DesignSystemNavigation({ mobile = false }: { readonly mobile?: boolean }) {
  const pathname = usePathname()

  return (
    <nav
      className={mobile ? "fds-mobile-nav" : "fds-sidebar-nav"}
      aria-label={mobile ? "Seções do design system" : undefined}
    >
      {fluvosDesignSystemSections.map(([href, label, key]) => {
        const Icon = icons[key]
        const active = href === "/design-system" ? pathname === href : pathname.startsWith(href)

        return (
          <Link
            key={href}
            href={href}
            className={mobile ? undefined : "fds-sidebar-link"}
            data-active={active}
            aria-current={active ? "page" : undefined}
            aria-label={mobile ? label : undefined}
            title={mobile ? label : undefined}
          >
            <Icon className="size-4" aria-hidden="true" />
            <span className={mobile ? "fds-mobile-nav-label" : undefined}>{label}</span>
          </Link>
        )
      })}
    </nav>
  )
}
