import React from "react";
import ProfileCard from "../ProfileCard";

import ch_shekar from '../../../public/asset/img/teams/2020/ch_shekar.png'
import akshay_Kumar_t from '../../../public/asset/img/teams/2021/Akshay Kumar T.png'
import annadata_alekhya from '../../../public/asset/img/teams/2021/Annadata Alekhya.png'
import anuradha_chinta from '../../../public/asset/img/teams/2021/anuradha chinta.png'
import bala_ram from '../../../public/asset/img/teams/2021/Bala Ram.png'
import balaji_yaswanth_vankala from '../../../public/asset/img/teams/2021/Balaji Yaswanth Vankala.png'
import challa_ankitha from '../../../public/asset/img/teams/2021/Challa Ankitha.png'
import chandra_sekhar_varma from '../../../public/asset/img/teams/2021/Chandu Smart.png'
import dave from '../../../public/asset/img/teams/2021/dave.png'
import GUDIVADA_VARALAKSHMI from '../../../public/asset/img/teams/2021/GUDIVADA VARALAKSHMI.png'
import hema_nimmagadda from '../../../public/asset/img/teams/2021/Hema Nimmagadda.png'
import karthik_dasari from '../../../public/asset/img/teams/2021/Karthik Dasari.png'
import komatipalli_prasanna from '../../../public/asset/img/teams/2021/Komatipalli Prasanna.png'
import niharika_kona from '../../../public/asset/img/teams/2021/Niharika Kona.png'
import prasanth_patnala from '../../../public/asset/img/teams/2021/prasanth patnala.png'
import reddy_manohar from '../../../public/asset/img/teams/2021/Reddy Manohar.png'
import saathwika_sabbiti from '../../../public/asset/img/teams/2021/Saathwika Sabbiti.png'
import sai_kalyan_tarun from '../../../public/asset/img/teams/2021/Sai Kalyan Tarun.png'
import sai_praneeth_talluri from '../../../public/asset/img/teams/2021/Sai Praneeth Talluri.png'
import SAIVENKAT_DHULIPUDI from '../../../public/asset/img/teams/2021/SAIVENKAT DHULIPUDI.png'
import singupuram_laxmi from '../../../public/asset/img/teams/2021/Singupuram laxmi.png'
import swaroop_lenka from '../../../public/asset/img/teams/2021/Swaroop Lenka.png'
import V_V_S_SAI_KIRAN_KOLLI from '../../../public/asset/img/teams/2021/V V S SAI KIRAN KOLLI.png'
import vallabhaneni_chandana from '../../../public/asset/img/teams/2021/vallabhaneni chandana.png'
import venkatesh_vanjarapu from '../../../public/asset/img/teams/2021/Venkatesh Vanjarapu.png'
import yashaswi_kandregula from '../../../public/asset/img/teams/2021/Yashaswi Kandregula.png'
import yerra_dinesh from '../../../public/asset/img/teams/2021/Yerra Dinesh.png'
import AnimatedText from "../AnimatedText";

