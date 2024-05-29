import EventPage from '@/components/EventPage'
import React from 'react'

import ROADMAP_TO_DSA_CN from '../../../../public/asset/img/events/roadmap_to_dsa_coding_ninjas/roadmap_to_dsa_cn_thumbnail.jpg'
import Photo1 from '../../../../public/asset/img/events/roadmap_to_dsa_coding_ninjas/roadmap_to_dsa_cn1.png'
import Photo2 from '../../../../public/asset/img/events/roadmap_to_dsa_coding_ninjas/roadmap_to_dsa_cn2.png'
import Photo3 from '../../../../public/asset/img/events/roadmap_to_dsa_coding_ninjas/roadmap_to_dsa_cn3.png'
import Photo4 from '../../../../public/asset/img/events/roadmap_to_dsa_coding_ninjas/roadmap_to_dsa_cn4.png'
import Photo5 from '../../../../public/asset/img/events/roadmap_to_dsa_coding_ninjas/roadmap_to_dsa_cn5.png'

const RoadmapToDSACodingNinjas = () => {
    return (
        <main>
            <EventPage
                title={`Roadmap to DSA and Introduction to Competitive Programming`}
                description={`

                <h2><strong>Webinar on Roadmap to DSA and Competitive Programming:</strong></h2>
                <br />                

                <p>Give your career a head-start and learn how you can get closer to your dream job by refining your coding skills. Coding Ninjas, in collaboration with Vignan's IIT ACM Student Chapter, brings you an exclusive webinar on Roadmap to DSA and Introduction to Competitive Programming.</p>
                 
                `}
                thumbnail={ROADMAP_TO_DSA_CN}
                organizers={{
                    org1: {
                        name: "Swapnil Kumar",
                        link: "#",
                    },
                    org2: {
                        name: "Rajat Goel",
                        link: "#",
                    },
                }}
                event_location={{
                    location: "Online (Zoom)",
                    city: "Visakhapatnam, Andhra Pradesh",
                    link: "#",
                }}
                event_date="Saturday, September 04 2021"
                event_time="06:00 PM - 08:30 PM"
                photo_gallary={{
                    p1: { Photo1 },
                    p2: { Photo2 },
                    p3: { Photo3 },
                    p4: { Photo4 },
                    p5: { Photo5 },
                }}
                registration_available={false}
            />
        </main>
    )
}

export default RoadmapToDSACodingNinjas