import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import "@/styles/Profilecard.module.css";
// import { useRouter } from "next/router";
import { TwitterIcon, GithubIcon, LinkedInIcon, } from "./Icons";

const SimpleProfileCard = ({ href = "#", profilePic, name, className, role, twitter = "", linkedin = "", github = "", }) => {
  // const router = useRouter();

  return (
    <section className="flex items-center justify-center">
      <div className={`card ${className}`}>

        {/* Prifle Image */}
        <div className="imgBx">
          <Image src={profilePic} alt={`${name}`} />
        </div>
        <div className="content">
          <div className={`details !py-[30px]`}>
            <h2>
              <Link href={`${href}`}>

                {/* Profile Name */}
                <span className="relative group">
                  {name}
                  <span className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${href === "" ? 'w-full' : 'w-0'} dark:bg-light`}></span>
                </span>
              </Link>
              <br />

              {/* Prifle Role */}
              <p dangerouslySetInnerHTML={{ __html: role }} />
            </h2>

            {/* Profile Socials */}
            <div className="pt-8 flex items-center justify-center">
              <nav className="flex items-center justify-center flex-wrap">
                {github !== "" && (
                  <motion.a
                    href={github}
                    target={"_blank"}
                    className="w-6 mx-3 sm:mx-1 bg-light rounded-full dark:bg-dark"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <GithubIcon />
                  </motion.a>
                )}
                {linkedin !== "" && (
                  <motion.a
                    href={linkedin}
                    target={"_blank"}
                    className="w-6 mx-3 sm:mx-1"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <LinkedInIcon />
                  </motion.a>
                )}
                {twitter !== "" && (
                  <motion.a
                    href={twitter}
                    target={"_blank"}
                    className="w-6 mx-3 sm:mx-1 rounded-full"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <TwitterIcon className={`!fill-dark dark:!fill-light`} />
                  </motion.a>
                )}
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[25rem]"></div>
    </section>
  );
};

export default SimpleProfileCard;
