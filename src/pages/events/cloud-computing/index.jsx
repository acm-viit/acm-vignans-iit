import EventPage from '@/components/EventPage'
import React from 'react'

import CLOUD_COMPUTING from '../../../../public/asset/img/events/cloud_computing/cloud_computing_thumbnail.jpg'
import Photo1 from '../../../../public/asset/img/events/cloud_computing/cloud_computing1.jpg'
import Photo2 from '../../../../public/asset/img/events/cloud_computing/cloud_computing2.jpg'
import Photo3 from '../../../../public/asset/img/events/cloud_computing/cloud_computing3.jpg'
import Photo4 from '../../../../public/asset/img/events/cloud_computing/cloud_computing4.jpeg'
import Photo5 from '../../../../public/asset/img/events/cloud_computing/cloud_computing5.jpg'
import Photo6 from '../../../../public/asset/img/events/cloud_computing/cloud_computing6.jpg'
import Photo7 from '../../../../public/asset/img/events/cloud_computing/cloud_computing7.jpg'
import Photo8 from '../../../../public/asset/img/events/cloud_computing/cloud_computing8.jpg'
import Photo9 from '../../../../public/asset/img/events/cloud_computing/cloud_computing9.jpg'
import Photo10 from '../../../../public/asset/img/events/cloud_computing/cloud_computing10.jpg'
import Photo11 from '../../../../public/asset/img/events/cloud_computing/cloud_computing11.jpg'
import Photo12 from '../../../../public/asset/img/events/cloud_computing/cloud_computing12.jpg'
import Photo13 from '../../../../public/asset/img/events/cloud_computing/cloud_computing13.jpg'
import Photo14 from '../../../../public/asset/img/events/cloud_computing/cloud_computing14.jpg'

const CloudComputing = () => {
    return (
        <main>
            <EventPage
                title={`Android Application Development`}
                description={`
                As a part of the ACM student chapter Vignan's IIT, We organized an event on Cloud Support, The key speaker for this event is LAKSHMI PRASANNA AKKENA who is a highly expert IT professional with more than 15 years of experience in Cloud Technology and E-Business Suite Applications. He presented the required information on Cloud Technologies with in-side information on the leading companies and their relational dependencies along with the cloud technologies. He explained in detailed the work with profound insights about its building, and deployment. He explained some topics by having an interactive session with the attendees on cloud infrastructure in the current world scenario with the advantages of cloud in various companies working on cloud, specialization on the cloud, and suggested the free resources available to work with the cloud as a student.
                `}
                thumbnail={CLOUD_COMPUTING}
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
                event_date="Thursday, January 07 2021"
                event_time="10:00 AM - 12:00 PM"
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
                }}
                registration_available={false}
            />
        </main>
    )
}

export default CloudComputing