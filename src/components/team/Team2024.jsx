import React from "react";
import ProfileCard from "../ProfileCard";

import mr_b_dinesh_reddy from '../../../public/asset/img/teams/2024/mr_b_dinesh_reddy.png'
import abdul_rafay from '../../../public/asset/img/teams/2024/abdul_rafay.png'
import alayna_shaheen from '../../../public/asset/img/teams/2024/alayna_shaheen.png'
import b_abhinav from '../../../public/asset/img/teams/2024/b_abhinav.png'
import b_m_ramana_sai from '../../../public/asset/img/teams/2024/b_m_ramana_sai.png'
import b_sharmila from '../../../public/asset/img/teams/2024/b_sharmila.png'
import b_vaishnavi from '../../../public/asset/img/teams/2024/b_vaishnavi.png'
import gautam_ankoji from '../../../public/asset/img/teams/2024/gautam_ankoji.png'
import k_hari_charan from '../../../public/asset/img/teams/2024/k_hari_charan.png'
import k_jagruthi from '../../../public/asset/img/teams/2024/k_jagruthi.png'
import k_s_k_koushik from '../../../public/asset/img/teams/2024/k_s_k_koushik.png'
import k_satya_narayana from '../../../public/asset/img/teams/2024/k_satya_narayana.png'
import k_sri_vishnu from '../../../public/asset/img/teams/2024/k_sri_vishnu.png'
import k_srujan from '../../../public/asset/img/teams/2024/k_srujan.png'
import k_yaswanth from '../../../public/asset/img/teams/2024/k_yaswanth.png'
import m_tejesh from '../../../public/asset/img/teams/2024/m_tejesh.png'
import mohith_vishal from '../../../public/asset/img/teams/2024/mohith_vishal.jpg'
import nehal_fatema from '../../../public/asset/img/teams/2024/nehal_fatema.png'
import r_l_amrutha from '../../../public/asset/img/teams/2024/r_l_amrutha.png'
import t_krishna_sasank from '../../../public/asset/img/teams/2024/t_krishna_sasank.png'
import v_b_rakesh from '../../../public/asset/img/teams/2024/v_b_rakesh.png'

import AnimatedText from "../AnimatedText";

