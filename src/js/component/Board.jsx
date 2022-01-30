import React, { useState } from "react";
import * as PropTypes from "prop-types";
// include your styles into the webpack bundle
import "../../styles/Board.css";
import Square from "./Square.jsx";

// // function SquareObject(x, y) {
// // 	this.state = ""; //"", "red", "blue"
// // 	this.position = [x, y];
// // }

//create your first component
const Board = () => {
	const [turn, setCount] = useState(0);
	// Objeto para almacenar el estado ("", "red", "blue") y la posición
	// ¿¿?? Como contamos los turnos <--------------------------------------
	const incrementTurn = (ev) => {
		setCount(turn + 1);
		console.log(turn);
	};

	return (
		<>
			<Square turn={turn} handleClick={incrementTurn} />
			<Square turn={turn} handleClick={incrementTurn} />
			<Square turn={turn} handleClick={incrementTurn} />
		</>
	);
};

Board.propTypes = {};

export default Board;
// Como escalariamos las cajas en funcion del número de cajas?
