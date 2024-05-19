import React from "react";
import MemberProfile from "@/components/MemberProfile";
import alayna_shaheen from '../../../public/asset/img/teams/2024/alayna_shaheen.jpg'

const Member = () => {
    return (
        <>
            <main className={`flex min-h-screen flex-col items-center justify-between`}>
                <MemberProfile
                    profilePic={alayna_shaheen}
                    name={`Alayna Shaheen`}
                    role={`Public Speaker`}
                    linkedin={`https://www.linkedin.com/in/alayna-shaheen-782680249`}
                    github={`https://github.com/AlaynaShaheen`}
                    twitter={`https://twitter.com/alayna_shaheen`}
                    about={`
                        A passionate and engaging speaker with captivating and eloquent delivery of information to the audience.
                    `}
                />
            </main>
        </>
    );
};

export default Member;
