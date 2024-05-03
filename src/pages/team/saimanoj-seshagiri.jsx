import MemberProfile from "@/components/MemberProfile";
import React from "react";
import saimanoj_seshagiri from '../../../public/asset/img/team/speakers/saimanoj-seshagiri.png'

const Speaker = () => {
  return (
    <>
      <main className="w-[100vw] h-[100vh]">
        <MemberProfile
          profilePic={saimanoj_seshagiri}
          name={`Saimanoj Seshagiri`}
          role={`Spark AR Facilitator | GCP Enthusiast`}
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
