import EventPage from '@/components/EventPage'
import React from 'react'

import INTERNAL_HACKTHON from '../../../../public/asset/img/events/internal_hackathon_sih_2020/internal_hackathon_sih_2020_thumbnail.jpg'
import Photo1 from '../../../../public/asset/img/events/internal_hackathon_sih_2020/internal_hackathon_sih_2020_1.jpg'
import Photo2 from '../../../../public/asset/img/events/internal_hackathon_sih_2020/internal_hackathon_sih_2020_2.jpg'
import Photo3 from '../../../../public/asset/img/events/internal_hackathon_sih_2020/internal_hackathon_sih_2020_3.jpg'
import Photo4 from '../../../../public/asset/img/events/internal_hackathon_sih_2020/internal_hackathon_sih_2020_4.jpg'
import Photo5 from '../../../../public/asset/img/events/internal_hackathon_sih_2020/internal_hackathon_sih_2020_5.jpg'
import Photo6 from '../../../../public/asset/img/events/internal_hackathon_sih_2020/internal_hackathon_sih_2020_6.jpg'
import Photo7 from '../../../../public/asset/img/events/internal_hackathon_sih_2020/internal_hackathon_sih_2020_7.jpg'
import Photo8 from '../../../../public/asset/img/events/internal_hackathon_sih_2020/internal_hackathon_sih_2020_8.jpg'
import Photo9 from '../../../../public/asset/img/events/internal_hackathon_sih_2020/internal_hackathon_sih_2020_9.jpg'
import Photo10 from '../../../../public/asset/img/events/internal_hackathon_sih_2020/internal_hackathon_sih_2020_10.jpg'
import Photo11 from '../../../../public/asset/img/events/internal_hackathon_sih_2020/internal_hackathon_sih_2020_11.jpg'
import Photo12 from '../../../../public/asset/img/events/internal_hackathon_sih_2020/internal_hackathon_sih_2020_12.jpg'
import Photo13 from '../../../../public/asset/img/events/internal_hackathon_sih_2020/internal_hackathon_sih_2020_13.jpg'
import Photo14 from '../../../../public/asset/img/events/internal_hackathon_sih_2020/internal_hackathon_sih_2020_14.jpg'
import Photo15 from '../../../../public/asset/img/events/internal_hackathon_sih_2020/internal_hackathon_sih_2020_15.jpg'
import Photo16 from '../../../../public/asset/img/events/internal_hackathon_sih_2020/internal_hackathon_sih_2020_16.jpg'
import Photo17 from '../../../../public/asset/img/events/internal_hackathon_sih_2020/internal_hackathon_sih_2020_17.jpg'
import Photo18 from '../../../../public/asset/img/events/internal_hackathon_sih_2020/internal_hackathon_sih_2020_18.jpg'
import Photo19 from '../../../../public/asset/img/events/internal_hackathon_sih_2020/internal_hackathon_sih_2020_19.jpg'

const InternalHackathonSIH2020 = () => {
    return (
        <main>
            <EventPage
                title={`Internal Hackathon SIH 2020`}
                description={`

                <p>Vignan's IIT ACM Student Chapter participated in organizing the internal hackathon of SIH 2020 under the guidelines of SIH. The main motive was to provide students with a platform to solve some of the pressing problems we face in our daily lives, thus inculcating a culture of product innovation and a mindset of problem-solving.</p>

                
                `}
                thumbnail={INTERNAL_HACKTHON}
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
                event_date="Thursday, January 09 2020"
                event_time="09:30 AM - 04:15 PM"
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
                    p10: { Photo10 },
                    p11: { Photo11 },
                    p12: { Photo12 },
                    p13: { Photo13 },
                    p14: { Photo14 },
                    p15: { Photo15 },
                    p16: { Photo16 },
                    p17: { Photo17 },
                    p18: { Photo18 },
                    p19: { Photo19 },
                }}
                registration_available={false}
            />
        </main>
    )
}

export default InternalHackathonSIH2020