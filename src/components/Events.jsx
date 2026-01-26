import Link from "next/link";
import { events } from "@/lib/events";
import { motion } from "framer-motion";
import EventCard from "@/components/EventCard";
import React, { useRef, useState, useEffect } from "react";

const Events = () => {
  const [showControls, setShowControls] = useState(false);
  const carouselRef = useRef(null);

  useEffect(() => {
    if (carouselRef.current) {
      setShowControls(true);
    }
  }, [carouselRef]);

  const handlePrevClick = () => {
    carouselRef.current.scrollBy({
      left: -carouselRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  const handleNextClick = () => {
    carouselRef.current.scrollBy({
      left: carouselRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  return (
    <>
      <section className="container px-28 sm:px-8">
        {/* event card carousel */}
        <div className="relative mt-2">
          <div className="carousel whiskey-cards alignfull" ref={carouselRef}>
            {events.slice(0, 5).map((event, index) => (
              <EventCard
                key={index}
                className={`mr-6 ml-2`}
                link={`/events/${event.slug}`}
                title={event.title}
                featuredImage={`/asset/img/events/${event.slug}/${event.thumbnail}`}
                eventdate={event.event_date}
                description={event.event_description}
              />
            ))}
            <div className="flex items-center justify-center relative flex-shrink-0 sm:w-[20rem] w-[28rem] sm:h-[20rem] h-[25rem] sm:mr-0 mb-16  rounded-lg shadow-[3px_2px_0px_0px_rgba(24,24,24)] dark:shadow-[3px_2px_0px_0px_rgba(255,255,255)] border border-solid border-dark bg-light dark:border-light dark:bg-dark">
              <div className="grid">
                <Link href="/events/"
                  className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                  rel="noopener noreferrer"
                >
                  <h2 className={`mb-3 text-2xl font-semibold`}>
                    More Events{" "}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                      &rarr;
                    </span>
                  </h2>
                  <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                    Experience fun events and make new friends!
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* navigation arrows */}
        <div className="controls flex items-center justify-evenly pb-10 sm:hidden selector-none">
          <motion.button
            className="control-btn prev"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handlePrevClick}
          >
            <span className="text-7xl inline-block transform rotate-180">➤</span>
          </motion.button>

          <motion.button
            className="control-btn next"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleNextClick}
          >
            <span className="text-7xl">➤</span>
          </motion.button>
        </div>
      </section>
    </>
  );
};

export default Events;
