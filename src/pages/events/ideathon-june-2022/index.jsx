import EventPage from '@/components/EventPage'
import React from 'react'

import IDEATHON_2022 from '../../../../public/asset/img/events/ideathon_june_2022/ideathon_june_2022_thumbnail.jpg'

const Ideathon2022 = () => {
    return (
        <main>
            <EventPage
                title={`Ideathon June 2022`}
                description={`

                <h2><strong>Ideathon - Intensive Brainstorming Event by ACM VIGNAN:</strong></h2>
                <br />
                
                <p>Ideathon is an intensive brainstorming event conducted by ACM VIGNAN on 28th june 2022, to give an opportunity to talented minds to generate fresh solutions to existing challenges in the community. This event was open to all 3rd and 4th-year students from all branches, providing them with an opportunity to gain technical experience and knowledge.</p>
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
                        name: "CSE Department",
                        link: "/team/dept-of-cse",
                        profile: "vignan_logo.png",
                    },
                }}
                registration={`<b>Registration Fee:</b> 100/- <br> <b>Team Size:</b> 2-3 <br/> Only for 1st B.Tech Students`}
                registration_link={`https://tinyurl.com/vignaniitideathon`}
                event_location={{
                    location: "Vignan's Institute Of Information Technology",
                    city: "Visakhapatnam, Andhra Pradesh",
                    link: "https://www.google.com/maps/search/?api=1&query=Vignan%27s%20Institute%20Of%20Information%20Technology&query_place_id=ChIJh4CLQstoOToRZWqDQ4wZPqo",
                }}
                event_date="Friday, June 30 2022"
                event_time="10:00 AM - JUL 01, 04:00 PM"
                registration_available={true}
            />
        </main>
    )
}

export default Ideathon2022