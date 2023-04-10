import { useRouter } from 'next/router';
import projects from '../../data/data';
import Navbar from '../components/navbar'
import React from 'react';


export async function getStaticPaths() {
    const paths = projects.map((project) => ({
        params: { id: project.id },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const project = projects.find((p) => p.id === params.id);

    return {
        props: {
            project,
        },
    };
}

const ProjectPage = ({ project }) => {
    const summaryWithLineBreaks = project.summary.split("\\n").map((paragraph, index) => {
        if (index === 0 && /^v\d/.test(paragraph)) {
            return (
                <React.Fragment key={index}>
                    <p><b>{paragraph}</b></p>
                    <br />
                </React.Fragment>
            );
        } else {
            return (
                <React.Fragment key={index}>
                    <p>{paragraph}</p>
                    <br />
                </React.Fragment>
            );
        }
    });


    return (
        <div>
            <Navbar />
            <div className="flex flex-col items-center mt-8">
                <h1 className="text-5xl font-bold my-8">{project.title}</h1>
                <img src={`/${project.image}`} alt={project.title}
                    className="w-2/4 mx-auto h-auto" />
                <div className="bg-white w-full max-w-prose p-4 my-4 text-justify rounded shadow">
                    {summaryWithLineBreaks}
                </div>
            </div>
        </div>
    );
};

export default ProjectPage;

