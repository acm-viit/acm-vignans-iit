import React from "react";
import MemberProfile from "@/components/MemberProfile";
import t_krishna_sasank from '../../../public/asset/img/teams/2024/t_krishna_sasank.jpg'

const Member = () => {
    return (
        <>
            <main className={`flex min-h-screen flex-col items-center justify-between`}>
                <MemberProfile
                    profilePic={t_krishna_sasank}
                    name={`Tatavarty S. S. Krishna Sasank`}
                    role={`Vice Chair`}
                    linkedin={`https://linkedin.com/in/krishna-sasank-5212a5256`}
                    github={`https://github.com/krishna-sasank9`}
                    twitter={``}
                    about={`
                        Dreamer, doer, developer. In the bustling world of technology, I found my calling in using code to craft solutions that resonate. 
                        <br>
                        My academic foundation is rock-solid, thanks to Vignan's Institute of Information Technology, and it's complemented by hands-on project experience that spans across various domains.
                        <br>
                        <br>
                        Leetcode: <a class="hover:text-blue-500" href="https://leetcode.com/u/k_sasank_9913/" target="_blank">leetcode.com/k_sasank_9913</a>
                        <br>
                        Codechef: <a class="hover:text-blue-500" href="https://www.codechef.com/users/lucky_952004" target="_blank">codechef.com/lucky_952004</a>
                    `}
                />
                
            </main>
        </>
    );
};

export default Member;
