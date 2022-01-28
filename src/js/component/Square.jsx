import React, { useState } from "react";
import * as PropTypes from "prop-types";
// include your styles into the webpack bundle
import "../../styles/Square.css";

function SquareObject(x, y) {
	this.state = "";
	this.position = [x, y];
}
SquareObject.prototype = {
	//Si el turno es par el estado es "red" y si es impar es "blue"
	changeColor: function (turn) {
		console.log(turn);
		return (this.state = parseInt(turn) % 2 == 0 ? "red" : "blue");
	},
};

//create your first component
const Square = (props) => {
	const [selectedColor, setSelectedColor] = useState({
		state: { activate: "0", color: "" },
	});
	// function StepTracker() {
	// 	const [steps, setSteps] = useState(0);
	// const increment() {
	// 	setSteps(prevState => prevState + 1);
	//Objeto para almacenar el estado ("", "red", "blue") y la posición
	const iSquare = new SquareObject(props.x, props.y);
	return (
		<>
			<button
				onClick={() =>
					setSelectedColor({
						active: "1",
						color: iSquare.changeColor(props.turn),
					})
				}
				className={`Square ${
					selectedColor.active === "0"
						? selectedColor.state.color
						: ""
				}`}></button>
			<h1>{selectedColor}</h1>
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
