import EventPage from '@/components/EventPage'
import React from 'react'

import VII_CTF_V3 from '../../../../public/asset/img/events/viit_ctf_v3/viit_ctf_v3_thumbnail.jpg'
import Photo1 from '../../../../public/asset/img/events/viit_ctf_v3/1stwinner.png'
import Photo2 from '../../../../public/asset/img/events/viit_ctf_v3/2ndwinner.png'
import Photo3 from '../../../../public/asset/img/events/viit_ctf_v3/3rdwinner.png'
import Photo4 from '../../../../public/asset/img/events/viit_ctf_v3/4thwinner.png'
import Photo5 from '../../../../public/asset/img/events/viit_ctf_v3/5thwinner.png'
import Photo6 from '../../../../public/asset/img/events/viit_ctf_v3/6thwinner.png'
import Photo7 from '../../../../public/asset/img/events/viit_ctf_v3/7thwinner.png'
import Photo8 from '../../../../public/asset/img/events/viit_ctf_v3/8thwinner.png'
import Photo9 from '../../../../public/asset/img/events/viit_ctf_v3/9thwinner.png'
import Photo10 from '../../../../public/asset/img/events/viit_ctf_v3/10thwinner.png'

const ViitCRFV3 = () => {
  return (
    <main>
    <EventPage
        title={`VIIT CTF V3`}
        description={`
        
        <p>
            VIIT CTF V3 is a beginner-level CTF/Hackathon for cybersecurity enthusiasts. This CTF is a 24-hour event, CTF is aimed to improve the student's cybersecurity and problem-solving skills. CTF tones a beginner to an expert. VIIT CTF V3 successfully reached 1300+ registrations over all Vignan groups.
        </p>
        <br/>
        <p>
        CTF (Capture The Flag) is an International Information Security Competition that challenges contestants to solve a variety of tasks ranging from a scavenger hunt on Wikipedia to basic programming exercises to hacking your way into a server to steal data. In these challenges, the contestant is usually asked to find a specific piece of text that may be hidden on the server or behind a webpage. This goal is called the flag, hence the name!
        </p>
        <br/>
        <p>
            CTF events are usually timed, and the points are totaled once the time has expired. The winning player will be the one that solved the most challenges and thus secured the highest score.
        </p>

        `}
        thumbnail={VII_CTF_V3}
        organizers={{
            org1: {
                name: "Dept. Of CSE",
                link: "/team/dept-of-cse",
            },
        }}
        event_location={{
            location: "Vignan's Institute Of Information Technology",
            city: "Visakhapatnam, Andhra Pradesh",
            link: "https://www.google.com/maps/search/?api=1&query=Vignan%27s%20Institute%20Of%20Information%20Technology&query_place_id=ChIJh4CLQstoOToRZWqDQ4wZPqo",
        }}
        event_date="Saturday, May 29 2021"
        event_time="04:00 AM - May 30 04:00 PM"
        profile_cards_title = "Top 10 Winners"
        profile_cards={{
            profile1: {
                name: "D Lakshmi Narayana",
                role: "1st Position (90 flags) <br/> VIGNAN'S IIT-VIZAG",
                href: "#",
                profilePic: Photo1,
            },
            profile2: {
                name: "P Lohith Viswa",
                role: "2nd Position (90 flags) <br/> VIGNAN'S IIT-VIZAG",
                href: "#",
                profilePic: Photo2,
            },
            profile3: {
                name: "K V S P AKHILESH",
                role: "3rd Position (90 flags) <br/> VIGNAN'S IIT-VIZAG",
                href: "#",
                profilePic: Photo3,
            },
            profile4: {
                name: "Nithin Gonthina",
                role: "4th Position (85 flags) <br/> VIGNAN'S IIT-VIZAG",
                href: "#",
                profilePic: Photo4,
            },
            profile5: {
                name: "Syed Modassir Ali",
                role: "5th Position (80 flags) <br/> JGEC-Jalpaiguri,WB",
                href: "#",
                profilePic: Photo5,
            },
            profile6: {
                name: "Yakshita Sharma",
                role: "6th Position (80 flags) <br/> Dayananda University",
                href: "#",
                profilePic: Photo6,
            },
            profile7: {
                name: "V Balaji Yaswanth",
                role: "7th Position (80 flags) <br/> VIGNAN'S IIT-VIZAG",
                href: "#",
                profilePic: Photo7,
            },
            profile8: {
                name: "Mhase Ishwar Uttamrao",
                role: "8th Position (75 flags) <br/> Pune University",
                href: "#",
                profilePic: Photo8,
            },
            profile9: {
                name: "P Siva Surya",
                role: "9th Position (70 flags) <br/> VIGNAN'S IIT-VIZAG",
                href: "#",
                profilePic: Photo9,
            },
            profile10: {
                name: "K V S S Nagaraju",
                role: "10th Position (70 flags) <br/> VIGNAN'S IIT-VIZAG",
                href: "#",
                profilePic: Photo10,
            },
        }}
        registration_available={false}
    />
</main>
  )
}

export default ViitCRFV3