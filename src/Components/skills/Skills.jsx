import React from "react";
import "./skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";
import OtherTools from "./OtherTools";

const Skills = () => {
	return (
		<section className="skills section" id="skills">
			<h2 className="section__title">Skills</h2>
			<span className="section__subtitle">My Technical Level</span>

			<div className="skills__container container grid">
				<Frontend />
				<Backend />
				<OtherTools />
			</div>
		</section>
	);
};

export default Skills;
