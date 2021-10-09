import "nprogress/nprogress.css";
import "../styles/globals.css";
import Head from "next/head";
import NProgress from "nprogress";
import Router from "next/router";
import { TripProvider } from "../context/Context";
import * as gtag from "../lib/gtag";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { DefaultSeo } from "next-seo";
import { Provider } from "next-auth/client";
import SEO from "../config/seo.json";

NProgress.configure({ showSpinner: false });
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <title>FindYourTrip</title>
        <meta
          name="description"
          content="Find holiday rentals, cabins, beach houses, unique homes and experiences around the world – all made possible by Hosts on FindYourTrip."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultSeo {...SEO} />
      <Provider session={pageProps.session}>
        <TripProvider>
          <Component {...pageProps} />
        </TripProvider>
      </Provider>
    </>
  );
}

export default MyApp;
