import React from "react";
import "./index.css";
import Header from "./Components/header/Header.jsx";
import Home from "./Components/home/Home.jsx";
import About from "./Components/about/About.jsx";
import Skills from "./Components/skills/Skills.jsx";
import Projects from "./Components/projects/Projects.jsx";
import Qualification from "./Components/qualification/Qualification.jsx";
import Contact from "./Components/contact/Contact.jsx";
import Footer from "./Components/footer/Footer.jsx";
import ScrollUp from "./Components/scrollup/ScrollUp.jsx";

function App() {
	return (
		<>
			<Header />
			<main className="main">
				<Home />
				<About />
				<Skills />
				<Projects />
				<Qualification />
				<Contact />
			</main>

			<Footer />
			<ScrollUp />
		</>
	);
}

export default App;