const Team2024 = () => {
    return (
        <>
            <div className="container mx-auto mb-20 px-8">
                <AnimatedText
                    text="Meet the Team of 2024"
                    className="mb-16 lg:!text-5xl sm:mb-8 sm:!text-2xl xs:!text-xl py-8 flex items-center justify-center"
                />
                <div className="grid grid-cols-2 2xl:grid-cols-1 md:grid-cols-1 xl:grid-cols-1 gap-4 items-center px-80 sm:px-0">
                    <ProfileCard
                        href="#"
                        profilePic={mr_b_dinesh_reddy}
                        name={`Mr. B. Dinesh Reddy`}
                        role={`Faculty Advisor`}
                        linkedin={``}
                        github={``}
                        twitter={``}
                        className={`w-[400px] sm:w-[350px]`}
                    />
                    <ProfileCard
                        href="#"
                        profilePic={k_hari_charan}
                        name={`K. Hari Charan`}
                        role={`Chair`}
                        linkedin={``}
                        github={``}
                        twitter={``}
                        className={`w-[400px] sm:w-[350px]`}
                    />
                </div>
                <div className="grid grid-cols-1 2xl:grid-cols-1 md:grid-cols-1 xl:grid-cols-1 gap-4 items-center px-80 sm:px-0">
                    <ProfileCard
                        href="#"
                        profilePic={t_krishna_sasank}
                        name={`T. Krishna Sasank`}
                        role={`Vice Chair`}
                        linkedin={``}
                        github={``}
                        twitter={``}
                        className={`w-[400px] sm:w-[350px]`}
                    />
                </div>
                <div className="grid grid-cols-3 2xl:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 gap-4 items-center px-40 sm:px-0">
                    <ProfileCard
                        href="#"
                        profilePic={k_yaswanth}
                        name={`K. Yaswanth`}
                        role={`Secretary`}
                        linkedin={``}
                        github={``}
                        twitter={``}
                    />
                    <ProfileCard
                        href="#"
                        profilePic={abdul_rafay}
                        name={`Abdul Rafay`}
                        role={`Treasurer`}
                        linkedin={``}
                        github={``}
                        twitter={``}
                    />
                    <ProfileCard
                        href="#"
                        profilePic={mohith_vishal}
                        name={`Mohith Vishal`}
                        role={`Membership Chair`}
                        linkedin={``}
                        github={``}
                        twitter={``}
                    />
                </div>
                <div className="grid grid-cols-1 2xl:grid-cols-1 md:grid-cols-1 xl:grid-cols-1 gap-4 items-center px-80 sm:px-0">
                    <ProfileCard
                        href="#"
                        profilePic={k_sri_vishnu}
                        name={`K Sri Vishnu`}
                        role={`Web Master`}
                        linkedin={``}
                        github={``}
                        twitter={``}
                    />
                </div>
                <div>
                    <h1 className="flex items-center justify-center font-bold text-3xl pt-8 pb-14 md:text-xl">Technology Team</h1>
                </div>
                <div className="grid grid-cols-3 2xl:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 gap-4 items-center px-40 sm:px-0">
                    <ProfileCard
                        href="#"
                        profilePic={k_s_k_koushik}
                        name={`K. S. K. Koushik`}
                        role={`Machine Learning`}
                        linkedin={``}
                        github={``}
                        twitter={``}
                    />
                    <ProfileCard
                        href="/team/gautam-ankoji/"
                        profilePic={gautam_ankoji}
                        name={`Gautam Ankoji`}
                        role={`Web/Moblie Technologies`}
                        linkedin={``}
                        github={``}
                        twitter={``}
                    />
                    <ProfileCard
                        href="#"
                        profilePic={k_satya_narayana}
                        name={`K. Satya Narayana`}
                        role={`Blockchain`}
                        linkedin={``}
                        github={``}
                        twitter={``}
                    />
                </div>
                <div className="grid grid-cols-2 2xl:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 gap-4 items-center px-40 sm:px-0">
                    <ProfileCard
                        href="#"
                        profilePic={b_m_ramana_sai}
                        name={`B. M. Ramana Sai`}
                        role={`UI/UX`}
                        linkedin={``}
                        github={``}
                        twitter={``}
                    />
                    <ProfileCard
                        href="#"
                        profilePic={b_sharmila}
                        name={`B. Sharmila`}
                        role={`Web Technologies`}
                        linkedin={``}
                        github={``}
                        twitter={``}
                    />
                </div>
                <div>
                    <h1 className="flex items-center justify-center font-bold text-3xl pt-8 pb-14 md:text-xl">Editorial Team</h1>
                </div>
                <div className="grid grid-cols-3 2xl:grid-cols-2 md:grid-cols-1 gap-4 items-center px-40 sm:px-0">
                    <ProfileCard
                        href="#"
                        profilePic={k_srujan}
                        name={`K. Srujan`}
                        role={`Video Editor`}
                        linkedin={``}
                        github={``}
                        twitter={``}
                    />
                    <ProfileCard
                        href="#"
                        profilePic={nehal_fatema}
                        name={`Nehal Fatema`}
                        role={`Content Writer`}
                        linkedin={``}
                        github={``}
                        twitter={``}
                    />
                    <ProfileCard
                        href="#"
                        profilePic={v_b_rakesh}
                        name={`Rakesh Vajrapu`}
                        role={`Content Writer`}
                        linkedin={``}
                        github={``}
                        twitter={``}
                    />
                </div>
                {/* <div className="grid grid-cols-1 2xl:grid-cols-1 md:grid-cols-1 xl:grid-cols-1 gap-4 items-center px-80 sm:px-0">
                </div> */}
                <div>
                    <h1 className="flex items-center justify-center font-bold text-3xl pt-8 pb-14 md:text-xl">Event Management Team</h1>
                </div>
                <div className="grid grid-cols-2 2xl:grid-cols-2 md:grid-cols-1 gap-4 items-center px-40 sm:px-0">
                    <ProfileCard
                        href="#"
                        profilePic={b_abhinav}
                        name={`B. Abhinav`}
                        role={`Event Manager`}
                        linkedin={``}
                        github={``}
                        twitter={``}
                    />
                    <ProfileCard
                        href="#"
                        profilePic={r_l_amrutha}
                        name={`R. L. Amrutha`}
                        role={`Event Manager`}
                        linkedin={``}
                        github={``}
                        twitter={``}
                    />
                </div>
                <div>
                    <h1 className="flex items-center justify-center font-bold text-3xl pt-8 pb-14 md:text-xl">Public Speaker&apos;s Team</h1>
                </div>
                <div className="grid grid-cols-2 2xl:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 gap-4 items-center px-40 sm:px-0">
                    <ProfileCard
                        href="#"
                        profilePic={b_vaishnavi}
                        name={`B. Vaishnavi`}
                        role={`Public Speaker`}
                        linkedin={``}
                        github={``}
                        twitter={``}
                    />
                    <ProfileCard
                        href="#"
                        profilePic={alayna_shaheen}
                        name={`Alayna Shaheen`}
                        role={`Public Speaker`}
                        linkedin={``}
                        github={``}
                        twitter={``}
                    />
                </div>
                <div>
                    <h1 className="flex items-center justify-center font-bold text-3xl pt-8 pb-14 md:text-xl">Special Interest Team</h1>
                </div>
                <div className="grid grid-cols-2 2xl:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 gap-4 items-center px-40 sm:px-0">
                    <ProfileCard
                        href="#"
                        profilePic={k_jagruthi}
                        name={`K. Jagruthi`}
                        role={`Member`}
                        linkedin={``}
                        github={``}
                        twitter={``}
                    />
                    <ProfileCard
                        href="#"
                        profilePic={m_tejesh}
                        name={`M Tejesh`}
                        role={`Member`}
                        linkedin={``}
                        github={``}
                        twitter={``}
                    />
                </div>
            </div>
        </>
    );
};

export default Team2024;
