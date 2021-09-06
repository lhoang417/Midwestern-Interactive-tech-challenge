import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import logo from "../images/Logo.png";

function Content(props) {
	const [content, setContent] = useState("");
	const [created, setCreated] = useState("");
	const [imageId, setImageId] = useState("");
	const [title, setTitle] = useState("");
	const [updated, setUpdated] = useState("");

	useEffect(() => {
		const { index } = props.match.params;
		console.log(index);
		const url = "https://api.mwi.dev/content/home/";
		axios.get(url).then((res) => {
			setContent(res.data["data"][index - 1].content);
			console.log(content);
			setCreated(res.data["data"][index - 1].created_at);
			setImageId(res.data["data"][index - 1].id);
			setTitle(res.data["data"][index - 1].title);
			setUpdated(res.data["data"][index - 1].updated_at);
		});
	}, [content, props.match.params]);

	return (
		<div>
			<div className="container">
				<div className="header mt-5">
					<img src={logo} alt="logo"></img>
					<Link to="/">
						<h4>Back</h4>
					</Link>
				</div>
				<div className="content mt-4">
					<div className="row">
						<div
							className="card col-lg-12 col-md-12 col-sm-12 p-5  text-center"
							style={{ width: "100vw" }}
						>
							<div className="imgDiv" style={{ height: "120px" }}>
								<img
									src={`https://raw.githubusercontent.com/lhoang417/Midwestern-Interactive-tech-challenge/main/src/images/${imageId}.png?raw=true`}
									alt=""
								></img>
							</div>
							<h1 className="pb-3 text-center">{title}</h1>
							<p>{content} </p>
							<br />
							<div className="row">
								<h4 className="col-lg-6">{created}</h4>
								<h4 className="col-lg-6">{updated}</h4>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Content;
