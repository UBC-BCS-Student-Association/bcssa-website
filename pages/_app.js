import Head from 'next/head'
import Layout from '@/components/Layout';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      window.gtag('config', 'G-S7YGDXDCCS', {
        page_path: url,
      });
    };

    // when the component is mounted, subscribe to router changes and log those page views
    router.events.on('routeChangeComplete', handleRouteChange);

    // if the component is unmounted, unsubscribe from the event
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1, maximum-scale=1, user-scalable=0"/>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
