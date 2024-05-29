import EventPage from '@/components/EventPage'
import React from 'react'

import VIGNITE_3_0 from '../../../../public/asset/img/events/vignite_3_0/vignite_3_0_thumbnail.jpg'

const Vignite_3_0 = () => {
    return (
        <main>
            <EventPage
                title={`Vignite 3.0`}
                description={`
                <p>
                    Vignan's IIT ACM Student Chapter is Organizing a Hackathon in association with COMPUTER SOCIETY OF INDIA(CSI) and creating a platform for both faculty and students to practice, share, and adapt their ideologies.
                </p>
                <br/>
                <p>
                The motto of this hackathon is to have effective practices in the teaching and learning process and also innovative practices to enhance it.
                </p>
                <br/>
                <p>
                The event provides a platform to share effective strategies for teaching specific disciplines and promote interaction between faculty of different engineering colleges to build learning communities and undertake joint research.
                </p>
                <br/>
                <p>
                It also encourages the faculty to share innovative and effective practices for enhancing the quality of learning.
                </p>
                <br/>
                <p>
                Hackathons allow you to gain soft skills such as Teamwork, communication, and leadership as we have to work as a team of different innovative minds. And it has been noted to have a positive effect on students' performance and skill perfection.
                </p>
                <br/>
                <p>
                This Hackathon allows the individual to introduce their skills which help to demonstrate their ability to undertake alternative skills which improve their value.
                </p>
                <br/>
                <p>
                And even Hackathon also helps to deliver a competitive spirit among the students which is vital towards establishing the hierarchy.
                </p>
                <br/>
                <p>
                Hackathons are a great way to collaborate with the other developers while building towards a goal. Nevertheless, due to the constant flux of opinions, innovation, and the collaboration of different people from peers to experts in the Hackathon, you can enhance your creativity over time.
                </p>
                <br/>
                <p>
                Sustaining innovation is possible only if those in leadership roles are able to embody the mindset of constant adaptation, curiosity, and resilience, With Hackathon, you're given the freedom to rapidly develop ideas without the constraints of a corporate mindset.
                </p>
                <br/>
                <p>
                Collaborate and be open to working with people and try to learn from this unique experience.
                </p>
                <br/>
                <p>
                And there are many more chances to enrich your skills so, don't miss the opportunities and win the exciting prizes.
                </p>
                <br/>
                <p>
                    Happy coding!!!
                </p>

                `}
                thumbnail={VIGNITE_3_0}
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
                event_date="Sunday, June 30 2022"
                event_time="09:00 AM - Jul 01, 02:00 PM"
                registration={`<b>Registration Fee:</b> 500/- <br> <b>Team Size:</b> 4-5 <br> <b>Last Date for Registration:</b> 20th June 2022`}
                registration_link={`https://tinyurl.com/vignite3hackathon`}
                download_template={{
                    template_name: "Download Idea Template",
                    template_link: "https://docs.google.com/presentation/d/1QalRoPHfSFjs2zPzbklDibuwMhLof7bz/edit?usp=sharing&ouid=114385196504081349636&rtpof=true&sd=true"
                }}
                registration_available={true}
            />
        </main>
    )
}

export default Vignite_3_0