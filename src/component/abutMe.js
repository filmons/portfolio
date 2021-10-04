import React from "react";
import autere from "./abut.png";

const abutMe = () => {
	return (
		<div id="abutme" className="container py-5">
			<div className="row">
				<div className="col-lg-6 col-xm-12">
					<div className="photo-wrap mb-5">
						<img className="profile-img" src={autere} alt="auter..." />
					</div>
				</div>
				<div className="col-lg-6 col-xm-12">
					<h1 className="about-heading"> About me </h1>
					<p>
						Hello! I am Filmon. I have been developing websites for over 1
						years. I'm Full-Stack Web Developer. Technologies I use is
						MERN(MySql, Express, ReactJS and NodeJS). I create responsive
						websites that are displayed on all devices desktops and smartphones.
					</p>
				</div>
			</div>
		</div>
	);
};

export default abutMe;
