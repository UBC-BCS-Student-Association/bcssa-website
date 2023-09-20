import React from "react";
import { Toaster } from "./ui/toaster";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Analytics } from "@vercel/analytics/react";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <Toaster />
      <Analytics />
    </>
  );
}
