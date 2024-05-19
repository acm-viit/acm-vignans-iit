import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import "@/styles/Profilecard.module.css";
import { TwitterIcon, DribbbleIcon, GithubIcon, LinkedInIcon, PinterestIcon, } from "./Icons";
import Link from "next/link";

const ProfileCard = ({ href = "#", profilePic, name, className, role, twitter, linkedin, github, pinterest, }) => {
  const router = useRouter();

  return (
    <section className="flex items-center justify-center">
      <div className={`card ${className}`}>
        <div className="imgBx">
          <Image src={profilePic} alt={`${name}`} className=" selector-none" />
        </div>
        <div className="content">
          <div className={`details`}>
            <h2>
              <Link href={`${href}`}>
                <span className="relative group">
                  {name}
                  <span className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'} dark:bg-light`}></span>
                </span>
              </Link>
              <br />
              <p>{role}</p>
            </h2>
            <div className="pt-8 flex items-center justify-center">
              <nav className="flex items-center justify-center flex-wrap">
                <motion.a
                  href={github}
                  target="_blank"
                  className="w-6 mx-3 sm:mx-1 bg-light rounded-full dark:bg-dark"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <GithubIcon />
                </motion.a>
                <motion.a
                  href={linkedin}
                  target="_blank"
                  className="w-6 mx-3 sm:mx-1"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <LinkedInIcon />
                </motion.a>
                <motion.a
                  href={twitter}
                  target="_blank"
                  className="w-6 mx-3 sm:mx-1 rounded-full"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <TwitterIcon className={`!fill-dark dark:!fill-light`} />
                </motion.a>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[25rem]"></div>
    </section>
  );
};

export default ProfileCard;
