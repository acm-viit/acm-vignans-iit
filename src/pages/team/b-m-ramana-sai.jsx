import React from "react";
import MemberProfile from "@/components/MemberProfile";
import manasvi_ramana_sai from '../../../public/asset/img/teams/2024/manasvi_ramana_sai.jpg'

const Member = () => {
    return (
        <>
            <main className={`flex min-h-screen flex-col items-center justify-between`}>
                <MemberProfile
                    profilePic={manasvi_ramana_sai}
                    name={`B. M. Ramana Sai`}
                    role={`UI/UX`}
                    linkedin={`https://www.linkedin.com/in/manasviramanasai`}
                    github={`https://github.com/manuzz29`}
                    twitter={`https://x.com/Ramana290?t=udhBxBlCWdYR6nbC7Y_9Rw&s=09`}
                    about={`
                        -> Hi, I'm Ramana
                        <br>
                        -> Passionate about design and development
                        <br>
                        -> Skills - wireframing, Prototyping, Interaction design, User research, Html, CSS, Javascript,Python, Critical thinking, Problem solving, Project Management. 
                        <br>
                        <br>
                        
                        Connect with me:
                        <br>
                        Instagram:  <a href="https://www.instagram.com/twent9._/" target="_blank">instagram/twent9._</a>
                        <br>
                        Behance: <a href="https://www.behance.net/saisai124" target="_blank">behance/saisai124</a>
                    `}
                />
            </main>
        </>
    );
};

export default Member;
