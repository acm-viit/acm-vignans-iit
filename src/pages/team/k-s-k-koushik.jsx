import React from "react";
import MemberProfile from "@/components/MemberProfile";
import k_s_k_koushik from '../../../public/asset/img/teams/2024/k_s_k_koushik.png'

const Member = () => {
    return (
        <>
            <main className={`flex min-h-screen flex-col items-center justify-between text-dark dark:text-light`}>
                <MemberProfile
                    profilePic={k_s_k_koushik}
                    name={`K. S. K. Koushik`}
                    role={`Machine Learning`}
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
