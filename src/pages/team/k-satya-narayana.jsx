import React from "react";
import MemberProfile from "@/components/MemberProfile";
import k_satya_narayana from '../../../public/asset/img/teams/2024/k_satya_narayana.jpg'

const Member = () => {
    return (
        <>
            <main className={`flex min-h-screen flex-col items-center justify-between`}>
                <MemberProfile
                    profilePic={k_satya_narayana}
                    name={`K. Satya Narayana`}
                    role={`Blockchain`}
                    linkedin={`https://www.linkedin.com/in/satya-narayana-kuna-03534223`}
                    github={`https://github.com/satya2804`}
                    twitter={`https://x.com/Satya2844`}
                    about={`
                        1) Hi, I'm K. Satya Narayana
                        <br>
                        2) I have expertise in:
                        <br>
                        &emsp;&emsp;Blockchain technology | Web Development | Competitive Programming | Problem Solving | React JS | Solidity 
                        <br>
                        3) 3 star in CodeChef
                    `}
                />
            </main>
        </>
    );
};

export default Member;
