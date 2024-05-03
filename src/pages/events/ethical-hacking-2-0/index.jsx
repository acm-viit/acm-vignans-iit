import EventPage from '@/components/EventPage'
import React from 'react'

import ETHICAL_HACKING_2 from "../../../../public/asset/img/events/ethical_hacking_2_0/ethical_hacking_2_0_thumbnail.png";
import Photo1 from "../../../../public/asset/img/events/ethical_hacking_2_0/ethical_hacking_2_0_1.jpg";
import Photo2 from "../../../../public/asset/img/events/ethical_hacking_2_0/ethical_hacking_2_0_2.png";
import Photo3 from "../../../../public/asset/img/events/ethical_hacking_2_0/ethical_hacking_2_0_3.png";
import Photo4 from "../../../../public/asset/img/events/ethical_hacking_2_0/ethical_hacking_2_0_4.png";

const EthicalHacking2 = () => {
    return (
        <main>
            <EventPage
                title={`Ethical Hacking 2.0`}
                description={`
                <h2><strong>Ethical Hacking 2.0 Workshop:</strong></h2>
                <br/>

                <p>Ethical Hacking 2.0 is a workshop conducted by Vignan's IIT, mentored by Lakshmi Narayana Degala, a Top 300 rank hacker on Intigriti.</p>
                <br/>

                <p>To be precise, Intigriti is Europe's #1 ethical hacking and bug bounty platform which works with teams of every size, shape, and industry to secure their digital assets, protect confidential information and customer data, and strengthen their responsible disclosure process. Working together on one target during a hacking event is great because everyone has their way of approaching the target and you can learn a lot!</p>
                <br/>

                <p>Students were tutored from the basics of securities till the end with practical knowledge. A good quality demonstration was provided to the students by the mentor on how things work in securities.</p>
                <br/>
                <p>The topic involves ETHICAL HACKING with edge computing than ever before. This lecture covered the details of these concepts:</p>

                <ul>
                    <li><strong>• Cross-site scripting</strong></li>
                    <li><strong>• Brute forcing in panels and Parameters</strong></li>
                    <li><strong>• Subdomains and directories</strong></li>
                    <li><strong>• Open Redirects</strong></li>
                    <li><strong>• Subdomain Takeovers & Reconnaissance</strong></li>
                </ul>
                `}
                thumbnail={ETHICAL_HACKING_2}
                organizers={{
                    org1: {
                        name: "Lakshmi Narayana Degala",
                        link: "https://app.intigriti.com/profile/0xdln",
                    },
                }}
                event_location={{
                    location: "Vignan's Institute Of Information Technology",
                    city: "Visakhapatnam, Andhra Pradesh",
                    link: "https://www.google.com/maps/search/?api=1&query=Vignan%27s%20Institute%20Of%20Information%20Technology&query_place_id=ChIJh4CLQstoOToRZWqDQ4wZPqo",
                }}
                event_date="Sunday, June 06 2021"
                event_time="06:00 PM - 07:30 PM"
                photo_gallary={{
                    p1: { Photo1 },
                    p2: { Photo2 },
                    p3: { Photo3 },
                    p4: { Photo4 },
                }}
                registration_available={false}
            />
        </main>
    )
}

export default EthicalHacking2