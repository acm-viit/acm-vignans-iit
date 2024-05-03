import MemberProfile from "@/components/MemberProfile";
import React from "react";
import farhana_m from '../../../public/asset/img/team/speakers/farhana-m.png'

const Speaker = () => {
  return (
    <>
      <main className="w-[100vw] h-[100vh]">
        <MemberProfile
          profilePic={farhana_m}
          name={`Farhana M`}
          role={`Engineering Recruiter | Atlassian`}
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
