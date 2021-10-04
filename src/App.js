import React, { } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import "./component/Navbar";
import Navbar from "./component/Navbar";
import Header from "./component/Header";
import Testimonoals from "./component/Testimonoals";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
//import { Stroke } from "tsparticles/Options/Classes/Particles/Stroke";
 import AbutMe from "./component/abutMe";
 import Servies from "./component/Servies";
 import Experience from "./component/Experience";
 import Formation from "./component/Formation";
 import Portfolio from "./component/Portfolio";


function App() {
	return (
		<>
			<Particles
			className="partilcles-canvas"
				params={{
					particles: {
						number: {
							value: 200,
							density: {
								enable: true,
								value_area: 1000,
							},
						},
						shape: {
							type: "square",
							Stroke: {
								color: "#FEA82F",
							},
						},
					},
				}}
			/>

			<Navbar />
			<Header />
			 <AbutMe/>
			<Servies/>
			<Formation/>
			<Experience/>
			<Portfolio/>
			<Testimonoals/>
			<Contact/>
			<Footer/>
		</>
	);
}

export default App;
