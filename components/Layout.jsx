import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Toaster } from './ui/toaster'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <Toaster />
    </>
  )
}
