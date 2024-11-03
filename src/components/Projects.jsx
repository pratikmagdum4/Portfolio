import React from "react";

const Projects = () => {
    return (
        <section id="projects" className="py-12 bg-white">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
                <div className="space-y-6">
                    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold">Amber Content Management Website</h3>
                        <p>Developed a platform using React.js, Node.js, MongoDB, and AWS S3 for students to submit artwork, with secure authentication and storage.</p>
                    </div>
                    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold">Interview Portal for DKTE</h3>
                        <p>Built a comprehensive interview portal using React.js, Redux, and Tailwind to enhance the mock interview process.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
