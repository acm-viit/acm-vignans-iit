import EventPage from "@/components/EventPage";
import React from "react";
import IT from "../../../../public/asset/img/events/it/it.jpeg";
import FINANCE from "../../../../public/asset/img/events/finance/finance.jpg";




const Finance = () => {
  const descriptionHTML = `
       Building a just and inclusive digital financial ecosystem. Our workshop explores the critical issues surrounding fair digital finance. We will delve into topics such as financial inclusion, consumer protection, data privacy, and algorithmic bias. Participants will gain a deep understanding of the challenges and opportunities in creating a digital financial landscape that benefits everyone. Through case studies and discussions, we will explore strategies to promote financial well-being, protect vulnerable consumers, and foster responsible innovation in the digital finance space.
  `;

  return (
    <main>
      <EventPage
        title={`Fair digital finance`}
        thumbnail={FINANCE}
        description={descriptionHTML}
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
        event_date="March 15, 2022"
        event_time="9:00 AM - 1:00 PM"
        
        
       
        
      />
    </main>
  );
};

export default Finance;
