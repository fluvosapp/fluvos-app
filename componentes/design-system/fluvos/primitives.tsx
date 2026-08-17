"use client"

import Image from "next/image"
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { Check, Loader2 } from "lucide-react"

import {
  fluvosBrandAssetById,
  type FluvosBrandAssetId,
} from "@/lib/design-system/fluvos"
import { cn } from "@/lib/utilidades"

export function FluvosSection({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
}: {
  readonly id?: string
  readonly eyebrow?: string
  readonly title: string
  readonly description?: string
  readonly children: React.ReactNode
  readonly className?: string
}) {
  return (
    <section id={id} className={cn("fds-section scroll-mt-8", className)}>
      <header className="fds-section-header">
        {eyebrow && <p className="fds-eyebrow">{eyebrow}</p>}
        <h2 className="fds-section-title">{title}</h2>
        {description && <p className="fds-section-description">{description}</p>}
      </header>
      {children}
    </section>
  )
}

export function FluvosPanel({
  children,
  className,
  as: Component = "div",
}: {
  readonly children: React.ReactNode
  readonly className?: string
  readonly as?: "div" | "article" | "section"
}) {
  return <Component className={cn("fds-panel", className)}>{children}</Component>
}

const fluvosButtonVariants = cva(
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-bold transition-[transform,background-color,border-color,color] duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--fds-focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--fds-surface)] disabled:pointer-events-none disabled:opacity-45 active:translate-y-px",
  {
    variants: {
      variant: {
        primary:
          "bg-[var(--fds-action)] text-[var(--fds-on-action)] hover:bg-[var(--fds-action-hover)]",
        success:
          "bg-[var(--fds-success-action)] text-[var(--fds-on-action)] hover:bg-[var(--fds-success-action-hover)]",
        info: "bg-[var(--fds-info)] text-[var(--fds-on-action)] hover:bg-[var(--fds-info-hover)]",
        secondary:
          "bg-[var(--fds-surface-low)] text-[var(--fds-ink)] hover:bg-[var(--fds-border)]",
        outline:
          "border border-[var(--fds-border-strong)] bg-[var(--fds-surface)] text-[var(--fds-ink)] hover:border-[var(--fds-action)] hover:text-[var(--fds-action-hover)]",
        ghost:
          "bg-transparent text-[var(--fds-ink)] hover:bg-[var(--fds-surface-low)]",
        danger:
          "bg-[var(--fds-danger)] text-[var(--fds-on-action)] hover:bg-[var(--fds-danger-hover)]",
      },
      size: {
        sm: "min-h-11 px-4 text-xs",
        md: "min-h-11 px-5",
        lg: "min-h-[52px] px-7 text-base",
        icon: "size-11 p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
)

export interface FluvosButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof fluvosButtonVariants> {
  readonly asChild?: boolean
  readonly loading?: boolean
}

export const FluvosButton = React.forwardRef<HTMLButtonElement, FluvosButtonProps>(
  (
    { className, variant, size, asChild = false, loading = false, children, disabled, ...props },
    ref
  ) => {
    const unavailable = disabled || loading
    const buttonClassName = cn(
      fluvosButtonVariants({ variant, size }),
      asChild && unavailable && "pointer-events-none opacity-45",
      asChild && loading && "fds-button-as-child-loading",
      className
    )

    if (asChild) {
      return (
        <Slot
          ref={ref}
          className={buttonClassName}
          aria-busy={loading || undefined}
          aria-disabled={unavailable || undefined}
          tabIndex={unavailable ? -1 : props.tabIndex}
          {...props}
        >
          {children}
        </Slot>
      )
    }

    return (
      <button
        ref={ref}
        className={buttonClassName}
        aria-busy={loading || undefined}
        disabled={unavailable}
        {...props}
      >
        {loading && <Loader2 className="size-4 animate-spin" aria-hidden="true" />}
        {children}
      </button>
    )
  }
)

FluvosButton.displayName = "FluvosButton"

const fluvosBadgeVariants = cva(
  "inline-flex min-h-6 items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-bold leading-none",
  {
    variants: {
      variant: {
        brand: "border-[var(--fds-action-border)] bg-[var(--fds-surface)] text-[var(--fds-action-hover)]",
        success: "border-[var(--fds-success-border)] bg-[var(--fds-surface)] text-[var(--fds-success-action)]",
        info: "border-[var(--fds-info-border)] bg-[var(--fds-surface)] text-[var(--fds-info)]",
        ai: "border-[var(--fds-ai-border)] bg-[var(--fds-surface)] text-[var(--fds-ai-strong)]",
        premium: "border-[var(--fds-premium-border)] bg-[var(--fds-surface)] text-[var(--fds-premium-ink)]",
        danger: "border-[var(--fds-danger-border)] bg-[var(--fds-surface)] text-[var(--fds-danger-hover)]",
        neutral: "border-[var(--fds-border)] bg-[var(--fds-surface)] text-[var(--fds-text-secondary)]",
      },
    },
    defaultVariants: { variant: "neutral" },
  }
)

export function FluvosBadge({
  variant,
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & VariantProps<typeof fluvosBadgeVariants>) {
  return <span className={cn(fluvosBadgeVariants({ variant }), className)} {...props} />
}

export const FluvosCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    readonly accent?: "brand" | "growth" | "info" | "ai" | "danger"
    readonly elevated?: boolean
  }
>(({ className, accent, elevated = false, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative overflow-hidden rounded-[var(--fds-radius-card)] border border-[var(--fds-border)] bg-[var(--fds-surface)] text-[var(--fds-ink)]",
      elevated && "shadow-[var(--fds-shadow-2)]",
      className
    )}
    {...props}
  >
    {accent && <span className={cn("fds-card-accent", `fds-card-accent-${accent}`)} />}
    {children}
  </div>
))

FluvosCard.displayName = "FluvosCard"

export const FluvosInput = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => (
  <input
    ref={ref}
    className={cn(
      "min-h-[52px] w-full rounded-2xl border border-[var(--fds-border-strong)] bg-[var(--fds-surface)] px-4 text-base text-[var(--fds-ink)] outline-none placeholder:text-[var(--fds-text-tertiary)] focus:border-[var(--fds-focus)] focus:ring-2 focus:ring-[var(--fds-focus)]/15 disabled:bg-[var(--fds-surface-low)] disabled:text-[var(--fds-text-tertiary)]",
      className
    )}
    {...props}
  />
))

