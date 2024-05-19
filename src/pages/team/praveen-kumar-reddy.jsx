import React from "react";
import MemberProfile from "@/components/MemberProfile";
import praveen_kumar_reddy from '../../../public/asset/img/team/speakers/praveen-kumar-reddy.png'

const Speaker = () => {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between">
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
