import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNode, faReact } from "@fortawesome/free-brands-svg-icons";
import { faDesktop, faFileCode } from "@fortawesome/free-solid-svg-icons";

const Serviecs = () => {
	return (
		<div id="serviecs" className="services">
			<h1 className="py-5">MY SERVICES</h1>
			<div className="container">
				<div className="row">
					<div className=" col-lg-3 col-md-6 col-sm-6">
						<div className="box">
							<div className="circle">
								<FontAwesomeIcon className="icon" icon={faDesktop} size="2x" />{" "}
							</div>
							<h3> web design</h3>
							<p>
								I use Figma on a daily basis to define models, wireframes and
								also to visualize zonings, storyboards and sitemaps
							</p>
						</div>
					</div>
					{/*  */}
					<div className="col-lg-3 col-md-6  col-sm-6">
						<div className="box">
							<div className="circle">
								<FontAwesomeIcon className="icon" icon={faFileCode} size="2x" />{" "}
							</div>
							<h3> Coding</h3>
							<p>
								I use the Visual studio on a daily basis because VS Code
								combines web technologies such as JavaScript and Node. js with
								the speed and flexibility of native apps.
							</p>
						</div>
					</div>
					{/*  */}
					<div className="col-lg-3 col-md-6  col-sm-6">
						<div className="box">
							<div className="circle">
								<FontAwesomeIcon className="icon" icon={faNode} size="2x" />{" "}
							</div>
							<h3> back end developer</h3>
							<p>
								I am using Node. js and Express in the backend. It is a
								lightweight, scalable and open source language platform that
								also makes it easy to build applications even at the enterprise
								level.
							</p>
						</div>
					</div>
					{/*  */}
					<div className="col-lg-3 col-md-6  col-sm-6">
						<div className="box">
							<div className="circle">
								<FontAwesomeIcon className="icon" icon={faReact} size="2x" />{" "}
							</div>

							<h3> front end developer</h3>
							<p>
								I am using React, it is a JavaScript library for building user
								interfaces. React makes it easy for you to create rich user
								interfaces.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Serviecs;