FluvosInput.displayName = "FluvosInput"

export function FluvosProgress({
  value,
  max = 100,
  label,
  tone = "info",
}: {
  readonly value: number
  readonly max?: number
  readonly label: string
  readonly tone?: "brand" | "growth" | "info"
}) {
  const safeMax = Math.max(1, max)
  const safeValue = Math.max(0, Math.min(safeMax, value))
  const percentage = (safeValue / safeMax) * 100

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between gap-4 text-xs font-semibold">
        <span>{label}</span>
        <span className="tabular-nums text-[var(--fds-text-secondary)]">
          {safeValue} de {safeMax}
        </span>
      </div>
      <div
        className="h-3 overflow-hidden rounded-full bg-[var(--fds-surface-low)]"
        role="progressbar"
        aria-label={label}
        aria-valuemin={0}
        aria-valuemax={safeMax}
        aria-valuenow={safeValue}
      >
        <div
          className={cn("h-full rounded-full", `fds-progress-${tone}`)}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}

export function FluvosAvatarStack({
  count = 3,
  label,
}: {
  readonly count?: number
  readonly label?: string
}) {
  const colors = [
    "var(--fds-premium)",
    "var(--fds-growth-vivid)",
    "var(--fds-brand-pine)",
    "var(--fds-action)",
  ]
  return (
    <div className="flex items-center" aria-label={label ?? `${count} participantes`}>
      {Array.from({ length: Math.min(count, 4) }).map((_, index) => (
        <span
          key={colors[index]}
          className="-ml-2 grid size-8 place-items-center rounded-full border-2 border-[var(--fds-avatar-ring)] text-[10px] font-bold text-[var(--fds-on-action)] first:ml-0"
          style={{ backgroundColor: colors[index] }}
          aria-hidden="true"
        >
          {String.fromCharCode(65 + index)}
        </span>
      ))}
      {count > 4 && (
        <span className="-ml-2 grid size-8 place-items-center rounded-full border-2 border-[var(--fds-avatar-ring)] bg-[var(--fds-surface-low)] text-[10px] font-bold">
          +{count - 4}
        </span>
      )}
    </div>
  )
}

export function BrandMark({
  asset = "lockup-horizontal-pine",
  purpose = "identity",
  className,
  priority = false,
}: {
  readonly asset?: FluvosBrandAssetId
  readonly purpose?: "identity" | "home-link" | "decorative"
  readonly className?: string
  readonly priority?: boolean
}) {
  const brandAsset = fluvosBrandAssetById[asset]
  const alt = purpose === "decorative" ? "" : purpose === "home-link" ? "FluvOS — início" : "FluvOS"

  return (
    <span className={cn("relative block", !className && (brandAsset.family.startsWith("lockup") ? "h-10 w-32" : "size-10"), className)}>
      <Image
        src={brandAsset.path}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 140px, 180px"
        className="object-contain object-left"
      />
    </span>
  )
}

export function ReferenceCard({
  image,
  id,
  title,
  description,
  priority = false,
}: {
  readonly image: string
  readonly id: string
  readonly title: string
  readonly description: string
  readonly priority?: boolean
}) {
  return (
    <article className="group overflow-hidden rounded-[var(--fds-radius-card)] border border-[var(--fds-border)] bg-[var(--fds-surface)]">
      <div className="relative aspect-[4/3] overflow-hidden bg-[var(--fds-surface-low)] p-2">
        <Image
          src={image}
          alt={`Referência ${id}: ${title}`}
          fill
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 33vw"
          className="object-contain p-2 transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>
      <div className="space-y-2 p-4">
        <FluvosBadge variant="brand">{id}</FluvosBadge>
        <h3 className="text-base font-bold">{title}</h3>
        <p className="text-sm leading-6 text-[var(--fds-text-secondary)]">{description}</p>
      </div>
    </article>
  )
}

export function StateRow({
  label,
  state,
  done = false,
}: {
  readonly label: string
  readonly state: string
  readonly done?: boolean
}) {
  return (
    <div className="flex min-h-14 items-center gap-3 border-b border-[var(--fds-border)] px-1 py-3 last:border-0">
      <span
        className={cn(
          "grid size-7 place-items-center rounded-full border",
          done
            ? "border-[var(--fds-growth-vivid)] bg-[var(--fds-growth-vivid)] text-[var(--fds-ink)]"
            : "border-[var(--fds-border-strong)] bg-[var(--fds-surface)] text-transparent"
        )}
        aria-hidden="true"
      >
        <Check className="size-4" />
      </span>
      <span className="min-w-0 flex-1 text-sm font-semibold">{label}</span>
      <FluvosBadge variant={done ? "success" : "neutral"}>{state}</FluvosBadge>
    </div>
  )
}
