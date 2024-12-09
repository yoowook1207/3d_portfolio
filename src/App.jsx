import React from 'react';
import Navbar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Projects from "./sections/Projects.jsx";
import WorkExperience from "./sections/Experience.jsx";
import Clients from "./sections/Clients.jsx";
import Footer from "./sections/Footer.jsx";
import Contact from "./sections/Contact.jsx";

const App = () => {
    return (
        <main className="max-w-7xl mx-auto">
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Clients />
            <WorkExperience />
            <Contact />
            <Footer />
        </main>
    );
};

export default App;