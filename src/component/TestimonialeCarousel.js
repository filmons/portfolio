import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
///Avatars import
import Avatar from "../component/images/avatars/avatar1.png";
import Avatar2 from "../component/images/avatars/avatar2.png";
import Avatar3 from "../component/images/avatars/Avatar3.png";

const TestimonialeCarousel = () => {
	return (
		<Carousel 
		showArrows={true}
		infiniteLoop={true}
		showThumbs={false}
		showStatus={false}
		autoPlay={true}
		interval={3000}
		
		>
		
			
			<>
				<img src={Avatar} alt=" Avatar1" />
				<div className="mycarousal1">
					<h3> filmon srare</h3>
					<p>
						The href attribute is required for an anchor to be keyboard
						accessible. Provide a valid, navigable address as the href value. If
						you cannot provide an href, but still need the element to resemble a
						link, use a button and change it with
					</p>
				</div>
			</>
			<>
				<img src={Avatar2} alt="Avatar2" />
				<div className="mycarousal1">
					<h3> Giusy Pisano</h3>
					<p>
						The href attribute is required for an anchor to be keyboard
						accessible. Provide a valid, navigable address as the href value. If
						you cannot provide an href, but still need the element to resemble a
						link, use a button and change it with
					</p>
				</div>
			</>
			<>
				<img src={Avatar3} alt="Avatar3" />
				<div className="mycarousal1">
					<h3>Dehab Zere</h3>
					<p>
						The href attribute is required for an anchor to be keyboard
						accessible. Provide a valid, navigable address as the href value. If
						you cannot provide an href, but still need the element to resemble a
						link, use a button and change it with
					</p>
				</div>
			</>
            <>
				<img src={Avatar3} alt="Avatar3" />
				<div className="mycarousal1">
					<h3>Dehab Zere</h3>
					<p>
						The href attribute is required for an anchor to be keyboard
						accessible. Provide a valid, navigable address as the href value. If
						you cannot provide an href, but still need the element to resemble a
						link, use a button and change it with
					</p>
				</div>
			</>
		</Carousel>
	);
};

export default TestimonialeCarousel;
