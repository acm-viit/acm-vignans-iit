import React from "react";
import MemberProfile from "@/components/MemberProfile";
import saimanoj_seshagiri from '../../../public/asset/img/team/speakers/saimanoj-seshagiri.png'
import Head from "next/head";

const Speaker = () => {
  return (
    <>
    <Head >
      
    </Head>
      <main className="flex min-h-screen flex-col items-center justify-between text-dark dark:text-light">
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
