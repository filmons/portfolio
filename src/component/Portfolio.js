import React from "react";
import Eglise from "../component/images/Home_mobil.png";
import Batem from "../component/images/Bateme.png";
//import Home from "../component/images/simplon.png"
// FONT AWSOME IMPORT
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// react popup box
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

/// part poup Proirs emanuel
const Portfolio = () => {
	const OpenPopupboxNetflix = () => {
		const content = (
			<>
				<img
					className="image-portfolio-popupbox-eglise"
					src={Eglise}
					alt="paroise clon projet..."
				/>
				<p>
					In this course, I'll lead you to step by step on how to use ReactJS
					and Bootstrap by building the portfolio project.
				</p>
				<b>Github:</b>{" "}
				<a href="https://github.com/filmons/Client--front-react-JS"
					className="hyper-link"
					onClick={() =>
						window.open("https://github.com/filmons/Client--front-react-JS")
					}
				>
					Client--front-react-JS
				</a>
				<br />
				<b>Demo:</b>{" "}
				<a href="https://github.com/filmons/Client--front-react-JS"
					className="hyper-link"
					onClick={() =>
						window.open("https://github.com/filmons/Client--front-react-JS")
					}
				>
					Client--front-react-JS
				</a>
			</>
		);
		PopupboxManager.open({ content });
	};

	// const popupboxConfigeParoise = {
	// 	titleBar: {
	// 		enable: true,
	// 		text: "Parois Emanuele",
	// 	},
	// 	fadeIn: true,
	// 	fadeInSpeed: 500,
	// };

	/// parojt Simplonnews/
	const OpenPopupboxSimplonews = () => {
		const content = (
			<>
				<img
					className="image-portfolio-popupbox"
					src={Batem}
					alt="paroise clon projet..."
				/>
				<p>
					In this course, I'll lead you to step by step on how to use ReactJS
					and Bootstrap by building the portfolio project.
				</p>
				<b>Github:</b>{" "}
				<a
					className="hyper-link"
					onClick={() =>
						window.open("https://github.com/filmons/Client--front-react-JS")
					}
					href="https://github.com/filmons/Client--front-react-JS"
				>
					Clickto see the site
				</a>
				<br />
				<b>Demo:</b>{" "}
				<a
					className="hyper-link"
					onClick={() =>
						window.open("https://github.com/filmons/Client--front-react-JS")
					}
					href="https://github.com/filmons/Client--front-react-JS"
				>
					click to see the sit
				</a>
			</>
		);
		PopupboxManager.open({ content });
	};

	// const popupboxConfigesimplonNews = {
	// 	titleBar: {
	// 		enable: true,
	// 		text: "Parois Emanuele",
	// 	},
	// 	fadeIn: true,
	// 	fadeInSpeed: 500,
	// };

	////Projet Ameli Fashn///
	const OpenPopupboxAmeliFashn = () => {
		const content = (
			<>
				<img
					className="image-portfolio-popupbox"
					src={Batem}
					alt="paroise clon projet..."
				/>
				<p>
					In this course, I'll lead you to step by step on how to use ReactJS
					and Bootstrap by building the portfolio project.
				</p>
				<b>Github:</b>
				<a
					className="hyper-link"
					onClick={() =>
						window.open("https://github.com/filmons/Client--front-react-JS")
					}
					href="https://github.com/filmons/Client--front-react-JS"
				>
					Clickto see the site
				</a>
				<br />
				<b>Demo:</b>
				<a href="https://github.com/filmons/Client--front-react-JS"
					className="hyper-link"
					onClick={() =>
						window.open("https://github.com/filmons/Client--front-react-JS")
					}
				>
					
				</a>
			</>
		);
		PopupboxManager.open({ content });
	};

	// const popupboxConfigeAmeliFashn = {
	// 	titleBar: {
	// 		enable: true,
	// 		text: "Parois Emanuele",
	// 	},
	// 	fadeIn: true,
	// 	fadeInSpeed: 500,
	// };
	////// Foodie///*

	const OpenPopupboxFoodie = () => {
		const content = (
			<>
				<img
					className="image-portfolio-popupbox"
					src={Batem}
					alt="paroise clon projet..."
				/>
				<p>
					In this course, I'll lead you to step by step on how to use ReactJS
					and Bootstrap by building the portfolio project.
				</p>
				<b>Github:</b>
				<a
					className="hyper-link"
					onClick={() =>
						window.open("https://github.com/filmons/Client--front-react-JS")
					}
					href="https://github.com/filmons/Client--front-react-JS"
				>
					Clickto see the site
				</a>
				<br />
				<b>Demo:</b>
				<a href="https://github.com/filmons/Client--front-react-JS"
					className="hyper-link"
					onClick={() =>
						window.open("https://github.com/filmons/Client--front-react-JS")
					}
				>
					Client--front-react-JS
					
				</a>
			</>
		);
		PopupboxManager.open({ content });
	};

	// const popupboxConfigeFoodie = {
	// 	titleBar: {
	// 		enable: true,
	// 		text: "Parois Emanuele",
	// 	},
	// 	fadeIn: true,
	// 	fadeInSpeed: 500,
	// };

	return (
		<div id="portfolio" className="portofolio-wrapper">
			<div className="container">
				<h1 className="text-uppercase text-center py-5">portofolio</h1>

				<div className=" image-box-wrapper d-flex   justify-content-center">
					<div className="portfolio-image-box" onClick={OpenPopupboxNetflix}>
						<img className="portfolio-image-eglise" src={Eglise} alt="portofolilo..." />
						<div className="overflow"></div>
						<FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
					</div>

					{/*  */}
					<div className="portfolio-image-box" onClick={OpenPopupboxSimplonews}>
						<img className="portfolio-image" src={Batem} alt="portofolilo..." />
						<div className="overflow"></div>
						<FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
					</div>

					{/*  */}
					<div className="portfolio-image-box" onClick={OpenPopupboxAmeliFashn}>
						<img className="portfolio-image" src={Batem} alt="portofolilo..." />
						<div className="overflow"></div>
						<FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
					</div>

					{/*  */}
					<div className="portfolio-image-box" onClick={OpenPopupboxFoodie}>
						<img className="portfolio-image" src={Batem} alt="portofolilo..." />
						<div className="overflow"></div>
						<FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
					</div>
				</div>
			</div>

			<PopupboxContainer {...OpenPopupboxNetflix} />
			<PopupboxContainer {...OpenPopupboxSimplonews} />
			<PopupboxContainer {...OpenPopupboxAmeliFashn} />
			<PopupboxContainer {...OpenPopupboxFoodie} />
		</div>
	);
};

export default Portfolio;
