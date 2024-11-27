import { serviceData } from '../../src/components/serviceData';
import styles from '../../styles/services.module.css';
import Head from 'next/head';
const ServiceDetail = ({ service }) => {
    if (!service) {
        return <h1>Service not found</h1>;
    }

    return (
        <div>
            <Head>
                <title>{service.title} | Fred Burke</title>
                <meta property="og:title" content={service.title} key="title" />
                <meta name="description" content={service.description.slice(0, 160)} />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href={`https://fredb.dev/services/${service.title.toLowerCase().replace(/ /g, '-')}`} />

            </Head>
            <article className={styles.article} dangerouslySetInnerHTML={{ __html: service.description }} />

        </div>
    );
};

// This function generates the paths for each service based on the title
export async function getStaticPaths() {
    const paths = serviceData.map((service) => ({
        params: { slug: service.title.toLowerCase().replace(/ /g, '-') },
    }));

    return {
        paths,
        fallback: false, // If a slug doesn't match, show a 404 page
    };
}

// This function fetches the service data based on the slug
export async function getStaticProps({ params }) {
    const service = serviceData.find(
        (s) => s.title.toLowerCase().replace(/ /g, '-') === params.slug
    );

    if (!service) {
        return {
            notFound: true, // Return 404 if no matching service is found
        };
    }

    return {
        props: {
            service,
        },
    };
}

export default ServiceDetail;
