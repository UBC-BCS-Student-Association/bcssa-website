import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import About from '@/components/About'
import Events from '@/components/Events'
import Sponsors from '@/components/Sponsors'
import TestFirebase from '@/components/TestFirebase'
import Hero from '@/components/Hero'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Navbar />
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Hero />
      <About />
      <Events />
      <Sponsors />
      <TestFirebase />
    </main>
    </>
  )
}
