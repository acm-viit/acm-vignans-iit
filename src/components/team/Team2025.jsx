import React from "react";
import ProfileCard from "../ProfileCard";
import AnimatedText from "../AnimatedText";

import mr_b_dinesh_reddy from '../../../public/asset/img/teams/2024/mr_b_dinesh_reddy.png'
import sidharth_varma from '../../../public/asset/img/teams/2025/Sidharth.jpg'
import chaitanya_mallela from '../../../public/asset/img/teams/2025/Chaitanya.jpg'
import jyothika from '../../../public/asset/img/teams/2025/Jyothika.jpg'
import zafar from '../../../public/asset/img/teams/2025/zafar.jpg'

import abdul_rafay from '../../../public/asset/img/teams/2024/abdul_rafay.png'
import alayna_shaheen from '../../../public/asset/img/teams/2024/alayna_shaheen.jpg'
import abhinav_bathina from '../../../public/asset/img/teams/2024/abhinav_bathina.jpeg'
import manasvi_ramana_sai from '../../../public/asset/img/teams/2024/manasvi_ramana_sai.jpg'
import sharmila_bheemisetty from '../../../public/asset/img/teams/2024/sharmila_bheemisetty.jpg'
import basa_vaishnavi from '../../../public/asset/img/teams/2024/basa_vaishnavi.jpg'
import gautam_ankoji from '../../../public/asset/img/teams/2024/gautam_ankoji.png'
import k_hari_charan from '../../../public/asset/img/teams/2024/k_hari_charan.jpeg'
import jagruthi_kotana from '../../../public/asset/img/teams/2024/jagruthi_kotana.jpg'
import k_s_k_koushik from '../../../public/asset/img/teams/2024/k_s_k_koushik.png'
import k_satya_narayana from '../../../public/asset/img/teams/2024/k_satya_narayana.jpg'
import kancherla_sri_vishnu from '../../../public/asset/img/teams/2024/kancherla_sri_vishnu.jpg'
import k_srujan from '../../../public/asset/img/teams/2024/k_srujan.png'
import k_yaswanth from '../../../public/asset/img/teams/2024/k_yaswanth.png'
import mylapalli_tejesh from '../../../public/asset/img/teams/2024/mylapalli_tejesh.jpg'
import mohith_vishal from '../../../public/asset/img/teams/2024/mohith_vishal.jpg'
import nehal_fathema from '../../../public/asset/img/teams/2024/nehal_fathema.jpg'
import amrutha_rokkam from '../../../public/asset/img/teams/2024/amrutha_rokkam.jpg'
import t_krishna_sasank from '../../../public/asset/img/teams/2024/t_krishna_sasank.jpg'
import rakesh_vajrapu from '../../../public/asset/img/teams/2024/rakesh_vajrapu.jpg'

