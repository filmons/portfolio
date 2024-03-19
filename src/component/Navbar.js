import React from "react";
import "../App.css";
// import logo from "../component/logo.png";
import {Link} from"react-scroll"
// import fontAwsome

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
	return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top ">
            
            <div className="container">
				<a className="navbar-brand" href="/">
					{/* <img className="logo" src={logo} alt="logo" /> */}
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<FontAwesomeIcon icon={faBars} style={{color: "#fff"}}/>
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ms-auto">
						<li className="nav-item active">
							<a smooth={true} to="home"   className="nav-link" href="/">
								Home
								{/* Home <span className="sr-only">(current)</span> */}
							</a>
						</li>
						<li className="nav-item">
							<Link smooth={true} to="abutme"  offset={-60} className="nav-link" href="#">
								About me
							</Link>
						</li>
                        <li className="nav-item">
							<Link smooth={true} to="serviecs" offset={-60} className="nav-link" href="#">
								Services
							</Link>
						</li>
                        <li className="nav-item">
							<Link smooth={true} to="experiance"  offset={-60} className="nav-link" href="#">
								Experience
							</Link>
						</li>
                        <li className="nav-item">
							<Link smooth={true} to="portfolio"  offset={-60} className="nav-link" href="#">
								Portfolio
							</Link>
						</li>
                        <li className="nav-item">
							<Link smooth={true} to="contact"  offset={-60} className="nav-link" href="#">
								Contacts
							</Link>
						</li>
					</ul>
			    </div>
			</div>
		</nav>
	);
};

export default Navbar;
