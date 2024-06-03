import BlogDetails from "@/components/Blog/BlogDetails";
import RenderMdx from "@/components/Blog/RenderMdx";
import Tag from "@/components/Elements/Tag";
import siteMetadata from "@/utils/siteMetaData";
import { allBlogs } from "contentlayer/generated";
import { slug } from "github-slugger";
import Image from "next/image";
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";


const AuthorName = (name) => {
  const formattedName = name.toLowerCase().replace(/\s+/g, '_');
  return formattedName;
}

const LinkAuthorName = (name) => {
  const formattedName = name.toLowerCase().replace(/\s+/g, '-');
  return formattedName;
}

export async function getStaticPaths() {
  const paths = allBlogs.map((blog) => ({ params: { slug: blog._raw.flattenedPath } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug);

  if (!blog) {
    return { notFound: true };
  }

  const publishedAt = new Date(blog.publishedAt).toISOString();
  const modifiedAt = new Date(blog.updatedAt || blog.publishedAt).toISOString();

  let imageList = [siteMetadata.socialBanner];
  if (blog.image) {
    imageList =
      typeof blog.image.filePath === "string"
        ? [siteMetadata.siteUrl + blog.image.filePath.replace("../public", "")]
        : blog.image;
  }
  const ogImages = imageList.map((img) => {
    return { url: img.includes("http") ? img : siteMetadata.siteUrl + img };
  });

  const authors = blog?.author ? [blog.author] : siteMetadata.author;

  const metadata = {
    title: blog.title,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      url: siteMetadata.siteUrl + blog.url,
      siteName: siteMetadata.title,
      locale: "en_US",
      type: "article",
      publishedTime: publishedAt,
      modifiedTime: modifiedAt,
      images: ogImages,
      authors: authors.length > 0 ? authors : [siteMetadata.author],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
      images: ogImages,
    },
  };

  return {
    props: {
      blog,
      metadata,
    },
  };
}

export default function BlogPage({ blog, metadata }) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!blog) {
    return <ErrorPage statusCode={404} />;
  }
  const imageUrl = `/asset/img${blog.url}/featured.png`;
  const defaultImageUrl = '/asset/img/articles/featured.png';
  const [imgSrc, setImgSrc] = useState(imageUrl);

  const handleError = () => {
    setImgSrc(defaultImageUrl);
  };

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

  let imageList = [siteMetadata.socialBanner];
  if (blog.image) {
    imageList =
      typeof blog.image.filePath === "string"
        ? [siteMetadata.siteUrl + blog.image.filePath.replace("../public", "")]
        : blog.image;
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": blog.title,
    "description": blog.description,
    "image": imageList,
    "datePublished": new Date(blog.publishedAt).toISOString(),
    "dateModified": new Date(blog.updatedAt || blog.publishedAt).toISOString(),
    "author": [{
      "@type": "Person",
      "name": blog?.author ? [blog.author] : siteMetadata.author,
      "url": siteMetadata.twitter,
    }]
  }


  return (
    <>
      <Head>
        <title>{metadata.title} | Articles | ACM Vignan&apos;s IIT</title>
        <meta name="description" content={metadata.description} />
        {/* Open Graph tags */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:locale" content={metadata.openGraph.locale} />
        <meta property="article:published_time" content={metadata.openGraph.publishedTime} />
        <meta property="article:modified_time" content={metadata.openGraph.modifiedTime} />
        {metadata.openGraph.authors.map((author, index) => (
          <meta key={`author-${index}`} property="article:author" content={author} />
        ))}
        {metadata.openGraph.images.map((image, index) => (
          <meta key={`og-image-${index}`} property="og:image" content={image.url} />
        ))}

        {/* Twitter card tags */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        {metadata.twitter.images.map((image, index) => (
          <meta key={`twitter-image-${index}`} name="twitter:image" content={image.url} />
        ))}
      </Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="min-h-screen mb-40 xl:mt-4">
        <div className="mb-8 text-center relative w-full h-[70vh] bg-dark">
          <div className="w-full z-10 flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Tag
              name={blog.tags[0]}
              link={`/categories/${slug(blog.tags[0])}`}
              className="px-6 text-sm py-2"
            />
            <h1
              className="inline-block mt-6 font-semibold capitalize text-light text-5xl md:text-3xl lg:text-5xl !leading-normal relative w-5/6"
            >
              {blog.title}
            </h1>
          </div>
          <div className="absolute top-0 left-0 right-0 bottom-0 h-full bg-dark/60 dark:bg-dark/40" />
          <Image
            src={imgSrc}
            onError={handleError}
            placeholder="blur"
            blurDataURL={imgSrc}
            alt={blog.title}
            width={width}
            height={height}
            className="aspect-square w-full h-full object-cover object-center"
            priority
            sizes="100vw"
          />
        </div>

        <BlogDetails blog={blog} slug={blog._raw.flattenedPath} />

        <div className="lg:flex items-center justify-start mt-8  mx-40 xs:mx-4  md:mx-10 hidden">
          <Link
            href={`../team/${LinkAuthorName(blog.author)}`}
            target="_blank"
            className="flex gap-2"
          >
            <Image
              src={`/asset/img/authors/${AuthorName(blog.author)}.jpg`}
              blurDataURL={blurhashDataUrl}
              alt={blog.author}
              width={width}
              height={height}
              className="w-10 h-10 object-cover object-center rounded-full"
              priority
              sizes="100vw"
            />
            <div className="flex flex-col items-start justify-center">
              <div className="text-xs -my-1">Author</div>
              <div className="hover:text-blue-500 font-semibold">{blog.author}</div>
            </div>
          </Link>
        </div>
        <div className="grid grid-cols-12 gap-16 lg:gap-8 sxl:gap-16 mt-8 px-5 md:px-10 xs:px-4  mx-40 lg:mx-0">
          <RenderMdx blog={blog} className={`order-2 lg:order-1`} />
          <div className="col-span-4 lg:col-span-12 order-2 lg:order-1">
            <div className="sticky top-8">
              <Link
                href={`../team/${LinkAuthorName(blog.author)}`}
                target="_blank"
                className="mb-4 flex gap-2"
              >
                <Image
                  src={`/asset/img/authors/${AuthorName(blog.author)}.jpg`}
                  blurDataURL={blurhashDataUrl}
                  alt={blog.author}
                  width={width}
                  height={height}
                  className="w-10 h-10 object-cover object-center rounded-full"
                  priority
                  sizes="100vw"
                />
                <div className="flex flex-col items-start justify-center">
                  <div className="text-xs -my-1">Author</div>
                  <div className="hover:text-blue-500 font-semibold">{blog.author}</div>
                </div>
              </Link>

              <details
                className={`border-[1px] border-solid border-dark dark:border-light text-dark dark:text-light rounded-lg p-4 max-h-[80vh] overflow-hidden overflow-y-auto customScrollbar`}
                open
              >
                <summary className="text-lg font-semibold capitalize cursor-pointer">
                  Table Of Content
                </summary>
                <ul className="mt-4 font-in text-base">
                  {blog.toc.map((heading) => {
                    return (
                      <li key={`#${heading.slug}`} className="py-1">
                        <a
                          href={`#${heading.slug}`}
                          data-level={heading.level}
                          className="data-[level=two]:pl-0  data-[level=two]:pt-2
                                   data-[level=two]:border-t border-solid border-dark/40
                                   data-[level=three]:pl-4
                                   sm:data-[level=three]:pl-6
                                   flex items-center justify-start
                                   "
                        >
                          {heading.level === "three" ? (
                            <span className="flex w-1 h-1 rounded-full bg-dark mr-2">
                              &nbsp;
                            </span>
                          ) : null}

                          <span className="hover:underline">{heading.text}</span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </details>
            </div>
          </div>


        </div>
      </article>
    </>
  );
}
