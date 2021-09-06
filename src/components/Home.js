import React, { useEffect, useState } from "react";
import axios from "axios";
import logo from "../images/Logo.png";
import DisplayObject from "../components/DisplayObject";
import { Link } from "react-router-dom";

function Home() {
	const url = "https://api.mwi.dev/content/home/";
	const [info, setInfo] = useState([]);

	useEffect(() => {
		axios.get(url).then((res) => {
			setInfo(res.data["data"]);
		});
	}, []);

	console.log(info);
	return (
		<div>
			<div className="container">
				<div className="header mt-5">
					<img src={logo} alt="logo"></img>
					<Link to="/Contact">
						<h4>contact</h4>
					</Link>
				</div>
				<div className="content mt-4">
					<div className="row">
						{info.map((ele, i) => (
							<div
								key={i}
								className="card col-lg-4 col-md-4 col-sm-12 p-5 text-start"
							>
								<div className="imgDiv" style={{ height: "120px" }}>
									<img
										src={`https://raw.githubusercontent.com/lhoang417/Midwestern-Interactive-tech-challenge/main/src/images/${ele.id}.png?raw=true`}
										alt="talkie"
									></img>
								</div>
								<h1 className="pb-3 text-center">{ele.title}</h1>
								<p>{ele.content} </p>
								<div
									className="learn text-center px-4 py-2 m-auto"
									style={{
										backgroundColor: "#DEBF79",
										width: "fit-content",
										color: "white",
									}}
								>
									<Link to={`/content/${ele.id}`}>Learn More</Link>
								</div>
							</div>
						))}
					</div>
				</div>
				<div className="bottom row mt-5">
					<h1 className="pb-4">
						<span className="bottomSpan">Javascript</span>&nbsp;Puzzle
					</h1>
					<DisplayObject />
				</div>
			</div>
		</div>
	);
}

export default Home;
