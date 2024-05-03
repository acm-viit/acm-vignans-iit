import React from "react";
import Image from "next/image";
import { TwitterIcon, GithubIcon, LinkedInIcon, } from './Icons'
import { motion } from "framer-motion";

const MemberProfile = ({ name, profilePic, role, about = "", github = "", linkedin = "", twitter = "" }) => {
  return (
    <>
      <main className="p-8 items-center justify-between">

        {/* Member Name */}
        <div className="flex items-center justify-center text-5xl md:text-4xl pb-8 font-semibold">
          {name}
        </div>

        {/* Member Profile Image */}
        <div className="flex items-center justify-center ">
          <Image src={profilePic} alt={`${name}-profile-pic`} className="rounded-full w-60 h-60" />
        </div>

        {/* Member Socials */}
        <div className="pt-8 flex items-center justify-center pl-2">
          <nav className='flex items-center justify-center flex-wrap'>
            {linkedin !== "" && (
              <motion.a href={`${linkedin}`} target={"_blank"} className="w-6 mx-3 sm:mx-1"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <LinkedInIcon />
              </motion.a>
            )}
            {github !== "" && (
              <motion.a href={`${github}`} target={"_blank"} className="w-6 mx-3 sm:mx-1 bg-light rounded-full dark:bg-dark"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <GithubIcon />
              </motion.a>
            )}
            {twitter !== "" && (
              <motion.a href={`${twitter}`} target={"_blank"} className="w-6 mx-3 sm:mx-1 rounded-full"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <TwitterIcon className={`!fill-dark dark:!fill-light`} />
              </motion.a>
            )}
          </nav>
        </div>

        {/* Member role */}
        <div className="flex items-center justify-center pt-4 pl-2">{role}</div>

        {/* About */}
        <section className="px-40 sm:px-4 pt-24 sm:pt-8">
          {about.length !== 0 && (
            <>
              <h1 className="text-3xl pb-8 flex lg:justify-center">About</h1>
              <div className="pt-4 sm:text-sm " dangerouslySetInnerHTML={{ __html: about }} />
            </>
          )}
        </section>
      </main>
    </>
  );
};

export default MemberProfile;
