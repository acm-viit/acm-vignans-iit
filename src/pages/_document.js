import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
import siteMetadata from "@/utils/siteMetaData";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content={siteMetadata.description} />
        <meta property="og:title" content={siteMetadata.title} />
        <meta property="og:description" content={siteMetadata.description} />
        <meta property="og:url" content={siteMetadata.siteUrl} />
        <meta property="og:site_name" content={siteMetadata.title} />
        <meta property="og:image" content={siteMetadata.socialBanner} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow, noimageindex, max-video-preview:-1, max-image-preview:large, max-snippet:-1" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={siteMetadata.title} />
        <meta name="twitter:image" content={siteMetadata.socialBanner} />
      </Head>
      <body>
        <Script id='theme-switcher' strategy='beforeInteractive'>
          {`
            if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
              document.documentElement.classList.add('dark')
            } else {
              document.documentElement.classList.remove('dark')
            }
          `}
        </Script>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
