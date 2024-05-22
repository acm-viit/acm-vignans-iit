import React from "react";
import MemberProfile from "@/components/MemberProfile";
import k_srujan from '../../../public/asset/img/teams/2024/k_srujan.png'

const Member = () => {
    return (
        <>
            <main className={`flex min-h-screen flex-col items-center justify-between text-dark dark:text-light`}>
                <MemberProfile
                    profilePic={k_srujan}
                    name={`K. Srujan`}
                    role={`Video Editor`}
                    linkedin={``}
                    github={``}
                    twitter={``}
                    about={`
                        
                    `}
                />
            </main>
        </>
    );
};

export default Member;
