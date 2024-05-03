import Head from "next/head";
import "@/styles/globals.css";
import React, { useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollUp from "@/components/utils/Scrollp";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`bg-light dark:bg-dark text-dark dark:text-light`}>
        <Navbar />
        <Component {...pageProps} />
        <ScrollUp />
        <Footer />
      </main>
    </>
  );
}
