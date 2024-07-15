import EventPage from "@/components/EventPage";
import React from "react";
import IT from "../../../../public/asset/img/events/it/it.jpeg";



const It = () => {
  const descriptionHTML = `
       Unleash the power of information! Our workshop delves into the forefront of information sciences and technology, exploring groundbreaking concepts and applications. From data analytics and artificial intelligence to cybersecurity and digital transformation, you'll gain insights into the latest trends shaping our world. Discover how to harness information to drive innovation, solve complex problems, and create a better future. Whether you're a student, researcher, or industry professional, this workshop will equip you with the knowledge and skills to excel in the digital age.
  `;

  return (
    <main>
      <EventPage
        title={`Advancing information sciences and technology`}
        thumbnail={IT}
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
        event_date="November 14, 2022"
        event_time="9:00 AM - 1:00 PM"
        
        
       
        
      />
    </main>
  );
};

export default It;
