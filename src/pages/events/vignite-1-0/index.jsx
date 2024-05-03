import EventPage from '@/components/EventPage'
import React from 'react'

import VIGNITE_1_0 from '../../../../public/asset/img/events/vignite_1_0/vignite_1_0_thumbnail.jpg'
import Photo1 from '../../../../public/asset/img/events/vignite_1_0/vignite_1_0_winner1.jpg'
import Photo2 from '../../../../public/asset/img/events/vignite_1_0/vignite_1_0_winner2.jpg'
import Photo3 from '../../../../public/asset/img/events/vignite_1_0/vignite_1_0_winner3.jpg'
import Photo4 from '../../../../public/asset/img/events/vignite_1_0/vignite_1_0_1.jpg'
import Photo5 from '../../../../public/asset/img/events/vignite_1_0/vignite_1_0_team1.jpg'
import Photo6 from '../../../../public/asset/img/events/vignite_1_0/vignite_1_0_team2.jpg'
import Photo7 from '../../../../public/asset/img/events/vignite_1_0/vignite_1_0_team3.jpg'
import Photo8 from '../../../../public/asset/img/events/vignite_1_0/vignite_1_0_team4.jpg'
import Photo9 from '../../../../public/asset/img/events/vignite_1_0/vignite_1_0_team5.jpg'
import Photo10 from '../../../../public/asset/img/events/vignite_1_0/vignite_1_0_team6.jpg'
import Photo11 from '../../../../public/asset/img/events/vignite_1_0/vignite_1_0_team7.jpg'
import Photo12 from '../../../../public/asset/img/events/vignite_1_0/vignite_1_0_team8.jpg'
import Photo13 from '../../../../public/asset/img/events/vignite_1_0/vignite_1_0_team9.jpg'
import Photo14 from '../../../../public/asset/img/events/vignite_1_0/vignite_1_0_team10.jpg'
import Photo15 from '../../../../public/asset/img/events/vignite_1_0/vignite_1_0_team11.jpg'
import Photo16 from '../../../../public/asset/img/events/vignite_1_0/vignite_1_0_team12.jpg'
import Photo17 from '../../../../public/asset/img/events/vignite_1_0/vignite_1_0_team13.jpg'
import Photo18 from '../../../../public/asset/img/events/vignite_1_0/vignite_1_0_team14.jpg'
import Photo19 from '../../../../public/asset/img/events/vignite_1_0/vignite_1_0_team15.jpg'
import Photo20 from '../../../../public/asset/img/events/vignite_1_0/vignite_1_0_team16.jpg'
import Photo21 from '../../../../public/asset/img/events/vignite_1_0/vignite_1_0_team17.jpg'
import Photo22 from '../../../../public/asset/img/events/vignite_1_0/vignite_1_0_team18.jpg'
import Photo23 from '../../../../public/asset/img/events/vignite_1_0/vignite_1_0_team19.jpg'
import Photo24 from '../../../../public/asset/img/events/vignite_1_0/vignite_1_0_team20.jpg'
import Photo25 from '../../../../public/asset/img/events/vignite_1_0/vignite_1_0_team21.jpg'
import Photo26 from '../../../../public/asset/img/events/vignite_1_0/vignite_1_0_team22.jpg'
import Photo27 from '../../../../public/asset/img/events/vignite_1_0/vignite_1_0_team23.jpg'
import Photo28 from '../../../../public/asset/img/events/vignite_1_0/vignite_1_0_team24.jpg'


const Vignite_1_0 = () => {
    return (
        <main>
            <EventPage
                title={`Vignite 1.0`}
                description={`

                <section>
                  <p><strong>V-IGNITE</strong> is a nationwide initiative to provide students with a platform to solve pressing problems in our daily lives, fostering a culture of product innovation and problem-solving mindset.</p>
                  <br/>
                  <p>In the fast-paced world of technology, we often strive for solutions to make our lives easier. However, certain real-world issues require attention beyond technological advancements.</p>
                  <br/>
                  <p>To address these real-world problems through technology, we present <strong>V-Ignite</strong>, a hackathon where aspiring computer engineers can showcase their innovative solutions.</p>
                  <br/>
                  <p>Vignan's Institute of Information Technology proudly hosts <strong>V-IGNITE</strong>, inviting developers and hackathon enthusiasts to participate in this engaging event.</p>
                </section>
                <br/>
                
                <section>
                  <h2><strong>Event Details</strong></h2>
                  <br/>
                  <p>Join us in this exciting hackathon to collaborate, innovate, and tackle real-world challenges with technology.</p>
                  <br/>
                  <p>Date and venue details will be announced soon. Stay tuned for updates!</p>
                </section>

                `}
                thumbnail={VIGNITE_1_0}
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
                event_date="Sunday, September 15 2019"
                event_time="10:00 AM - Sep 16, 04:15 PM"
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
                    p20: { Photo20 },
                    p21: { Photo21 },
                    p22: { Photo22 },
                    p23: { Photo23 },
                    p24: { Photo24 },
                    p25: { Photo25 },
                    p26: { Photo26 },
                    p27: { Photo27 },
                    p28: { Photo28 },
                }}
                registration_available={false}
            />
        </main>
    )
}

export default Vignite_1_0