import React from "react";
import MemberProfile from "@/components/MemberProfile";
import amrutha_rokkam from '../../../public/asset/img/teams/2024/amrutha_rokkam.jpg'

const Member = () => {
    return (
        <>
            <main className={`flex min-h-screen flex-col items-center justify-between`}>
                <MemberProfile
                    profilePic={amrutha_rokkam}
                    name={`Amrutha Rokkam`}
                    role={`Event Manager`}
                    linkedin={`https://www.linkedin.com/in/lakshmi-amrutha-rokkam-0b023122a`}
                    github={`https://github.com/Amrutha-01`}
                    twitter={``}
                    about={`
                        Hi, I'm Rokkam Lakshmi Amrutha. I have expertise in full stack Development and Competitive Programming. 
                        <br>
                        I'm currently learning Designing and NextJS .
                        <br>
                        I'm looking to collaborate on design and development.
                    `}
                />
            </main>
        </>
    );
};

export default Member;
