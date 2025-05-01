import Head from "next/head";
import Link from "next/link";
import Layout from "./Layout";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from 'next/router';
import ImageModal from "@/components/ImageModal";
import SimpleProfileCard from "./SimpleProfileCard";

// Event Calander with month and date
const Calander = ({ month = "", date = "" }) => {
  return (
    <div className="w-10">
      <div className="flex flex-col items-center justify-center border-[0.1px] border-solid border-[#e8e8e8] dark:border-[#363636] text-[#6b6b6b] dark:text-[#d3d3d3] rounded-lg overflow-hidden">
        <div className="text-[10px] bg-[#e8e8e8] dark:bg-[#363636] w-full text-center font-semibold uppercase">
          {month}
        </div>
        <div className="text-sm font-bold py-[2px]">{date}</div>
      </div>
    </div>
  );
};


// Month Extrater
const extractMonthAndDate = (event_date) => {
  const parsedDate = new Date(event_date);
  const month = parsedDate.toLocaleString('en-us', { month: 'long' }).slice(0, 3);
  const date = parsedDate.getDate();
  return { month, date };
};

const EventPage = ({ title, thumbnail, description, organizers = {}, event_location, event_date = "", event_time = "", photo_gallery = [], registration_available = false, registration, registration_closed = false, registration_link = "", download_template = {}, profile_cards = {}, profile_cards_title = "", winners_gallery = {}, winners_gallery_title = "" }) => {

  const { month, date } = extractMonthAndDate(event_date);
  const { location, link } = event_location ? event_location : {};
  const router = useRouter();
  const currentUrl = router.asPath;
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const defaultProfileImage = '/asset/img/teams/others/default_profile.svg';

  // Lightbox left and right clicks
  // const handleClick = (photoKey, index) => {
  //   setCurrentIndex(index);
  //   setClickedImg(photo_gallery[photoKey]["Photo" + (index + 1)]);
  // };

  // const handelRotationRight = () => {
  //   const totalLength = Object.keys(photo_gallery).length;
  //   if (currentIndex + 1 >= totalLength) {
  //     setCurrentIndex(0);
  //     const newUrl = photo_gallery["Photo" + (currentIndex + 1)];
  //     setClickedImg(newUrl);
  //     return;
  //   }
  //   const newIndex = currentIndex + 1;
  //   const newUrl = photo_gallery[`p${newIndex + 1}`];
  //   const newItem = newUrl["Photo" + (newIndex + 1)];
  //   setClickedImg(newItem);
  //   setCurrentIndex(newIndex);
  // };

  // const handelRotationLeft = () => {
  //   const totalLength = Object.keys(photo_gallery).length;
  //   if (currentIndex === 0) {
  //     setCurrentIndex(totalLength - 1);
  //     const newUrl = photo_gallery[`p${totalLength - 1}`]["Photo" + (totalLength - 1)];
  //     setClickedImg(newUrl);
  //     return;
  //   }
  //   const newIndex = currentIndex - 1;
  //   const newUrl = photo_gallery[`p${newIndex + 1}`];
  //   const newItem = newUrl["Photo" + (newIndex + 1)];
  //   setClickedImg(newItem);
  //   setCurrentIndex(newIndex);
  // };
  const handleClick = (index) => {
    setCurrentIndex(index);
    setClickedImg(photo_gallery[index]);
  };

  const handelRotationRight = () => {
    const totalLength = photo_gallery.length;
    const newIndex = (currentIndex + 1) % totalLength;
    setCurrentIndex(newIndex);
    setClickedImg(photo_gallery[newIndex]);
  };

  const handelRotationLeft = () => {
    const totalLength = photo_gallery.length;
    const newIndex = (currentIndex - 1 + totalLength) % totalLength;
    setCurrentIndex(newIndex);
    setClickedImg(photo_gallery[newIndex]);
  };  

  return (
    <>
      <Head>
        <title>{title} | ACM Vignan&apos;s IIT | Association for Computing Machinery Vignan&apos;s Institute of Information Technology - Visakhapatnam</title>
        <link rel="icon" type="image/png" href="../../public/asset/favicon/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="../../public/asset/favicon/android-chrome-192x192.png" sizes="192x192" />
        <link rel="icon" type="image/png" href="../../public/asset/favicon/android-chrome-512x512.png" sizes="512x512" />
        <link rel="icon" type="image/png" href="../../public/asset/favicon/favicon-16x16.png" sizes="16x16" />
        <link rel="apple-touch-icon" sizes="180x180" href="../../public/asset/favicon/apple-touch-icon.png" />
        <meta name="description" content={description} />
        <meta name="image" content={thumbnail} />
        <meta property="og:title" content={title} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:image" content={thumbnail} />
        <meta property="og:description" content={description} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@acm-vignans-itt" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={thumbnail} />
      </Head>
      <main className="text-dark dark:text-light bg-light dark:bg-dark min-h-screen">
        <Layout className="pt-8 lg:!pt-2">
          <div className="grid grid-cols-2 lg:grid-cols-1">

            {/* Event Thumbnail Image */}
            <div className="mt-4">
              <Image
                className="flex flex-col items-center justify-center w-[90%] lg:w-full rounded-lg shadow-2xl border border-solid border-dark dark:border-light selector-none"
                src={thumbnail}
                alt={title}
                title={title}
                height={500}
                width={500}
              />
              <div className="pt-4 lg:pt-2 sm:pt-0 lg:pl-2 lg:text-sm md:text-sm sm:text-[14px] xs:text-[8px] lg:hidden text-[#2b2b2b] dark:text-[#cbcbcb] ">
                <div className="font-semibold capitalize pb-2">
                  {/* Hosted by: */}
                  Organizers:
                  {/* <div className="pt-1 w-[6rem] border-b-[0.5px] border-solid border-[#6b6b6b] dark:border-[#d3d3d3]"></div> */}
                </div>
                <div className="lg:pt-0 ">
                  {Object.keys(organizers).map((key, index) => {
                    const profileImage = organizers[key].profile
                      ? `/asset/img/teams/others/${organizers[key].profile}`
                      : defaultProfileImage;

                    return (
                      <div key={index} className="pl-2 pb-2 font-semibold">
                        <Link href={organizers[key].link} className="group relative">
                          <span className="flex items-center">
                            <Image
                              src={profileImage}
                              width={20}
                              height={20}
                              alt={`${organizers[key].name} Profile Picture`}
                              className="rounded-full mr-2"
                            />
                            {organizers[key].name}
                          </span>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div>
              {/* Event Title */}
              <h1 className="text-5xl font-bold capitalize md:text-3xl md:pt-8 pb-8 md:pb-2">
                {title}
              </h1>

              {/* List of Hosts */}
              <div className="hidden lg:flex lg:flex-col lg:text-sm sm:text-sm text-[#2b2b2b] dark:text-[#cbcbcb] ">
                <div className="font-semibold capitalize text-[#2b2b2b] dark:text-[#cbcbcb] ">
                  {/* Hosted by: */}
                  Organizers:
                  {/* <div className=" w-[6rem] border-b-[0.5px] border-solid border-[#6b6b6b] dark:border-[#d3d3d3] lg:hidden"></div> */}
                </div>
                <div className="lg:pt-2">
                  {Object.keys(organizers).map((key, index) => {
                    const profileImage = organizers[key].profile
                      ? `/asset/img/teams/others/${organizers[key].profile}`
                      : defaultProfileImage;

                    return (
                      <div key={index} className="pl-2 pb-2 font-semibold">
                        <Link href={organizers[key].link} className="group relative">
                          <span className="flex items-center">
                            <Image
                              src={profileImage}
                              width={20}
                              height={20}
                              alt={`${organizers[key].name} Profile Picture`}
                              className="rounded-full mr-2"
                            />
                            {organizers[key].name}
                          </span>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Event Date and Time */}
              <div className="flex align-middle items-center py-2  lg:text-lg sm:text-sm xs:text-sm">
                <div className="pr-2">
                  <Calander month={month} date={date} />
                </div>
                <div className="flex flex-col items-start justify-start ">
                  <span className="font-semibold">{event_date}</span>
                  <span className="text-sm text-[#6b6b6b] dark:text-[#d3d3d3] uppercase">
                    {event_time}
                  </span>
                </div>
              </div>

              {/* Event Location */}
              <div className="py-2   lg:text-lg sm:text-sm xs:text-sm">
                <div className="flex items-center">
                  <div className="w-10 flex items-center justify-center p-2 border border-solid border-[#e8e8e8] dark:border-[#363636] text-[#6b6b6b] rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      className=" fill-[#6b6b6b] dark:fill-[#d3d3d3]"
                    >
                      <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
                    </svg>
                  </div>
                  <div className="pl-2 flex flex-col ">
                    <Link
                      className="font-semibold line-clamp-1"
                      href={`${event_location.link}`}
                      target="_blank"
                    >
                      {event_location.location}
                    </Link>
                    <span className="text-sm text-[#6b6b6b] dark:text-[#d3d3d3] ">
                      {event_location.city}
                    </span>
                  </div>
                </div>
              </div>

              {/* Event Registration Closed */}
              {registration_closed && (
                <div className="py-4 md:text-sm sm:text-sm">
                  <div className="rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] w-[80%] lg:w-full p-4  border border-[#e8e8e8] dark:border-[#363636 ]">
                    <div className="flex items-center pb-4 md:pb-2">
                      <span className="pr-2 ">
                        <svg className="w-8 md:w-5 h-8 md:h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11ZM7 10a2 2 0 1 0 0 4h10a2 2 0 1 0 0-4H7Z"></path></svg>
                      </span>
                      <span className="text-2xl md:text-lg">Registration Closed</span>
                    </div>
                    <div className="text-[#6b6b6b] dark:text-[#cfcfcf]">
                      This event is not currently taking registrations. You may contact the host or subscribe to receive updates.
                    </div>
                  </div>
                </div>
              )}

              {/* Event Registration Link */}
              {registration_available && (
                <div className="py-4 md:text-sm sm:text-sm">
                  <div className="rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] w-[80%] lg:w-full border border-[#e8e8e8] dark:border-[#363636  ]">
                    <div className="bg-[#e8e8e8] dark:bg-[#363636] rounded-t-lg px-4 pb-1 pt-2 font-semibold">
                      Registration
                    </div>
                    <div className="p-4">
                      <div className="pb-2">

                        Welcome! To join the event, please register below.
                        <div
                          className="sm:text-sm "
                          dangerouslySetInnerHTML={{ __html: registration }}
                        />

                      </div>
                      <div className="flex items-center justify-center pb-1">
                        <Link href={registration_link} target="_blank" className='button__hover_border mt-6 text-xs font-semibold border border-solid border-dark dark:border-light rounded-full'>
                          <button className="full-rounded !px-20 lg:!px-12 lg:!py-3"
                          >
                            <span>Register to Join</span>
                          </button>
                        </Link>
                      </div>
                      {download_template && download_template.template_name && (
                        <div className="flex items-center justify-center pt-1">
                          <Link href={download_template.template_link} target="_blank" className='button__hover_border mt-2 text-xs font-semibold border border-solid border-dark dark:border-light rounded-full'>
                            <button className="full-rounded !px-12 lg:!px-4 lg:!py-3"
                            >
                              <span>{download_template.template_name}</span>
                            </button>
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </div>)}

              {/* Event Description */}
              <div className="pt-4 flex flex-col items-start ">
                <span className="font-semibold uppercase">About Event</span>
                <div className=" w-[16%] mt-1 border-b-[0.5px] border-solid border-[#6b6b6b] dark:border-[#d3d3d3] md:w-[34%]"></div>
                <div
                  className="pt-4 sm:text-sm "
                  dangerouslySetInnerHTML={{ __html: description }}
                />
              </div>
            </div>
          </div>

          {/* Event Profile Cards */}
          {Object.keys(profile_cards).length > 0 && (
            <div className="">
              <h1 className="flex items-center justify-center py-20 font-bold text-2xl capitalize">{profile_cards_title}</h1>
              <div className="grid grid-cols-4 xl:grid-cols-2 md:grid-cols-1 ">
                {Object.keys(profile_cards).map((key, index) => (
                  <div key={index} className="pl-2 pb-2 font-semibold">
                    <SimpleProfileCard
                      href={profile_cards[key].href}
                      profilePic={profile_cards[key].profilePic}
                      name={profile_cards[key].name}
                      className={profile_cards[key].className}
                      role={profile_cards[key].role}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Event Winners Gallery */}
          {Object.keys(winners_gallery).length > 0 && (
            <div>
              <h1 className="flex items-center justify-center py-20 font-bold text-2xl capitalize">{winners_gallery_title}</h1>
              <div className="flex items-center justify-center">
                <div className="grid grid-cols-3 lg:grid-cols-4 md:grid-cols-2 xs:grid-cols-1 gap-10">
                  {Object.keys(winners_gallery).map((photoKey, index) => (
                    <div key={index} className="wrapper-images">
                      <Image
                        className="rounded-lg shadow-2xl"
                        src={winners_gallery[photoKey]["Winner" + (index + 1)]}
                        alt={`Winner ${index + 1}`}
                        width={300}
                        height={200}
                      />
                      <h1 className="flex items-center justify-center pt-2 font-bold sm:text-sm">{winners_gallery[photoKey].text}</h1>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Event Photo Gallery */}
          <div className="">
            {photo_gallery.length !== 0 && (
              <div className="pt-8">
                <h1 className="flex items-center justify-center py-8 text-2xl capitalize font-bold">
                  Photo Gallery
                </h1>
                <div className="flex items-center justify-center">
                  <div className="grid grid-cols-5 lg:grid-cols-4 md:grid-cols-2 xs:grid-cols-1 gap-10">
                    {photo_gallery.map((photo, index) => (
                      <div key={index} className="wrapper-images">
                        <Image
                          className="rounded-lg shadow-2xl cursor-pointer"
                          src={`${photo}`}
                          alt={`Photo ${index + 1}`}
                          width={300}
                          height={200}
                          onClick={() => handleClick(index)}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            <div>
              {clickedImg && (
                <ImageModal
                  clickedImg={clickedImg}
                  handelRotationRight={handelRotationRight}
                  setClickedImg={setClickedImg}
                  handelRotationLeft={handelRotationLeft}
                />
              )}
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default EventPage;
