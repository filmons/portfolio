import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

const Contact = () => {
	const [successMessage, setSuccessMessage] = useState("");
	const { register, handleSubmit } = useForm();

	const serviceID = "service_pctcy5l";
	const temlateID = "template_pctcy5l";
	const userID = "user_WVUPpv9KoZ5CiYebbx9Fk";

	const onSubmit = (data, r) => {
		sendEmail(
			serviceID,
			temlateID,
			{
				name: data.name,
				phone: data.phone,
				email: data.email,
				subject: data.subject,
				description: data.description,
			},
			userID
		);
		r.target.reset();
	};

	const sendEmail = (serviceID, temlateID, variables, userID) => {
		emailjs
			.send(serviceID, temlateID, variables, userID)
			.then(() => {
				setSuccessMessage(
					"Form sent successfully ! i will contact you as soon as possible "
				);
			})
			.catch((err) => console.error(`something went wrong ${err}`));
	};

	return (
		<div id="contact" className="contact">
			<div className="text-center">
				<h1>Contact</h1>
				<p>plaece fill out the form and dicribe and i will contact you </p>
				<span className="sccese-massege">{successMessage}</span>
			</div>
			<div className="container">
				<div className="row">
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="col-md-6 col-xs-12">
							<div className="text-center">
								<input
									type="text"
									className="form-control"
									placeholder="Name"
									name="name"
									defaultValue=""
									{...register("name", {
										required: "inter your mail plaes",
										maxLength: 20,
										message: "plese use a name a maximame with 20 caracters ",
									})}
								/>

								<div className="line"></div>
								{/* {errors.name?.type === "required" && "Your input is required"} */}
							</div>

							<div className="text-center">
								<input
									type="number"
									className="form-control"
									placeholder="Phone-Number"
									name="phone"
									{...register("phone", {
										required: "Plase inter your phone ",
										message: "plese fill your number",
									})}
								/>
								<div className="line"></div>
							</div>

							<div className="text-center">
								<input
									type="email"
									className="form-control"
									placeholder="Email"
									name="email"
									{...register("email", {
										required: "Plese provide your email ",
										pattern: /^\S+@\S+$/i,
										message: "plese use a correct mail",
									})}
								/>
								<div className="line"></div>
							</div>
							<div className="text-center">
								<input
									type="text"
									className="form-control"
									placeholder="Subject"
									name="subject"
									{...register("subject", {
										required: "Plase inter your the subject ",
										message: "plese fill the subject ",
									})}
								/>
								<div className="line"></div>
							</div>
						</div>
						<div className="col-md-6 col-xs-12">
							<div className="text-center">
								<textarea
									type="text"
									className="form-control"
									placeholder="Please briefly describe your project"
									name="description"
									{...register("description", {
										required: "Plase inter your  text",
										message: "plese fill your  the description ",
									})}
								></textarea>
								<div className="line"></div>
							</div>

							<button className="btn-main-offer content-btn" type="Sublit">
								{" "}
								contact me
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
