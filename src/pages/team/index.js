import Head from "next/head";
import React, { useEffect } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import Events from "@/components/Events";
import gsap from "gsap";
import "@/styles/Hero.module.css";
import ProfileCard from "@/components/ProfileCard";
import AnimatedText from "@/components/AnimatedText";
import Teams from "@/components/Teams";

export default function TeamMembers() {
  //   useEffect(() => {

  //     gsap.from(".h1", 1.5, {
  //       delay: 0.5,
  //       y: 800,
  //       stagger: {
  //         amount: 0.5,
  //       },
  //       ease: "power4.inOut",
  //     });

  //     gsap.from(".hero, .hero2", {
  //       duration: 2,
  //       delay: 0.5,
  //       y: 700,
  //       ease: "power4.inOut"
  //     });
  //   }, []);

  return (
    <>
      <Head>
        <title>Team | ACM Vignan&apos;s IIT | Association for Computing Machinery Vignan&apos;s Institute of Information Technology - Visakhapatna</title>
        <link rel="icon" type="image/svg" href="../../public/asset/favicon/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" type="image/svg" href="../../public/asset/favicon/android-chrome-192x192.png" sizes="192x192" />
        <link rel="icon" type="image/svg" href="../../public/asset/favicon/android-chrome-512x512.png" sizes="512x512" />
        <link rel="icon" type="image/svg" href="../../public/asset/favicon/favicon-16x16.png" sizes="16x16" />
        <link rel="apple-touch-icon" sizes="180x180" href="../../public/asset/favicon/apple-touch-icon.png" />
      </Head>
      <main className="text-dark dark:text-light w-full h-full">
        {/* <AnimatedText
          text="Meet the Team of 2023"
          className="mb-16 lg:!text-5xl sm:mb-8 sm:!text-4xl xs:!text-3xl pt-16 flex items-center justify-center"
        /> */}
        <Teams />
      </main>
    </>
  );
}
