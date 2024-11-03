import React from "react";

const Skills = () => {
    return (
        <section id="skills" className="py-12 bg-gray-50">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-6 text-center">Technical Skills</h2>
                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <h4 className="text-lg font-semibold">Technologies/Frameworks</h4>
                        <ul className="list-disc list-inside">
                            <li>React.js</li>
                            <li>Node.js</li>
                            <li>MongoDB</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold">Programming Languages</h4>
                        <ul className="list-disc list-inside">
                            <li>C++</li>
                            <li>Java</li>
                            <li>Python</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
