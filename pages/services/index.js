import styles from '../../styles/services.module.css';
import Link from 'next/link';
import { serviceData } from '../../src/components/serviceData';
import Image from 'next/image';
import Head from 'next/head';
function addServicesJsonLd() {
    return {
        __html: `{
        "@context": "https://schema.org",
        "@type": "Service",
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
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "25"
            },
            "review": [
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Victor Lucas"
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                },
                "reviewBody": "Fred delivered an exceptional website that significantly boosted our efficiency."
              },
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Micheal Moses"
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "4.5",
                  "bestRating": "5"
                },
                "reviewBody": "Great service, highly professional and very thorough."
              }
            ]
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