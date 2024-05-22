import React from "react";
import MemberProfile from "@/components/MemberProfile";
import mr_b_dinesh_reddy from '../../../public/asset/img/teams/2024/mr_b_dinesh_reddy.png'

const Member = () => {
    return (
        <>
            <main className={`flex min-h-screen flex-col items-center justify-between text-dark dark:text-light`}>
                <MemberProfile
                    profilePic={mr_b_dinesh_reddy}
                    name={`Mr. B. Dinesh Reddy`}
                    role={`Faculty Advisor`}
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
