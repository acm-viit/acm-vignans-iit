import EventPage from '@/components/EventPage'
import React from 'react'

import GITHUB_WORKSHOP from "../../../../public/asset/img/events/github_workshop/github_workshop_thumbnail.png";

const GithubWorkshop = () => {
    return (
        <main>
            <EventPage
                title={`Github Workshop`}
                description={`
                <h2><strong>Workshop on GitHub and LinkedIn Profile Building:</strong></h2>
                <br />

                <p>Vignan's IIT ACM student chapter is organizing a Workshop on GitHub and a comprehensive guide to common LinkedIn profile building questions.</p>
                <br />
                
                <p>Well, you might have heard the word GitHub in your tech space or even stumbled across a GitHub repository while learning about software or web development. Still, GitHub can seem perplexing if you've never used it. Is it a cloud storage site? A social networking site for programmers? A code-sharing site? As it turns out, the answer to all of these is yes, and more.</p>
                <br />
                
                <p>Today, GitHub is one of the most popular resources for developers to share code and work on projects together. It's free, easy to use, and has become central in the movement toward open-source software. If this all sounds like something you should know then don't miss our event on 23rd April, 2022. We'll explain what GitHub is, why it's popular, how to get started, and, perhaps most importantly, what "Git" actually means.</p>
                <br />
                
                <p>Adding to it, we will give suggestions to craft the perfect LinkedIn profile which attracts the hiring team and makes you fly with high colors.</p>
                <br />
                
                <p>Happy coding!!!</p>
                
                `}
                thumbnail={GITHUB_WORKSHOP}
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
                event_date="Saturday, April 23 2022"
                event_time="09:30 AM - Apr 25, 03:30 PM"

                registration_available={false}
            />
        </main>
    )
}

export default GithubWorkshop