const Team2021 = () => {
    return (
        <>
            <div className="container mx-auto mb-20 px-8">
                <AnimatedText
                    text="Meet the Team of 2021"
                    className="mb-16 lg:!text-5xl sm:mb-8 sm:!text-2xl xs:!text-xl py-8 flex items-center justify-center"
                />
                <div className="grid grid-cols-2 2xl:grid-cols-1 md:grid-cols-1 xl:grid-cols-1 gap-4 items-center px-80 sm:px-0">
                    <ProfileCard
                        href="#"
                        profilePic={ch_shekar}
                        name={`CH Sekhar`}
                        role={`FACULTY ADVISOR`}
                        linkedin={``}
                        github={``}
                        twitter={``}
                        className={`w-[400px] sm:w-[350px]`}
                    />
                    <ProfileCard
                        href="#"
                        profilePic={swaroop_lenka}
                        name={`Swaroop Lenka`}
                        role={`CHAIR`}
                        linkedin={``}
                        github={``}
                        twitter={``}
                        className={`w-[400px] sm:w-[350px]`}
                    />
                </div>
                <div className="grid grid-cols-1 2xl:grid-cols-1 md:grid-cols-1 xl:grid-cols-1 gap-4 items-center px-80 sm:px-0">
                    <ProfileCard
                        href="#"
                        profilePic={dave}
                        name={`Deva Deepak Erothi`}
                        role={`VICE CHAIR`}
                        linkedin={``}
                        github={``}
                        twitter={``}
                        className={`w-[400px] sm:w-[350px]`}
                    />
                </div>
                <div className="grid grid-cols-3 2xl:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 gap-4 items-center px-40 sm:px-0">
                    <ProfileCard
                        href="#"
                        profilePic={singupuram_laxmi}
                        name={`Singupuram laxmi`}
                        role={`SECRETARY`}
                        linkedin={``}
                        github={``}
                        twitter={``}
                    />
                    <ProfileCard
                        href="#"
                        profilePic={karthik_dasari}
                        name={`Karthik Dasari`}
                        role={`WEB MASTER`}
                        linkedin={``}
                        github={``}
                        twitter={``}
                    />
                    <ProfileCard
                        href="#"
                        profilePic={niharika_kona}
                        name={`Niharika Kona`}
                        role={`TREASURER`}
                        linkedin={``}
                        github={``}
                        twitter={``}
                    />
                </div>
                <div className="grid grid-cols-1 2xl:grid-cols-1 md:grid-cols-1 xl:grid-cols-1 gap-4 items-center px-80 sm:px-0">
                    <ProfileCard
                        href="#"
                        profilePic={SAIVENKAT_DHULIPUDI}
                        name={`Sai Venkat Dhulipudi`}
                        role={`MEMBERSHIP CHAIR`}
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
                        profilePic={V_V_S_SAI_KIRAN_KOLLI}
                        name={`V V S SAI KIRAN KOLLI`}
                        role={`CLOUD COMPUTING`}
                        linkedin={``}
                        github={``}
                        twitter={``}
                    />
                    <ProfileCard
                        href="#"
                        profilePic={hema_nimmagadda}
                        name={`Hema Nimmagadda`}
                        role={`ANDROID`}
                        linkedin={``}
                        github={``}
                        twitter={``}
                    />
                    <ProfileCard
                        href="#"
                        profilePic={balaji_yaswanth_vankala}
                        name={`Balaji Yaswanth Vankala`}
                        role={`WEB TECHNOLOGIES`}
                        linkedin={``}
                        github={``}
                        twitter={``}
                    />

                </div>
                <div className="grid grid-cols-2 2xl:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 gap-4 items-center px-40 sm:px-0">
                    <ProfileCard
                        href="#"
                        profilePic={sai_praneeth_talluri}
                        name={`Sai Praneeth Talluri`}
                        role={`IOS`}
                        linkedin={``}
                        github={``}
                        twitter={``}
                    />
                    <ProfileCard
                        href="#"
                        profilePic={bala_ram}
                        name={`Balaram Krishna Vasupalli`}
                        role={`CYBER SECURITY`}
                        linkedin={``}
                        github={``}
                        twitter={``}
                    />
                </div>
                <div>
                    <h1 className="flex items-center justify-center font-bold text-3xl pt-8 pb-14 md:text-xl">Event Management Team</h1>
                </div>
                <div className="grid grid-cols-3 2xl:grid-cols-2 md:grid-cols-1 gap-4 items-center px-40 sm:px-0">
                    <ProfileCard
                        href="#"
                        profilePic={reddy_manohar}
                        name={`Reddy Manohar`}
                        role={`EVENT MANAGER`}
                        linkedin={``}
                        github={``}
                        twitter={``}
                    />
                    <ProfileCard
                        href="#"
                        profilePic={vallabhaneni_chandana}
                        name={`Vallabhaneni Chandana `}
                        role={`EVENT MANAGER`}
                        linkedin={``}
                        github={``}
                        twitter={``}
                    />
                    <ProfileCard
                        href="#"
                        profilePic={GUDIVADA_VARALAKSHMI}
                        name={`G.Varalakshmi`}
                        role={`EVENT MANAGER`}
                        linkedin={``}
                        github={``}
                        twitter={``}
                    />
                </div>
                {/* <div className="grid grid-cols-1 2xl:grid-cols-1 md:grid-cols-1 xl:grid-cols-1 gap-4 items-center px-80 sm:px-0">
                </div> */}
                <div>
                    <h1 className="flex items-center justify-center font-bold text-3xl pt-8 pb-14 md:text-xl">Editorial Team</h1>
                </div>
                <div className="grid grid-cols-3 2xl:grid-cols-2 md:grid-cols-1 gap-4 items-center px-40 sm:px-0">
                    <ProfileCard
                        href="#"
                        profilePic={akshay_Kumar_t}
                        name={`Akshay Kumar T`}
                        role={`EDITIORAL`}
                        linkedin={``}
                        github={``}
                        twitter={``}
                    />
                    <ProfileCard
                        href="#"
                        profilePic={chandra_sekhar_varma}
                        name={`Chandra Sekhar Varma`}
                        role={`EDITIORAL`}
                        linkedin={``}
                        github={``}
                        twitter={``}
                    />
                    <ProfileCard
                        href="/team/mohith-vishal"
                        profilePic={anuradha_chinta}
                        name={`CH Anuradha`}
                        role={`CONTENT WRITER`}
                        linkedin={``}
                        github={``}
                        twitter={``}
                    />
                </div>
                <div className="grid grid-cols-2 2xl:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 gap-4 items-center px-40 sm:px-0">

                    <ProfileCard
                        href="#"
                        profilePic={saathwika_sabbiti}
                        name={`Saathwika Sabbiti`}
                        role={`CONTENT WRITER`}
                        linkedin={``}
                        github={``}
                        twitter={``}
                    />
                    <ProfileCard
                        href="#"
                        profilePic={challa_ankitha}
                        name={`Challa Ankitha`}
                        role={`CONTENT WRITER`}
                        linkedin={``}
                        github={``}
                        twitter={``}
                    />
                </div>
                <div>
                    <h1 className="flex items-center justify-center font-bold text-3xl pt-8 pb-14 md:text-xl">Social Media Team</h1>
                </div>
                <div className="grid grid-cols-2 2xl:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 gap-4 items-center px-40 sm:px-0">
                    <ProfileCard
                        href="#"
                        profilePic={annadata_alekhya}
                        name={`Annadata Alekhya`}
                        role={`SOCIAL MEDIA`}
                        linkedin={``}
                        github={``}
                        twitter={``}
                    />
                    <ProfileCard
                        href="#"
                        profilePic={prasanth_patnala}
                        name={`Prasanth Patnala`}
                        role={`SOCIAL MEDIA`}
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
                        profilePic={yashaswi_kandregula}
                        name={`Yashaswi Kandregula`}
                        role={`PUBLIC SPEAKER`}
                        linkedin={``}
                        github={``}
                        twitter={``}
                    />
                    <ProfileCard
                        href="#"
                        profilePic={sai_kalyan_tarun}
                        name={`Sai Kalyan Tarun`}
                        role={`PUBLIC SPEAKER`}
                        linkedin={``}
                        github={``}
                        twitter={``}
                    />
                </div>
                <div>
                    <h1 className="flex items-center justify-center font-bold text-3xl pt-8 pb-14 md:text-xl">Special Interest Team</h1>
                </div>
                <div className="grid grid-cols-3 2xl:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 gap-4 items-center px-40 sm:px-0">
                    <ProfileCard
                        href="#"
                        profilePic={venkatesh_vanjarapu}
                        name={`Venkatesh Vanjarapu`}
                        role={`MEMBER`}
                        linkedin={``}
                        github={``}
                        twitter={``}
                    />
                    <ProfileCard
                        href="#"
                        profilePic={yerra_dinesh}
                        name={`Yerra Dinesh`}
                        role={`MEMBER`}
                        linkedin={``}
                        github={``}
                        twitter={``}
                    />
                    <ProfileCard
                        href="#"
                        profilePic={komatipalli_prasanna}
                        name={`Komatipalli Prasanna`}
                        role={`MEMBER`}
                        linkedin={``}
                        github={``}
                        twitter={``}
                    />
                </div>
            </div>
        </>
    );
};

export default Team2021;
