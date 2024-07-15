import EventPage from "@/components/EventPage";
import React from "react";
import AGRI_HACK from "../../../../public/asset/img/events/agri-hack/agri-hack-thumbnail.jpg";
import LANGCHAIN from "../../../../public/asset/img/events/langchain/langchain.jpg";

const LangChain = () => {
  const descriptionHTML = `
      🌟 Exciting News! 🌟
Join us for the Grand Inauguration of our ACM Student Chapter at Vignan's Institute of Information Technology! 🎉



We're excited to announce that our event will feature Sampath Balivada as both a guest speaker and the facilitator of a dedicated session on LangChains in AI. Additionally, we're honored to have Surya join us as a distinguished guest speaker. It promises to be a well-rounded exploration of the fascinating intersection between language and artificial intelligence. 🌐

You will examine how language-based methods are influencing artificial intelligence in different ways. 

Get ready for an inspiring journey into the world of computer science, tech talks, workshops, and more. 🖥️🚀

Don't miss out on this unique insight! 🌟

Let's kickstart this amazing adventure together! See you there!
  `;

  return (
    <main>
      <EventPage
        title={`Getting started with Langchain`}
        thumbnail={LANGCHAIN}
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
        event_date="November 10 2023"
        event_time="9:00 AM - 1:00 PM"
        
        
       
        
      />
    </main>
  );
};

export default LangChain;
