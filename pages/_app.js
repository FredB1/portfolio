import Head from 'next/head';
import '../styles/globals.css';
import '../styles/fonts.css';
import Layout from '../src/components/Layout';
import { GoogleTagManager } from '@next/third-parties/google'

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
      {/* Microsoft Clarity Script */}
      <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
                      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                    })(window, document, "clarity", "script", "o9aoliaur8");`,
          }}
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_G_TAG_MANAGER} />

      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_G_TAG_MANAGER}`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>   </>
  );
}

export default MyApp;
