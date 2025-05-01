import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import "@/styles/Profilecard.module.css";
import { TwitterIcon, DribbbleIcon, GithubIcon, LinkedInIcon, PinterestIcon } from "./Icons";

const ProfileCard = ({ href = "#", profilePic, name, className, role, twitter, linkedin, github, pinterest, imgBxClassName }) => {
  const router = useRouter();

  const socialLinks = [
    { href: github, icon: <GithubIcon />, className: "bg-light rounded-full dark:bg-dark" },
    { href: linkedin, icon: <LinkedInIcon /> },
    { href: twitter, icon: <TwitterIcon className="!fill-dark dark:!fill-light" />, className: "rounded-full" },
    { href: pinterest, icon: <PinterestIcon /> },
  ].filter(({ href }) => !!href);

  return (
    <section className="flex items-center justify-center mx-auto">
      <div className={`card ${className}`}>
        <Link href={href}>
          <div className={`imgBx ${imgBxClassName}`}>
            <Image src={profilePic} width={500} height={500} alt={name} className="select-none" />
          </div>
        </Link>
        <div className="content">
          <div className="details">
            <h2>
              <Link href={href}>
                <span className="relative group font-bold">
                  {name}
                  <span
                    className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? "w-full" : "w-0"
                      } dark:bg-light`}
                  ></span>
                </span>
              </Link>
              <br />
              <p className="font-semibold">{role}</p>
            </h2>
            {socialLinks.length > 0 && (
              <div className="pt-2 flex items-center justify-center">
                <nav className="flex items-center justify-center flex-wrap">
                  {socialLinks.map(({ href, icon, className = "" }, idx) => (
                    <motion.a
                      key={idx}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-6 mx-3 sm:mx-1 ${className}`}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {icon}
                    </motion.a>
                  ))}
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="h-[25rem]"></div>
    </section>
  );
};

export default ProfileCard;
