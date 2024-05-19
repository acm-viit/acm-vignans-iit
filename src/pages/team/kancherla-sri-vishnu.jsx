import React from "react";
import MemberProfile from "@/components/MemberProfile";
import kancherla_sri_vishnu from '../../../public/asset/img/teams/2024/kancherla_sri_vishnu.jpg'

const Member = () => {
    return (
        <>
            <main className={`flex min-h-screen flex-col items-center justify-between`}>
                <MemberProfile
                    profilePic={kancherla_sri_vishnu}
                    name={`Kancherla Sri Vishnu`}
                    role={`Web Master`}
                    linkedin={`https://www.linkedin.com/in/sri-vishnu-kancherla-06639b221/`}
                    github={``}
                    twitter={`https://x.com/KancherlaSri`}
                    portfolio={`https://vishnu-delta.vercel.app/`}
                    about={`
                        I am a motivated and enthusiastic software developer with comprehensive skills in Full Stack web development. 
                        <br>
                        Proficient in multiple programming languages and frameworks, including C++, Java, Python, React, Next.js, Node.js, and Express.js. 
                        <br>
                        Adept at constructing robust and secure backend APIs, performing thorough development and debugging processes, and keeping abreast of the latest industry advancements. Committed to delivering innovative solutions and embracing a mindset of continuous learning.
                    `}
                />
            </main>
        </>
    );
};

export default Member;  
