import React from 'react'
import Layout from './Layout'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { motion } from "framer-motion";
import { TwitterIcon, InstagramIcon, GithubIcon, LinkedInIcon, } from './Icons'
import ACM_VIGNANS_IIT_LOGO from '../../public/asset/svg/acm-vignans-iit-logo.svg'

const Footer = () => {
    const router = useRouter();
    let link = "https://github.com/ACM-Vignans-IIT"
    return (
        <div>
            <footer className='w-full border-t-[0.5px] border-solid border-t-dark/45  dark:border-t-light/45 font-medium text-lg dark:text-light sm:text-base'>
                <Layout className='!py-10 flex flex-col lg:flex-col dark:!bg-[#242424]'>
                    <div className='flex xl:flex-col items-start xl:items-center justify-between 2xl:justify-around'>
                        <div className='flex flex-col items-center justify-center pb-5 selector-none'>
                            <Image src={ACM_VIGNANS_IIT_LOGO} alt="ACM-VIGNANS-IIT" className='ml-1 w-32 selector-none' />
                            <div className='flex flex-col items-center justify-center'>
                                <div className='md:text-[20px] sm:text-[15px] lg:text-[20px] text-xl'>Association for Computing Machinery</div>
                                <div className='lg:text-[15px] md:text-[10px] text-xs'>Vignan&apos;s Institute of Information Technology - Visakhapatnam</div>
                                <nav className='flex items-center !justify-start flex-wrap my-2'>
                                    <motion.a href="https://www.facebook.com/chapteradmin" target={"_blank"}
                                        className="w-6 mr-3 sm:mx-1"
                                        whileHover={{ y: -2 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <TwitterIcon />
                                    </motion.a>
                                    <motion.a href="#" target={"_blank"} className="w-6 mx-3 sm:mx-1"
                                        whileHover={{ y: -2 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <LinkedInIcon />
                                    </motion.a>
                                    <motion.a href="https://www.instagram.com/acm_viit/" target={"_blank"} className="w-6 mx-3 mt-1 sm:mt-0 sm:mr-5 rounded-full"
                                        whileHover={{ y: -2 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <InstagramIcon />
                                    </motion.a>
                                    <motion.a href="https://github.com/ACM-Vignans-IIT" target={"_blank"} className="w-6 mx-3 sm:mx-1 bg-light rounded-full dark:bg-dark"
                                        whileHover={{ y: -2 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <GithubIcon />
                                    </motion.a>
                                    {/* <motion.a href="https://twitter.com" target={"_blank"} className="w-6 ml-3 sm:mx-1"
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            >
                                <DribbbleIcon />
                            </motion.a> */}
                                </nav>
                                {/* <div className='flex flex-row items-center justify-between lg:hidden'>
                                    <span className='pr-1'>{new Date().getFullYear()}<span> &copy; </span></span>
                                    <div className='relative group'>
                                        <Link href={link} target='_blank'>ACM Vignan&apos;s IIT</Link>
                                        <span className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === link ? 'w-full' : 'w-0'} dark:bg-light`}></span>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        <div className='flex items-center justify-center'>
                            <div className='grid grid-cols-4 2xl:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 sm:grid-cols-2 gap-20 sm:gap-10'>
                                <div>
                                    <div className='font-semibold uppercase text-base lg:text-xs'>
                                        Most viewed articles
                                    </div>
                                    <div>
                                        <ul>
                                            <li>
                                                <a href="/articles/html-for-beginners/" className="dropdown__link lg:line-clamp-1">
                                                    HTML for beginners
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/articles/advanced-css/" className="dropdown__link lg:line-clamp-1">
                                                    Advanced CSS
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/articles/javascript-oop/" className="dropdown__link lg:line-clamp-1">
                                                    JavaScript OOP
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <div className='font-semibold uppercase text-base lg:text-xs'>
                                        Popular articles
                                    </div>
                                    <div>
                                        <ul>
                                            <li>
                                                <a href="/articles/development-with-flutter/" className="dropdown__link lg:line-clamp-1">
                                                    Development with Flutter
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/articles/web-development-with-react/" className="dropdown__link lg:line-clamp-1">
                                                    Web development with React
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/articles/backend-development-expert/" className="dropdown__link lg:line-clamp-1">
                                                    Backend development expert
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <div className='font-semibold uppercase text-base lg:text-xs'>
                                        Careers
                                    </div>
                                    <div>
                                        <ul>
                                            <li>
                                                <a href="/articles/web-development/" className="dropdown__link lg:line-clamp-1">
                                                    Web development
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/articles/applications-development/" className="dropdown__link lg:line-clamp-1">
                                                    Applications development
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/articles/ui-ux-design/" className="dropdown__link lg:line-clamp-1">
                                                    UI/UX design
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/articles/informatic-security/" className="dropdown__link lg:line-clamp-1">
                                                    Informatic security
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <div className='font-semibold uppercase text-base lg:text-xs'>
                                        Alumni Experience
                                    </div>
                                    <div>
                                        <ul>
                                            <li>
                                                <a href="/articles/job-experience/" className="dropdown__link lg:line-clamp-1">
                                                    Job Experience
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/articles/networking-connections/" className="dropdown__link lg:line-clamp-1">
                                                    Networking Connections
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className='flex-row items-center justify-between lg:justify-center hidden lg:flex mt-4'>
                        <div className='flex flex-row items-center justify-between'>
                            <span className='pr-1'>{new Date().getFullYear()}<span> &copy; </span></span>
                            <div className='relative group'>
                                <Link href={link} target='_blank'>ACM Vignan&apos;s IIT</Link>
                                <span className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === link ? 'w-full' : 'w-0'} dark:bg-light`}></span>
                            </div>
                        </div>
                    </div> */}
                </Layout>
                <div className='text-sm lg:text-xs flex items-center justify-center py-4 border-t-[0.5px] border-dark/45 dark:border-light/45 dark:!bg-[#242424]'>
                    <div className='flex flex-row items-center justify-between'>
                        <span className='pr-1'><span> &copy; </span>{new Date().getFullYear()}</span>
                        <div className='relative group'>
                            <Link href={link} target='_blank'>ACM Vignan&apos;s IIT</Link>
                            <span className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === link ? 'w-full' : 'w-0'} dark:bg-light`}></span>
                        </div>
                        <span>&nbsp;| All rights reserved.</span>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer