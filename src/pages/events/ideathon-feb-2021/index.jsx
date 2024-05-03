import EventPage from '@/components/EventPage'
import React from 'react'

import IDEATHON_2021 from '../../../../public/asset/img/events/ideathon_feb_2021/ideathon_feb_2021_thumbnail.jpg'
import Photo1 from '../../../../public/asset/img/events/ideathon_feb_2021/winner_ideathon_feb_2021.jpg'
import Photo2 from '../../../../public/asset/img/events/ideathon_feb_2021/runner_ideathon_feb_2021.jpg'
import Photo3 from '../../../../public/asset/img/events/ideathon_feb_2021/2nd_runner_ideathon_feb_2021.jpg'
import Photo4 from '../../../../public/asset/img/events/ideathon_feb_2021/ideathon1.jpg'
import Photo5 from '../../../../public/asset/img/events/ideathon_feb_2021/ideathon2.jpg'
import Photo6 from '../../../../public/asset/img/events/ideathon_feb_2021/ideathon3.jpg'
import Photo7 from '../../../../public/asset/img/events/ideathon_feb_2021/ideathon4.jpg'
import Photo8 from '../../../../public/asset/img/events/ideathon_feb_2021/ideathon5.jpg'
import Photo9 from '../../../../public/asset/img/events/ideathon_feb_2021/ideathon6.jpg'
import Photo10 from '../../../../public/asset/img/events/ideathon_feb_2021/ideathon7.jpg'
import Photo11 from '../../../../public/asset/img/events/ideathon_feb_2021/ideathon8.jpg'
import Photo12 from '../../../../public/asset/img/events/ideathon_feb_2021/ideathon9.jpg'
import Photo13 from '../../../../public/asset/img/events/ideathon_feb_2021/ideathon10.jpg'
import Photo14 from '../../../../public/asset/img/events/ideathon_feb_2021/ideathon11.jpg'
import Photo15 from '../../../../public/asset/img/events/ideathon_feb_2021/ideathon12.jpg'
import Photo16 from '../../../../public/asset/img/events/ideathon_feb_2021/ideathon13.jpg'
import Photo17 from '../../../../public/asset/img/events/ideathon_feb_2021/ideathon14.jpg'
import Photo18 from '../../../../public/asset/img/events/ideathon_feb_2021/ideathon15.jpg'
import Photo19 from '../../../../public/asset/img/events/ideathon_feb_2021/ideathon16.jpg'
import Photo20 from '../../../../public/asset/img/events/ideathon_feb_2021/ideathon17.jpg'
import Photo21 from '../../../../public/asset/img/events/ideathon_feb_2021/ideathon18.jpg'
import Photo22 from '../../../../public/asset/img/events/ideathon_feb_2021/ideathon19.jpg'
import Photo23 from '../../../../public/asset/img/events/ideathon_feb_2021/ideathon21.jpg'
import Photo24 from '../../../../public/asset/img/events/ideathon_feb_2021/ideathon22.jpg'
import Photo25 from '../../../../public/asset/img/events/ideathon_feb_2021/ideathon23.jpg'
import Photo26 from '../../../../public/asset/img/events/ideathon_feb_2021/ideathon24.jpg'
import Photo27 from '../../../../public/asset/img/events/ideathon_feb_2021/ideathon25.jpg'
import Photo28 from '../../../../public/asset/img/events/ideathon_feb_2021/ideathon26.jpg'
import Photo29 from '../../../../public/asset/img/events/ideathon_feb_2021/ideathon27.jpg'
import Photo30 from '../../../../public/asset/img/events/ideathon_feb_2021/ideathon28.jpg'

const Ideathon2021 = () => {
    return (
        <main>
            <EventPage
                title={`Ideathon Feb 2021`}
                description={`

                <h2><strong>IDEATHON - Nationwide On-Campus Contest by ACM Vignan:</strong></h2>
                <br />
                
                <p>IDEATHON is a Nationwide On-Campus Contest conducted by ACM Vignan on the 26th and 27th of February 2021. For this event, we invited various company CEOs and officials from around the city to come and grace the event.</p>
                <br />
                
                <p>During Ideathon, students from various branches teamed up together and worked in teams. They used their design thinking and innovative learning practices to ideate and collaborate on possible solutions for the issues that people are facing in the communities.</p>
                <br />
                
                <p>Students were asked numerous questions, and we are incredibly glad to say that the companies who visited us were amazed at the kind of response, enthusiasm, and sportiveness showed by the participants.</p>
                <br />
                
                <p>Companies made sure that they would take up the ideas and promised to give advice to the students and help us whenever needed. Ultimately, the event was a grand success as both the students and the companies were really happy.</p>
                
                `}
                thumbnail={IDEATHON_2021}
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
                event_date="Friday, February 26 2021"
                event_time="01:30 AM - 02:30 PM"
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
                    p29: { Photo29 },
                    p30: { Photo30 },
                }}
                registration_available={false}
            />
        </main>
    )
}

export default Ideathon2021