import "../styles/globals.scss";
import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import Copyright from "../components/Copyright/Copyright";

function MyApp({ Component, pageProps }) {
    return (
        <div>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=1.0, user-scalable=0"
                />
                <link
                    rel="preload"
                    href="/fonts/NanumGothic-Regular.ttf"
                    as="font"
                    crossOrigin=""
                />
                <link
                    rel="preload"
                    href="/fonts/NanumGothic-Bold.ttf"
                    as="font"
                    crossOrigin=""
                />
            </Head>
            <Navbar />
            <Component {...pageProps} />
            <Copyright />
        </div>
    );
}

export default MyApp;
