import styles from '../../styles/services.module.css';
import Link from 'next/link';
import { serviceData } from '../../src/components/serviceData';
import Image from 'next/image';
const Services = () => {


    const serviceDataMap = serviceData.map((service, index) => (
        <Link className={styles.card} key={index} href={`/services/${service.title.toLowerCase().replace(/ /g, '-')}`}>
            <div className={styles.cardContainer}>
                <h4><b>{service.title}</b></h4>
                <Image src={service.image} alt={service.points.join(", ")} width={300} height={300} />

            </div>
        </Link>
    ));

    return (
        <div>
            <h3 className={`${styles.heading} text-center text-2xl font-bold`}>Services</h3>
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
            title: 'Services', // Set the title here
        }
    };
}