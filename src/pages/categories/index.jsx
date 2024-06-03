import { allBlogs } from "contentlayer/generated";
import BlogLayoutThree from "@/components/Blog/BlogLayoutThree";
import Categories from "@/components/Blog/Categories";
import Head from "next/head";

const CategoryIndexPage = ({ blogs, allCategories }) => {
  return (
    <>
      <Head>
        <title>Categories | ACM Vignan&apos;s IIT | Association for Computing Machinery Vignan&apos;s Institute of Information Technology - Visakhapatna</title>
        <link rel="icon" type="image/svg" href="../../public/asset/favicon/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" type="image/svg" href="../../public/asset/favicon/android-chrome-192x192.png" sizes="192x192" />
        <link rel="icon" type="image/svg" href="../../public/asset/favicon/android-chrome-512x512.png" sizes="512x512" />
        <link rel="icon" type="image/svg" href="../../public/asset/favicon/favicon-16x16.png" sizes="16x16" />
        <link rel="apple-touch-icon" sizes="180x180" href="../../public/asset/favicon/apple-touch-icon.png" />
      </Head>
      <article className="min-h-screen flex flex-col text-dark dark:text-light">
        <div className="px-10 sm:px-4 md:px-8 flex flex-col">
          <h1 className="mt-6 font-semibold text-5xl md:text-4xl lg:text-5xl uppercase">Categories</h1>
          <span className="mt-2 inline-block">
            Discover more categories and expand your knowledge!
          </span>
          <Categories categories={allCategories} currentSlug="all" />
        </div>

        <div className="my-10 mx-10 grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
          {blogs.map((blog, index) => (
            <article key={index} className="flex items-center justify-center relative">
              <BlogLayoutThree blog={blog} />
            </article>
          ))}
        </div>
      </article>
    </>
  );
};

export async function getStaticProps() {
  const blogs = allBlogs.filter(blog => blog.isPublished);
  const allCategories = ["all", ...new Set(allBlogs.flatMap(blog => blog.tags.map(tag => tag.toLowerCase().replaceAll(" ", "-"))))].sort();

  return {
    props: {
      blogs,
      allCategories,
    },
  };
}

export default CategoryIndexPage;
