import React from "react";

const Experience = () => {
	return (
		<div>
			<div id="experience" className="experiance">
				<div className="d-flex justify-content-center my5">
					<h1> work experience </h1>
				</div>
				<div className="container experiance-wrapper">
					<div className="timeline-block timeline-block-right">
						<div className="marker"></div>
						<div className="timeline-content">
							<h3>17/05/2021 to 11/06/2021</h3>
							<h3> Web and mobile web developer internship at Maiia Cegedim</h3>
							<p>
								{" "}
								Help in the evolution of the maiia pro platform, by adding
								cypress script and adding new features in React javascript
							</p>
						</div>
					</div>
					{/* * */}
					<div className="timeline-block timeline-block-left">
						<div className="marker"></div>
						<div className="timeline-content">
							<h3>July 2020-November 2020</h3>
							<h3>Administrative assistant (CDI) at ETenergie</h3>
							<p>
								{" "}
								management of invoices, planning of exterior works, inventory of
								equipment and supplies.
							</p>
						</div>
					</div>
					{/*  */}
					<div className="timeline-block timeline-block-right">
						<div className="marker"></div>
						<div className="timeline-content">
							<h3>2018-2019</h3>
							<h3> bar Mayday</h3>

							<p>
								{" "}
								preparation of the room before opening, cleaning of the
								premises.
							</p>
						</div>
					</div>
					{/*  */}
					<div className="timeline-block timeline-block-left">
						<div className="marker"></div>
						<div className="timeline-content">
							<h3>2016-2017</h3>
							<h3>taxi driver </h3>

							<p> Khartoum (Soudan)</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Experience;
