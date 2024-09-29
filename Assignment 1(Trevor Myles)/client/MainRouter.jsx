import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import './App.css';
const MainRouter = () => {
    return (<div>
        <Layout/>
        <Routes>

            <Route exact path="/" element={<Home />} />
            <Route exact path="/AboutMe" element={<AboutMe />} />
            <Route exact path="/Navbar" element={<Navbar />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/Services" element={<Services />} />
            <Route exact path="/Footer" element={<Footer />} />

        </Routes>
    </div>
    )
}
export default MainRouter
