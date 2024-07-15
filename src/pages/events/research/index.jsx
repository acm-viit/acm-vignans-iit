import EventPage from "@/components/EventPage";
import React from "react";
import IT from "../../../../public/asset/img/events/it/it.jpeg";
import RESEARCH from "../../../../public/asset/img/events/research/research.jpg";




const Research = () => {
  const descriptionHTML = `
       Master the art of effective research communication. This workshop provides a comprehensive guide to crafting impactful research articles. Learn about the essential components of a research paper, including the abstract, introduction, methodology, results, discussion, and conclusion. Gain insights into academic writing style, citation formats, and effective data presentation. Discover strategies for conducting thorough literature reviews and developing strong research arguments. Enhance your ability to communicate complex ideas clearly and concisely to a target audience. By the end of this workshop, you'll be equipped to transform your research findings into compelling scholarly publications.
  `;

  return (
    <main>
      <EventPage
        title={`How to write a research article`}
        thumbnail={RESEARCH}
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
        event_date="March 03, 2022"
        event_time="9:00 AM - 1:00 PM"
        
        
       
        
      />
    </main>
  );
};

export default Research;
