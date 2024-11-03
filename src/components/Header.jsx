import React from "react";
import ParticleAnimation from "./ParticleAnimation";
import profilePic from "../assets/profile.jpg"; // Add your photo here

const Header = () => {
    return (
        <header className="relative bg-blue-600 text-white p-6 shadow-md overflow-hidden">
            <div className="absolute inset-0 z-0">
                <ParticleAnimation />
            </div>
            <div className="container mx-auto flex justify-between items-center relative z-10">
                <div className="flex items-center">
                    <img
                        src={profilePic}
                        alt="Profile"
                        className="w-24 h-24 rounded-full mr-6 border-4 border-white shadow-lg"
                    />
                    <div>
                        <h1 className="text-3xl font-bold">Pratik Magdum</h1>
                        <p className="mt-2">Full-Stack Developer | AI Enthusiast</p>
                    </div>
                </div>
                <nav>
                    <a href="#about" className="mx-4 hover:text-gray-200 transition">About</a>
                    <a href="#education" className="mx-4 hover:text-gray-200 transition">Education</a>
                    <a href="#projects" className="mx-4 hover:text-gray-200 transition">Projects</a>
                    <a href="#skills" className="mx-4 hover:text-gray-200 transition">Skills</a>
                    <a href="#contact" className="mx-4 hover:text-gray-200 transition">Contact</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
