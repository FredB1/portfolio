import Head from 'next/head';
import '../styles/globals.css';
import '../styles/fonts.css';

function MyApp({ Component, pageProps }) {
  const title = pageProps.title
    ? `${pageProps.title} | ${process.env.NEXT_PUBLIC_APP_ID}`
    : process.env.NEXT_PUBLIC_APP_ID;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Welcome to my awesome site." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta property="og:title" content={process.env.NEXT_PUBLIC_APP_ID || process.env.APP_ID} />
        <meta property="og:description" content="Welcome to my site." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="%PUBLIC_URL%" />
        <meta property="og:image" content="/default-og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={process.env.NEXT_PUBLIC_APP_ID || process.env.APP_ID} />
        <meta name="twitter:description" content="Welcome to my site." />
        <meta name="twitter:image" content="/default-twitter-image.jpg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
