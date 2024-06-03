import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import ACM_VIIT_LOGO from "../../public/asset/svg/acm-viit-2024.svg";
import ACM_VIGNANS_IIT_LOGO from "../../public/asset/svg/acm-vignans-iit-logo.svg";
import { TwitterIcon, GithubIcon, LinkedInIcon, SunIcon, MoonIcon, } from "./Icons";

const CustomLink = ({ href, title, className = "" }) => {
    const router = useRouter();

    return (
        <Link href={href} className={`${className} relative group text-lg`}>
            <div>
                {title}
                <span
                    className={`h-[1.5px] inline-block bg-dark absolute top-14 xl1:top-8 left-0 -bottom-0.5 group-hover:w-full group-hover:xl1:w-[20%] transition-[width] ease duration-300 
                    ${router.asPath === href ? "w-full xl1:w-[20%]" : "w-0"}
                    dark:bg-light`}
                ></span>
            </div>
        </Link>
    );
};

const Navbar = () => {
    const [mode, setMode] = useThemeSwitcher();
    const [isOpen, setIsOpen] = useState(false);

    const handleClose = (event) => {
        if (event.key === 'Escape') {
            setIsOpen(false);
            closeMenuAndDropdowns();
        }
    };

    const closeMenuAndDropdowns = () => {
        const nav = document.getElementById("nav-menu");
        const toggle = document.getElementById("nav-toggle");
        const showDropdown = document.querySelector(".show-dropdown");

        if (nav && toggle) {
            nav.classList.remove("show-menu");
            toggle.classList.remove("show-icon");
        }

        if (showDropdown) {
            const dropdownContainer = showDropdown.querySelector(".dropdown__container");
            if (dropdownContainer) {
                dropdownContainer.removeAttribute("style");
            }
            showDropdown.classList.remove("show-dropdown");
        }
    };

    useEffect(() => {
        const showMenu = (toggleId, navId) => {
            const toggle = document.getElementById(toggleId);
            const nav = document.getElementById(navId);

            toggle.addEventListener("click", () => {
                nav.classList.toggle("show-menu");
                toggle.classList.toggle("show-icon");
                // setIsOpen(!isOpen);
            });

            // Close menu when a nav link is clicked
            const navLinks = document.querySelectorAll('.custom_nav__link');
            navLinks.forEach((link) => {
                link.addEventListener('click', () => {
                    nav.classList.remove('show-menu');
                    toggle.classList.remove('show-icon');
                    setIsOpen(false);
                });
            });
        };

        showMenu("nav-toggle", "nav-menu");

        const dropdownItems = document.querySelectorAll(".dropdown__item");

        dropdownItems.forEach((item) => {
            const dropdownButton = item.querySelector(".dropdown__button");

            dropdownButton.addEventListener("click", () => {
                const showDropdown = document.querySelector(".show-dropdown");
                toggleItem(item);
                if (showDropdown && showDropdown !== item) {
                    toggleItem(showDropdown);
                }
            });
        });

        const toggleItem = (item) => {
            const dropdownContainer = item.querySelector(".dropdown__container");
            if (item.classList.contains("show-dropdown")) {
                dropdownContainer.removeAttribute("style");
                item.classList.remove("show-dropdown");
            } else {
                dropdownContainer.style.height = `${dropdownContainer.scrollHeight}px`;
                item.classList.add("show-dropdown");
            }
        };

        const mediaQuery = matchMedia("(min-width: 1118px)");
        const dropdownContainer = document.querySelectorAll(".dropdown__container");

        const removeStyle = () => {
            if (mediaQuery.matches) {
                dropdownContainer.forEach((e) => {
                    e.removeAttribute("style");
                });

                dropdownItems.forEach((e) => {
                    e.classList.remove("show-dropdown");
                });
            }
        };

        window.addEventListener("resize", removeStyle);
        document.addEventListener('keydown', handleClose);

        return () => {
            document.removeEventListener('keydown', handleClose);
        };
    }, []);

    const handleLinkClick = () => {
        setIsOpen(false);
        closeMenuAndDropdowns();
    };

    return (
        <>
            <Head>
                <link
                    href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css"
                    rel="stylesheet"
                />
            </Head>
            <main className="nav_header text-dark dark:text-light bg-light dark:bg-dark">
                <nav className="nav px-8 xl:px-16 lg:px-8 md:px-4">
                    <div className="nav__data">
                        <div className='w-full flex justify-between items-center'>
                            <Link href="/">
                                <div className='flex flex-row items-center justify-center selector-none xl1:pt-1'>
                                    <span className='pr-2 w-12 h-12 pt-1.5'><Image src={ACM_VIIT_LOGO} alt="ACM-VIIT" className='selector-none' /></span>
                                    <div className='text-dark dark:text-light lg:flex flex-col items-start justify-center hidden'>
                                        <div className='text-[15px]'><span className=''>ACM</span> Vignan&apos;s IIT</div>
                                    </div>
                                    <div className='text-dark dark:text-light flex flex-col items-start justify-center lg:hidden'>
                                        <div className='text-[15px] font-semibold'>Association for Computing Machinery</div>
                                        <div className='text-[12px]'>Vignan&apos;s Institute of Information Technology - Visakhapatnam</div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="nav__toggle" id="nav-toggle">
                            <i className="ri-menu-line nav__toggle-menu"></i>
                            <i className="ri-close-line nav__toggle-close"></i>
                        </div>
                    </div>

                    <div className="nav__menu z-50 theme-transition" id="nav-menu">
                        <ul className="nav__list">
                            <li className="xl1:py-4 pr-8" id="nav-toggle">
                                <CustomLink href="/" title="Home" className="nav__link custom_nav__link" />
                            </li>

                            <li className="xl1:pb-4 pr-8">
                                <CustomLink href="/events" title="Events" className="nav__link custom_nav__link" />
                            </li>

                            <li className="xl1:pb-4 pr-8">
                                <CustomLink href="/articles" title="Articles" className="nav__link custom_nav__link" />
                            </li>

                            {/* dropdown Discover Articles, Important Links */}
                            <li className="dropdown__item xl1:pb-4 pr-5">
                                <div className="nav__link dropdown__button text-lg">
                                    <span>Discover</span>
                                    <i className="ri-arrow-down-s-line dropdown__arrow"></i>
                                </div>
                                <div className="dropdown__container">
                                    <div className="dropdown__content">
                                        <div className="dropdown__group">
                                            <div className="dropdown__icon">
                                                <i className="ri-flashlight-line"></i>
                                            </div>
                                            <span className="dropdown__title">
                                                Most viewed articles
                                            </span>
                                            <ul className="dropdown__list">
                                                <li>
                                                    <a href="/articles/" className="dropdown__link">
                                                        Articles
                                                    </a>
                                                </li>
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
                                        <div className="dropdown__group">
                                            <div className="dropdown__icon">
                                                <i className="ri-heart-3-line"></i>
                                            </div>
                                            <span className="dropdown__title">Popular articles</span>
                                            <ul className="dropdown__list">
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
                                        <div className="dropdown__group">
                                            <div className="dropdown__icon">
                                                <i className="ri-book-mark-line"></i>
                                            </div>
                                            <span className="dropdown__title">Careers</span>
                                            <ul className="dropdown__list">
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
                                        <div className="dropdown__group">
                                            <div className="dropdown__icon">
                                                <i className="ri-file-paper-2-line"></i>
                                            </div>
                                            <span className="dropdown__title">Alumni Experience</span>
                                            <ul className="dropdown__list">
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
                            </li>   
                            <li className="xl1:pb-4 pr-8">
                                <CustomLink href="/team" title="Team" className="nav__link custom_nav__link" />
                            </li>
                            <li className="xl1:pb-4 pr-8">
                                <CustomLink href="/contact" title="Contact" className="nav__link custom_nav__link" />
                            </li>

                            <li>
                                <div className='flex items-center justify-center xl1:hidden'>
                                    <button
                                        onClick={() => setMode(mode === "light" ? "dark" : "light")}
                                        className={`px-4 py-1 w-12 flex items-center justify-center  rounded-full p-[0.2rem] ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
                                    >
                                        {mode === "dark" ? <SunIcon className={"fill-dark"} /> : <MoonIcon className={"fill-dark"} />}
                                    </button>
                                </div>
                                <nav className='items-center justify-center flex-wrap mt-2 hidden xl1:flex'>
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
                                        className={`px-4 py-1 w-12 ml-6 sm:mx-1 flex items-center justify-center rounded-full p-[0.2rem] ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
                                        aria-label="theme-switcher"
                                    >
                                        {
                                            mode === "dark"
                                                ? <SunIcon className={"fill-dark"} />
                                                : <MoonIcon className={"fill-dark"} />
                                        }
                                    </button>
                                </nav>
                            </li>
                        </ul>
                    </div>
                </nav>
            </main>
        </>
    );
};

export default Navbar;
