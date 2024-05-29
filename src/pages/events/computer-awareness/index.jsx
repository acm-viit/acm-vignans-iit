import EventPage from '@/components/EventPage'
import React from 'react'

import COMPUTER_AWARENESS from '../../../../public/asset/img/events/computer_awareness/computer_awareness_thumbnail.jpg'
import Photo1 from '../../../../public/asset/img/events/computer_awareness/computer_awareness1.jpg'
import Photo2 from '../../../../public/asset/img/events/computer_awareness/computer_awareness2.jpg'
import Photo3 from '../../../../public/asset/img/events/computer_awareness/computer_awareness3.jpg'
import Photo4 from '../../../../public/asset/img/events/computer_awareness/computer_awareness4.jpg'
import Photo5 from '../../../../public/asset/img/events/computer_awareness/computer_awareness5.jpg'
import Photo6 from '../../../../public/asset/img/events/computer_awareness/computer_awareness6.jpg'
import Photo7 from '../../../../public/asset/img/events/computer_awareness/computer_awareness7.jpg'
import Photo8 from '../../../../public/asset/img/events/computer_awareness/computer_awareness8.jpg'
import Photo9 from '../../../../public/asset/img/events/computer_awareness/computer_awareness9.jpg'
import Photo10 from '../../../../public/asset/img/events/computer_awareness/computer_awareness10.jpg'
import Photo11 from '../../../../public/asset/img/events/computer_awareness/computer_awareness11.jpg'
import Photo12 from '../../../../public/asset/img/events/computer_awareness/computer_awareness12.jpg'
import Photo13 from '../../../../public/asset/img/events/computer_awareness/computer_awareness13.jpg'
import Photo14 from '../../../../public/asset/img/events/computer_awareness/computer_awareness14.jpg'
import Photo15 from '../../../../public/asset/img/events/computer_awareness/computer_awareness15.jpg'
import Photo16 from '../../../../public/asset/img/events/computer_awareness/computer_awareness16.jpg'
import Photo17 from '../../../../public/asset/img/events/computer_awareness/computer_awareness17.jpg'
import Photo18 from '../../../../public/asset/img/events/computer_awareness/computer_awareness18.jpg'

const ComputerAwareness = () => {
    return (
        <main>
            <EventPage
                title={`Computer Science Awareness Program`}
                description={`
                <p>Developing a constructive school environment is critical to any school these days. Equipping students with technical skills to adapt to real-world technologies not only motivates them but also instills confidence and the ability to compete in today's world.</p>
                <p><strong>ACM VIIT</strong> took the initiative to nurture the students of <strong>ZPH High School Kanithi, Vadlapudi</strong> by teaching them fundamental topics such as Basics of Computers, Types of Computers, Applications of Computers, Outline of OS, and RTOS.</p>
                <p>The enthusiastic response from the students during the initial session on <strong>7th February</strong> was truly inspiring. This prompted us to continue teaching them every Saturday since then. To further enhance their interest, we rewarded students with small gifts for providing the best answers to questions and problems posed during the sessions.</p>
                <p>This event has reinforced our commitment to building a better future for India by empowering young minds with essential technical knowledge.</p>

                `}
                thumbnail={COMPUTER_AWARENESS}
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
                event_date="Sunday, February 07 2021"
                event_time="10:00 AM - Currently in Process, "
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
                }}
                registration_available={false}
            />
        </main>
    )
}

export default ComputerAwareness