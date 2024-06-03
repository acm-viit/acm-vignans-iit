import { allBlogs } from "contentlayer/generated";
import HomeCoverSection from "@/components/Home/HomeCoverSection";
import FeaturedPosts from "@/components/Home/FeaturedPosts";
import RecentPosts from "@/components/Home/RecentPosts";
import Head from "next/head";
import siteMetadata from "@/utils/siteMetaData";

export default function Articles() {

  return (
    <>
      <Head>
        <title>Articles | ACM Vignan&apos;s IIT | Association for Computing Machinery Vignan&apos;s Institute of Information Technology - Visakhapatna</title>
        <link rel="icon" type="image/svg" href="../../public/asset/favicon/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" type="image/svg" href="../../public/asset/favicon/android-chrome-192x192.png" sizes="192x192" />
        <link rel="icon" type="image/svg" href="../../public/asset/favicon/android-chrome-512x512.png" sizes="512x512" />
        <link rel="icon" type="image/svg" href="../../public/asset/favicon/favicon-16x16.png" sizes="16x16" />
        <link rel="apple-touch-icon" sizes="180x180" href="../../public/asset/favicon/apple-touch-icon.png" />
        <meta name="description" content={`Articles`} />
        {/* Open Graph tags */}
        <meta property="og:title" content={`Articles`} />
        <meta property="og:description" content={`Articles`} />
        <meta property="og:url" content={`/articles`} />
        <meta property="og:site_name" content={`Articles`} />
        <meta key={`og-image`} property="og:image" content={`${siteMetadata.siteUrl}/social-banner.png`} />

        {/* Twitter card tags */}
        <meta name="twitter:title" content={`Articles`} />
        <meta name="twitter:description" content={`Articles`} />
        <meta key={`twitter-image`} name="twitter:image" content={`${siteMetadata.siteUrl}/social-banner.png`} />
      </Head>
      <main className="flex flex-col items-center justify-cente mt-8 min-h-screen mb-20 px-4 xl:px-0">
        <HomeCoverSection blogs={allBlogs} />
        <FeaturedPosts blogs={allBlogs} />
        <RecentPosts blogs={allBlogs} />
      </main>
    </>
  )
}
