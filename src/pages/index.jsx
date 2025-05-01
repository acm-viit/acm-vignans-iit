import Head from "next/head";
import Image from "next/image";
import Events from "@/components/Events";
import IntroText from "@/components/IntroText";
import siteMetadata from "@/utils/siteMetaData";
import { allBlogs } from "contentlayer/generated";
import Team2025 from "@/components/team/Team2025";
import AnimatedText from "@/components/AnimatedText";
import RecentPosts from "@/components/Home/RecentPosts";
import ACM_VIIT from '../../public/asset/svg/acm-viit-2024.svg';

export default function Home() {
  return (
    <>
      <Head>
        <title>ACM Vignan&apos;s IIT | Association for Computing Machinery Vignan&apos;s Institute of Information Technology - Visakhapatnam</title>
        <meta property="og:title" content={`ACM Vignan's IIT`} />
        <meta property="og:description" content={`ACM Vignan's IIT | Association for Computing Machinery Vignan&apos;s Institute of Information Technology - Visakhapatnam`} />
        <meta property="og:url" content={`${siteMetadata.siteUrl}`} />
        <meta property="og:site_name" content={`ACM Vignan's IIT`} />
        <meta key={`og-image`} property="og:image" content={`${siteMetadata.siteUrl}/social-banner.png`} />
        <meta key={`twitter-image`} name="twitter:image" content={`${siteMetadata.siteUrl}/social-banner.png`} />
      </Head>
      {/* <HomePageLoader /> */}
      <main className="text-dark dark:text-light pb-20">
        <div
          // ref={headerRef}
          className="sm:py-4 font-bold flex items-start justify-between p-0 px-40 lg:px-8 pt-8 pb-10 selector-none"
        >
          <IntroText delayTime={0.4} className="h1 !mx-1 !px-0 text-[5rem]" text={`Inovate`} />
          <IntroText delayTime={0.6} className="h1 !mx-1 !px-0 text-[5rem]" text={`Inspire`} />
          <IntroText delayTime={1.2} className="h1 !mx-1 !px-0 text-[5rem]" text={`Build`} />
          <IntroText delayTime={1.8} className="h1 !mx-1 !px-0 text-[5rem]" text={`Deploy`} />
          {/* <IntroText className="h1 !mx-1 !px-0 text-[5rem]" text={`Inovate Inspire Build Deploy`} /> */}
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-1 px-40 lg:px-14 items-center justify-center align-middle overflow-hidden">
          <div
            // ref={heroRef1}
            className="hero lg:pt-7 !border-0 !border-transparent w-[60%] sm:w-[100%]"
          >
            <Image
              src={ACM_VIIT}
              alt="acm-viit"
              className="rounded-lg !px-0 pt-4 lg:pt-0 selector-none"
            />
          </div>
          <div
            // ref={heroRef2}
            className=" sm:p-4">
            <div className="flex items-center justify-center text-xl lg:pt-10 align-middle md:text-center sm:text-base sm:py-10 text-justify font-medium">
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
        <div className="pt-20 sm:pt-10">
          <AnimatedText
            text="Recent Events"
            className="mb-16 lg:!text-5xl sm:mb-8 sm:!text-4xl xs:!text-4xl pt-16 flex items-center justify-center"
          />
          <Events />
          <Team2025 />
          <div className="px-20 md:px-8">
            <RecentPosts blogs={allBlogs} />
          </div>
        </div>
      </main>
    </>
  );
}
