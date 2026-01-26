import React from "react";
import ProfileCard from "../ProfileCard";
import AnimatedText from "../AnimatedText";

const sections = [
    {
        title: "Meet the Team of 2025",
        layout: "grid-cols-2 lg:grid-cols-1",
        px: "px-80 2xl:px-40 sm:px-0",
        members: [
            {
                href: "/team/mr-b-dinesh-reddy/",
                image: "mr_b_dinesh_reddy.png",
                name: "Mr. B. Dinesh Reddy",
                role: "Faculty Advisor",
            },
            {
                href: "/team/sidharth-varma/",
                image: "sidharth_varma.jpg",
                name: "Sidharth Varma 1",
                role: "Chairperson",
                linkedin: "https://www.linkedin.com/in/elitedeveloper05",
                github: "https://github.com/Haricharan0310",
                twitter: "https://twitter.com/haricharan0310",
            },
        ],
    },
    {
        layout: "grid-cols-1",
        px: "px-80 sm:px-0",
        members: [
            {
                href: "/team/chaitanya-mallela/",
                image: "chaitanya_mallela.jpg",
                name: "Chaitanya Mallela",
                role: "Vice Chairperson",
                linkedin: "https://www.linkedin.com/in/chaitanya-mallela-21ba66271/",
                github: "https://github.com/chaimass6",
            },
        ],
    },
    {
        layout: "grid-cols-3 lg:grid-cols-1",
        px: "px-40 2xl:px-20 sm:px-0",
        members: [
            {
                href: "/team/chitturi-jyothika-rajeswari/",
                image: "chitturi_jyothika_rajeswari.jpg",
                name: "Chitturi Jyothika Rajeswari",
                role: "Treasurer",
            },
            {
                href: "/team/gautamankoji/",
                image: "gautam_ankoji.jpg",
                name: "Gautam Ankoji",
                role: "Technical",
                linkedin: "https://www.linkedin.com/in/gautamankoji/",
                github: "https://github.com/gautamankoji/",
            },
            {
                href: "/team/mohammed-abdul-zafar/",
                image: "mohammed_abdul_zafar.jpg",
                name: "Mohammed Abdul Zafar",
                role: "Technical",
                linkedin: "https://www.linkedin.com/in/md-abdul-zafar",
                github: "https://github.com/zafarabdul",
            },
        ],
    },
    {
        title: "Technology Team",
        layout: "grid-cols-3 lg:grid-cols-1",
        px: "px-40 2xl:px-20 sm:px-0",
        members: [
            {
                href: "/team/vinjamuri-mihira/",
                image: "vinjamuri_mihira.png",
                name: "Vinjamuri Mihira",
                role: "Web Developer",
                linkedin: "https://www.linkedin.com/in/vinjamurimihira/",
                github: "https://github.com/Vmihira",
            },
            {
                href: "/team/partha-srikar/",
                image: "partha_srikar.jpeg",
                name: "Partha Srikar",
                role: "Web Developer",
            },
            {
                href: "/team/gowrav-sai-veeramallu/",
                image: "gowrav_sai_veeramallu.png",
                name: "Gowrav Sai Veeramallu",
                role: "UI/UX",
                linkedin: "https://www.linkedin.com/in/gowrav-sai-veeramallu/",
                github: "https://github.com/GowravSai26",
            },
        ],
    },
    {
        title: "AI/ML Team",
        layout: "grid-cols-2 lg:grid-cols-1",
        px: "px-96 2xl:px-40 sm:px-0",
        members: [
            {
                href: "/team/dunna-venkata-sai-neha/",
                image: "dunna_venkata_sai_neha.jpg",
                name: "Dunna Venkata Sai Neha",
                role: "AI/ML",
                linkedin: "https://www.linkedin.com/in/neha-dvs-275181270",
                github: "https://github.com/dvsneha",
            },
            {
                href: "/team/kaki-gurucharan/",
                image: "kaki_gurucharan.jpg",
                name: "Kaki Gurucharan",
                role: "AI/ML",
                linkedin: "https://www.linkedin.com/in/k-guru-charan-28988a304",
                github: "https://github.com/Charan3uu",
            },
        ],
    },
    {
        title: "CP Team",
        layout: "grid-cols-2 lg:grid-cols-1",
        px: "px-96 2xl:px-40 sm:px-0",
        members: [
            {
                href: "/team/d-raghavendra-suryanarayana/",
                image: "d_raghavendra_suryanarayana.jpg",
                name: "D Raghavendra Suryanarayana",
                role: "Competitive Programming",
                linkedin: "https://in.linkedin.com/in/raghava-dhanukonda-9b3243254",
                github: "https://github.com/raghava7095",
            },
            {
                href: "/team/b-satya-dura-vara-prasad/",
                image: "b_satya_dura_vara_prasad.jpg",
                name: "B Satya Dura Vara Prasad",
                role: "Competitive Programming",
                linkedin: "https://www.linkedin.com/in/satya-durga-vara-prasad-boddapu/",
                github: "https://github.com/PRASAD0521",
            },
        ],
    },
    {
        title: "Event Management Team",
        layout: "grid-cols-2 lg:grid-cols-1",
        px: "px-96 2xl:px-40 sm:px-0",
        members: [
            {
                href: "/team/nikhil-adapureddy/",
                image: "nikhil_adapureddy.jpg",
                name: "Nikhil Adapureddy",
                role: "Event Manager",
                linkedin: "https://www.linkedin.com/in/nikhil-adapureddy-61118a263",
                github: "https://github.com/nikkhil9",
            },
            {
                href: "/team/dva-sai-rohith/",
                image: "dvs_sai_rohith.jpg",
                name: "DVS Sai Rohith",
                role: "Event Manager",
                linkedin: "https://www.linkedin.com/in/rohith-dhanalakota-7a2626271",
                github: "http://www.github.com/rohith8019",
            },
        ],
    },
];

const Team2025 = () => {
    return (
        <div className="container mx-auto mb-20 px-8">
            {sections.map(({ title, layout, members, px }, i) => (
                <>
                    {i === 0 && (
                        <AnimatedText
                            text={title || ""}
                            className="mb-16 lg:!text-5xl sm:mb-8 sm:!text-4xl xs:!text-2xl pt-16 flex items-center justify-center"
                        />
                    )}
                    <section key={i} className={``}>
                        {title && i != 0 && (
                            <h1 className="w-full text-center font-bold text-5xl pt-16 pb-14 md:text-3xl col-span-full">
                                {title}
                            </h1>
                        )}
                        <div className={`grid ${layout} gap-4 lg:gap-0 lg:space-y-[-2.5rem] items-center ${px}`}>
                            {members.map((m, idx) => (
                                <>
                                    <ProfileCard
                                        key={idx}
                                        profilePic={`/asset/img/teams/2025/${m.image}`}
                                        {...m}
                                        className="w-[400px] sm:w-[350px]"
                                        imgBxClassName="!rounded-full"
                                    />
                                </>
                            ))}
                        </div>
                    </section>
                </>
            ))}
        </div>
    );
};

export default Team2025;
