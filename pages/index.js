import { Inter } from 'next/font/google'
import About from '@/components/About'
import Events from '@/components/Events'
import Sponsors from '@/components/Sponsors'
import TestFirebase from '@/components/TestFirebase'
import Hero from '@/components/Hero'
import Contact from '@/components/Contact'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import Resource from '@/components/Resource'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <main
      className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}
    >
      <Hero />
      <About />
      <Events />
      <Sponsors />
      <FAQ />
      <Contact />
      <Resource />
      {/* <TestFirebase /> */}
    </main>
    </>
  )
}
