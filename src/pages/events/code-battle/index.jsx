import EventPage from '@/components/EventPage'
import React from 'react'

import CODE_BATTLE from '../../../../public/asset/img/events/code_battle/code_battle_thumbnail.png'

const CodeBattle = () => {
  return (
    <main>
    <EventPage
        title={`Code Battle`}
        description={`
        Coding Event held on HACKEREARTH Platform. Conducted by Vignan's IIT ACM.
        `}
        thumbnail={CODE_BATTLE}
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
        event_date="Thursday, January 06 2018"
        event_time="10:00 AM - Jan 07 03:00 PM"
        registration_available={false}
    />
</main>
  )
}

export default CodeBattle