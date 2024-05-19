import React from "react";
import MemberProfile from "@/components/MemberProfile";
import basa_vaishnavi from '../../../public/asset/img/teams/2024/basa_vaishnavi.jpg'

const Member = () => {
    return (
        <>
            <main className={`flex min-h-screen flex-col items-center justify-between`}>
                <MemberProfile
                    profilePic={basa_vaishnavi}
                    name={`Vaishnavi Basa`}
                    role={`Public Speaker`}
                    linkedin={`https://www.linkedin.com/in/vaishnavibasa14102003`}
                    github={`https://gitHub.com/vyshu-03`}
                    twitter={`https://twitter.com/vyshu_03`}
                    about={`
                        Brief and confident in expressing out things.
                        <br>
                        Creates engaging content for the audience.
                    `}
                />
            </main>
        </>
    );
};

export default Member;
