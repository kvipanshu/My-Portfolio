import React, {useState} from 'react';
import "./projects.css";

const Projects = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    };
    return(
        <section className="projects section" id="projects">
            <h2 className="section__title">Projects</h2>
            <span className="section__subtitle">My Work</span>

            <div className="projects__container container grid">

                <div className="projects__content">
                    <div>
                        <i className="uil uil-web-grid projects__icon"></i>
                        <h3 className="projects__title">Portfolio Website</h3>
                    </div>

                    <span className="projects__button" onClick={() => toggleTab(1)}>View More
                        <i className="uil uil-arrow-right projects__button-icon"></i>
                    </span>

                    <div className={toggleState === 1 ? "projects__modal active-modal" : "projects__modal"}>
                        <div className="projects__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times projects__modal-close"></i>

                            <h3 className="projects__modal-title">Portfolio Website</h3>
                            <p className="projects__modal-description">Designed and developed a responsive portfolio website using React.js, showcasing projects and skills in an interactive and visually appealing manner.</p>

                            <ul className="projects__modal-project grid">
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Integration of animations or transitions to enhance user experience.
                                    </p>
                                </li>

                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Responsive web design principles.</p>
                                </li>

                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Technologies Used: React.js, JavaScript, HTML, CSS</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="projects__content">
                    <div>
                        <i className="uil uil-edit projects__icon"></i>
                        <h3 className="projects__title">To Do List</h3>
                    </div>

                    <span className="projects__button" onClick={() => toggleTab(2)}>View More
                        <i className="uil uil-arrow-right projects__button-icon"></i>
                    </span>

                    <div className={toggleState === 2 ? "projects__modal active-modal" : "projects__modal"}>
                        <div className="projects__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times projects__modal-close"></i>

                            <h3 className="projects__modal-title">To Do List Application</h3>
                            <p className="projects__modal-description">A simple and effective organizational tool used to keep track of tasks or activities that need to be completed.</p>

                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Allowing users to add, delete, and set tasks priority.</p>
                                </li>

                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Implemented state management using React hooks and styled components for UI design.</p>
                                </li>

                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Technologies Used: React.js, JavaScript, HTML, CSS.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="projects__content">
                    <div>
                        <i className="uil uil-arrow projects__icon"></i>
                        <h3 className="projects__title">Rock Paper Scissors</h3>
                    </div>

                    <span className="projects__button" onClick={() => toggleTab(3)}>View More
                        <i className="uil uil-arrow-right projects__button-icon"></i>
                    </span>

                    <div className={toggleState === 3 ? "projects__modal active-modal" : "projects__modal"}>
                        <div className="projects__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times projects__modal-close"></i>

                            <h3 className="projects__modal-title">Rock Paper Scissors Game</h3>
                            <p className="projects__modal-description">Implemented a classic rock-paper-scissors game using HTML, CSS, and JavaScript. Players can compete against the computer with dynamic result display.</p>

                            <ul className="projects__modal-project grid">
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Player interaction with clickable choices (rock, paper, scissors).</p>
                                </li>

                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Random computer choice generation.</p>
                                </li>

                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Real-time result display based on game rules.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="projects__content">
                    <div>
                        <i className="uil uil-temperature projects__icon"></i>
                        <h3 className="projects__title">Temperature Converter</h3>
                    </div>

                    <span className="projects__button" onClick={() => toggleTab(4)}>View More
                        <i className="uil uil-arrow-right projects__button-icon"></i>
                    </span>

                    <div className={toggleState === 4 ? "projects__modal active-modal" : "projects__modal"}>
                        <div className="projects__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times projects__modal-close"></i>

                            <h3 className="projects__modal-title">Temperature Converter</h3>
                            <p className="projects__modal-description">Developed a temperature converter web application using JavaScript, allowing users to convert between Celsius and Fahrenheit with real-time calculation.</p>

                            <ul className="projects__modal-project grid">
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Front-end development using HTML and CSS for user interface design.</p>
                                </li>

                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Problem-solving and algorithm implementation for unit conversion.</p>
                                </li>

                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">UI/UX considerations for user-friendly interactions.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )   
}

export default Projects