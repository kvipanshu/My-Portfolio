import "./projects.css";
import { Data } from "./Data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Projects = () => {
	return (
		<section className="projects container section" id="projects">
			<h2 className="section__title">Projects</h2>
			<span className="section__subtitle">My Work</span>

			<Swiper
				className="projects__container"
				loop={true}
				grabCursor={true}
				spaceBetween={24}
				pagination={{ clickable: true }}
				breakpoints={{
					576: {
						slidesPerView: 2,
					},
					768: {
						slidesPerView: 2,
						spaceBetween: 48,
					},
				}}
				modules={[Pagination]}
			>
				{Data.map(({ id, image, title, description }) => {
					return (
						<SwiperSlide className="projects__card" key={id}>
							<img src={image} alt="" className="projects__img" />
							<h3 className="projects__name">{title}</h3>
							<p className="projects__description">{description}</p>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</section>
	);
};

export default Projects;
