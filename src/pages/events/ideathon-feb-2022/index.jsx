import EventPage from '@/components/EventPage'
import React from 'react'

import IDEATHON_2022 from '../../../../public/asset/img/events/ideathon_feb_2022/ideathon_feb_2022_thumbnail.png'
import Photo1 from '../../../../public/asset/img/events/ideathon_feb_2022/ideathon1.jpg'
import Photo2 from '../../../../public/asset/img/events/ideathon_feb_2022/ideathon2.jpg'
import Photo3 from '../../../../public/asset/img/events/ideathon_feb_2022/ideathon3.jpg'
import Photo4 from '../../../../public/asset/img/events/ideathon_feb_2022/ideathon4.jpg'
import Photo5 from '../../../../public/asset/img/events/ideathon_feb_2022/ideathon5.jpg'
import Photo6 from '../../../../public/asset/img/events/ideathon_feb_2022/ideathon6.jpg'
import Photo7 from '../../../../public/asset/img/events/ideathon_feb_2022/ideathon7.jpg'
import Photo8 from '../../../../public/asset/img/events/ideathon_feb_2022/ideathon8.jpg'
import Photo9 from '../../../../public/asset/img/events/ideathon_feb_2022/ideathon9.jpg'
import Photo10 from '../../../../public/asset/img/events/ideathon_feb_2022/ideathon10.jpg'


const Ideathon2022 = () => {
    return (
        <main>
            <EventPage
                title={`Ideathon Feb 2022`}
                description={`

                <h2><strong>Ideathon - Intensive Brainstorming Event by ACM VIGNAN:</strong></h2>
                <br />
                
                <p>Ideathon is an intensive brainstorming event conducted by ACM VIGNAN on 28th Feb 2022, to give an opportunity to talented minds to generate fresh solutions to existing challenges in the community. This event was open to all 3rd and 4th-year students from all branches, providing them with an opportunity to gain technical experience and knowledge.</p>
                <br />
                
                <p>Participants worked in teams and utilized innovative ideation practices such as design thinking to brainstorm possible solutions in various themes covering all corners of society, which were provided by our team.</p>
                <br />
                
                <p>The themes of the event were:</p>
                
                <ol>
                <li>• Clean and Green Technology</li>
                <li>• Blockchain and Cybersecurity</li>
                <li>• Smart Vehicles</li>
                <li>• Robotics and Drones</li>
                <li>• Renewable/Sustainable Energy</li>
                <li>• Smart Automation</li>
                <li>• Miscellaneous</li>
                </ol>
                <br />
                
                <p>This event provided an excellent platform for students with innovative minds to utilize their talents in an extraordinary and useful way. Students participated enthusiastically and shared their incredible ideas during the event, making it a huge success. We were ecstatic to see such a positive response.</p>
                
                
                `}
                thumbnail={IDEATHON_2022}
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
                event_date="Friday, February 22 2022"
                event_time="10:00 AM - 04:00 PM"
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
                }}
                registration_available={false}
            />
        </main>
    )
}

export default Ideathon2022