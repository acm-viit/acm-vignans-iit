import Head from 'next/head'
import GHOST from '../../public/asset/img/images/ghost-img.png'
import Image from 'next/image'
import Link from 'next/link'

const NotFound = () => {
    return (
        <>
            <Head>
                <title>404 Page Not Found | ACM Vignan&apos;s IIT | Association for Computing Machinery Vignan&apos;s Institute of Information Technology - Visakhapatna</title>
                <link rel="icon" type="image/svg" href="../../public/asset/favicon/favicon-32x32.png" sizes="32x32" />
                <link rel="icon" type="image/svg" href="../../public/asset/favicon/android-chrome-192x192.png" sizes="192x192" />
                <link rel="icon" type="image/svg" href="../../public/asset/favicon/android-chrome-512x512.png" sizes="512x512" />
                <link rel="icon" type="image/svg" href="../../public/asset/favicon/favicon-16x16.png" sizes="16x16" />
                <link rel="apple-touch-icon" sizes="180x180" href="../../public/asset/favicon/apple-touch-icon.png" />
            </Head>
            <main className="flex items-center justify-center h-screen">
                <section className="text-center pb-40 lg:pb-20">
                    <div className="container flex items-center justify-center lg:flex-col lg:gap-10 lg:mb-28 gap-[28rem]">
                        <div className=' order-1 lg:order-2'>
                            <span className="text-2xl">Error 404</span>
                            <p className="mt-4">We can&apos;t seem to find the page <br /> you are looking for.</p>
                            {/* <button className="inline-block mt-6 mr-8 bg-dark/85 dark:bg-light text-white dark:text-dark dark:font-semibold  px-6 py-2 rounded-full"
                                onClick={() => history.back()}
                            >
                                Go Back
                            </button> */}
                            <div className='flex items-center justify-center'>
                                <div className='button__hover_border mt-6 mr-8 w-34 text-xs dark:font-semibold border border-solid border-dark dark:border-light rounded-full'>
                                    <button className="full-rounded lg:!py-3"
                                        onClick={() => history.back()}
                                    >
                                        <span>Go Back</span>
                                    </button>
                                </div>
                                <Link href="/" className='button__hover_border mt-6 w-34 text-xs dark:font-semibold border border-solid border-dark dark:border-light rounded-full'>
                                    <button className="full-rounded lg:!py-3">
                                        <span>Go Home</span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="relative order-2 lg:order-1 lg:mb-0 mb-20">
                            <h1 className="text-[20rem] lg:text-[10rem] font-black text-dark/90 dark:text-light gradien w-56 animate-bounce flex items-center justify-center font-rammetto-one selector-none">
                                404
                            </h1>
                            <div className="absolute inset-x-0 bottom-0 h-6 bg-black dark:bg-light opacity-10 rounded-full blur"></div>
                        </div>
                    </div>
                    {/* <footer className="flex justify-center space-x-2 mt-10 text-sm">
                        <span>contact</span>
                        <span>|</span>
                        <span>acmviit@gmail.com</span>
                    </footer> */}
                </section>
            </main>
        </>
    )
}

export default NotFound