import React, { useState } from "react";

function DisplayObject() {
	const [open, setOpen] = useState(false);
	const [finalArray, setFinalArray] = useState([]);
	const [data, setData] = useState([
		"Matt Johnson",
		"Bart Paden",
		"Ryan Doss",
		"Jared Malcolm",
	]);
	const [data2, setData2] = useState([
		"Matt Johnson",
		"Bart Paden",
		"Jordan Heigle",
		"Tyler Viles",
	]);
	const totalArr = [];

	for (let i = 0; i < data.length; i++) {
		totalArr.push(data[i]);
	}
	for (let i = 0; i < data2.length; i++) {
		totalArr.push(data2[i]);
	}

	function removeDups() {
		if (open === false) {
			setFinalArray([...new Set(totalArr)]);
			setData([]);
			setData2([]);
			setOpen(true);
		} else {
			alert("This operation has already been done");
		}
	}

	return (
		<div>
			<div>
				<p>
					Remove the duplicates in 2 Javascript objects and output the list of
					distinct names in an unordered list when
					<button
						onClick={() => {
							setOpen(true);
							removeDups();
						}}
					>
						this link
					</button>
					is clicked.
				</p>
				<div className=" objectDiv d-flex col-lg-4 col-md-4 col-sm-12">
					<p style={!open ? { display: "block" } : { display: "none" }}>
						<span style={{ color: "#debf79" }}>Object 1</span>
						{data.map((e) => (
							<ul>
								<li>{e}</li>
							</ul>
						))}
					</p>
					<p style={!open ? { display: "block" } : { display: "none" }}>
						<span style={{ color: "#debf79" }}>Object 2</span>
						{data2.map((e) => (
							<ul>
								<li>{e}</li>
							</ul>
						))}
					</p>
					<p style={open ? { display: "block" } : { display: "none" }}>
						<span style={{ color: "#debf79" }}>Result Object</span>
						{open &&
							finalArray.map((e) => (
								<ul>
									<li>{e}</li>
								</ul>
							))}
					</p>
				</div>
			</div>
		</div>
	);
}

export default DisplayObject;
