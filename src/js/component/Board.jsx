import React, { useState } from "react";
import Square from './Squarejsx';
// include your styles into the webpack bundle
import "../../styles/Board.css";

//create your first component
const Board = (props) => {
	const [selectedColor, setSelectedColor] = useState("");
	//Objeto para almacenar el estado ("", "red", "blue") y la posición
	}

	return (
		<>
			<Square />
		</>
	);


Square.propTypes = {
    x: PropTypes.number,
	y: PropTypes.number,
	turn: PropTypes.number,
};

export default Board;
// Como escalariamos las cajas en funcion del número de cajas?