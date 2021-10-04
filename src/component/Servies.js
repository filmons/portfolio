import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faNode,  faReact } from "@fortawesome/free-brands-svg-icons";
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
								Headings must have content and the content must be accessible by
								a scr.
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
								Headings must have content and the content must be accessible by
								a scr.
							</p>
						</div>
					</div>
					{/*  */}
					<div className="col-lg-3 col-md-6  col-sm-6">
						<div className="box">
							<div className="circle">
								<FontAwesomeIcon
									className="icon"
									icon={faNode}
									size="2x"
								/>{" "}
							</div>
							<h3> back end developer</h3>
							<p>
								Headings must have content and the content must be accessible by
								a scr.
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
								Headings must have content and the content must be accessible by
								a scr.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Serviecs;
