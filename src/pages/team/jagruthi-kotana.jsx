import React from "react";
import MemberProfile from "@/components/MemberProfile";
import jagruthi_kotana from '../../../public/asset/img/teams/2024/jagruthi_kotana.jpg'

const Member = () => {
    return (
        <>
            <main className={`flex min-h-screen flex-col items-center justify-between`}>
                <MemberProfile
                    profilePic={jagruthi_kotana}
                    name={`Jagruthi Kotana`}
                    role={`Member`}
                    linkedin={`https://www.linkedin.com/in/jagruthi-kotana-37608b272`}
                    github={`https://github.com/jagruthi28`}
                    twitter={``}
                    about={`
                        I'm a member of the ACM Club. As of now I have knowledge about webdev and can do competitive programming
                    `}
                />
            </main>
        </>
    );
};

export default Member;
