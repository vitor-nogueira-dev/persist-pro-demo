import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react';


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
      <head>
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
        <script async src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>

      </body>
    </html>
  )
}
