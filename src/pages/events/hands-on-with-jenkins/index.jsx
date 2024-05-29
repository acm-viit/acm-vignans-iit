import EventPage from '@/components/EventPage'
import React from 'react'

import HANDS_ON_WITH_JENKINS from '../../../../public/asset/img/events/hands_on_with_jenkins/hands_on_with_jenkins_thumbnail.png'


const HandsOnWithJenkins = () => {
    return (
        <main>
            <EventPage
                title={`Hands On With Jenkins`}
                description={`

                <p>The leading open-source automation server, Jenkins provides hundreds of plugins to support building, deploying, and automating any project. Jenkins is an open-source automation server that helps automate the parts of software development related to building, testing, and deploying, facilitating continuous integration and continuous delivery. It is a server-based system that runs in servlet containers such as Apache Tomcat. Jenkins supports version control tools, including AccuRev, CVS, Subversion, Git, Mercurial, Perforce, ClearCase, and RTC, and can execute Apache Ant, Apache Maven, and sbt-based projects as well as arbitrary shell scripts and Windows batch commands.</p>
                <br />
                
                <p>Jenkins is written entirely in Java. It lets you execute a series of actions to achieve the continuous integration process, that too in an automated fashion.</p>
                <br />
                
                <p>This CI server runs in servlet containers such as Apache Tomcat. Jenkins facilitates continuous integration and continuous delivery in software projects by automating parts related to build, test, and deployment. This makes it easy for developers to continuously work on the betterment of the product by integrating changes to the project.</p>
                <br />
                
                <p>Jenkins automates the software builds in a continuous manner and lets the developers know about the errors at an early stage. A strong Jenkins community is one of the prime reasons for its popularity. Jenkins is not only extensible but also has a thriving plugin ecosystem.</p>
                <br />
                
                <p>Some of the possible steps that can be performed using Jenkins are:</p>
                
                <ul>
                <li>• Software build using build systems such as Gradle, Maven, and more.</li>
                <li>• Automation testing using test frameworks such as Nose2, PyTest, Robot, Selenium, and more.</li>
                <li>• Execute test scripts (using Windows terminal, Linux shell, etc).</li>
                <li>• Achieve test results and perform post actions such as printing test reports, and more.</li>
                <li>• Execute test scenarios against different input combinations for obtaining improved test coverage.</li>
                <li>• Continuous Integration (CI) where the artifacts are automatically created and tested. This aids in the identification of issues in the product at an early stage of development.</li>
                </ul>
                <br />
                
                <p>At the time of what is Jenkins blog, it had close to 1500+ plugins contributed by the community. Plugins help in customizing the experience with Jenkins, along with providing support for accelerating activities related to building, deploying, and automating a project.</p>
                <br />
                
                <p>Jenkins is a community-driven project. We invite everyone to join the workshop and move it forward.</p>
                
                
                `}
                thumbnail={HANDS_ON_WITH_JENKINS}
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
                event_date="Thursday, December 06 2021"
                event_time="06:30 PM - 08:00 PM"
                registration_available={false}
            />
        </main>
    )
}

export default HandsOnWithJenkins