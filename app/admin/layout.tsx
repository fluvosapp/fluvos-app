import type { ReactNode } from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Admin - FluvOS',
  description: 'Painel administrativo FluvOS',
}

export default function AdminRootLayout({ children }: { children: ReactNode }) {
  return children
}
