import styles from '../styles/services.module.css';

const Services = () => {
    const data = [
        {
            title: "Application Development",
            points: ["Chatbots", "Browser Extensions", "Game Development", "Desktop Applications", "Web Applications"].sort()
        },
        {
            title: "Mobile Applications",
            points: ["Cross-platform Applications", "Android App Development", "IOS App Development"].sort()
        },
        {
            title: "Software Development",
            points: ["AI Development", "Software Development", "API's & Integration", "Scripting", "Plugin Development"].sort()
        },
        {
            title: "Web Development",
            points: ["Frontend Development", "Backend Development", "Database Management"].sort()
        },
        // Add more services here if needed
    ];

    const servicesData = data.map((service, index) => (
        <div className={styles.card} key={index}>
            <div className={styles.cardContainer}>
                <h4><b>{service.title}</b></h4>
                <ul>
                    {service.points.map((point, pointIndex) => (
                        <li key={pointIndex}>{point}</li>
                    ))}
                </ul>
            </div>
        </div>
    ));

    return (
        <div>
            <h3 className={`${styles.heading} text-center text-2xl font-bold`}>Services</h3>
            <div className={styles.container}>
                {servicesData}
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