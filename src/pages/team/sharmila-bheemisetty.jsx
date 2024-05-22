import React from "react";
import MemberProfile from "@/components/MemberProfile";
import sharmila_bheemisetty from '../../../public/asset/img/teams/2024/sharmila_bheemisetty.jpg'

const Member = () => {
    return (
        <>
            <main className={`flex min-h-screen flex-col items-center justify-between`}>
                <MemberProfile
                    profilePic={sharmila_bheemisetty}
                    name={`Bheemisetty Sharmila`}
                    role={`Web Technologies`}
                    linkedin={`https://www.linkedin.com/in/bheemisetty-sharmila-aa6459257`}
                    github={`https://github.com/sharmi4590`}
                    twitter={`https://twitter.com/sharmi4590`}
                    about={`
                        ☯ Hi, I'm Sharmila
                        <br>
                        ☯ I have skills in:
                        Competitive Programming | MERN Stack Development | Flask Development | SQL
                        <br>
                        ☯ Currently, I'm expanding my knowledge in Python libraries for development and I'm eager to learn more.
                        <br>
                        ☯ I possess strong leadership abilities.
                        <br>
                        ☯ I'm passionate about collaboration and expanding my professional network.
                        <br>
                        ☯ Let's connect ⟶ <a href="https://t.me/Sharmila Bheemisetty" target="_blank">telegram/Sharmila Bheemisetty<a>
                    `}
                />
            </main>
        </>
    );
};

export default Member;
