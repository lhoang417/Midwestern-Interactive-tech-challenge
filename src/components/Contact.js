import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/Logo.png";
import "./Contact.css";
import axios from "axios";
import { useEasybase } from "easybase-react";
import validator from "validator";

function Contact() {
	const url = "https://api.mwi.dev/content/contact";
	const [data, setData] = useState([]);
	const { db } = useEasybase();
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [title, setTitle] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [successMessage, setSuccessMessage] = useState("");
	const [emailError, setEmailError] = useState("");

	useEffect(() => {
		axios.get(url).then((res) => setData(res.data["data"]));
	}, []);

	console.log(data);

	function handleSubmit(e) {
		e.preventDefault();
	}
	const submitForm = async () => {
		await db("CONTACTINFO")
			.insert({
				Firstname: firstName,
				Lastname: lastName,
				Title: title,
				Email: email,
				Message: message,
			})
			.one();
		setFirstName("");
		setLastName("");
		setTitle("");
		setEmail("");
		setMessage("");
		setSuccessMessage("Your form was submitted successfully.");
	};
	const validateEmail = () => {
		if (validator.isEmail(email)) {
			setEmailError("");
			submitForm();
		} else {
			setEmailError("Please enter a valid email.");
		}
	};

	return (
		<div className="contactPage">
			<div className="container header2 d-flex mt-5">
				<img src={logo} alt="logo"></img>
				<Link to="/">
					<h4>home</h4>
				</Link>
			</div>
			<div className="container contactCon d-flex">
				{data.map((ele, i) => (
					<div key={i} className="contentForContact col-lg-5 col-sm-12 px-3 ">
						<div className="leftDiv">
							<h1 className="pb-4" style={{ color: "white" }}>
								<span className="bottomSpan">{ele.title}</span>
							</h1>
							<p style={{ color: "white" }}>{ele.content}</p>
						</div>
					</div>
				))}
				<div className="contactDiv d-flex  px-3 col-lg-5 col-sm-12">
					<form onSubmit={handleSubmit}>
						<div className="inputBox d-flex row">
							<h1 className="row mb-4">Contact Us</h1>

							<input
								className="col-lg-6 col-sm-12"
								type="text"
								placeholder="First Name"
								value={firstName}
								required={true}
								onChange={(e) => {
									setFirstName(e.target.value);
									setSuccessMessage("");
								}}
							></input>
							<input
								className="col-lg-6 col-sm-12"
								type="text"
								placeholder="Last Name"
								value={lastName}
								required={true}
								onChange={(e) => {
									setLastName(e.target.value);
									setSuccessMessage("");
								}}
							></input>
						</div>
						<div className="inputBox emailDiv d-flex row">
							<input
								className="col-lg-6 col-sm-12"
								type="text"
								placeholder="Title"
								value={title}
								required={true}
								onChange={(e) => {
									setTitle(e.target.value);
									setSuccessMessage("");
								}}
							></input>
							<input
								className="col-lg-6 col-sm-12"
								type="email"
								placeholder="Email"
								value={email}
								required={true}
								onChange={(e) => {
									setEmail(e.target.value);
									setSuccessMessage("");
								}}
							></input>
						</div>
						<div className="inputBox row">
							<textarea
								type="text"
								placeholder="Message"
								value={message}
								onChange={(e) => {
									setMessage(e.target.value);
									setSuccessMessage("");
								}}
							></textarea>
						</div>
						<div className="inputBox row text-center justify-content-center">
							<button
								onClick={() => {
									validateEmail();
								}}
							>
								Submit
							</button>
							<h5
								className="py-1 pt-2"
								style={{ color: "#858585", fontStyle: "italic" }}
							>
								{emailError}
								{successMessage}
							</h5>
							<Link className="viewAll" to="/Contact/allforms">
								<h5>View all forms </h5>
							</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Contact;
