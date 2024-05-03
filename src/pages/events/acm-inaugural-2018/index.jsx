// 'use client';

import EventPage from "@/components/EventPage";
import React from "react";
import ACM_INAUGURAL from "../../../../public/asset/img/events/acm_inaugural/acm_inaugural_thumbnail.jpg";
import Photo1 from "../../../../public/asset/img/events/acm_inaugural/acm_inaugural1.jpg";
import Photo2 from "../../../../public/asset/img/events/acm_inaugural/acm_inaugural2.jpg";
import Photo3 from "../../../../public/asset/img/events/acm_inaugural/acm_inaugural3.jpg";
import Photo4 from "../../../../public/asset/img/events/acm_inaugural/acm_inaugural4.jpg";
import Photo5 from "../../../../public/asset/img/events/acm_inaugural/acm_inaugural5.jpg";
import Photo6 from "../../../../public/asset/img/events/acm_inaugural/acm_inaugural6.jpg";
import Photo7 from "../../../../public/asset/img/events/acm_inaugural/acm_inaugural7.jpg";
import Photo8 from "../../../../public/asset/img/events/acm_inaugural/acm_inaugural8.jpg";
import Photo9 from "../../../../public/asset/img/events/acm_inaugural/acm_inaugural9.jpg";
import Photo10 from "../../../../public/asset/img/events/acm_inaugural/acm_inaugural10.jpg";
import Photo11 from "../../../../public/asset/img/events/acm_inaugural/acm_inaugural11.jpg";
import Photo12 from "../../../../public/asset/img/events/acm_inaugural/acm_inaugural12.jpg";
import Photo13 from "../../../../public/asset/img/events/acm_inaugural/acm_inaugural13.jpg";
import Photo14 from "../../../../public/asset/img/events/acm_inaugural/acm_inaugural14.jpg";
import Photo15 from "../../../../public/asset/img/events/acm_inaugural/acm_inaugural15.jpg";

const AcmInaugural2018 = () => {
    return (
        <main>
            <EventPage
                title={`ACM Inagural 2018`}
                description={`Vignan's IIT ACM Student Chapter has been inaugurated on 1st Sep 2018, Vision is to focus on various technical and cultural fields with the main goal of enriching the student's career and driving it forward through conferences and student development events and committees all the while maintaining the highest professional and ethical standards.`}
                thumbnail={ACM_INAUGURAL}
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
                event_date="Saturday, April 27 2018"
                event_time="11:00 AM - Apr 28, 11:00 AM"
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
                }}
                registration_available={false}
            />
        </main>
    );
};

export default AcmInaugural2018;
