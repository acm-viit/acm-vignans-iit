import Image from "next/image";
import { motion } from "framer-motion";
import EventCard from "@/components/EventCard";
import React, { useRef, useState, useEffect } from "react";

import SUS_HACKS from '../../public/asset/img/events/sus_hacks_april_2024/sus_hacks_april_2024_thumbnail.jpg'
import AGRI_HACK from "../../public/asset/img/events/agri-hack/agri-hack-thumbnail.jpg";
import vignite_3_0 from "../../public/asset/img/events/vignite_3_0/vignite_3_0_thumbnail.jpg";
import ideathon_june_2022 from "../../public/asset/img/events/ideathon_june_2022/ideathon_june_2022_thumbnail.jpg";
import ideathon_feb_2022 from "../../public/asset/img/events/ideathon_feb_2022/ideathon_feb_2022_thumbnail.png";
import github_workshop from "../../public/asset/img/events/github_workshop/github_workshop_thumbnail.png";
import hands_on_with_jenkins from "../../public/asset/img/events/hands_on_with_jenkins/hands_on_with_jenkins_thumbnail.png";
import hour_of_code_2021 from "../../public/asset/img/events/hour_of_code_2021/hour_of_code_2021_thumbnail.png";
import webhack_2021 from "../../public/asset/img/events/webhack_2021/webhack_2021_thumbnail.jpg";
import roadmap_to_dsa_coding_ninjas from "../../public/asset/img/events/roadmap_to_dsa_coding_ninjas/roadmap_to_dsa_cn_thumbnail.jpg";
import talks_on_placements_preparation from "../../public/asset/img/events/talks_on_placements_preparation/talks_on_placements_preparation_thumbnail.jpg";
import xbhitech_2021 from "../../public/asset/img/events/xbhitech_2021/xbhitech_2021_thumbnail.png";
import techalthon from "../../public/asset/img/events/techalthon/techalthon_thumbnail.png";
import ethical_hacking_2_0 from "../../public/asset/img/events/ethical_hacking_2_0/ethical_hacking_2_0_thumbnail.png";
import viit_ctf_v3 from "../../public/asset/img/events/viit_ctf_v3/viit_ctf_v3_thumbnail.jpg";
import apskill_workshop from "../../public/asset/img/events/apskill_workshop/apskill_thumbnail.jpg";
import personal_profile_development from "../../public/asset/img/events/personal_profile_development/personal_profile_development_thumbnail.jpg";
import vignite_2_0 from "../../public/asset/img/events/vignite_2_0/vignite_2_0_thumbnail.jpg";
import ideathon_feb_2021 from "../../public/asset/img/events/ideathon_feb_2021/ideathon_feb_2021_thumbnail.jpg";
import cloud_computing from "../../public/asset/img/events/cloud_computing/cloud_computing_thumbnail.jpg";
import viit_ctf_v2 from "../../public/asset/img/events/viit_ctf_v2/viit_ctf_v2_thumbnail.jpg";
import internal_hackathon_sih_2020 from "../../public/asset/img/events/internal_hackathon_sih_2020/internal_hackathon_sih_2020_thumbnail.jpg";
import ethical_hacking from "../../public/asset/img/events/ethical_hacking/ethical_hacking_thumbnail.png";
import vignite_1_0 from "../../public/asset/img/events/vignite_1_0/vignite_1_0_thumbnail.jpg";
import hour_of_code from "../../public/asset/img/events/hour_of_code/hour_of_code_thumbnail.png";
import hack_arena from "../../public/asset/img/events/hack_arena/hack_arena_thumbnail.png";
import code_battle from "../../public/asset/img/events/code_battle/code_battle_thumbnail.png";
import acm_inaugural from "../../public/asset/img/events/acm_inaugural/acm_inaugural_thumbnail.jpg";



