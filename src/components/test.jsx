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
                    className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
        ${router.asPath === href ? "w-full" : "w-0"}
        dark:bg-light`}
                ></span>
            </div>
        </Link>
    );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
    const router = useRouter();
    const handleClick = () => {
        toggle();
        router.push(href);
    };

    return (
        <button
            href={href}
            className={`${className} relative group text-light dark:text-dark my-2`}
            onClick={handleClick}
        >
            {title}
            <span
                className={`h-[1px] inline-block bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
        ${router.asPath === href ? "w-full" : "w-0"}
        dark:bg-dark`}
            ></span>
        </button>
    );
};

const Dropdown = ({ title, items, isOpen, onToggle }) => {
    return (
        <li className="dropdown__item">
            <div className="nav__link dropdown__button text-lg" onClick={onToggle}>
                {title} <i className="ri-arrow-down-s-line dropdown__arrow"></i>
            </div>
            <div className={`dropdown__container ${isOpen ? "show_dropdown" : ""}`}>
                <div className="dropdown__content">
                    {items.map((item, index) => (
                        <div className="dropdown__group" key={index}>
                            {/* <div className="dropdown__icon">
                  <i className={item.icon}></i>
                </div> */}
                            <span className="dropdown__title">{item.title}</span>
                            <ul className="dropdown__list">
                                {item.links.map((link, index) => (
                                    <li key={index}>
                                        <a href={link.href} className="dropdown__link">
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </li>
    );
};

export default function Header() {
    const [showMenu, setShowMenu] = useState(true);
    const [dropdowns, setDropdowns] = useState({});
    const [mode, setMode] = useThemeSwitcher();
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    const handleClose = (event) => {
        if (event.key === "Escape") {
            setIsOpen(false);
        }
    };

    const handlePopupClick = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        document.addEventListener("keydown", handleClose);

        return () => {
            document.removeEventListener("keydown", handleClose);
        };
    }, []);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const toggleDropdown = (index) => {
        setDropdowns((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1118) {
                setShowMenu(false);
                setDropdowns({});
            }
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <>
            <Head>
                <link
                    href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css"
                    rel="stylesheet"
                />
            </Head>
            <header className="nav_header">
                <nav className="nav px-40">
                    <div className="nav__data">
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
                        <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
                            <i
                                className={`ri-menu-line nav__toggle_menu ${showMenu ? "show_icon" : ""
                                    }`}
                            ></i>
                            <i
                                className={`ri-close-line nav__toggle_close ${!showMenu ? "show_icon" : ""
                                    }`}
                            ></i>
                        </div>
                    </div>

                    <div
                        className={`nav show_menu`}
                        id="nav-menu"
                    >
                        <ul className="nav__list">
                            <li>
                                {/* <a href="/" className="nav__link">
                  Home
                </a> */}
                                <CustomLink href="/" title="Home" className="nav__link" />
                            </li>
                            <li>
                                {/* <a href="/events" className="nav__link">
                  Events
                </a> */}
                                <CustomLink href="/events" title="Events" className="nav__link" />
                            </li>
                            <Dropdown
                                title="Discover"
                                items={[
                                    {
                                        icon: "ri-flashlight-line",
                                        title: "Most viewed courses",
                                        links: [
                                            { name: "HTML for beginners", href: "#" },
                                            { name: "Advanced CSS", href: "#" },
                                            { name: "JavaScript OOP", href: "#" },
                                        ],
                                    },
                                    {
                                        icon: "ri-heart-3-line",
                                        title: "Popular courses",
                                        links: [
                                            { name: "Development with Flutter", href: "#" },
                                            { name: "Web development with React", href: "#" },
                                            { name: "Backend development expert", href: "#" },
                                        ],
                                    },
                                    {
                                        icon: "ri-book-mark-line",
                                        title: "Careers",
                                        links: [
                                            { name: "Web development", href: "#" },
                                            { name: "Applications development", href: "#" },
                                            { name: "UI/UX design", href: "#" },
                                            { name: "Informatic security", href: "#" },
                                        ],
                                    },
                                    {
                                        icon: "ri-file-paper-2-line",
                                        title: "Certifications",
                                        links: [
                                            { name: "Course certificates", href: "#" },
                                            { name: "Free certifications", href: "#" },
                                        ],
                                    },
                                ]}
                                isOpen={dropdowns[1]}
                                onToggle={() => toggleDropdown(1)}
                            />
                            <li>
                                {/* <a href="/team" className="nav__link">
                  Team
                </a> */}
                                <CustomLink href="/team" title="Team" className="nav__link" />
                            </li>
                            {/* <Dropdown
                title="Resources"
                items={[
                  {
                    icon: "ri-code-line",
                    title: "Web templates",
                    links: [
                      { name: "Free templates", href: "#" },
                      { name: "Premium templates", href: "#" },
                    ],
                  },
                  {
                    icon: "ri-pen-nib-line",
                    title: "Designs",
                    links: [
                      { name: "Web designs", href: "#" },
                      { name: "App designs", href: "#" },
                      { name: "Component design", href: "#" },
                    ],
                  },
                  {
                    icon: "ri-apps-2-line",
                    title: "Others",
                    links: [
                      { name: "Recent blogs", href: "#" },
                      { name: "Tutorial videos", href: "#" },
                      { name: "Webinar", href: "#" },
                    ],
                  },
                ]}
                isOpen={dropdowns[2]}
                onToggle={() => toggleDropdown(2)}
              /> */}
                            <li>
                                {/* <a href="contact" className="nav__link">
                  Contact
                </a> */}
                                <CustomLink
                                    href="/contact"
                                    title="Contact"
                                    className="nav__link"
                                />
                            </li>
                            {/* <Dropdown
                title="Company"
                items={[
                  {
                    icon: "ri-community-line",
                    title: "About us",
                    links: [
                      { name: "About us", href: "#" },
                      { name: "Support", href: "#" },
                      { name: "Contact us", href: "#" },
                    ],
                  },
                  {
                    icon: "ri-shield-line",
                    title: "Safety and quality",
                    links: [
                      { name: "Cookie settings", href: "#" },
                      { name: "Privacy Policy", href: "#" },
                    ],
                  },
                ]}
                isOpen={dropdowns[3]}
                onToggle={() => toggleDropdown(3)}
              /> */}
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    );
}
