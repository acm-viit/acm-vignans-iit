import Head from 'next/head'

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
            <main className='text-dark dark:text-light'>
                <div className="h-[100vh] w-[100vw] flex items-center justify-center">
                    <h1 className="text-2xl">404 | Page Not Found!</h1>
                </div>
            </main>
        </>
    )
}

export default NotFound