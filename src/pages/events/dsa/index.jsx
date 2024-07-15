import EventPage from "@/components/EventPage";
import React from "react";
import DSAIMG from "../../../../public/asset/img/events/dsa/dsa.png";


const DSA = () => {
  const descriptionHTML = `
        Unleash your coding potential with our comprehensive 'Roadmap to DSA' session! This in-depth exploration will equip you with the essential tools and knowledge to conquer the world of data structures and algorithms. From foundational concepts to advanced problem-solving techniques, our expert-led session will guide you through a structured learning path. Whether you're a beginner or looking to enhance your skills, this workshop is your gateway to acing coding interviews and building robust software solutions.
  `;

  return (
    <main>
      <EventPage
        title={`Roadmap to DSA`}
        thumbnail={DSAIMG}
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
        event_date="March 20 2024"
        event_time="9:00 AM - 1:00 PM"
        
        
       
        
      />
    </main>
  );
};

export default DSA;
