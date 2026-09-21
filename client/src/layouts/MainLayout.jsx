import { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import gsap from 'gsap'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import WhatsAppFloat from '../components/WhatsAppFloat'
import { isReducedMotion } from '../utils/motion'

export default function MainLayout() {
  const { pathname } = useLocation()
  const mainRef = useRef(null)

  useEffect(() => {
    if (!mainRef.current || isReducedMotion()) return

    gsap.fromTo(
      mainRef.current,
      { opacity: 0.6, y: 6 },
      {
        opacity: 1,
        y: 0,
        duration: 0.28,
        ease: 'power2.out',
        clearProps: 'transform,opacity',
      }
    )
  }, [pathname])

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <Navbar />
      <main ref={mainRef} className="flex-1 pt-16 lg:pt-[76px]">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