const Team2025 = () => {
    return (
        <>
            <div className="container mx-auto mb-20 px-8">
                <AnimatedText
                    text="Meet the Team of 2024"
                    className="mb-16 lg:!text-5xl sm:mb-8 sm:!text-4xl xs:!text-2xl pt-16 flex items-center justify-center"
                />
                <div className="grid grid-cols-2 2xl:grid-cols-2 md:grid-cols-1 xl:grid-cols-1 gap-4 xl:gap-[0] items-center px-80 2xl:px-40 sm:px-0">
                    <ProfileCard
                        href="/team/mr-b-dinesh-reddy/"
                        profilePic={mr_b_dinesh_reddy}
                        name={`Mr. B. Dinesh Reddy`}
                        role={`Faculty Advisor`}
                        linkedin={``}
                        github={``}
                        twitter={``}
                        className={`w-[400px] sm:w-[350px]`}
                        imgBxClassName={`!rounded-full`}
                    />
                    <ProfileCard
                        href="/team/sidharth_varma/"
                        profilePic={sidharth_varma}
                        name={`Sidharth Varma`}
                        role={`Chairperson`}
                        linkedin={`https://www.linkedin.com/in/elitedeveloper05`}
                        github={`https://github.com/Haricharan0310`}
                        twitter={`https://twitter.com/haricharan0310`}
                        className={`w-[400px] sm:w-[350px]`}
                    />
                </div>
                <div className="grid grid-cols-1 2xl:grid-cols-1 md:grid-cols-1 xl:grid-cols-1 gap-4 xl:gap-[0] items-center px-80 sm:px-0">
                    <ProfileCard
                        href="/team/chaitanya_mallela/"
                        profilePic={chaitanya_mallela}
                        name={`Chaitanya Mallela`}
                        role={`Vice Chairperson`}
                        linkedin={`https://www.linkedin.com/in/chaitanya-mallela-21ba66271/`}
                        github={`https://github.com/chaimass6`}
                        twitter={``}
                        className={`w-[400px] sm:w-[350px]`}
                    />
                </div>
                <div className="grid grid-cols-3 2xl:grid-cols-3 md:grid-cols-1 xl:grid-cols-1 gap-4 xl:gap-[0] items-center px-40 2xl:px-20 sm:px-0">
                    <ProfileCard
                        href="/team/jyothika/"
                        profilePic={jyothika}
                        name={`Chitturi Jyothika Rajeswari`}
                        role={`Treasurer`}
                        linkedin={``}
                        github={``}
                        twitter={``}
                        imgBxClassName={`!rounded-full`}
                    />
                    <ProfileCard
                        href="/team/abdul-rafay/"
                        profilePic={abdul_rafay}
                        name={`Gautam Ankoji`}
                        role={`Technical`}
                        linkedin={``}
                        github={``}
                        twitter={``}
                        imgBxClassName={`!rounded-full`}
                    />
                    <ProfileCard
                        href="/team/zafar/"
                        profilePic={zafar}
                        name={`Mohammed Abdul Zafar`}
                        role={`Membership Chair`}
                        linkedin={``}
                        github={``}
                        twitter={``}
                    />
                </div>
                <div>
                    <h1 className="flex items-center justify-center font-bold text-5xl pt-8 pb-14 md:text-3xl">Technology Team</h1>
                </div>
                <div className="grid grid-cols-3 2xl:grid-cols-3 md:grid-cols-1 xl:grid-cols-1 gap-4 xl:gap-[0] items-center px-40 2xl:px-20 sm:px-0">
                    <ProfileCard
                        href="/team/k-s-k-koushik/"
                        profilePic={k_s_k_koushik}
                        name={`K. S. K. Koushik`}
                        role={`Machine Learning`}
                        linkedin={``}
                        github={``}
                        twitter={``}
                        imgBxClassName={`!rounded-full`}
                    />
                    <ProfileCard
                        href="/team/gautam-ankoji/"
                        profilePic={gautam_ankoji}
                        name={`Gautam Ankoji`}
                        role={`Web/Moblie Technologies`}
                        linkedin={`https://www.linkedin.com/in/gautamankoji/`}
                        github={`https://github.com/gautamankoji/`}
                        twitter={``}
                    />
                    <ProfileCard
                        href="/team/k-satya-narayana/"
                        profilePic={k_satya_narayana}
                        name={`K. Satya Narayana`}
                        role={`Blockchain`}
                        linkedin={`https://www.linkedin.com/in/satya-narayana-kuna-03534223`}
                        github={`https://github.com/satya2804`}
                        twitter={`https://x.com/Satya2844`}
                    />
                </div>
                <div className="grid grid-cols-2 2xl:grid-cols-2 md:grid-cols-1 xl:grid-cols-1 gap-4 xl:gap-[0] items-center px-[24rem] 2xl:px-40 sm:px-0">
                    <ProfileCard
                        href="/team/b-m-ramana-sai/"
                        profilePic={manasvi_ramana_sai}
                        name={`B. M. Ramana Sai`}
                        role={`UI/UX`}
                        linkedin={`https://www.linkedin.com/in/manasviramanasai`}
                        github={`https://github.com/manuzz29`}
                        twitter={`https://x.com/Ramana290?t=udhBxBlCWdYR6nbC7Y_9Rw&s=09`}
                    />
                    <ProfileCard
                        href="/team/sharmila-bheemisetty/"
                        profilePic={sharmila_bheemisetty}
                        name={`Bheemisetty Sharmila`}
                        role={`Web Technologies`}
                        linkedin={`https://www.linkedin.com/in/bheemisetty-sharmila-aa6459257`}
                        github={`https://github.com/sharmi4590`}
                        twitter={`https://twitter.com/sharmi4590`}
                    />
                </div>
                <div>
                    <h1 className="flex items-center justify-center font-bold text-5xl pt-8 pb-14 md:text-3xl">Editorial Team</h1>
                </div>
                <div className="grid grid-cols-3 2xl:grid-cols-3 md:grid-cols-1 xl:grid-cols-1 gap-4 xl:gap-[0] items-center px-40 2xl:px-20 sm:px-0">
                    <ProfileCard
                        href="/team/k-srujan/"
                        profilePic={k_srujan}
                        name={`K. Srujan`}
                        role={`Video Editor`}
                        linkedin={``}
                        github={``}
                        twitter={``}
                        imgBxClassName={`!rounded-full`}
                    />
                    <ProfileCard
                        href="/team/nehal-fathema/"
                        profilePic={nehal_fathema}
                        name={`Nehal Fathema`}
                        role={`Technical Content Writer`}
                        linkedin={`https://www.linkedin.com/in/nehal-fathema`}
                        github={`https://github.com/nehal-5`}
                        twitter={`https://x.com/fathema_nehal`}
                    />  
                    <ProfileCard
                        href="/team/rakesh-vajrapu/"
                        profilePic={rakesh_vajrapu}
                        name={`Rakesh Vajrapu`}
                        role={`Content Writer`}
                        linkedin={`https://www.linkedin.com/in/rakeshvajrapu/`}
                        github={`https://github.com/rakesh-vajrapu`}
                        twitter={`https://twitter.com/rakesh_vajrapu`}
                    />
                </div>
                {/* <div className="grid grid-cols-1 2xl:grid-cols-1 md:grid-cols-1 xl:grid-cols-1 gap-4 xl:gap-[0] items-center px-80 sm:px-0">
                </div> */}
                <div>
                    <h1 className="flex items-center justify-center font-bold text-5xl pt-8 pb-14 md:text-3xl">Event Management Team</h1>
                </div>
                <div className="grid grid-cols-2 2xl:grid-cols-2 md:grid-cols-1 xl:grid-cols-1 gap-4 xl:gap-[0] items-center px-[24rem] 2xl:px-40 sm:px-0">
                    <ProfileCard
                        href="/team/abhinav-bnvs/"
                        profilePic={abhinav_bathina}
                        name={`Abhinav BNVS`}
                        role={`Event Manager`}
                        linkedin={`https://www.linkedin.com/in/abhinav-bathina-7a7926251`}
                        github={`https://github.com/AbhinavBathina`}
                        twitter={`https://x.com/Abhinav21345521`}
                    />
                    <ProfileCard
                        href="/team/amrutha-rokkam/"
                        profilePic={amrutha_rokkam}
                        name={`Amrutha Rokkam`}
                        role={`Event Manager`}
                        linkedin={`https://www.linkedin.com/in/lakshmi-amrutha-rokkam-0b023122a`}
                        github={`https://github.com/Amrutha-01`}
                        twitter={``}
                    />
                </div>
                <div>
                    <h1 className="flex items-center justify-center font-bold text-5xl pt-8 pb-14 md:text-3xl">Public Speaker&apos;s Team</h1>
                </div>
                <div className="grid grid-cols-2 2xl:grid-cols-2 md:grid-cols-1 xl:grid-cols-1 gap-4 xl:gap-[0] items-center px-[24rem] 2xl:px-40 sm:px-0">
                    <ProfileCard
                        href="/team/vaishnavi-basa/"
                        profilePic={basa_vaishnavi}
                        name={`Vaishnavi Basa`}
                        role={`Public Speaker`}
                        linkedin={`https://www.linkedin.com/in/vaishnavibasa14102003`}
                        github={`https://gitHub.com/vyshu-03`}
                        twitter={`https://twitter.com/vyshu_03`}
                    />
                    <ProfileCard
                        href="/team/alayna-shaheen/"
                        profilePic={alayna_shaheen}
                        name={`Alayna Shaheen`}
                        role={`Public Speaker`}
                        linkedin={`https://www.linkedin.com/in/alayna-shaheen-782680249`}
                        github={`https://github.com/AlaynaShaheen`}
                        twitter={`https://twitter.com/alayna_shaheen`}
                    />
                </div>
                <div>
                    <h1 className="flex items-center justify-center font-bold text-5xl pt-8 pb-14 md:text-3xl">Special Interest Team</h1>
                </div>
                <div className="grid grid-cols-2 2xl:grid-cols-2 md:grid-cols-1 xl:grid-cols-1 gap-4 xl:gap-[0] items-center px-[24rem] 2xl:px-40 sm:px-0
                
                ">
                    <ProfileCard
                        href="/team/jagruthi-kotana/"
                        profilePic={jagruthi_kotana}
                        name={`Jagruthi Kotana`}
                        role={`Member`}
                        linkedin={`https://www.linkedin.com/in/jagruthi-kotana-37608b272`}
                        github={`https://github.com/jagruthi28`}
                        twitter={``}
                    />
                    <ProfileCard
                        href="/team/mylapalli-tejesh/"
                        profilePic={mylapalli_tejesh}
                        name={`Mylapalli Tejesh`}
                        role={`Member`}
                        linkedin={`https://www.linkedin.com/in/mylapalli-tejesh-b1a174270`}
                        github={`https://github.com/tejesh2709`}
                        twitter={``}
                    />
                </div>
            </div>
        </>
    );
};

export default Team2025;
