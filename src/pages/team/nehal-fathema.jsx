import React from "react";
import MemberProfile from "@/components/MemberProfile";
import nehal_fathema from '../../../public/asset/img/teams/2024/nehal_fathema.jpg'

const Member = () => {
    return (
        <>
            <main className={`flex min-h-screen flex-col items-center justify-between`}>
                <MemberProfile
                    profilePic={nehal_fathema}
                    name={`Nehal Fathema`}
                    role={`Technical Content Writer`}
                    linkedin={`https://www.linkedin.com/in/nehal-fathema`}
                    github={`https://github.com/nehal-5`}
                    twitter={`https://x.com/fathema_nehal`}
                    about={`
                    Hello! I am Nehal Fathema, I am a member of ACM VIIT as a Technical Content Writer. Continuous learning is a fundamental part of my journey.
              `}
                />
            </main>
        </>
    );
};

export default Member;
