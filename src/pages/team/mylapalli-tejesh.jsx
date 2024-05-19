import React from "react";
import MemberProfile from "@/components/MemberProfile";
import mylapalli_tejesh from '../../../public/asset/img/teams/2024/mylapalli_tejesh.jpg'

const Member = () => {
    return (
        <>
            <main className={`flex min-h-screen flex-col items-center justify-between`}>
                <MemberProfile
                    profilePic={mylapalli_tejesh}
                    name={`Mylapalli Tejesh`}
                    role={`Member`}
                    linkedin={`https://www.linkedin.com/in/mylapalli-tejesh-b1a174270`}
                    github={`https://github.com/tejesh2709`}
                    twitter={``}
                    about={`
                        Hello I'm Tejesh Mylapalli
                        <br>
                        <br>
                        Known domains:
                        <br>
                        Ui/ux,web development,graphic designing 
                        <br>
                        You can reach me by socials:
                        <br>
                        <br>
                        Instagram: <a href="https://www.instagram.com/_tejesh_?igsh=ZmU4aGY3ZG10cnJu" target="_blank">instagram/_tejesh_</a>
                        <br>
                        LinkedIn: <a href="https://www.linkedin.com/in/mylapalli-tejesh-b1a174270?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">linkedin/mylapalli-tejesh-b1a174270</a>
                    `}
                />
            </main>
        </>
    );
};

export default Member;