const Events = () => {
  const [showControls, setShowControls] = useState(false);
  const carouselRef = useRef(null);

  useEffect(() => {
    if (carouselRef.current) {
      setShowControls(true);
    }
  }, [carouselRef]);

  const handlePrevClick = () => {
    carouselRef.current.scrollBy({
      left: -carouselRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  const handleNextClick = () => {
    carouselRef.current.scrollBy({
      left: carouselRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  return (
    <>
      <section className="container px-28 sm:px-8">
        {/* event card carousel */}
        <div className="relative mt-2">
          <div className="carousel whiskey-cards alignfull" ref={carouselRef}>
            <EventCard
              className={`mr-6 ml-2`}
              link="/events/sus-hacks-2024"
              title='Sus-Hacks'
              featuredImage={SUS_HACKS}
              eventdate={"Apr 27, 2024"}
              description="Join Sus-Hacks this April for an inspiring journey in tech innovation and social impact. Collaborate, innovate, and create a brighter future together!"
            />
            <EventCard
              className={`mr-6 ml-2`}
              link="/events/agri-hack"
              title='Agri Hack'
              featuredImage={AGRI_HACK}
              eventdate={"Sep 01, 2022"}
              description="AGRI-HACK-2022 aims to foster innovation in agriculture by providing a platform for collaboration and knowledge exchange among engineering faculty."
            />
            <EventCard
              className={`mr-6`}
              link="/events/vignite-3-0"
              title="Vignite 3.0"
              featuredImage={vignite_3_0}
              eventdate={"Jun 30, 2022"}
              description="Vignan's IIT ACM Student Chapter is Organizing a Hackathon in association with COMPUTER SOCIETY OF INDIA(CSI) and creating a platform for both faculty and students to practice, share, and adapt their ideologies."
            />
            <EventCard
              className={`mr-6`}
              link="/events/ideathon-june-2022"
              title="Ideathon June 2022"
              featuredImage={ideathon_june_2022}
              eventdate={"Jun 30, 2022"}
              description="Ideathon is an intensive brainstorming event conducted by ACM VIGNAN on 28th june 2022, to give an opportunity to talented minds to generate fresh solutions to existing challenges in the community."
            />
            <EventCard
              className={`mr-6`}
              link="/events/ideathon-feb-2022"
              title="Ideathon Feb 2022"
              featuredImage={ideathon_feb_2022}
              eventdate={"Feb 22, 2022"}
              description="Ideathon is an intensive brainstorming event conducted by ACM VIGNAN on 28th Feb 2022, to give an opportunity to talented minds to generate fresh solutions to existing challenges in the community."
            />
            <div className="flex items-center justify-center relative flex-shrink-0 sm:w-[20rem] w-[28rem] sm:h-[20rem] h-[25rem] sm:mr-0 mb-16  rounded-lg shadow-[3px_2px_0px_0px_rgba(24,24,24)] dark:shadow-[3px_2px_0px_0px_rgba(255,255,255)] border border-solid border-dark bg-light dark:border-light dark:bg-dark">
              <div className="grid">
                <a href="/events/"
                  className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                  rel="noopener noreferrer"
                >
                  <h2 className={`mb-3 text-2xl font-semibold`}>
                    More Events{" "}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    &rarr;
                    </span>
                  </h2>
                  <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                    Experience fun events and make new friends!
                  </p>
                </a>
              </div>
            </div>
            {/* <EventCard
              className={`mr-6`}
              link="/events/github-workshop"
              title="Github Workshop"
              featuredImage={github_workshop}
              eventdate={"Apr 23, 2022"}
              description="Vignan's IIT ACM student chapter is organizing a Workshop on GitHub and a comprehensive guide to common LinkedIn profile building questions."
            />
            <EventCard
              className={`mr-6`}
              link="/events/hands-on-with-jenkins"
              title="Hands On With Jenkins"
              featuredImage={hands_on_with_jenkins}
              eventdate={"Dec 06, 2021"}
              description="The leading open-source automation server, Jenkins provides hundreds of plugins to support building, deploying, and automating any project."
            />
            <EventCard
              className={`mr-6`}
              link="/events/hour-of-code-2021"
              title="Hour Of Code 2021"
              featuredImage={hour_of_code_2021}
              eventdate={"Dec 07, 2021"}
              description="As a part of the ACM student chapter at Vignan's IIT, we organized the Hour of Code event on 07th Dec 2021. This event was dedicated to the global movement about programming and technology in the current world scenario."
            />
            <EventCard
              className={`mr-6`}
              link="/events/webhack-2021"
              title="Webhack 2021"
              eventdate={"Sep 14, 2021"}
              featuredImage={webhack_2021}
              description="Webhack 2021 is a college-level initiative to provide students a platform to solve some of the UI problems, thus inculcating a culture of product innovation and a mindset of problem-solving."
            />
            <EventCard
              className={`mr-6`}
              link="/events/roadmap-to-dsa-coding-ninjas"
              title="Roadmap To DSA And Introduction To Competitive Programming"
              eventdate={"Sep 04, 2021"}
              featuredImage={roadmap_to_dsa_coding_ninjas}
              description="Give your career a head-start and learn how you can get closer to your dream job by refining your coding skills. Coding Ninjas, in collaboration with Vignan's IIT ACM Student Chapter, brings you an exclusive webinar on Roadmap to DSA and Introduction to Competitive Programming."
            />
            <EventCard
              className={`mr-6`}
              link="/events/talks-on-placements-preparation"
              title="Talks On Placement Preparation"
              eventdate={"Jul 31, 2021"}
              featuredImage={talks_on_placements_preparation}
              description="It's quite common for final year and pre-final year students to be worried about placements. Placement fears are real, and students are often confused about how to start the preparation and from where to start, ending up taking the wrong steps."
            />
            <EventCard
              className={`mr-6`}
              link="/events/xbhitech-2021"
              title="Xbhitech 2021"
              eventdate={"Sep 14, 2021"}
              featuredImage={xbhitech_2021}
              description="XHIBITECH 2021, conducted by Vignan’s IIT ACM, is a Three-day Tech Carnival where candidates showcase their projects, including mini-projects and individual projects, that they have worked on so far."
            />
            <EventCard
              className={`mr-6`}
              link="/events/techalthon"
              title="Techalthon"
              eventdate={"Jun 30, 2021"}
              featuredImage={techalthon}
              description="TECHATHLON is a technical quiz conducted by Vignan's IIT ACM student chapter, with participation from students across all years and various departments within the Vignan group."
            />
            <EventCard
              className={`mr-6`}
              link="/events/ethical-hacking-2-0"
              title="Ethical Hacking 2.0"
              eventdate={"Jun 06, 2021"}
              featuredImage={ethical_hacking_2_0}
              description="Ethical Hacking 2.0 is a workshop conducted by Vignan's IIT, mentored by Lakshmi Narayana Degala, a Top 300 rank hacker on Intigriti."
            />
            <EventCard
              className={`mr-6`}
              link="/events/viit-ctf-v3"
              title="VIIT CTF V3"
              eventdate={"May 29, 2021"}
              featuredImage={viit_ctf_v3}
              description="VIIT CTF V3 is a beginner-level CTF/Hackathon for cybersecurity enthusiasts. This CTF is a 24-hour event, CTF is aimed to improve the student's cybersecurity and problem-solving skills. CTF tones a beginner to an expert. VIIT CTF V3 successfully reached 1300+ registrations over all Vignan groups."
            />
            <EventCard
              className={`mr-6`}
              link="/events/apskill-workshop"
              title="Android Application Development"
              eventdate={"Apr 09, 2021"}
              featuredImage={apskill_workshop}
              description="In this Workshop, Students learned the basics of building Android apps with the Kotlin programming language."
            />
            <EventCard
              className={`mr-6`}
              link="/events/personal-profile-development"
              title="Professional Profile Development"
              eventdate={"Mar 20, 2021"}
              featuredImage={personal_profile_development}
              description="Professional Profile development is an On-Campus workshop conducted by ACM Vignan, wherein our beloved seniors turned into our mentors and provided us with tips and tricks that are really useful for the students' success story."
            />
            <EventCard
              className={`mr-6`}
              link="/events/vignite-2-0"
              title="Vignite 2.0"
              eventdate={"Feb 26, 2021"}
              featuredImage={vignite_2_0}
              description="V-IGNITE 2.0 HACKATHON is a 24-Hour Hack-day event organized by ACM Vignan on 26-27 February 2021 respectively."
            />
            <EventCard
              className={`mr-6`}
              link="/events/ideathon-feb-2021"
              title="Ideathon Feb 2021"
              eventdate={"Feb 26, 2021"}
              featuredImage={ideathon_feb_2021}
              description="IDEATHON is a Nationwide On-Campus Contest conducted by ACM Vignan on the 26th and 27th of February 2021. For this event, we invited various company CEOs and officials from around the city to come and grace the event."
            />
            <EventCard
              className={`mr-6`}
              link="/events/cloud-computing"
              title="Android Application Development"
              eventdate={"Jan 07, 2021"}
              featuredImage={cloud_computing}
              description="As a part of the ACM student chapter Vignan's IIT, We organized an event on Cloud Support, The key speaker for this event is LAKSHMI PRASANNA AKKENA who is a highly expert IT professional with more than 15 years of experience in Cloud Technology and E-Business Suite Applications."
            />
            <EventCard
              className={`mr-6`}
              link="/events/viit-ctf-v2"
              title="VIIT CTF V2"
              eventdate={"May 30, 2019"}
              featuredImage={viit_ctf_v2}
              description="VIIT CTF V2 Cyber Securuity Hackathon"
            />
            <EventCard
              className={`mr-6`}
              link="/events/internal-hackathon-sih-2020"
              title="Internal Hackathon SIH 2020"
              eventdate={"Jan 09, 2020"}
              featuredImage={internal_hackathon_sih_2020}
              description="Vignan's IIT ACM Student Chapter participated in organizing the internal hackathon of SIH 2020 under the guidelines of SIH."
            />
            <EventCard
              className={`mr-6`}
              link="/events/ethical-hacking"
              title="Ethical Hacking Session"
              eventdate={"Aug 05, 2019"}
              featuredImage={ethical_hacking}
              description="As a part of the ACM student chapter at Vignan's IIT, we organized an Ethical Hacking session on 5th Aug 2019. The session described how Ethical Hackers expose vulnerabilities in software to help business owners fix those security holes before a malicious hacker discovers them."
            />
            <EventCard
              className={`mr-6`}
              link="/events/vignite-1-0"
              title="Vignite 1.0"
              eventdate={"Sep 15, 2019"}
              featuredImage={vignite_1_0}
              description="V-IGNITE is a nationwide initiative to provide students with a platform to solve pressing problems in our daily lives, fostering a culture of product innovation and problem-solving mindset."
            />
            <EventCard
              className={`mr-6`}
              link="/events/hour-of-code"
              title="Hour Of Code 2018"
              eventdate={"Dec 07, 2018"}
              featuredImage={hour_of_code}
              description="As a part of the ACM student chapter at Vignan's IIT, we organized the Hour of Code event on 07th Dec 2018. This event was dedicated to the global movement about programming and technology in the current world scenario."
            />
            <EventCard
              className={`mr-6`}
              link="/events/hack-arena"
              title="Hack Arena"
              eventdate={"Dec 06, 2018"}
              featuredImage={hack_arena}
              description="As a part of the ACM student chapter at Vignan's IIT, we organized the HACK ARENA event on 07th Dec 2018. This event involved solving a problem statement based on a real-life scenario."
            />
            <EventCard
              className={`mr-6`}
              link="/events/code-battle"
              title="Code Battle"
              eventdate={"Jan 06, 2018"}
              featuredImage={code_battle}
              description="Coding Event held on HACKEREARTH Platform. Conducted by Vignan's IIT ACM."
            />
            <EventCard
              className={`mr-6`}
              link="/events/acm-inaugural-2018"
              title="ACM Inagural 2018"
              eventdate={"Apr 27, 2018"}
              featuredImage={acm_inaugural}
              description="Vignan's IIT ACM Student Chapter has been inaugurated on 1st Sep 2018, Vision is to focus on various technical and cultural fields with the main goal of enriching the student's career and driving it forward through conferences and student development events and committees all the while maintaining the highest professional and ethical standards."
            /> */}
          </div>
        </div>

        {/* navigation arrows */}
        <div className="controls flex items-center justify-evenly pb-10 sm:hidden selector-none">
          <motion.button
            className="control-btn prev"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handlePrevClick}
          >
            <span class="text-7xl inline-block transform rotate-180">➤</span>
          </motion.button>

          <motion.button
            className="control-btn next"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleNextClick}
          >
            <span className="text-7xl">➤</span>
          </motion.button>
        </div>
      </section>
    </>
  );
};

export default Events;
