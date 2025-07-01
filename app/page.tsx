'use client'
import dynamic from 'next/dynamic';
const Header = dynamic(() => import('./components/Header'), {
  ssr: false,
});
import Start from "./_components/Start"
import About from "./_components/About"
import Projects from "./_components/Projects"
import Service from "./_components/Service"
import News from "./_components/News"
import Promo from "./_components/Promo"
import Footer from "./components/Footer"
export default function Home() {
  return (
    <main>
      <Header/>
      <Start/>
      <About/>
      <Projects/>
      <Service/>
      <News/>
      <Promo/>
      <Footer/>
    </main>
  )
}
