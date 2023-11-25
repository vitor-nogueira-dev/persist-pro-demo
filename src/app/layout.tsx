import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Persist Pro',
  description: 'Persist Pro: Uma biblioteca avançada para gerenciamento otimizado de localStorage. Facilita a persistência de dados no navegador, oferecendo uma interface simples e robusta para armazenamento e recuperação de dados, incluindo suporte a objetos e arrays. Ideal para projetos que necessitam de armazenamento local confiável e eficiente.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
