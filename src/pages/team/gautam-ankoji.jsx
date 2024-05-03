import MemberProfile from "@/components/MemberProfile";
import React from "react";
import aditya_rompella from '../../../public/assets/team/2023/aditya_rompella.jpg'
import gautam_ankoji from '../../../public/asset/img/teams/2024/gautam_ankoji.png'
import Head from "next/head";

const Member = () => {
    return (
        <>
            <Head>
                <title>Gautam Ankoji | ACM Vignan&apos;s IIT | Association for Computing Machinery Vignan&apos;s Institute of Information Technology - Visakhapatna</title>
                <link rel="icon" type="image/svg" href="../../public/asset/favicon/favicon-32x32.png" sizes="32x32" />
                <link rel="icon" type="image/svg" href="../../public/asset/favicon/android-chrome-192x192.png" sizes="192x192" />
                <link rel="icon" type="image/svg" href="../../public/asset/favicon/android-chrome-512x512.png" sizes="512x512" />
                <link rel="icon" type="image/svg" href="../../public/asset/favicon/favicon-16x16.png" sizes="16x16" />
                <link rel="apple-touch-icon" sizes="180x180" href="../../public/asset/favicon/apple-touch-icon.png" />
            </Head>
            <main className={`w-[100vw]`}>
                <MemberProfile
                    profilePic={gautam_ankoji}
                    name={`Gautam Ankoji`}
                    role={`Web/Mobile Technologies`}
                    linkedin={`https://www.linkedin.com/in/gautamankoji/`}
                    github={`https://www.github.com/gautamankoji/`}
                    twitter={``}
                    about={`
                        <!-- Introduction and Information -->
                        <p>&#8287;☯ Hi, I'm <strong>Gautam Ankoji</strong></p>
                        <p>&#8287;☯ I have expertise in:</p>
                        <br/> 
                        <div align="center">
                            <strong><code>Astrophysics</code></strong> | <strong><code>Full stack Development</code></strong> | <strong><code>Compitative Programming</code></strong> | <strong><code>Pen Testing</code></strong> | <strong><code>Designing and Editing</code></strong> | <strong><code>Game Development</code></strong>
                            </div>
                            <br/>
                        <p>&#8287;☯ I'm currently learning how to identify vulnerabilities using <strong>Burp Suite</strong> and <strong>Wireshark</strong>.</p>
                        <p>&#8287;☯ I'm looking to collaborate on <strong>design and development</strong>.</p>
                        <p>&#8287;☯ How to reach me ⟶ <a href="https://t.me/herogautam" target="_blank"><strong>telegram/gautamankoji</strong></a></p>
                    `}
                />
            </main>
        </>
    );
};

export default Member;
