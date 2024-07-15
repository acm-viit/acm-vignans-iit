import EventPage from "@/components/EventPage";
import React from "react";
import DSAIMG from "../../../../public/asset/img/events/dsa/dsa.png";
import NETWORKING from "../../../../public/asset/img/events/networking/cn.jpeg";



const Networking = () => {
  const descriptionHTML = `
        Dive deep into the heart of computer networks! Our workshop is designed to equip you with a solid foundation in network fundamentals, from the physical layer to the application layer. Explore network topologies, transmission media, network devices, and protocols. Gain hands-on experience with network configuration and troubleshooting. Understand the principles of routing, switching, and network security. By the end of this workshop, you'll have a comprehensive understanding of how networks operate and be well-prepared to tackle complex networking challenges.
  `;

  return (
    <main>
      <EventPage
        title={`Networking Essentials`}
        thumbnail={NETWORKING}
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
        event_date="July 20, 2022"
        event_time="9:00 AM - 1:00 PM"
        
        
       
        
      />
    </main>
  );
};

export default Networking;
