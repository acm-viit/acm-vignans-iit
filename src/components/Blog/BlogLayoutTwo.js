import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogLayoutTwo = ({ blog }) => {
  if (!blog) {
    return (
    <div className="loader-container">
      <div className="loader"></div>
    </div>
    )
  }

  const {
    url = "#",
    image = {},
    title = "Untitled",
    tags = [],
    publishedAt = new Date(),
  } = blog;

  const {
    filePath = "",
    blurhashDataUrl = "",
    width = 0,
    height = 0,
  } = image;
  const imageUrl = `/asset/img${blog.url}/featured.png`;
  const defaultImageUrl = '/asset/img/articles/featured.png';
  const [imgSrc, setImgSrc] = React.useState(imageUrl);

  const handleError = () => {
    setImgSrc(defaultImageUrl);
  };
  return (
    <div className="group grid grid-cols-12 gap-4 items-center text-dark dark:text-light">
      <Link
        href={url}
        className="col-span-12 lg:col-span-4 h-full rounded-xl overflow-hidden"
      >
        <Image
          src={imgSrc}
          onError={handleError}
          placeholder="blur"
          blurDataURL={blurhashDataUrl}
          alt={title}
          width={width}
          height={height}
          className="aspect-square w-full h-full object-cover object-center group-hover:scale-105 transition-all ease duration-300"
          sizes="(max-width: 640px) 100vw,(max-width: 1024px) 50vw, 33vw"
        />
      </Link>

      <div className="col-span-12 lg:col-span-8 w-full">
        <span className="inline-block w-full uppercase text-accent dark:text-accentDark font-semibold text-xs sm:text-sm">
          {tags[0] || "No Tag"}
        </span>
        <Link href={url} className="inline-block my-1">
          <h2 className="font-semibold capitalize text-base sm:text-lg">
            <span
              className="bg-gradient-to-r from-accent/50 dark:from-accentDark/50 to-accent/50 dark:to-accentDark/50 bg-[length:0px_3px]
                group-hover:bg-[length:100%_3px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 "
            >
              {title}
            </span>
          </h2>
        </Link>

        <span className="inline-block w-full capitalize text-gray dark:text-light/50 font-semibold text-xs sm:text-base">
          {format(new Date(publishedAt), "MMMM dd, yyyy")}
        </span>
      </div>
    </div>
  );
};

export default BlogLayoutTwo;
