import React from "react";
import Image from "next/image";
import { useRouter } from 'next/router';
import ProfileCard from "./ProfileCard";
import { TwitterIcon, DribbbleIcon, GithubIcon, LinkedInIcon, PinterestIcon } from './Icons'
import { motion } from "framer-motion";
import Head from "next/head";

const MemberProfile = ({ name, profilePic, role, about = "", github = "", linkedin = "", twitter = "", portfolio = "" }) => {
  const router = useRouter();
  const currentUrl = router.asPath;
  return (
    <>
      <Head>
        <title>{name} | {role} | ACM Vignan&apos;s IIT | Association for Computing Machinery Vignan&apos;s Institute of Information Technology - Visakhapatnam</title>
        <link rel="icon" type="image/png" href="../../public/asset/favicon/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="../../public/asset/favicon/android-chrome-192x192.png" sizes="192x192" />
        <link rel="icon" type="image/png" href="../../public/asset/favicon/android-chrome-512x512.png" sizes="512x512" />
        <link rel="icon" type="image/png" href="../../public/asset/favicon/favicon-16x16.png" sizes="16x16" />
        <link rel="apple-touch-icon" sizes="180x180" href="../../public/asset/favicon/apple-touch-icon.png" />
        <meta name="description" content={about} />
        <meta name="image" content={profilePic} />
        <meta property="og:title" content={`${name} | ${role}`} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:image" content={profilePic} />
        <meta property="og:description" content={about} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content={twitter} />
        <meta name="twitter:title" content={`${name} | ${role}`} />
        <meta name="twitter:description" content={about} />
        <meta name="twitter:image" content={profilePic} />
      </Head>
      <main className="p-8 flex flex-col items-center justify-center">
        <div className="flex items-center justify-center text-5xl md:text-4xl sm:text-3xl pb-8 font-semibold text-center">
          {name}
        </div>

        <div className="flex items-center justify-center ">
          <div className="w-60 h-60 overflow-hidden rounded-full">
            <Image src={profilePic} alt={`${name}-profile-pic`} className="" />
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center pl-2">
          <nav className='flex items-center justify-center flex-wrap'>
            {linkedin !== "" && (
              <motion.a href={`${linkedin}`} target="_blank" className="w-6 mx-3 sm:mx-1"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <LinkedInIcon />
              </motion.a>
            )}
            {portfolio !== "" && (
              <motion.a href={portfolio} target="_blank" className="mx-3 sm:mx-1"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="border border-dark dark:border-light p-0.5 px-2.5 rounded-full text-sm">Portfolio</div>
              </motion.a>
            )}
            {github !== "" && (
              <motion.a href={`${github}`} target="_blank" className="w-6 mx-3 sm:mx-1 bg-light rounded-full dark:bg-dark"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <GithubIcon />
              </motion.a>
            )}
            {twitter !== "" && (
              <motion.a href={`${twitter}`} target="_blank" className="w-6 mx-3 sm:mx-1 rounded-full"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <TwitterIcon className={`!fill-dark dark:!fill-light`} />
              </motion.a>
            )}

          </nav>
        </div>
        <div className="flex items-center justify-center pt-4 pl-2 text-center">{role}</div>
        {/* <ProfileCard /> */}

        {/* About */}
        <section className="px-40 sm:px-4 pt-12 sm:pt-8">
          {about.length !== 0 && (
            <>
              <h1 className="text-3xl md:text-2xl pb-8 md:pb-2 flex items-center justify-center text-center">About</h1>
              <div
                className="pt-4 sm:text-sm about_section"
                dangerouslySetInnerHTML={{ __html: about }}
              />
              {/* {about} */}
            </>
          )}
        </section>
      </main>
    </>
  );
};

export default MemberProfile;
