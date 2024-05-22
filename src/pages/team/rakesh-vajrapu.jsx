import React from "react";
import MemberProfile from "@/components/MemberProfile";
import v_b_rakesh from '../../../public/asset/img/teams/2024/v_b_rakesh.jpg'

const Member = () => {
    return (
        <>
            <main className={`flex min-h-screen flex-col items-center justify-between text-dark dark:text-light`}>
                <MemberProfile
                    profilePic={v_b_rakesh}
                    name={`Rakesh Vajrapu`}
                    role={`Content Writer`}
                    linkedin={`https://www.linkedin.com/in/rakeshvajrapu/`}
                    github={`https://github.com/rakesh-vajrapu`}
                    twitter={`https://twitter.com/rakesh_vajrapu`}
                    about={`
                        ➢ Hi, I'm Rakesh Vajrapu - A Passionate Developer!
                        <br>
                        ➢ I'm looking to collaborate on Open-source projects and connect with fellow developers.
                        <br>
                        ➢ Currently, I am delving into the intriguing world of Machine Learning.
                        <br>
                        ➢ How to reach me ⟶ <a href="https://www.linkedin.com/in/rakeshvajrapu/" target="_blank">linkedin/rakeshvajrapu</a>
                    `}
                />
            </main>
        </>
    );
};

export default Member;
