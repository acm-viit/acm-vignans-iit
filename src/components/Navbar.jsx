import Link from 'next/link'
import Image from 'next/image'
import { motion } from "framer-motion"
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import useThemeSwitcher from './hooks/useThemeSwitcher'
import ACM_VIIT_LOGO from '../../public/asset/svg/acm-viit-2024.svg'
import ACM_VIGNANS_IIT_LOGO from '../../public/asset/svg/acm-vignans-iit-logo.svg'
import { TwitterIcon, GithubIcon, LinkedInIcon, SunIcon, MoonIcon } from './Icons'

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group text-lg`}>
      {title}
      <span className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
      ${router.asPath === href ? 'w-full' : 'w-0'}
      dark:bg-light`}></span>
    </Link>
  )
}

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();
  const handleClick = () => {
    toggle();
    router.push(href)
  }

  return (
    <button href={href} className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleClick}>
      {title}
      <span className={`h-[1px] inline-block bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
      ${router.asPath === href ? 'w-full' : 'w-0'}
      dark:bg-dark`}></span>
    </button>
  )
}

const Navbar = ({ className = "" }) => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const handleClose = (event) => {
    if (event.key === 'Escape') {
      setIsOpen(false);
    }
  };

  const handlePopupClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener('keydown', handleClose);

    return () => {
      document.removeEventListener('keydown', handleClose);
    };
  }, []);

  return (
    <header
      className={`w-full px-10 py-6 font-medium flex items-center justify-between ${className}
      dark:text-light relative z-50 lg:px-16 md:px-12 sm:px-6 sm:border-b-0 border-b-[0px] border-solid border-dark dark:border-light`}
    >
      
      {/* Mobile Navbar */}
      <div className='w-full flex justify-between items-center' onClick={handlePopupClick}>
        <Link href="/">
          <div className='flex flex-row items-center justify-center selector-none'>
            <span className='pr-2 w-12 h-12 pt-1.5'><Image src={ACM_VIIT_LOGO} alt="ACM-VIIT" className='selector-none' /></span>
            <div className='text-dark dark:text-light lg:flex flex-col items-start justify-center hidden'>
              <div className='text-[15px]'><span className=''>ACM</span> Vignan&apos;s IIT</div>
            </div>
            <div className='text-dark dark:text-light flex flex-col items-start justify-center lg:hidden'>
              <div className='text-[15px]'>Association for Computing Machinery</div>
              <div className='text-[12px]'>Vignan&apos;s Institute of Information Technology - Visakhapatnam</div>
            </div>
          </div>
        </Link>
        <nav className='lg:hidden flex items-end justify-end flex-wrap'>
          <CustomLink href="/" title="Home" className='mr-4' />
          <CustomLink href="/team" title="Team" className='mx-4' />
          <CustomLink href="/events" title="Events" className='mx-4' />
          <CustomLink href="/contact" title="Contact" className='ml-4' />
          <div className='flex items-center justify-center pb-[2px]'>
            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`w-6 ml-6 flex items-center justify-center  rounded-full p-[0.2rem] ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
            >
              {
                mode === "dark"
                  ? <SunIcon className={"fill-dark"} />
                  : <MoonIcon className={"fill-dark"} />
              }
            </button></div>
        </nav>

      </div>

      <button className='popup hide flex-col justify-end items-center hidden lg:flex'
        onClick={handleClick}
      >
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm -translate-y-0.5 ${isOpen ? '-rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
      </button>
      {
        isOpen ?
          <motion.div
            initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
            animate={{ scale: 1, opacity: 1 }}
            className='min-w-[80vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/65 dark:bg-light/65 rounded-lg backdrop-blur-md py-28'>
            
            {/* Desktop Navbar */}
            <nav className='flex items-center flex-col justify-center '>
              <Link href="/">
                <div className='flex flex-col items-center justify-center'>
                  <Image className='w-32' src={ACM_VIGNANS_IIT_LOGO} alt="ACM-VIIT" />
                  <div className='text-light dark:text-dark flex flex-col items-center justify-center'>
                    <div className='md:text-[20px] sm:text-[15px] xs:text-[12px] lg:text-[20px]'>Association for Computing Machinery</div>
                    <div className='lg:text-[15px] md:text-[10px] sm:text-[8px] xs:text-[6px]'>Vignan&apos;s Institute of Information Technology - Visakhapatnam</div>
                  </div>
                </div>
              </Link>
              <CustomMobileLink href="/" title="Home" className='' toggle={handleClick} />
              <CustomMobileLink href="/team" title="Team" className='' toggle={handleClick} />
              <CustomMobileLink href="/events" title="Events" className='' toggle={handleClick} />
              <CustomMobileLink href="/contact" title="Contact" className='' toggle={handleClick} />
            </nav>

            <nav className='flex items-center justify-center flex-wrap mt-2'>
              <motion.a href="https://www.facebook.com/chapteradmin" target={"_blank"} className="w-6 mx-3 sm:mx-1"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <LinkedInIcon />
              </motion.a>
              <motion.a href="https://github.com/ACM-Vignans-IIT" target={"_blank"} className="w-6 mx-3 sm:mx-1 bg-light rounded-full dark:bg-dark"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <GithubIcon />
              </motion.a>
              <motion.a href="https://www.instagram.com/acm_viit/" target={"_blank"}
                className="w-6 mr-3 sm:mx-1"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <TwitterIcon />
              </motion.a>
              <button
                onClick={() => setMode(mode === "light" ? "dark" : "light")}
                className={`w-6 ml-6 sm:mx-1 flex items-center justify-center rounded-full p-[0.2rem] ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
              >
                {
                  mode === "dark"
                    ? <SunIcon className={"fill-dark"} />
                    : <MoonIcon className={"fill-dark"} />
                }
              </button>
            </nav>
          </motion.div>
          : null
      }
      <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
      </div>
    </header>
  )
}

export default Navbar