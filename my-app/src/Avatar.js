import React, { Component } from "react";
import ReactDOM from "react-dom";
import Avatarlist from "./Avatarlist";
import "./Avatar.css";
import "tachyons";

class Avatar extends Component {
	constructor() {
		super();
		this.state = {
			name: "Button not clicked",
		};
	}

	nameChange() {
		this.setState({ name: "Button clicked!" });
	}

	render() {
		const avatarlist = [
			{
				id: 1,
				name: "Chinmay",
				work: "Web Developer",
			},
			{
				id: 2,
				name: "Esha",
				work: "Sass Thrower",
			},
			{
				id: 3,
				name: "Rohit",
				work: "Sponsor",
			},
			{
				id: 4,
				name: "Ankit",
				work: "Medical Assist",
			},
		];

		const arrayAvatar = avatarlist.map((avatarcard, i) => {
			return (
				<Avatarlist
					id={avatarlist[i].id}
					name={avatarlist[i].name}
					work={avatarlist[i].work}
				/>
			);
		});

		return (
			<div className="mainClass">
				<h1 className="tc"> {this.state.name} </h1>

				{arrayAvatar}

				<button onClick={() => this.nameChange()} className="">
					Subsribe
				</button>
			</div>
		);
	}
}

export default Avatar;
