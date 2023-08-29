import { Inter } from 'next/font/google'
import About from '@/components/About'
import Events from '@/components/Events'
import Sponsors from '@/components/Sponsors'
import TestFirebase from '@/components/TestFirebase'
import Hero from '@/components/Hero'
import Contact from '@/components/Contact'
import FAQ from '@/components/FAQ'
import Resource from '@/components/Resource'
import HeroArden from '@/components/HeroArden'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    {/* <main
      className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}
    > */}
    <main className='flex flex-col items-center justify-between'>
    {/* <main className="mainContent"> */}
    {/* <main> */}
      {/* <Hero /> */}
      <HeroArden />
      <About />
      <Events />
      <Sponsors />
      <FAQ />
      <Contact />
      {/* <Resource /> */}
      {/* <TestFirebase /> */}
    </main>
    </>
  )
}
