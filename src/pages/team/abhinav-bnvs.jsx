import React from "react";
import MemberProfile from "@/components/MemberProfile";
import abhinav_bathina from '../../../public/asset/img/teams/2024/abhinav_bathina.jpeg'

const Member = () => {
    return (
        <>
            <main className={`flex min-h-screen flex-col items-center justify-between`}>
                <MemberProfile
                    profilePic={abhinav_bathina}
                    name={`Abhinav BNVS`}
                    role={`Event Manager`}
                    linkedin={`https://www.linkedin.com/in/abhinav-bathina-7a7926251`}
                    github={`https://github.com/AbhinavBathina`}
                    twitter={`https://x.com/Abhinav21345521`}
                    about={`
                        As the event manager , I blend fun with flawless organization. From Tech talks to seminars , I handle logistics, co-ordinate speakers and ensure everything runs smoothly. I thrive on creating engaging and tech-savvy experiences that inspire and connect our community 
                        <br>
                        <br>
                        Instagram - <a href="https://www.instagram.com/_abhinav._____?igsh=bGR4dDRnNW9sMWlh" target="_blank">instagram/_abhinav._____</a>
                    `}
                />
            </main>
        </>
    );
};

export default Member;
