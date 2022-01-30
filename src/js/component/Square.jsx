import React, { useState } from "react";
import * as PropTypes from "prop-types";
// include your styles into the webpack bundle
import "../../styles/Square.css";

//create your first component
const Square = (props) => {
	var color = "";
	const handleClick = (ev) => {
		props.handleClick(ev);
		setisActive(true);
	};

	console.log(props.turn);
	console.log(isActive);

	color = props.turn % 2 == 0 ? "red" : "blue";
	console.log(color);
	const [isActive, setisActive] = useState(false);

	return (
		<>
			<button
				onClick={handleClick}
				className={`Square ${isActive ? color : ""}`}
				disabled={isActive}></button>
			<h1>Class Color: {props.color}</h1>
		</>
	);
};

Square.propTypes = {
	turn: PropTypes.number.isRequired,
};

export default Square;
// Como escalariamos las cajas en funcion del número de cajas?
