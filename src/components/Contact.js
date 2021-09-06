import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/Logo.png";
import "./Contact.css";

function Contact() {
	return (
		<div className="contactPage">
			<div className="container header2 d-flex mt-5">
				<img src={logo} alt="logo"></img>
				<Link to="/">
					<h4>home</h4>
				</Link>
			</div>
			<div className="container contactCon d-flex">
				<div className="contentForContact col-lg-5 col-sm-12 px-3 ">
					<div className="leftDiv">
						<h1 className="pb-4" style={{ color: "white" }}>
							<span className="bottomSpan">Heading</span>&nbsp;One
						</h1>
						<p style={{ color: "white" }}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna. Labore et
							dolore magna incididunt ut labore.
							<br />
							<br />
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna
						</p>
					</div>
				</div>
				<div className="contactDiv d-flex  px-3 col-lg-5 col-sm-12">
					<form>
						<div className="inputBox d-flex row">
							<h1 className="row mb-4">Heading Two</h1>
							<input
								className="col-lg-6 col-sm-12"
								type="text"
								placeholder="First Name"
							></input>
							<input
								className="col-lg-6 col-sm-12"
								type="text"
								placeholder="Last Name"
							></input>
						</div>
						<div className="inputBox d-flex row">
							<input
								className="col-lg-6 col-sm-12"
								type="text"
								placeholder="Title"
							></input>
							<input
								className="col-lg-6 col-sm-12"
								type="email"
								placeholder="Email"
							></input>
						</div>
						<div className="inputBox row">
							<textarea type="text" placeholder="Message"></textarea>
						</div>
						<div className="inputBox row text-center justify-content-center">
							<button>Submit</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Contact;
