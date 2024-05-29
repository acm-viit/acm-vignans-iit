import EventPage from '@/components/EventPage'
import React from 'react'

import VII_CTF_V2 from '../../../../public/asset/img/events/viit_ctf_v2/viit_ctf_v2_thumbnail.jpg'

const CodeBattle = () => {
  return (
    <main>
    <EventPage
        title={`VIIT CTF V2`}
        description={`
        VIIT CTF V2 Cyber Securuity Hackathon
        <br/>
        <b>Prizes Worth:</b> 5000/-
        `}
        thumbnail={VII_CTF_V2}
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
        event_date="Thursday, May 30 2019"
        event_time="10:00 AM - May 31 10:00 PM"
        registration_available={false}
    />
</main>
  )
}

export default CodeBattle