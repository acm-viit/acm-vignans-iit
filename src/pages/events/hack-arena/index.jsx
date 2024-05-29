import React from 'react'
import EventPage from '@/components/EventPage'

import HACK_ARENA from '../../../../public/asset/img/events/hack_arena/hack_arena_thumbnail.png'
import Photo1 from '../../../../public/asset/img/events/hack_arena/hack_arena1.jpg'
import Photo2 from '../../../../public/asset/img/events/hack_arena/hack_arena2.jpg'
import Photo3 from '../../../../public/asset/img/events/hack_arena/hack_arena3.jpg'
import Photo4 from '../../../../public/asset/img/events/hack_arena/hack_arena4.jpg'
import Photo5 from '../../../../public/asset/img/events/hack_arena/hack_arena5.jpg'
import Photo6 from '../../../../public/asset/img/events/hack_arena/hack_arena6.jpg'
import Photo7 from '../../../../public/asset/img/events/hack_arena/hack_arena7.jpg'
import Photo8 from '../../../../public/asset/img/events/hack_arena/hack_arena8.jpg'
import Photo9 from '../../../../public/asset/img/events/hack_arena/hack_arena9.jpg'

const HackArena = () => {
    return (
        <main>
            <EventPage
                title={`Hack Arena`}
                description={`
                <p>As a part of the ACM student chapter at Vignan's IIT, we organized the HACK ARENA event on 07th Dec 2018. This event involved solving a problem statement based on a real-life scenario.</p>              
                `}
                thumbnail={HACK_ARENA}
                organizers={{
                    org1: {
                        name: "CSE Department",
                        link: "/team/dept-of-cse",
                        profile: "vignan_logo.png",
                    },
                }}
                event_location={{
                    location: "Vignan's Institute Of Information Technology",
                    city: "Visakhapatnam, Andhra Pradesh",
                    link: "https://www.google.com/maps/search/?api=1&query=Vignan%27s%20Institute%20Of%20Information%20Technology&query_place_id=ChIJh4CLQstoOToRZWqDQ4wZPqo",
                }}
                event_date="Thursday, December 06 2018"
                event_time="10:30 AM - Dec 07, 04:15 PM"
                photo_gallary={{
                    p1: { Photo1 },
                    p2: { Photo2 },
                    p3: { Photo3 },
                    p4: { Photo4 },
                    p5: { Photo5 },
                    p6: { Photo6 },
                    p7: { Photo7 },
                    p8: { Photo8 },
                    p9: { Photo9 },
                }}
                registration_available={false}
            />
        </main>
    )
}

export default HackArena