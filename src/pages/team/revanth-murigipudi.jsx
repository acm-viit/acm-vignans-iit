import React from "react";
import MemberProfile from "@/components/MemberProfile";
import revanth_murigipudi from '../../../public/asset/img/team/speakers/revanth-murigipudi.png'

const Speaker = () => {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between">
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
