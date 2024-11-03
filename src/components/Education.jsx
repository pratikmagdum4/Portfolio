import React from "react";

const Education = () => {
    return (
        <section id="education" className="py-12 bg-gray-50">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-6 text-center">Education</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold">Bachelor of Technology</h3>
                        <p className="mt-2">D.K.T.E. Society’s Textile and Engineering Institute</p>
                        <p className="text-gray-600">CGPA: 7.6 (Dec 2021 - July 2025)</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold">HSC - Maharashtra State Board</h3>
                        <p className="mt-2">Sanjay Ghodawat Junior College</p>
                        <p className="text-gray-600">Percentage: 89.16% (July 2019 - July 2021)</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
