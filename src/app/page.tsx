'use client'
import Hero from '@/components/hero';
import Footer from '@/components/footer';
import Header from '@/components/header';


export default function Home() {
  return (
    <main className="flex min-h-screen min-w-full flex-col items-center justify-between p-3 pb-0 overflow-hidden">
      <Header />
      <Hero />
      <Footer />
    </main>
  )
}
