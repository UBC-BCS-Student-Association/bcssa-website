import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Toaster } from './ui/toaster'
import Footer2 from './Footer2'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer2 />
      {/* <Footer /> */}
      <Toaster />
    </>
  )
}
