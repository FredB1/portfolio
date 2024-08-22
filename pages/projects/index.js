import React, { useState } from 'react';
import Link from 'next/link';
import data from '../../data/data';

const ProjectsPage = ({ projects }) => {
    const [visibleProjects, setVisibleProjects] = useState(4);

    const loadMoreProjects = () => {
        setVisibleProjects(visibleProjects + 4);
    };

    return (
        <div>
            <h1 className="text-3xl font-bold my-8">Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {projects && projects.slice(0, visibleProjects).map((project, index) => (
                    <div key={index} className="border border-gray-300 p-4 rounded">
                        <Link href={project.url}>
                            <img src={project.image} alt={project.title} className="w-full h-40 object-cover object-center rounded-t" />
                            <h2 className="text-xl font-bold mt-2">{project.title}</h2>
                        </Link>
                    </div>
                ))}
            </div>
            {visibleProjects < projects.length && (
                <button onClick={loadMoreProjects} className="bg-blue-500 text-white px-4 py-2 mt-8 rounded">
                    Load More
                </button>
            )}
        </div>
    )
};

export default ProjectsPage;

export async function getStaticProps() {
    const projects = data;

    return {
        props: {
            projects,
            title: 'Projects', // Set the title here
        }
    };
}
