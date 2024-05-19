import React, { useEffect } from 'react';
// import { useRouter } from 'next/router';
import Head from "next/head";
import "@/styles/globals.css";
import { Inter, Quicksand } from "next/font/google"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollUp from "@/components/utils/ScrollUp";
import SaveScroll from '@/components/hooks/SaveScroll';
import RestoreScroll from '@/components/hooks/RestoreScroll';
// import '../styles/globals.css';

const inter = Inter({ subsets: ["latin"] });
const quicksand = Quicksand({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  // const router = useRouter();
  // const showNavbar = router.pathname !== '/';

  useEffect( () => {
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
      <main
        className={`bg-light dark:bg-dark text-dark dark:text-light ${quicksand.className}`}
      >
        {/* {showNavbar && <Navbar />} */}
        <SaveScroll />
        <RestoreScroll />
        <Navbar className='' />
        <Component {...pageProps} />
        <ScrollUp />
        <Footer />
      </main>
    </>
  );
}
