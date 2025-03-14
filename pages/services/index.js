import styles from '../../styles/services.module.css';
import Link from 'next/link';
import { serviceData } from '../../src/components/serviceData';
import Image from 'next/image';
import Head from 'next/head';
function addServicesJsonLd() {
    return {
        __html: `{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Fred Burke Web Development",
          "description": "Custom web development and software solutions for small businesses and entrepreneurs. Specializing in React, Node.js, and WordPress.",
          "image": "https://fredb.dev/favicon.ico",
          "url": "https://fredb.dev",
          "telephone": "+1-347-635-3817",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "72-11 Austin St",
            "addressLocality": "Forest Hills",
            "addressRegion": "NY",
            "postalCode": "11433",
            "addressCountry": "US"
          },
          "priceRange": "$$",
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "40.719276",
            "longitude": "-73.842174"
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
              ],
              "opens": "09:00",
              "closes": "17:00"
            }
          ],
          "sameAs": [
            "https://www.linkedin.com/in/fredb7",
            "https://github.com/fredb1"
          ],
          "serviceType": "Technology Services",
          "offers": [
            {
              "@type": "Offer",
              "name": "Application Development",
              "description": "Custom application development services to meet your business needs.",
              "priceCurrency": "USD",
              "price": "Varies by project"
            },
            {
              "@type": "Offer",
              "name": "Mobile Applications",
              "description": "Development of cross-platform and native mobile applications.",
              "priceCurrency": "USD",
              "price": "Varies by project"
            },
            {
              "@type": "Offer",
              "name": "Websites",
              "description": "Professional web development services to build dynamic and secure websites.",
              "priceCurrency": "USD",
              "price": "Varies by project"
            },
            {
              "@type": "Offer",
              "name": "Software Development",
              "description": "Full-stack software development tailored to your business requirements.",
              "priceCurrency": "USD",
              "price": "Varies by project"
            },
            {
              "@type": "Offer",
              "name": "Web Development",
              "description": "Professional web development services to build dynamic and secure websites.",
              "priceCurrency": "USD",
              "price": "Varies by project"
            },
            {
              "@type": "Offer",
              "name": "Support and Miscellaneous",
              "description": "Ongoing technical support and miscellaneous services to ensure your systems run smoothly.",
              "priceCurrency": "USD",
              "price": "Varies by project"
            }
          ]
      }`,
    };
}
const Services = () => {
    const serviceDataMap = serviceData.map((service, index) => (
        <Link className={styles.card} key={index} href={`/services/${service.title.toLowerCase().replace(/ /g, '-')}`}>
            <div className={styles.cardContainer}>
                <h3><b>{service.title}</b></h3>
                <Image src={service.image} alt={service.points.join(", ")} width={300} height={300} />
                <p>{service.caption}</p>
            </div>
        </Link>
    ));
    return (
        <div>
            <Head>
                <link rel="canonical" href="https://fredb.dev/services" key="canonical" />
                <script
                    type="application/ld+json"
                    key="review-jsonld"
                    dangerouslySetInnerHTML={addServicesJsonLd()}
                />
            </Head>
            <h2 className={`${styles.heading} text-center text-2xl font-bold`}>Services</h2>
            <div className={styles.container}>
                {serviceDataMap}
            </div>
        </div>
    );
}

export default Services;
export async function getStaticProps() {
    return {
        props: {
            title: 'Services',
        }
    };
}
