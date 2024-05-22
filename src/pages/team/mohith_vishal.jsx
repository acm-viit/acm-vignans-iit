import React from "react";
import MemberProfile from "@/components/MemberProfile";
import mohith_vishal from '../../../public/asset/img/teams/2024/mohith_vishal.jpg'

const Member = () => {
    return (
        <>
            <main className={`flex min-h-screen flex-col items-center justify-between text-dark dark:text-light`}>
                <MemberProfile
                    profilePic={mohith_vishal}
                    name={`Mohith Vishal`}
                    role={`Membership Chair`}
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
