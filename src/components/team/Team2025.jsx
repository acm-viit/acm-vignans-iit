import React from "react";
import ProfileCard from "../ProfileCard";
import AnimatedText from "../AnimatedText";

import mr_b_dinesh_reddy from '../../../public/asset/img/teams/2024/mr_b_dinesh_reddy.png'
import sidharth_varma from '../../../public/asset/img/teams/2025/Sidharth.jpg'
import chaitanya_mallela from '../../../public/asset/img/teams/2025/Chaitanya.jpg'
import jyothika from '../../../public/asset/img/teams/2025/Jyothika.jpg'
import zafar from '../../../public/asset/img/teams/2025/zafar.jpg'
import mihira from '../../../public/asset/img/teams/2025/Mihira.png'
import gowrav from '../../../public/asset/img/teams/2025/Gowrav.png'
import neha from '../../../public/asset/img/teams/2025/Neha.jpg'
import kcharan from '../../../public/asset/img/teams/2025/KCharan.jpg'
import rohith from '../../../public/asset/img/teams/2025/Rohith.jpg'
import nikhil from '../../../public/asset/img/teams/2025/Nikhil.jpg'
import raghavendra from '../../../public/asset/img/teams/2025/Raghavendra.jpg'
import durgaprasad from '../../../public/asset/img/teams/2025/Durgaprasad.jpg'

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
                <div className="grid grid-cols-2 2xl:grid-cols-2 md:grid-cols-1 xl:grid-cols-1 gap-24 xl:gap-[0] items-center px-80 2xl:px-40 sm:px-0">
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
                        imgBxClassName={`!rounded-full`}
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
                        imgBxClassName={`!rounded-full`}
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
                        href="/team/gautam_ankoji/"
                        profilePic={gautam_ankoji}
                        name={`Gautam Ankoji`}
                        role={`Technical`}
                        linkedin={`https://www.linkedin.com/in/gautamankoji/`}
                        github={`https://github.com/gautamankoji/`}
                        twitter={``}
                        imgBxClassName={`!rounded-full`}
                    />
                    <ProfileCard
                        href="/team/zafar/"
                        profilePic={zafar}
                        name={`Mohammed Abdul Zafar`}
                        role={`Technical`}
                        linkedin={`https://www.linkedin.com/in/md-abdul-zafar?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app`}
                        github={`https://github.com/zafarabdul`}
                        twitter={``}
                        imgBxClassName={`!rounded-full`}
                    />
                </div>
                <div>
                    <h1 className="flex items-center justify-center font-bold text-5xl pt-8 pb-14 md:text-3xl">Technology Team</h1>
                </div>
                <div className="grid grid-cols-3 2xl:grid-cols-3 md:grid-cols-1 xl:grid-cols-1 gap-4 xl:gap-[0] items-center px-40 2xl:px-20 sm:px-0">
                    <ProfileCard
                        href="/team/mihira/"
                        profilePic={mihira}
                        name={`Vinjamuri Mihira`}
                        role={`Web Developer`}
                        linkedin={`https://www.linkedin.com/in/vinjamurimihira/`}
                        github={`https://github.com/Vmihira`}
                        twitter={``}
                        imgBxClassName={`!rounded-full`}
                    />
                    <ProfileCard
                        href="/team//"
                        profilePic={''}
                        name={`Partha Srikar`}
                        role={`Web Developer`}
                        linkedin={``}
                        github={``}
                        twitter={``}
                        imgBxClassName={`!rounded-full`}
                    />
                    <ProfileCard
                        href="/team/gowrav/"
                        profilePic={gowrav}
                        name={`Gowrav Sai Veeramallu`}
                        role={`UI/UX`}
                        linkedin={`https://www.linkedin.com/in/gowrav-sai-veeramallu/`}
                        github={`https://github.com/GowravSai26`}
                        twitter={``}
                        imgBxClassName={`!rounded-full`}
                    />
                </div>
                <div className="grid grid-cols-2 2xl:grid-cols-2 md:grid-cols-1 xl:grid-cols-1 gap-24 xl:gap-[0] items-center px-[24rem] 2xl:px-40 sm:px-0">
                    <ProfileCard
                        href="/team/neha/"
                        profilePic={neha}
                        name={`Dunna Venkata Sai Neha `}
                        role={`AI/ML`}
                        linkedin={`https://www.linkedin.com/in/neha-dvs-275181270?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app, https://x.com/Neha_1775?t=vhx6Sbk76zs2VS6Tw9pVCA&s=09`}
                        github={`https://github.com/dvsneha`}
                        twitter={``}
                        imgBxClassName={`!rounded-full`}
                    />
                    <ProfileCard
                        href="/team/kcharan/"
                        profilePic={kcharan}
                        name={`Kaki Gurucharan `}
                        role={`AI/ML`}
                        linkedin={`https://www.linkedin.com/in/k-guru-charan-28988a304?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app`}
                        github={`https://github.com/Charan3uu`}
                        twitter={``}
                        imgBxClassName={`!rounded-full`}
                    />
                </div>
                <div>
                    <h1 className="flex items-center justify-center font-bold text-5xl pt-8 pb-14 md:text-3xl">CP Team</h1>
                </div>
                <div className="grid grid-cols-2 2xl:grid-cols-2 md:grid-cols-1 xl:grid-cols-1 gap-24 xl:gap-[0] items-center px-[24rem] 2xl:px-40 sm:px-0">
                    <ProfileCard
                        href="/team/raghavendra/"
                        profilePic={raghavendra}
                        name={`D Raghavendra Suryanarayana`}
                        role={`CP Lead`}
                        linkedin={`https://in.linkedin.com/in/raghava-dhanukonda-9b3243254`}
                        github={`https://github.com/raghava7095`}
                        twitter={``}
                        imgBxClassName={`!rounded-full`}
                    />
                    <ProfileCard
                        href="/team/durgaprasad/"
                        profilePic={durgaprasad}
                        name={`B Satya Dura Vara Prasad`}
                        role={`CP Lead`}
                        linkedin={`https://www.linkedin.com/in/satya-durga-vara-prasad-boddapu/`}
                        github={`https://github.com/PRASAD0521`}
                        twitter={``}
                        imgBxClassName={`!rounded-full`}
                    /> 
                </div>
                {/* <div className="grid grid-cols-1 2xl:grid-cols-1 md:grid-cols-1 xl:grid-cols-1 gap-4 xl:gap-[0] items-center px-80 sm:px-0">
                </div> */}
                <div>
                    <h1 className="flex items-center justify-center font-bold text-5xl pt-8 pb-14 md:text-3xl">Event Management Team</h1>
                </div>
                <div className="grid grid-cols-2 2xl:grid-cols-2 md:grid-cols-1 xl:grid-cols-1 gap-24 xl:gap-[0] items-center px-[24rem] 2xl:px-40 sm:px-0">
                    <ProfileCard
                        href="/team/nikhil/"
                        profilePic={nikhil}
                        name={`Nikhil Adapureddy`}
                        role={`Event Manager`}
                        linkedin={`https://www.linkedin.com/in/nikhil-adapureddy-61118a263?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app`}
                        github={`https://github.com/nikkhil9`}
                        twitter={``}
                        imgBxClassName={`!rounded-full`}
                    />
                    <ProfileCard
                        href="/team/rohith/"
                        profilePic={rohith}
                        name={`DVS Sai Rohith `}
                        role={`Event Manager`}
                        linkedin={`https://www.linkedin.com/in/rohith-dhanalakota-7a2626271?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app`}
                        github={`http://www.github.com/rohith8019`}
                        twitter={``}
                        imgBxClassName={`!rounded-full`}
                    />
                </div>
            </div>
        </>
    );
};

export default Team2025;
