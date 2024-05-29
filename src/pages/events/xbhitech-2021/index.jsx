import EventPage from '@/components/EventPage'
import React from 'react'

import XBHITECH_2021 from '../../../../public/asset/img/events/xbhitech_2021/xbhitech_2021_thumbnail.png'
import Profile1 from '../../../../public/asset/img/events/xbhitech_2021/Ch Chandra Sekhar.png'
import Profile2 from '../../../../public/asset/img/events/xbhitech_2021/K Kiranss.png'
import Profile3 from '../../../../public/asset/img/events/xbhitech_2021/K Phani Santhosh.png'
import Profile4 from '../../../../public/asset/img/events/xbhitech_2021/K Kranti Kumarss.png'
import Profile5 from '../../../../public/asset/img/events/xbhitech_2021/B.K.Mani Harsha.png'
import Profile6 from '../../../../public/asset/img/events/xbhitech_2021/Ch Bhardwajss.png'
import Profile7 from '../../../../public/asset/img/events/xbhitech_2021/M Bhargavu.png'
import Profile8 from '../../../../public/asset/img/events/xbhitech_2021/Dwijesh Kumar.png'
import Profile9 from '../../../../public/asset/img/events/xbhitech_2021/Ch Vasuss.png'
import Profile10 from '../../../../public/asset/img/events/xbhitech_2021/Ch Viswanath.png'
import Profile11 from '../../../../public/asset/img/events/xbhitech_2021/T Akhilss.png'
import Profile12 from '../../../../public/asset/img/events/xbhitech_2021/V G Karthik.png'
import Profile13 from '../../../../public/asset/img/events/xbhitech_2021/P Vamsi Varunnss.png'
import Profile14 from '../../../../public/asset/img/events/xbhitech_2021/Divya P.png'
import Photo1 from '../../../../public/asset/img/events/xbhitech_2021/xbhitech_2021_1.jpg'
import Photo2 from '../../../../public/asset/img/events/xbhitech_2021/xbhitech_2021_2.jpg'
import Photo3 from '../../../../public/asset/img/events/xbhitech_2021/xbhitech_2021_3.jpg'
import Photo4 from '../../../../public/asset/img/events/xbhitech_2021/xbhitech_2021_4.jpg'
import Photo5 from '../../../../public/asset/img/events/xbhitech_2021/xbhitech_2021_5.jpg'
import Photo6 from '../../../../public/asset/img/events/xbhitech_2021/xbhitech_2021_6.jpg'
import Photo7 from '../../../../public/asset/img/events/xbhitech_2021/xbhitech_2021_7.jpg'
import Photo8 from '../../../../public/asset/img/events/xbhitech_2021/xbhitech_2021_8.jpg'
import Photo9 from '../../../../public/asset/img/events/xbhitech_2021/xbhitech_2021_9.jpg'


const Xbhitech2021 = () => {
    return (
        <main>
            <EventPage
                title={`Xbhitech 2021`}
                description={`

                <h1>XHIBITECH 2021: Three-Day Tech Carnival</h1>
                <br/>
                
                <section>
                <p><strong>XHIBITECH 2021</strong>, conducted by Vignan’s IIT ACM, is a Three-day Tech Carnival where candidates showcase their projects, including <strong>mini-projects</strong> and <strong>individual projects</strong>, that they have worked on so far.</p>
                <p>Approximately <strong>89 teams</strong>, each comprising <strong>3-4 members</strong>, participated in the carnival to showcase their projects.</p>
                <br/>
                  <p>Each team was evaluated by a panel of judges consisting of employees from various companies, startups, and IT departments.</p>
                  <p>The <strong>best-performing teams</strong> were awarded a <strong>cash prize of 5000/-</strong>, while all remaining teams received <strong>appreciation certificates</strong> from Vignan's IIT ACM.</p>
                  <p>Many students seized the opportunity to demonstrate their skills and proved their capability in a workplace setting. The <strong>top-performing teams</strong> were even offered <strong>internships</strong>.</p>
                  <p>In conclusion, candidates gained insights into their <strong>strengths and weaknesses</strong>, addressed them, and pledged to work even harder in the future.</p>
                </section>

                `}
                thumbnail={XBHITECH_2021}
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
                event_date="Saturday, September 14 2021"
                event_time="09:00 AM - Sep 15, 02:00 PM"
                profile_cards_title="Xhibitech Panel Team"
                profile_cards={{
                    profile1: {
                        name: "Mr.Ch Chandra Sekhar",
                        role: "Assoc .Professor <br/> AITAM, Tekkali",
                        href: "#",
                        profilePic: Profile1,
                    },
                    profile2: {
                        name: "Mr.M Kiran",
                        role: "Lead Software <br/> Infor",
                        href: "#",
                        profilePic: Profile2,
                    },
                    profile3: {
                        name: "Mr.K Phani Santhosh (2014)",
                        role: " Cloud Engineer <br/> Microsoft",
                        href: "#",
                        profilePic: Profile3,
                    },
                    profile4: {
                        name: "Mr.K Kranti Kumar (2015)",
                        role: "CEO <br/> Gethuf",
                        href: "#",
                        profilePic: Profile4,
                    },
                    profile5: {
                        name: "Mr.B.K.Mani Harsha (2016)",
                        role: "Network SE II <br/> Progress Software",
                        href: "#",
                        profilePic: Profile5,
                    },
                    profile6: {
                        name: "Mr.Ch Bhardwaj (2016)",
                        role: "Data Analysist <br/> TechMahidra",
                        href: "#",
                        profilePic: Profile6,
                    },
                    profile7: {
                        name: "Mr.M Bhargavu (2017)",
                        role: "Consultant <br/> Highradius",
                        href: "#",
                        profilePic: Profile7,
                    },
                    profile8: {
                        name: "Mr.Dwijesh Kumar (2018)",
                        role: "SDE <br/> Western Digital",
                        href: "#",
                        profilePic: Profile8,
                    },
                    profile9: {
                        name: "Mr.Ch Vasu (2018)",
                        role: "Masters in Automotive <br/> Software Engineering",
                        href: "#",
                        profilePic: Profile9,
                    },
                    profile10: {
                        name: "Mr.Ch Viswanath (2018)",
                        role: "Full Stack Developer <br/> Accquire.io",
                        href: "#",
                        profilePic: Profile10,
                    },
                    profile11: {
                        name: "Mr.T Akhil (2018)",
                        role: "Software Engineer <br/> Infor",
                        href: "#",
                        profilePic: Profile11,
                    },
                    profile12: {
                        name: "Mr.V G Karthik (2019)",
                        role: "SDE <br/> AMAZON, Hyd",
                        href: "#",
                        profilePic: Profile12,
                    },
                    profile13: {
                        name: "Mr.P Vamsi Varun (2019)",
                        role: "Data Engineer <br/> Fractal Analytic",
                        href: "#",
                        profilePic: Profile13,
                    },
                    profile14: {
                        name: "Ms.Divya P (2020)",
                        role: "Quality Analyst <br/> Thoughtworks",
                        href: "#",
                        profilePic: Profile14,
                    },
                }}
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

export default Xbhitech2021