import EventPage from '@/components/EventPage'
import React from 'react'

import IDEATHON_2021 from '../../../../public/asset/img/events/personal_profile_development/personal_profile_development_thumbnail.jpg'
import Photo1 from '../../../../public/asset/img/events/personal_profile_development/personal_profile_development1.jpg'
import Photo2 from '../../../../public/asset/img/events/personal_profile_development/personal_profile_development2.jpg'
import Photo3 from '../../../../public/asset/img/events/personal_profile_development/personal_profile_development3.jpg'
import Photo4 from '../../../../public/asset/img/events/personal_profile_development/personal_profile_development4.jpg'
import Photo5 from '../../../../public/asset/img/events/personal_profile_development/personal_profile_development5.jpg'
import Photo6 from '../../../../public/asset/img/events/personal_profile_development/personal_profile_development6.jpg'
import Photo7 from '../../../../public/asset/img/events/personal_profile_development/personal_profile_development7.jpg'
import Photo8 from '../../../../public/asset/img/events/personal_profile_development/personal_profile_development8.jpg'
import Photo9 from '../../../../public/asset/img/events/personal_profile_development/personal_profile_development9.jpg'
import Photo10 from '../../../../public/asset/img/events/personal_profile_development/personal_profile_development10.jpg'
import Photo11 from '../../../../public/asset/img/events/personal_profile_development/personal_profile_development11.jpg'
import Photo12 from '../../../../public/asset/img/events/personal_profile_development/personal_profile_development12.jpg'

const ProfessionalProfileDevelopment = () => {
    return (
        <main>
            <EventPage
                title={`Professional Profile Development`}
                description={`

                <h2><strong>Professional Profile Development Workshop:</strong></h2>
                <br />
                
                <p>Professional Profile development is an On-Campus workshop conducted by ACM Vignan, wherein our beloved seniors turned into our mentors and provided us with tips and tricks that are really useful for the students' success story.</p>
                <br />
                
                <p>The main motive of the workshop is to mentor the students and let them know how exactly things work in a workplace. The following are the things covered:</p>
                
                <ul>
                <li>• Building your Resume</li>
                <li>• Building your online presence</li>
                <li>• Maintaining your open-source dashboard</li>
                <li>• What's buzzing in tech</li>
                <li>• Dive into the details of acquiring internships</li>
                <li>• Learn about the diverse roles in tech</li>
                </ul>
                <br />
                
                <p>All the major points are clearly mentioned, and students, as well as the mentors, were really happy. Students were satisfied and took all the necessary advice on what the loopholes are and the necessary areas that every student needs to take care of.</p>
                
                `}
                thumbnail={IDEATHON_2021}
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
                event_date="Saturday, March 20 2021"
                event_time="01:30 AM - 04:15 PM"
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
                }}
                registration_available={false}
            />
        </main>
    )
}

export default ProfessionalProfileDevelopment