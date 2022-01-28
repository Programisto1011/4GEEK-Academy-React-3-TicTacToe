import React, { useState } from "react";
import * as PropTypes from "prop-types";
// include your styles into the webpack bundle
import "../../styles/Board.css";
import Square from "./Square.jsx";

//create your first component
const Board = (props) => {
	// const [selectedColor, setSelectedColor] = useState("");
	//Objeto para almacenar el estado ("", "red", "blue") y la posición

	return (
		<>
			<Square x={props.x} y={props.y} turn={props.turn} />
		</>
	);
};

Board.propTypes = {
	x: PropTypes.string,
	y: PropTypes.string,
	turn: PropTypes.string,
};

export default Board;
// Como escalariamos las cajas en funcion del número de cajas?
