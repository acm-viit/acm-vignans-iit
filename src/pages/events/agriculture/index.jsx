import EventPage from "@/components/EventPage";
import React from "react";
import DSAIMG from "../../../../public/asset/img/events/dsa/dsa.png";
import AGRICULTURE from "../../../../public/asset/img/events/agriculture/precision.jpg";



const Agriculture = () => {
  const descriptionHTML = `
        Revolutionize farming with data-driven insights! Our Precision Agriculture Essentials workshop will introduce you to the cutting-edge technologies transforming the agricultural landscape. Learn how to harness the power of GPS, remote sensing, and IoT devices to optimize crop management, increase yields, and minimize environmental impact. Explore soil mapping, variable rate application, yield monitoring, and farm management software. Gain practical knowledge of data analysis and decision-making for sustainable and profitable agriculture.
  `;

  return (
    <main>
      <EventPage
        title={`Precision Agriculture`}
        thumbnail={AGRICULTURE}
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

export default Agriculture;
