// pages/team/[slug].jsx

import React from "react";
import Head from "next/head";
import MemberProfile from "@/components/MemberProfile";
import { members } from "@/lib/members";

const TeamMemberPage = ({ member }) => {
  return (
    <>
      <Head>
        <title>{`${member.name} | ACM VIIT Team | Association for Computing Machinery`}</title>
      </Head>
      <main className="min-h-screen flex flex-col items-center justify-center text-dark dark:text-light px-4 py-8">
        <MemberProfile {...member} />
      </main>
    </>
  );
};

export async function getStaticPaths() {
  const paths = members.map((member) => ({
    params: { slug: member.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const member = members.find((m) => m.slug === params.slug);

  if (!member) {
    return {
      notFound: true,
    };
  }

  return {
    props: { member },
  };
}

export default TeamMemberPage;
