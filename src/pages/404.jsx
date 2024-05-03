import Head from 'next/head'
import favicon32x32 from '../../public/asset/favicon/favicon-32x32.png';
import favicon16x16 from '../../public/asset/favicon/favicon-16x16.png';
import apple_touch_icon from '../../public/asset/favicon/apple-touch-icon.png';
import favicon192x192 from '../../public/asset/favicon/android-chrome-192x192.png';
import favicon512x512 from '../../public/asset/favicon/android-chrome-512x512.png';

const NotFound = () => {
    return (
        <>
            <Head>
                <title>404 Page Not Found | ACM Vignan&apos;s IIT | Association for Computing Machinery Vignan&apos;s Institute of Information Technology - Visakhapatna</title>
                <link rel="icon" type="image/svg" href={favicon16x16} sizes="16x16" />
                <link rel="icon" type="image/svg" href={favicon32x32} sizes="32x32" />
                <link rel="apple-touch-icon" sizes="180x180" href={apple_touch_icon} />
                <link rel="icon" type="image/svg" href={favicon192x192} sizes="192x192" />
                <link rel="icon" type="image/svg" href={favicon512x512} sizes="512x512" />
            </Head>
            <main className='text-dark dark:text-light'>
                <div className="h-[100vh] w-[100vw] flex items-center justify-center">
                    <h1 className="text-2xl">404 | Page Not Found!</h1>
                </div>
            </main>
        </>
    )
}

export default NotFound