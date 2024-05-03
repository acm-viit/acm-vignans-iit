import React from "react";
import MemberProfile from "@/components/MemberProfile";
import vignan_logo from '../../../public/asset/img/teams/others/vignan_logo.png'

const Member = () => {
  return (
    <>
      <Head>
        <title>Dept of Computer Science and Engineering | ACM Vignan&apos;s IIT | Association for Computing Machinery Vignan&apos;s Institute of Information Technology - Visakhapatna</title>
        <link rel="icon" type="image/svg" href="../../public/asset/favicon/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" type="image/svg" href="../../public/asset/favicon/android-chrome-192x192.png" sizes="192x192" />
        <link rel="icon" type="image/svg" href="../../public/asset/favicon/android-chrome-512x512.png" sizes="512x512" />
        <link rel="icon" type="image/svg" href="../../public/asset/favicon/favicon-16x16.png" sizes="16x16" />
        <link rel="apple-touch-icon" sizes="180x180" href="../../public/asset/favicon/apple-touch-icon.png" />
      </Head>
      <main className="w-[100vw] h-[100vh]">
        <MemberProfile
          profilePic={vignan_logo}
          name={`Dept of Computer Science and Engineering`}
          role={`Vignan's Institue of Information Techonology, Visakhaptanam`}
          linkedin={`#`}
          github={``}
          twitter={``}
          about={``}
        />
      </main>
    </>
  );
};

export default Member;
