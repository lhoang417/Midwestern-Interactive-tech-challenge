import React, { useState } from "react";

function DisplayObject() {
	const [open, setOpen] = useState(false);
	const [finalArray, setFinalArray] = useState([]);
	const [name, setName] = useState("");
	const [name2, setName2] = useState("");
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
	function addName(e) {
		if (e.key === "Enter" && name.length !== 0) {
			data.push(name);
			setName("");
		}
	}
	function addName2(e) {
		if (e.key === "Enter" && name2.length !== 0) {
			data2.push(name2);
			setName2("");
		}
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
				<div className="objectDiv d-flex col-lg-4 col-md-4 col-sm-12">
					<div
						className="mappedDiv"
						style={!open ? { display: "block" } : { display: "none" }}
					>
						<h3 style={{ color: "#debf79" }}>Object 1</h3>
						<input
							style={{ border: "none" }}
							className="rounded-3 ps-2 py-1 mb-2"
							placeholder="Add name..."
							onKeyPress={addName}
							onChange={(e) => {
								setName(e.target.value);
							}}
							value={name}
						/>
						{data.map((e) => (
							<ul className="row" key={e}>
								<li>{e}</li>
							</ul>
						))}
					</div>
					<div
						className="mappedDiv"
						style={!open ? { display: "block" } : { display: "none" }}
					>
						<h3 style={{ color: "#debf79" }}>Object 2</h3>
						<input
							style={{ border: "none" }}
							className="rounded-3 ps-2 py-1 mb-2"
							placeholder="Add name..."
							onKeyPress={addName2}
							onChange={(e) => {
								setName2(e.target.value);
							}}
							value={name2}
						/>
						{data2.map((e) => (
							<ul className="row" key={e}>
								<li>{e}</li>
							</ul>
						))}
					</div>
					<div
						className="mappedDiv"
						style={open ? { display: "block" } : { display: "none" }}
					>
						<h3 style={{ color: "#debf79" }}>Result Object</h3>
						{open &&
							finalArray.map((e) => (
								<ul className="row" key={e}>
									<li>{e}</li>
								</ul>
							))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default DisplayObject;
