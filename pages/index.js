import About from '@/components/About'
import Events from '@/components/Events'
import Sponsors from '@/components/Sponsors'
import Contact from '@/components/Contact'
import FAQ from '@/components/FAQ'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-between'>
      <Hero />
      <About />
      <Events />
      <Sponsors />
      <FAQ />
      <Contact />
    </main>
  )
}
