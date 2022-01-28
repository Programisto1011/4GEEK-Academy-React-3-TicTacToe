import React, { useState } from "react";
import * as PropTypes from "prop-types";
// include your styles into the webpack bundle
import "../../styles/Square.css";

//create your first component
const Square = (props) => {
	const [selectedColor, setSelectedColor] = useState("");
	//Objeto para almacenar el estado ("", "red", "blue") y la posición
	function SquareObject(x, y) {
		this.state = "";
		this.position = [x, y];
	}
	SquareObject.prototype = {
		//Si el turno es par el estado es "red" y si es impar es "blue"
		changeColor: function (turn) {
			this.state = turn % 2 == "0" ? "red" : "blue";
		},
	};
	const iSquare = new SquareObject(props.x, props.y);
	return (
		<>
			onClick=
			{() => setSelectedColor(iSquare.changeColor(props.turn))};
			<div className={`Square ${selectedColor}`}></div>
		</>
	);
};

Square.propTypes = {
	x: PropTypes.string.isRequired,
	y: PropTypes.string.isRequired,
	turn: PropTypes.string.isRequired,
};

export default Square;
// Como escalariamos las cajas en funcion del número de cajas?
