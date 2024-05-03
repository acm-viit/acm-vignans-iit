import EventPage from "@/components/EventPage";
import React from "react";
import AGRI_HACK from "../../../../public/asset/img/events/agri-hack/agri-hack-thumbnail.jpg";

const AgriHack = () => {
  const descriptionHTML = `
      <b>ROUND 1: Problem Statement Selection</b>
      <br/> 
      <b>Dates:</b> 25th Aug - 8th Sep 2022
      <br/>      
      Teams of 4-5 members can register and submit their ideas on provided problem statements in PDF, Word, or presentation format.
      Results announced by 11th Sep 2022.
      <br/>
      <br/>
      
      <b>ROUND 2: Idea Presentation</b>
      <br/>
      <b>Dates:</b> 9th Sep - 10th Sep 2022
      <br/>
      Selected teams present their solutions, either at Vignan'IIT or online, with prototypes demonstrating their proposed solutions.
      Finalists notified by 12th September 2022.
      <br/>
      <br/>
      
      <b>ROUND 3: FINALS IMPLEMENTATION PHASE</b>
      <br/>
      <b>Dates:</b> 14th Sep - 15th Sep 2022
      <br/>
      Finalist teams refine projects based on feedback and present to judges.
      Judging rounds on September 14th (VISTA day 1) and September 15th (VISTA day 2).
      <br/>
      <br/>
      
      <b>About AGRI-HACK-2022</b>
      <br/>
      AGRI-HACK-2022 aims to foster innovation in agriculture by providing a platform for collaboration and knowledge exchange among engineering faculty. It encourages the sharing of effective teaching methods and the development of soft skills.
      Participation in this hackathon offers individuals the opportunity to showcase their skills, contribute to personal and professional growth, and compete for exciting prizes.
      <br/>
      <br/>
      Join us and embrace innovation at AGRI-HACK-2022!
  `;

  return (
    <main>
      <EventPage
        title={`Agri Hack 2022`}
        thumbnail={AGRI_HACK}
        description={descriptionHTML}
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
        event_date="Saturday, September 1 2022"
        event_time="01:00 PM - 4:00 PM"
        registration={`<b>Registration Fee:</b> 500/- <br> <b>Team Size:</b> 4-5`}
        registration_link={`https://tinyurl.com/agrihack-viit`}
        download_template={{
          template_name: "Download Idea Template",
          template_link: "https://docs.google.com/presentation/d/1rl1AjAGnxCE-UncId925nCV2HJaz3nxd/edit?rtpof=true&sd=true"
        }}
        registration_available={true}
      />
    </main>
  );
};

export default AgriHack;
