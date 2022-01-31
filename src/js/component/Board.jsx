import React, { useState } from "react";
import * as PropTypes from "prop-types";

import "../../styles/Board.css";
import Square from "./Square.jsx";

//Funciones primarias

const transformStringToArrByDelimiter = (id, delimiter) => {
	return id.split(delimiter);
};
const existStringInText = (text, word) => {
	return !(text.search(word) === -1);
};

const arr_states = [
	[0, 0, 0],
	[0, 0, 0],
];

const Board = () => {
	//Objeto para almacenar los estados de los botones (o, red, blue)

	//Variable que almacena el turno
	const [turn, setCount] = useState(0);

	const incrementTurn = (ev) => {
		//Suma uno al turno cada vez que se de click a un botón
		setCount(turn + 1);
		console.log(`Turno :${turn}`);
		console.log(arr_states[1][1]);
		//id del componente Output x_y
		const id = ev.target.id;
		//Extraer posición de la id output: [x,y]
		const position_arr = transformStringToArrByDelimiter(id, "_");
		var x_position = position_arr[0];
		var y_position = position_arr[1];
		console.log(`Position: ${position_arr}`);
		//class del botón
		const iClassName = ev.target.className; //<----------------------------
		console.log(`Clase: ${iClassName}`);
		//Extraer color de la clase
		console.log(`Color: ${color}`);
		//---------------------------------------------------------------------
		const color = turn % 2 == 0 ? "red" : "blue";
		ev.target.classList.add(color);
		//Modificar array de estados
		arr_states[x_position][y_position] = color;
		console.log(`Estado del juego: ${arr_states}`);
	};

	//Problema 1: Se extrae la clase antes de que se haya modificado

	return (
		<>
			<Square turn={turn} x="0" y="0" handleClick={incrementTurn} />
			<Square turn={turn} x="0" y="1" handleClick={incrementTurn} />
			<Square turn={turn} x="0" y="2" handleClick={incrementTurn} />
		</>
	);
};

Board.propTypes = {};

export default Board;
// Como escalariamos las cajas en funcion del número de cajas?
