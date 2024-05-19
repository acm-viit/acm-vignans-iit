import React from "react";
import MemberProfile from "@/components/MemberProfile";
import gautam_ankoji from '../../../public/asset/img/teams/2024/gautam_ankoji.png'
import Head from "next/head";

const Member = () => {
    return (
        <>
            <main className={`flex min-h-screen flex-col items-center justify-between text-dark dark:text-light`}>
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
                        <p class="pb-2">&#8287;☯ I have expertise in:</p>
                        <div class="pb-2 md:pl-6" align="">
                            <span class="md:hidden">&ensp;&ensp;&ensp;</span><code>Astrophysics</code> | <code>Full stack Development</code> | <code>Competitive Programming</code> | <code>Pen Testing</code> | <code>Designing and Editing</code> | <code>Game Development</code>
                            </div>
                        <p>&#8287;☯ I'm currently learning how to identify vulnerabilities using <strong>Burp Suite</strong> and <strong>Wireshark</strong>.</p>
                        <p>&#8287;☯ I'm looking to collaborate on <strong>distributed systems and core backend development</strong>.</p>
                        <p>&#8287;☯ How to reach me ⟶ <a href="https://t.me/herogautam" target="_blank">telegram/gautamankoji</a></p>
                    `}
                />
            </main>
        </>
    );
};

export default Member;
