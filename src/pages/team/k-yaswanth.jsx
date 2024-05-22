import React from "react";
import MemberProfile from "@/components/MemberProfile";
import k_yaswanth from '../../../public/asset/img/teams/2024/k_yaswanth.png'

const Member = () => {
    return (
        <>
            <main className={`flex min-h-screen flex-col items-center justify-between text-dark dark:text-light`}>
                <MemberProfile
                     profilePic={k_yaswanth}
                     name={`K. Yaswanth`}
                     role={`Secretary`}
                     linkedin={``}
                     github={``}
                     twitter={``}
                    about={`
                        
                    `}
                />
            </main>
        </>
    );
};

export default Member;
