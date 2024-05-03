import gsap from "gsap";
import Head from "next/head";
import Image from "next/image";
import Events from "@/components/Events";
import IntroText from "@/components/IntroText";
import React, { useEffect, useRef } from "react";
import Team2024 from "@/components/team/Team2024";
import AnimatedText from "@/components/AnimatedText";
import ACM_VIIT from '../../public/asset/svg/acm-viit-2024.svg'

export default function Home() {
  // const navbarRef = useRef(null);
  const headerRef = useRef(null);
  const heroRef1 = useRef(null);
  const heroRef2 = useRef(null);
  const heroRef3 = useRef(null);
  
  // sliding text animation
  useEffect(() => {
    const headerElements = headerRef.current.querySelectorAll(".h1");
    const heroElement1 = heroRef1.current;
    const heroElement2 = heroRef2.current;
    const heroElement3 = heroRef3.current;

    gsap.from(headerElements, {
      duration: 1.5,
      y: 200,
      stagger: 0.5,
      ease: "power4.inOut",
    });

    gsap.from([heroElement1, heroElement2, heroElement3], {
      duration: 4,
      y: 800,
      ease: "power4.inOut",
    });
  }, []);

  return (
    <>
      <Head>
        <title>ACM Vignan&apos;s IIT | Association for Computing Machinery Vignan&apos;s Institute of Information Technology - Visakhapatnam</title>
      </Head>
      <main className="text-dark dark:text-light">
        <div
          ref={headerRef}
          className="sm:py-10 font-bold flex items-start justify-between p-0 px-40 lg:px-14 pt-8 pb-20"
        >
          <IntroText className="h1 !mx-1 !px-0 text-[5rem]" text={`Inovate`} />
          <IntroText className="h1 !mx-1 !px-0 text-[5rem]" text={`Inspire`} />
          <IntroText className="h1 !mx-1 !px-0 text-[5rem]" text={`Build`} />
          <IntroText className="h1 !mx-1 !px-0 text-[5rem]" text={`Deploy`} />
          {/* <IntroText className="h1 !mx-1 !px-0 text-[5rem]" text={`Inovate Inspire Build Deploy`} /> */}
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-1 px-40 lg:px-14 items-center justify-center align-middle">

          {/* ACM Logo */}
          <div
            ref={heroRef1}
            className="hero !border-0 !border-transparent w-[60%] sm:w-[100%]"
          >
            <Image
              src={ACM_VIIT}
              alt="gdsc-viit"
              className="rounded-lg !px-0 pt-14 lg:pt-0"
            />
          </div>
          
          {/* About ACM */}
          <div ref={heroRef2} className=" sm:p-4">
            <div className="flex items-center justify-center text-xl lg:pt-10 align-middle md:text-center sm:text-base sm:py-10 text-justify">
              <h3>
                ACM brings together computing educators, researchers, and professionals to inspire dialogue, share resources, and address the field&apos;s challenges.
                <br />
                <br />
                <span className="md:hidden">
                  Founded at the dawn of the computer age, ACM&apos;s reach extends to every part of the globe, with more than half of its nearly 100,000 members residing outside the U.S. Its growing membership has led to Councils in Europe, India, and China, fostering networking opportunities that strengthen ties within and across countries and technical communities. Their actions enhance ACM&apos;s ability to raise awareness of computing&apos;s important technical, educational, and social issues around the world.
                  <br />
                  <br />
                  As the world&apos;s largest computing society, ACM strengthens the profession&apos;s collective voice through strong leadership, promotion of the highest standards, and recognition of technical excellence. ACM supports the professional growth of its members by providing opportunities for life-long learning, career development, and professional networking.
                </span>
              </h3>
            </div>
          </div>
        </div>

        <div ref={heroRef3} className="pt-20 sm:pt-10">
          <AnimatedText
            text="Recent Events"
            className="mb-16 lg:!text-2xl sm:mb-8 sm:!text-xl xs:!text-xl pt-16 flex items-center justify-center"
          />

          {/* Events Section */}
          <Events />
          <div className="h-4"></div>

          {/* Team of 2024 Section */}
          <Team2024 />
        </div>
      </main>
    </>
  );
}
