import React from 'react'
import Layout from './Layout'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { motion } from "framer-motion";
import ACM_VIGNANS_IIT_LOGO from '../../public/asset/svg/acm-vignans-iit-logo.svg'
import { InstagramIcon, GithubIcon, LinkedInIcon, } from './Icons'

const Footer = () => {
    const router = useRouter();
    let link = "https://gdsc.community.dev/vignans-institute-of-information-technology-visakhapatnam/"
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
                        <div className='flex flex-col items-center justify-center pb-5'>
                            <Image src={ACM_VIGNANS_IIT_LOGO} alt="GDSC-VIIT" className='ml-1 w-32' />
                            <div className='flex flex-col items-center justify-center'>
                                <div className='md:text-[20px] sm:text-[15px] lg:text-[20px] text-xl'>Association for Computing Machinery</div>
                                <div className='lg:text-[15px] md:text-[10px] sm:text-[8px] text-xs'>Vignan&apos;s Institute of Information Technology - Visakhapatnam</div>
                            </div>
                        </div>
                        <nav className='flex items-center justify-center flex-wrap'>
                            {/* <motion.a href="https://twitter.com" target={"_blank"}
                            className="w-6 mr-3 sm:mx-1"
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            >
                                <TwitterIcon />
                            </motion.a> */}
                            <motion.a href="https://www.linkedin.com/company/gdscviit" target={"_blank"} className="w-6 mx-3 sm:mx-1"
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <LinkedInIcon />
                            </motion.a>
                            <motion.a href="https://www.instagram.com/gdscviit/" target={"_blank"} className="w-6 mx-3 mt-1 sm:mt-0 sm:mr-5 rounded-full"
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <InstagramIcon />
                            </motion.a>
                            <motion.a href="https://github.com/" target={"_blank"} className="w-6 mx-3 sm:mx-1 bg-light rounded-full dark:bg-dark"
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
                </Layout>
            </footer>
        </div>
    )
}

export default Footer