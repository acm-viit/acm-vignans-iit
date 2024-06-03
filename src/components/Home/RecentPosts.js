import { sortBlogs } from "@/utils";
import Link from "next/link";
import React from "react";
import BlogLayoutThree from "../Blog/BlogLayoutThree";

const RecentPosts = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);
  return (
    <section className="w-full  mt-16 sm:mt-24  md:mt-32 px-5 sm:px-4 md:px-14  sxl:px-32 flex flex-col items-center justify-center">
      <div className="w-full flex  justify-between">
        <h2 className="w-fit inline-block font-bold capitalize text-5xl lg:text-4xl sm:text-3xl text-dark dark:text-light">
          Recent Articles
        </h2>
        <Link
          href="/categories/all"
          className="inline-block font-medium text-accent dark:text-accentDark underline underline-offset-2 text-base md:text-lg"
        >
          view all
        </Link>
      </div>

      <div className="grid grid-cols-4 lg:grid-cols-2 sm:grid-cols-1 gap-16 mt-16">
        {sortedBlogs.slice(4, 10).map((blog, index) => {
          if (!blog.isPublished) {
            return null;
          }
          return (
            <article key={index} className="col-span-1 row-span-1 relative">
              <BlogLayoutThree blog={blog} />
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default RecentPosts;
