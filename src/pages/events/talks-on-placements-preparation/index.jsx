import EventPage from '@/components/EventPage'
import React from 'react'

import TALKS_ON_PLACEMENT from '../../../../public/asset/img/events/talks_on_placements_preparation/talks_on_placements_preparation_thumbnail.jpg'
import Photo1 from '../../../../public/asset/img/events/talks_on_placements_preparation/talks_on_placements_preparation1.jpg'
import Photo2 from '../../../../public/asset/img/events/talks_on_placements_preparation/talks_on_placements_preparation2.jpg'
import Photo3 from '../../../../public/asset/img/events/talks_on_placements_preparation/talks_on_placements_preparation3.jpg'
import Photo4 from '../../../../public/asset/img/events/talks_on_placements_preparation/talks_on_placements_preparation4.jpg'
import Photo5 from '../../../../public/asset/img/events/talks_on_placements_preparation/talks_on_placements_preparation5.jpg'
import Photo6 from '../../../../public/asset/img/events/talks_on_placements_preparation/talks_on_placements_preparation6.jpg'

const TalksOnPlacementPreparation = () => {
    return (
        <main>
            <EventPage
                title={`Talks on Placement Preparation`}
                description={`

                <h2><strong>Virtual Session on Placement Preparation:</strong></h2>

                <p>It's quite common for final year and pre-final year students to be worried about placements. Placement fears are real, and students are often confused about how to start the preparation and from where to start, ending up taking the wrong steps.</p>
                
                <p>Therefore, it is very important for students to understand the A and Z of placements, which is why Vignan's IIT ACM has come up with this amazing virtual session in collaboration with GirlScript. Here, the most experienced professionals from various departments give their inputs on how to get prepared for placements.</p>
                 
                `}
                thumbnail={TALKS_ON_PLACEMENT}
                organizers={{
                    org1: {
                        name: "Saimanoj Seshagiri",
                        link: "/team/saimanoj-seshagiri",
                    },
                    org2: {
                        name: "Farhana M",
                        link: "/team/farhana-m",
                    },
                    org3: {
                        name: "Revanth Murigipudi",
                        link: "/team/revanth-murigipudi",
                    },
                    org4: {
                        name: "Praveen Kumar Reddy",
                        link: "/team/praveen-kumar-reddy",
                    },
                }}
                event_location={{
                    location: "Online (Zoom)",
                    city: "Visakhapatnam, Andhra Pradesh",
                    link: "#",
                }}
                event_date="Saturday, July 31 2021"
                event_time="05:00 AM - 06:00 PM"
                photo_gallary={{
                    p1: { Photo1 },
                    p2: { Photo2 },
                    p3: { Photo3 },
                    p4: { Photo4 },
                    p5: { Photo5 },
                    p6: { Photo6 },
                }}
                registration_available={false}
            />
        </main>
    )
}

export default TalksOnPlacementPreparation