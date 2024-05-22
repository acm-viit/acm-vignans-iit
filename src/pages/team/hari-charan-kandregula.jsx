import React from "react";
import Head from "next/head";
import MemberProfile from "@/components/MemberProfile";
import k_hari_charan from '../../../public/asset/img/teams/2024/k_hari_charan.jpeg'

const Member = () => {
    return (
        <>
            <main className={`flex min-h-screen flex-col items-center justify-between text-dark dark:text-light`}>
                <MemberProfile
                    profilePic={k_hari_charan}
                    name={`Hari Charan Kandregula`}
                    role={`Chairperson`}
                    linkedin={`https://in.linkedin.com/in/haricharan0310`}
                    github={`https://github.com/Haricharan0310`}
                    twitter={`https://twitter.com/haricharan0310`}
                    about={`
                        Hey there! I'm Charan 👋. Coding is my passion, and I dive into it every day. I specialize in building cross-platform apps using Flutter 🚀 and have a huge interest in Machine Learning 🤖. Right now, I'm deep into learning about LLMs and NLP. I'm always up for collaborating on exciting projects. Let's create something amazing together! 💡✨
                    `}
                />
            </main>
        </>
    );
};

export default Member;
