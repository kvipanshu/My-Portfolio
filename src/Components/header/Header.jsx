import React, { useState, useEffect } from "react";
import "./header.css";

const Header = () => {
	/* CHANGE BACKGROUND HEADER */
	window.addEventListener("scroll", function () {
		const header = document.querySelector(".header");
		// when the scroll is higher than 200vh, add the show-header class to a tag with the header tag
		if (this.scrollY >= 80) header.classList.add("scroll-header");
		else header.classList.remove("scroll-header");
	});

	/*Toggle Menu*/
	const [Toggle, showMenu] = useState(false);
	const [activeNav, setActiveNav] = useState("#home");

	//theme-switch
	const [isDarkMode, setIsDarkMode] = useState(() => {
		// Initialize state based on localStorage
		const savedDarkMode = localStorage.getItem("darkmode");
		return savedDarkMode === "active";
	});

	useEffect(() => {
		// Update body class and localStorage when state changes
		if (isDarkMode) {
			document.body.classList.add("darkmode");
			localStorage.setItem("darkmode", "active");
		} else {
			document.body.classList.remove("darkmode");
			localStorage.setItem("darkmode", null);
		}
	}, [isDarkMode]);

	const handleThemeSwitch = () => {
		setIsDarkMode((prevMode) => !prevMode);
	};

	return (
		<header className="header">
			<nav className="nav container">
				<a href="index.html" className="nav__logo">
					Vipanshu
				</a>

				<div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
					<ul className="nav__list grid">
						<li className="nav__item">
							<a
								href="#home"
								onClick={() => setActiveNav("#home")}
								className={
									activeNav === "#home" ? "nav__link active-link" : "nav__link"
								}
							>
								<i className="uil uil-estate nav__icon"></i> Home
							</a>
						</li>

						<li className="nav__item">
							<a
								href="#about"
								onClick={() => setActiveNav("#about")}
								className={
									activeNav === "#about" ? "nav__link active-link" : "nav__link"
								}
							>
								<i className="uil uil-user nav__icon"></i> About
							</a>
						</li>

						<li className="nav__item">
							<a
								href="#skills"
								onClick={() => setActiveNav("#skills")}
								className={
									activeNav === "#skills"
										? "nav__link active-link"
										: "nav__link"
								}
							>
								<i className="uil uil-file-alt nav__icon"></i> Skills
							</a>
						</li>

						<li className="nav__item">
							<a
								href="#projects"
								onClick={() => setActiveNav("#projects")}
								className={
									activeNav === "#projects"
										? "nav__link active-link"
										: "nav__link"
								}
							>
								<i className="uil uil-scenery nav__icon"></i> Projects
							</a>
						</li>

						<li className="nav__item">
							<a
								href="#contact"
								onClick={() => setActiveNav("#contact")}
								className={
									activeNav === "#contact"
										? "nav__link active-link"
										: "nav__link"
								}
							>
								<i className="uil uil-message nav__icon"></i> Contact
							</a>
						</li>
					</ul>

					<i
						className="uil uil-times nav__close"
						onClick={() => showMenu(!Toggle)}
					></i>
				</div>

				<div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
					<i className="uil uil-apps"></i>
				</div>

				<button id="theme-switch" onClick={handleThemeSwitch}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="24px"
						viewBox="0 -960 960 960"
						width="24px"
						fill="#e8eaed"
					>
						<path d="M480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Z" />
					</svg>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="24px"
						viewBox="0 -960 960 960"
						width="24px"
						fill="#e8eaed"
					>
						<path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Z" />
					</svg>
				</button>
			</nav>
		</header>
	);
};

export default Header;
