import React, { } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

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
