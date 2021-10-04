import React from "react";
import Typed from "react-typed"

const Header = () => {
	return (
		<div className="header-wraper">
			<div className="main-info">
				<h1>WEB DEVELOPMENT AND WEBSITE PROMOTION </h1>
			<Typed
			className="typed-text"
			strings={["webdesign", "Web Developer","Full Staack Developer", "Back End"," Front End" ]}
			typeSpeed={40}
			backSpeed={60}
			loop
			
			/>
			<a  href="Contact" className="btn-main-offer"> Contact me</a>
			</div>
		</div>
	);
};

export default Header;
