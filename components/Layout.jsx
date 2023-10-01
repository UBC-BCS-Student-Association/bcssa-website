import React from "react";
import Head from "next/head";
import { Toaster } from "./ui/toaster";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Analytics } from "@vercel/analytics/react";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>UBC BCSSA</title>
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <Toaster />
      <Analytics />
    </>
  );
}
