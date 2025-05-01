import React from "react";
import Head from "next/head";
import EventPage from "@/components/EventPage";
import { events } from "@/lib/events";

const EventDetailPage = ({ event }) => {
  const thumbnail = `/asset/img/events/${event.slug}/${event.thumbnail}`;
  const photos = event.photo_gallery?.map(
    (file) => `/asset/img/events/${event.slug}/${file}`
  ) || [];
  return (
    <>
      <Head>
        <title>{`${event.title} | ACM VIIT Events`}</title>
      </Head>
      <main>
        <EventPage
          title={event.title}
          thumbnail={thumbnail}
          description={event.description}
          organizers={event.organizers?.reduce((acc, org, i) => {
            acc[`org${i + 1}`] = org;
            return acc;
          }, {})}
          event_location={event.event_location}
          event_date={event.event_date}
          event_time={event.event_time}
          winners_gallery_title={event.winners_gallery_title}
          winners_gallery={event.winners_gallery}
          profile_cards_title={event.profile_cards_title}
          profile_cards={event.profile_cards}
          photo_gallery={photos}
          registration_available={event.registration_available}
          registration_closed={event.registration_closed}
          registration={event.registration || ""}
          registration_link={event.registration_link || ""}
          download_template={event.download_template || null}
        />
      </main>
    </>
  );
};

export async function getStaticPaths() {
  const paths = events.map((event) => ({
    params: { slug: event.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const event = events.find((e) => e.slug === params.slug);

  if (!event) {
    return {
      notFound: true,
    };
  }

  return {
    props: { event },
  };
}

export default EventDetailPage;
