import React, { useState } from "react";
import * as PropTypes from "prop-types";
// include your styles into the webpack bundle
import "../../styles/Board.css";
import Square from "./Square.jsx";

// // function SquareObject(x, y) {
// // 	this.state = ""; //"", "red", "blue"
// // 	this.position = [x, y];
// // }
const obtainPositionById = id => {
	return id.split('_');
}
//create your first component
const Board = () => {
	var array_states = [
		[0, 0, 0],
		[0, 0, 0],
	];
	const [turn, setCount] = useState(0);
	// Objeto para almacenar el estado ("", "red", "blue") y la posición
	// ¿¿?? Como contamos los turnos <--------------------------------------
	// Cada vez que se hace click actualizar estado del tablero
	const incrementTurn = (ev) => {
		setCount(turn + 1);
		array_states[1][1] = turn % 2 == 0 ? "red" : "blue";
		console.log(turn);
		console.log(array_states[1][1]);
	};

	return (
		<>
			<Square turn={turn} x="0" y="1" handleClick={incrementTurn} />
			<Square turn={turn} x="0" y="2" handleClick={incrementTurn} />
			<Square turn={turn} x="0" y="3" handleClick={incrementTurn} />
		</>
	);
};

Board.propTypes = {};

export default Board;
// Como escalariamos las cajas en funcion del número de cajas?
