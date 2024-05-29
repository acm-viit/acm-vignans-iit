import EventPage from '@/components/EventPage'
import React from 'react'

import ETHICAL_HACKING from "../../../../public/asset/img/events/ethical_hacking/ethical_hacking_thumbnail.png";
import Photo1 from "../../../../public/asset/img/events/ethical_hacking/ethical-hacking1.jpg";
import Photo2 from "../../../../public/asset/img/events/ethical_hacking/ethical-hacking2.jpg";
import Photo3 from "../../../../public/asset/img/events/ethical_hacking/ethical-hacking3.jpg";
import Photo4 from "../../../../public/asset/img/events/ethical_hacking/ethical-hacking4.jpg";
import Photo5 from "../../../../public/asset/img/events/ethical_hacking/ethical-hacking5.jpg";
import Photo6 from "../../../../public/asset/img/events/ethical_hacking/ethical-hacking6.jpg";
import Photo7 from "../../../../public/asset/img/events/ethical_hacking/ethical-hacking7.jpg";
import Photo8 from "../../../../public/asset/img/events/ethical_hacking/ethical-hacking8.jpg";
import Photo9 from "../../../../public/asset/img/events/ethical_hacking/ethical-hacking9.jpg";
import Photo10 from "../../../../public/asset/img/events/ethical_hacking/ethical-hacking10.jpg";
import Photo11 from "../../../../public/asset/img/events/ethical_hacking/ethical-hacking11.jpg";


const EthicalHacking = () => {
    return (
        <main>
            <EventPage
                title={`Ethical Hacking Session`}
                description={`
                <h2><strong>ACM Student Chapter Vignan's IIT - Ethical Hacking Session:</strong></h2>
                <br/>
                <p>As a part of the ACM student chapter at Vignan's IIT, we organized an Ethical Hacking session on 5th Aug 2019. The session described how Ethical Hackers expose vulnerabilities in software to help business owners fix those security holes before a malicious hacker discovers them. In this free ethical hacking course, participants learned all about Ethical hacking with loads of live hacking examples to make the subject matter clear.</p>

                `}
                thumbnail={ETHICAL_HACKING}
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
                event_date="Monday, August 05 2019"
                event_time="11:00 AM - 04:15 PM"
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
                }}
                registration_available={false}
            />
        </main>
    )
}

export default EthicalHacking