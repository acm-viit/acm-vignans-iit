import React from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { events } from "@/lib/events";
import { motion } from "framer-motion";
import { useRouter } from 'next/router';
import EventCard from "@/components/EventCard";
import AnimatedText from "@/components/AnimatedText";
import { GithubIcon, LinkedInIcon, InstagramIcon, TwitterIcon } from "@/components/Icons";

import SUS_HACKS from '../../../public/asset/img/events/sushacks-2024/sus_hacks_april_2024_thumbnail.jpg'

const FramerImage = motion(Image);

const FeaturedEvent = ({ type, link, title, description, img, linkedin, instagram, twitter, github, register }) => {
  const router = useRouter();
  return (
    <>
      <main
        className="w-[70rem] sm:w-full flex items-center justify-between relative rounded-br-2xl
        rounded-3xl border border-solid border-dark dark:border-light bg-light dark:bg-[#242424] shadow-[5px_5px_0px_0px_rgba(24,24,24)] dark:shadow-[5px_5px_0px_0px_rgba(255,255,255)] p-6
        lg:flex-col lg:p-4 xs:rounded-2xl xs:rounded-br-3xl xs:p-4 text-dark dark:text-light overflow-hidden
        "
      >
        <div className="absolute top-0 -right-3 -z-10 w-[100.7%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
        <Link
          href={link}
          // target="_blank"
          className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
        >
          <FramerImage
            src={img}
            alt={title}
            className="w-full h-auto"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          />
        </Link>
        <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
          <span className="text-primary dark:text-secondary font-semibold text-xl xs:text-base">
            {type}
          </span>
          <Link
            href={register}
            target="_blank"
            className=""
          >
            <h2 className="relative group my-2 w-full text-left text-4xl font-bold sm:text-sm">

              {title}
              <span className={`h-[2px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === link ? 'w-full' : 'w-0'} dark:bg-light`}></span>
            </h2>
          </Link>
          <p className="my-2 font-medium sm:text-sm">
            {description}
          </p>
          <div className="mt-2 flex items-center">
            <div className="flex flex-row items-center justify-between mt-1 p-2">
              {linkedin !== "" && (
                <motion.a
                  href={linkedin}
                  target="_blank"
                  className="w-10 pr-2"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <LinkedInIcon />
                </motion.a>
              )}
              {instagram !== "" && (
                <motion.a
                  href={instagram}
                  target="_blank"
                  className="w-10 pr-2"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <InstagramIcon className={`!fill-dark dark:!fill-light`} />
                </motion.a>
              )}
              {twitter !== "" && (
                <motion.a
                  href={twitter}
                  target="_blank"
                  className="w-10 px-2"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <TwitterIcon />
                </motion.a>
              )}
              {github !== "" && (
                <motion.a
                  href={github}
                  target="_blank"
                  className="w-10 pr-2"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <GithubIcon />
                </motion.a>
              )}
            </div>
            <Link
              href={register}
              target="_blank"
              className="border border-solid border-dark rounded-lg bg-dark dark:bg-light text-light dark:text-dark p-2 px-6 text-lg font-semibold hover:bg-light hover:text-dark dark:hover:bg-dark dark:hover:text-light  hover:border-dark dark:hover:border-light sm:px-4 sm:text-base transition duration-500 ease-in-out"
            >
              Register
            </Link>
          </div>

        </div>
      </main>
    </>
  );
};


const Events = () => {
  console.log(events);
  console.log("Events Count: ", events.length);

  return (
    <>
      <Head>
        <title>Events | ACM Vignan&apos;s IIT | Association for Computing Machinery Vignan&apos;s Institute of Information Technology - Visakhapatna</title>
        <link rel="icon" type="image/svg" href="../../public/asset/favicon/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" type="image/svg" href="../../public/asset/favicon/android-chrome-192x192.png" sizes="192x192" />
        <link rel="icon" type="image/svg" href="../../public/asset/favicon/android-chrome-512x512.png" sizes="512x512" />
        <link rel="icon" type="image/svg" href="../../public/asset/favicon/favicon-16x16.png" sizes="16x16" />
        <link rel="apple-touch-icon" sizes="180x180" href="../../public/asset/favicon/apple-touch-icon.png" />
      </Head>
      <section className="container px-14 sm:px-8 pb-20">
        <AnimatedText
          text="ACM Vignan's IIT Events"
          className="mb-8 lg:!text-xl sm:mb-8 sm:!text-4xl xs:!text-3xl pt-8 flex items-center justify-center"
        />

        {/* Featured Event */}
        <div className="flex items-center justify-center pb-10">
          <FeaturedEvent
            type="24hr Hackathon"
            title="Sus-Hacks"
            description="Join Sus-Hacks this April for an inspiring journey in tech innovation and social impact. Collaborate, innovate, and create a brighter future together!"
            img={SUS_HACKS}
            link="/events/sus-hacks-2024"
            instagram="https://www.instagram.com/sus_hacks_viit/"
            linkedin="https://www.linkedin.com/in/sus-hacks-viit-4310542bb/"
            twitter="https://twitter.com/sushacks"
            github="https://github.com/Haricharan0310/sushacks"
            register="https://sushacks.vercel.app/"
          />
        </div>

        {/* Recent Events */}
        <div className="flex items-center justify-center relative mt-2">
          <div className="grid grid-cols-3 2xl:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 items-center justify-center">
            {events.slice(1).map((event, index) => (
              <div key={index} className="grid grid-cols-3 2xl:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 items-center justify-center">
                <EventCard
                  className={`mr-6 ml-2`}
                  link={`/events/${event.slug}`}
                  title={event.title}
                  featuredImage={`/asset/img/events/${event.slug}/${event.thumbnail}`}
                  eventdate={event.event_date}
                  description={event.event_description}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Events;
