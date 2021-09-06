import React from "react";
import logo from "../images/Logo.png";
import { Link } from "react-router-dom";
import { useEasybase } from "easybase-react";

function ViewAll() {
	const { db, useReturn } = useEasybase();
	const { frame } = useReturn(() => db("CONTACTINFO").return(), []);

	return (
		<div>
			<div className="container">
				<div className="header mt-5">
					<img src={logo} alt="logo"></img>
					<Link to="/contact">
						<h4>Back to Contact</h4>
					</Link>
				</div>
				<div className="content mt-4">
					<div className="row">
						{frame.map((ele, i) => (
							<div
								key={i}
								className="card col-lg-4 col-md-4 col-sm-12 p-5 text-start"
							>
								<div className="imgForForm row" style={{ height: "100px" }}>
									<img src={logo} alt="logo"></img>
								</div>
								<h1 className="pb-3 text-center">
									{ele.firstname}&nbsp;{ele.lastname}
								</h1>
								<h3 className="pb-3 text-center" style={{ color: "#debf79" }}>
									{ele.title ? ele.title : "null"}
								</h3>
								<h4 className="pb-3 text-center" style={{ color: "#debf79" }}>
									{ele.email}
								</h4>
								<p className="pb-3 text-center">
									{ele.message ? ele.message : "null"}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default ViewAll;
