import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css"
                    integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA=="
                    crossOrigin="anonymous"
                    referrerpolicy="no-referrer"
                />
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
