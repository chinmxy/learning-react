import React from "react";
import ReactDOM from "react-dom";

const Avatarlist = (props) => {
	return (
		<div className="avatar-class ma4 dib tc bg-light-purple grow shadow-4 pa4">
			<img
				src={`https://joeschmoe.io/api/v1/${props.name}`}
				alt="avatar-logo"
			/>
			<h1 className="">{props.name} </h1>
			<p>{props.work}</p>
		</div>
	);
};

export default Avatarlist;
