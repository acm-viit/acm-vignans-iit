import MemberProfile from "@/components/MemberProfile";
import React from "react";
import praveen_kumar_reddy from '../../../public/asset/img/team/speakers/praveen-kumar-reddy.png'

const Speaker = () => {
  return (
    <>
      <main className="w-[100vw] h-[100vh]">
        <MemberProfile
          profilePic={praveen_kumar_reddy}
          name={`Praveen Kumar Reddy`}
          role={`SDE | Innovaccer`}
          linkedin={``}
          github={``}
          twitter={``}
          about={``}
        />
      </main>
    </>
  );
};

export default Speaker;
