import React from "react";

const About = () => {
    return (
        <section id="about" className="py-12 bg-white">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">About Me</h2>
                <p className="text-lg">
                    I am a Computer Science and AI major at D.K.T.E. with a passion for full-stack development,
                    proficiency in React, Node.js, and expertise in C++, Java, and web development.
                </p>
                <a
                    href="https://github.com/pratikmagdum4"
                    className="mt-6 inline-block bg-blue-600 text-white py-2 px-4 rounded">
                    Visit My GitHub
                </a>
            </div>
        </section>
    );
};

export default About;
