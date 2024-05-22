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
            <footer className='w-full border-t-[0.5px] border-solid border-t-dark  dark:border-t-light font-medium text-lg dark:text-light sm:text-base'>
                <Layout className='py-4 flex flex-col lg:flex-col dark:!bg-[#242424]'>

                    <div className='flex lg:flex-col flex-row items-center justify-between align-middle'>
                        <div className='flex flex-row items-center justify-between lg:hidden'>
                            <span className='pr-1'>{new Date().getFullYear()}<span> &copy; </span></span>
                            <div className='relative group'>
                                <Link href={link} target='_blank'>ACM Vignan&apos;s IIT</Link>
                                <span className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === link ? 'w-full' : 'w-0'} dark:bg-light`}></span>
                            </div>
                        </div>
                        <div className='flex flex-col items-center justify-center pb-5 selector-none'>
                            <Image src={ACM_VIGNANS_IIT_LOGO} alt="ACM-VIGNANS-IIT" className='ml-1 w-32 selector-none' />
                            <div className='flex flex-col items-center justify-center'>
                                <div className='md:text-[20px] sm:text-[15px] lg:text-[20px] text-xl'>Association for Computing Machinery</div>
                                <div className='lg:text-[15px] md:text-[10px] sm:text-[8px] text-xs'>Vignan&apos;s Institute of Information Technology - Visakhapatnam</div>
                            </div>
                        </div>
                        <nav className='flex items-center justify-center flex-wrap'>
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
                        <div className='flex-row items-center justify-between hidden lg:flex sm:pt-4 pt-4'>
                            <span className='pr-1'>{new Date().getFullYear()}<span> &copy; </span></span>
                            <div className='relative group'>
                                <Link href={link}>ACM Vignan&apos;s IIT</Link>
                                <span className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === link ? 'w-full' : 'w-0'} dark:bg-light`}>&nbsp;</span>
                            </div>
                        </div>
                    </div>
                    <div className='my-10 flex items-center justify-center'>


                        <div className='grid grid-cols-4 lg:grid-cols-2 sm:grid-cols-1 gap-20 sm:gap-10'>
                            <div>
                                <div className='font-semibold'>
                                    Most viewed articles
                                </div>
                                <div>
                                    <ul>
                                        <li>
                                            <a href="/articles/html-for-beginners/" className="dropdown__link">
                                                HTML for beginners
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/articles/advanced-css/" className="dropdown__link">
                                                Advanced CSS
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/articles/javascript-oop/" className="dropdown__link">
                                                JavaScript OOP
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <div className='font-semibold'>
                                    Popular articles
                                </div>
                                <div>
                                    <ul>
                                        <li>
                                            <a href="/articles/development-with-flutter/" className="dropdown__link">
                                                Development with Flutter
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/articles/web-development-with-react/" className="dropdown__link">
                                                Web development with React
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/articles/backend-development-expert/" className="dropdown__link">
                                                Backend development expert
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <div className='font-semibold'>
                                    Careers
                                </div>
                                <div>
                                    <ul>
                                        <li>
                                            <a href="/articles/web-development/" className="dropdown__link">
                                                Web development
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/articles/applications-development/" className="dropdown__link">
                                                Applications development
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/articles/ui-ux-design/" className="dropdown__link">
                                                UI/UX design
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/articles/informatic-security/" className="dropdown__link">
                                                Informatic security
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <div className='font-semibold'>
                                    Alumni Experience
                                </div>
                                <div>
                                    <ul>
                                        <li>
                                            <a href="/articles/job-experience/" className="dropdown__link">
                                                Job Experience
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/articles/networking-connections/" className="dropdown__link">
                                                Networking Connections
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </Layout>
            </footer>
        </div>
    )
}

export default Footer