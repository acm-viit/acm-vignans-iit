import EventPage from '@/components/EventPage'
import React from 'react'

import AP_SKILL_WORKSHOP from '../../../../public/asset/img/events/apskill_workshop/apskill_thumbnail.jpg'
import Photo1 from '../../../../public/asset/img/events/apskill_workshop/apskill1.jpg'
import Photo2 from '../../../../public/asset/img/events/apskill_workshop/apskill2.jpg'
import Photo3 from '../../../../public/asset/img/events/apskill_workshop/apskill3.jpg'
import Photo4 from '../../../../public/asset/img/events/apskill_workshop/apskill4.jpg'
import Photo5 from '../../../../public/asset/img/events/apskill_workshop/apskill5.jpg'
import Photo6 from '../../../../public/asset/img/events/apskill_workshop/apskill6.jpg'
import Photo7 from '../../../../public/asset/img/events/apskill_workshop/apskill7.jpg'
import Photo8 from '../../../../public/asset/img/events/apskill_workshop/apskill8.jpg'
import Photo9 from '../../../../public/asset/img/events/apskill_workshop/apskill9.jpg'

const APSkillWorkshop = () => {
  return (
        <main>
            <EventPage
                title={`Android Application Development`}
                description={`
                AP SKILL DEVELOPMENT WORSKHOP on Androoid Application Development and Github
                <br>
                <br>
                In this Workshop, Students learned the basics of building Android apps with the Kotlin programming language. Along the way, thry develop a collection of apps to start there journey as an Android developer. And also learned about Git's core functionality so you can understand how and why it's used in organizations. We'll look into both basic and more advanced features, like branches and merging. We'll demonstrate how having a working knowledge of a VCS like Git can be a lifesaver in emergency situations or when debugging. And then you will explore how to use a VCS to work with others through remote repositories, like the ones provided by GitHub.

                <br>
                <br>
                Students were really satisfied and took all the necessary advice on what are the loopholes and necessary areas that every student needs to take care while development`}
                thumbnail={AP_SKILL_WORKSHOP}
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
                event_date="Saturday, April 09 2021"
                event_time="09:30 AM - Apr 17, 04:15 PM"
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
                }}
                registration_available={false}
            />
        </main>
  )
}

export default APSkillWorkshop