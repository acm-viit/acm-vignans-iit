import EventPage from '@/components/EventPage'
import React from 'react'

import WEB_HACK_2021 from '../../../../public/asset/img/events/webhack_2021/webhack_2021_thumbnail.jpg'
import Winner1 from '../../../../public/asset/img/events/webhack_2021/srwinner1.jpg'
import Winner2 from '../../../../public/asset/img/events/webhack_2021/srwinner2.jpg'
import Winner3 from '../../../../public/asset/img/events/webhack_2021/srwinner3.jpg'
import Winner4 from '../../../../public/asset/img/events/webhack_2021/jrwinner1.jpg'
import Winner5 from '../../../../public/asset/img/events/webhack_2021/jrwinner2.jpg'
import Winner6 from '../../../../public/asset/img/events/webhack_2021/jrwinner3.jpg'
import Photo1 from '../../../../public/asset/img/events/webhack_2021/webhack_2021_1.jpg'
import Photo2 from '../../../../public/asset/img/events/webhack_2021/webhack_2021_2.jpg'
import Photo3 from '../../../../public/asset/img/events/webhack_2021/webhack_2021_3.jpg'
import Photo4 from '../../../../public/asset/img/events/webhack_2021/webhack_2021_4.jpg'
import Photo5 from '../../../../public/asset/img/events/webhack_2021/webhack_2021_5.jpg'
import Photo6 from '../../../../public/asset/img/events/webhack_2021/webhack_2021_6.jpg'

const WebHack2021 = () => {
    return (
        <main>
            <EventPage
                title={`Webhack 2021`}
                description={`
                
                <p>
                    <b>IDEA PHASE:</b> OFFLINE
                    <br/>
                    <b>REGISTRATION STARTS ON:</b> September 08, 2021 12:00 PM IST
                    <br/>
                    <b>REGISTRATION ENDS ON:</b> September 12, 2021 04:00 PM IST
                    <br/>
                </p>
                <br/>
                
                <p>
                    Webhack 2021 is a college-level initiative to provide students a platform to solve some of the UI problems, thus inculcating a culture of product innovation and a mindset of problem-solving.
                </p> 
                `}
                thumbnail={WEB_HACK_2021}
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
                event_date="Saturday, September 14 2021"
                event_time="09:00 AM - Sep 15, 02:00 PM"
                winners_gallary_title='Senior and Junior Winners'
                winners_gallary={{
                    p1 : {Winner1, text: "Senior Winner 1"},
                    p2 : {Winner2, text: "Senior Winner 2"},
                    p3 : {Winner3, text: "Senior Winner 3"},
                    p4 : {Winner4, text: "Junior Winner 1"},
                    p5 : {Winner5, text: "Junior Winner 2"},
                    p6 : {Winner6, text: "Junior Winner 3"},
                }}
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

export default WebHack2021