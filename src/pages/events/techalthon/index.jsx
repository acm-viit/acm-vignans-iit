import EventPage from '@/components/EventPage'
import React from 'react'

import TECHALTHON from '../../../../public/asset/img/events/techalthon/techalthon_thumbnail.png'
import Photo1 from '../../../../public/asset/img/events/techalthon/1stwinner.png'
import Photo2 from '../../../../public/asset/img/events/techalthon/2ndwinner.png'
import Photo3 from '../../../../public/asset/img/events/techalthon/3rdwinner.png'
import Photo4 from '../../../../public/asset/img/events/techalthon/4thwinner.png'
import Photo5 from '../../../../public/asset/img/events/techalthon/5thwinner.png'
import Photo6 from '../../../../public/asset/img/events/techalthon/6thwinner.png'
import Photo7 from '../../../../public/asset/img/events/techalthon/7thwinner.png'
import Photo8 from '../../../../public/asset/img/events/techalthon/8thwinner.png'
import Photo9 from '../../../../public/asset/img/events/techalthon/9thwinner.png'
import Photo10 from '../../../../public/asset/img/events/techalthon/10thwinner.png'

const Techalthon = () => {
    return (
        <main>
            <EventPage
                title={`Techalthon`}
                description={`

                <h1>TECHATHLON: Technical Quiz</h1>
                <br/>

                <section>
                  <p><strong>TECHATHLON</strong> is a technical quiz conducted by Vignan's IIT ACM student chapter, with participation from students across all years and various departments within the Vignan group.</p>
                  <p>Over <strong>80%</strong> of the event participants are female students, demonstrating the increasing involvement of girls in the tech industry.</p>
                  <p>As a gesture of appreciation to the participants, <strong>Vignan's IITACM</strong> provided <strong>7 tech-related UDEMY courses</strong> free of charge, enabling them to accelerate their growth in the tech field.</p>
                </section>

                `}
                thumbnail={TECHALTHON}
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
                event_date="Wednesday, June 30 2021"
                event_time="01:30 AM - 04:15 PM"
                profile_cards_title = "Top 10 Winners"
                profile_cards={{
                    profile1: {
                        name: "GNANA PADMINI",
                        role: "1st Position (80 points) <br/> VIGNAN'S NIRULA",
                        href: "#",
                        profilePic: Photo1,
                    },
                    profile2: {
                        name: "BUNGA HARSHINI",
                        role: "2nd Position (80 points) <br/> VIGNAN'S IIT-VIZAG",
                        href: "#",
                        profilePic: Photo2,
                    },
                    profile3: {
                        name: "SAI TANMAI BUSI",
                        role: "3rd Position (80 points) <br/> VIGNAN'S NIRULA",
                        href: "#",
                        profilePic: Photo3,
                    },
                    profile4: {
                        name: "ARSHI AATIKA SHAIK",
                        role: "4th Position (80 points) <br/> VIGNAN'S NIRULA",
                        href: "#",
                        profilePic: Photo4,
                    },
                    profile5: {
                        name: "A V V HARSHITHA",
                        role: "5th Position (80 points) <br/> VIGNAN'S NIRULA",
                        href: "#",
                        profilePic: Photo5,
                    },
                    profile6: {
                        name: "KINTALI LALITHA",
                        role: "6th Position (80 points) <br/> VIGNAN'S IIT-VIZAG",
                        href: "#",
                        profilePic: Photo6,
                    },
                    profile7: {
                        name: "B S L MANNVITHA",
                        role: "7th Position (80 points) <br/> VIGNAN'S NIRULA",
                        href: "#",
                        profilePic: Photo7,
                    },
                    profile8: {
                        name: "BYSANI BHARGAVI",
                        role: "8th Position (80 points) <br/> VIGNAN'S NIRULA",
                        href: "#",
                        profilePic: Photo8,
                    },
                    profile9: {
                        name: "POLEPALLI VENKATANAGA",
                        role: "9th Position (80 points) <br/> VIGNAN'S NIRULA",
                        href: "#",
                        profilePic: Photo9,
                    },
                    profile10: {
                        name: "G L SRAVANI",
                        role: "10th Position (75 points) <br/> VIGNAN'S NIRULA",
                        href: "#",
                        profilePic: Photo10,
                    },
                }}
                registration_available={false}
            />
        </main>
    )
}

export default Techalthon