import React from "react";
import MemberProfile from "@/components/MemberProfile";
import abdul_rafay from '../../../public/asset/img/teams/2024/abdul_rafay.png'

const Member = () => {
    return (
        <>
            <main className={`flex min-h-screen flex-col items-center justify-between text-dark dark:text-light`}>
                <MemberProfile
                    profilePic={abdul_rafay}
                    name={`Abdul Rafay`}
                    role={`Treasurer`}
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
