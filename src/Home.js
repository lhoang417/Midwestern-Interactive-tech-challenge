import React from "react";
import logo from "./Logo.png";
import talkie from "./Talkie.png";
import rabbit from "./Rabbit.png";
import shield from "./Shield.png";
import DisplayObject from "./DisplayObject";

function Home() {
	return (
		<div>
			<div className="container">
				<div className="header mt-5">
					<img src={logo} alt="logo"></img>
					<a href={"/"}>
						<h4>contact</h4>
					</a>
				</div>
				<div className="content mt-4">
					<div className="row">
						<div className="card col-lg-4 col-md-4 col-sm-12 p-5 text-start">
							<div className="imgDiv" style={{ height: "120px" }}>
								<img src={talkie} alt="talkie"></img>
							</div>
							<h1 className="pb-3">Heading Two</h1>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna{" "}
							</p>
							<div
								className="learn text-center px-4 py-2 m-auto"
								style={{
									backgroundColor: "#DEBF79",
									width: "fit-content",
									color: "white",
								}}
							>
								<a href="/">Learn More</a>
							</div>
						</div>
						<div className="card col-lg-4 col-md-4 col-sm-12 p-5 text-start">
							<div className="imgDiv" style={{ height: "120px" }}>
								<img src={rabbit} alt="rabbit"></img>
							</div>
							<h1 className="pb-3">Heading Two</h1>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna{" "}
							</p>
							<div
								className="learn text-center px-4 py-2 m-auto"
								style={{
									backgroundColor: "#DEBF79",
									width: "fit-content",
									color: "white",
								}}
							>
								<a href="/">Learn More</a>
							</div>
						</div>
						<div className="card col-lg-4 col-md-4 col-sm-12 p-5 text-start">
							<div className="imgDiv" style={{ height: "120px" }}>
								<img src={shield} alt="shield"></img>
							</div>
							<h1 className="pb-3">Heading Two</h1>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna{" "}
							</p>
							<div
								className="learn text-center px-4 py-2 m-auto"
								style={{
									backgroundColor: "#DEBF79",
									width: "fit-content",
									color: "white",
								}}
							>
								<a href="/">Learn More</a>
							</div>
						</div>
					</div>
				</div>
				<div className="bottom row mt-5">
					<h1 className="pb-4">
						<span className="bottomSpan">Heading</span>&nbsp;One
					</h1>
					<DisplayObject />
				</div>
			</div>
		</div>
	);
}

export default Home;
