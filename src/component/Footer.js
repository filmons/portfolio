import React from "react";
import {
	FacebookShareButton,
	FacebookIcon,
	TwitterShareButton,
	TwitterIcon,
	LinkedinShareButton,
	LinkedinIcon,
	RedditShareButton,
	RedditIcon
} from "react-share";

const Footer = () => {
	return (
		<div className="footer">
			<div className="container">
				<div className="row">
					<div className="col-lg-4 col-md-6 col-sm-6">
						<div className="d-flex">
							<p> 1 Rue Damtremont 75018 Paris</p>
						</div>
						<div className="d-flex">
							<a href="77785455-65445">+780744769)</a>
						</div>
						<div className="d-flex">
							<p> filmonsrae@gmail.com</p>
						</div>
					</div>
					<div className="col-lg-3 col-md-2 col-sm-6">
						<div className="row">
							<div className="col">
								<a  href="/" className="footer-nav">HOME</a>
								<br />
								<a href="#abutme" className="footer-nav">ABOUT ME</a>
								<br />

								<a href="#serviecs" className="footer-nav">SERVICES</a>
							</div>
							<div className="col">
								<a href="experiance" className="footer-nav">EXPERIANCE</a>
								<br />

								<a href="portfolio" className="footer-nav">PORTFOLIO</a>
								<br />

								<a  href="contact" className="footer-nav">CONTACT</a>
							</div>
						</div>
					</div>
					<div className="col-lg-5 col-md-5 col-sm-6 align-item-center">
						<div className="d-flex justify-content-center">
							<FacebookShareButton
								url={"https://www.youtube.com/watch?v=4tzFnsBPWYs&t=46s"}
								quote={"full stack developer"}
								hashtag="#javascript"
							>
								<FacebookIcon className="mx-3 size={36}" />
							</FacebookShareButton>

							<TwitterShareButton
								url={"https://www.youtube.com/watch?v=4tzFnsBPWYs&t=46s"}
								quote={"full stack developer"}
								hashtag="#javascript"
							>
								<TwitterIcon className="mx-3 size={36}" />
							</TwitterShareButton>

							<LinkedinShareButton
								url={"https://www.youtube.com/watch?v=4tzFnsBPWYs&t=46s"}
								quote={"full stack developer"}
								hashtag="#javascript"
							>
								<LinkedinIcon className="mx-3 size={36}" />
							</LinkedinShareButton>

							<RedditShareButton
								url={"https://www.youtube.com/watch?v=4tzFnsBPWYs&t=46s"}
								quote={"full stack developer"}
								hashtag="#javascript"
							>
								<RedditIcon className="mx-3 size={36}" />
							</RedditShareButton>
						</div>
                        <p className="pt-3 text-align-center">
                             Copyright&copy;
                            {new Date().getFullYear()}&nbsp;New Horizon | All Rigths Reservd 
                        </p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
