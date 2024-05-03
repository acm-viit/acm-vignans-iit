import EventPage from '@/components/EventPage'
import React from 'react'

import SUS_HACKS from '../../../../public/asset/img/events/sus_hacks_april_2024/sus_hacks_april_2024_thumbnail.jpg'

const SusHacks2024 = () => {
    return (
        <main>
            <EventPage
                title={`Sus-Hacks 2024`}
                description={`
                
                ​Get ready for an exhilarating journey at Sus-Hacks! As April approaches, dive into an atmosphere brimming with purpose and excitement. Sus-Hacks is a 24-hour hackathon and anyone passionate about tech innovation, digital equity, or making a difference can join. Collaborate with like-minded individuals, innovate, and push boundaries. It's not just about the result; it's about the friendships, skills, and collective action. Join us at Sus-Hacks, and let's create a brighter future together!
                <br/>
                ​Mark the dates April 27 & 28 !!

                `}
                thumbnail={SUS_HACKS}
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
                event_date="Sunday, June 30 2022"
                event_time="09:00 AM - Jul 01, 02:00 PM"
                registration={`<b>Registration Fee:</b> 500/- <br> <b>Team Size:</b> 4 <br> <b>Last Date for Registration:</b> 21at April 2024`}
                registration_closed={true}
                registration_link={`https://sushacks.vercel.app/`}
                registration_available={true}
            />
        </main>
    )
}

export default SusHacks2024