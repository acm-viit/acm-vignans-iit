import MemberProfile from "@/components/MemberProfile";
import React from "react";
import revanth_murigipudi from '../../../public/asset/img/team/speakers/revanth-murigipudi.png'

const Speaker = () => {
  return (
    <>
      <main className="w-[100vw] h-[100vh]">
        <MemberProfile
          profilePic={revanth_murigipudi}
          name={`Revanth Murigipudi`}
          role={`Software Engineer | AutoDesk`}
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
