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
//-------------------------------------------------------------------------------------------------
const arr_states = [
	[0, 0, 0],
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
		//color a asignar al botón
		const color = turn % 2 == 0 ? "red" : "blue";
		//Añadir color a la class del botón
		ev.target.classList.add(color);
		//Modificar y de estados
		arr_states[x_position][y_position] = color;
		console.log(`Estado del juego: ${arr_states}`);
		//Evalua si el jugador a ganado
		//SOLUCION 1: [A][...]

		//Esta función necesita array de 1
		const isAnyRowComplete = (arr) => {
			var isFinishedGame = 1;
			for (let row of arr) {
				for (let column of arr) {
					let index_r = parseInt(row);
					let index_c = parseInt(column);
					isFinishedGame *= arr[index_r][index_c];
					console.log(`Test: ${index_r}`);
				}
				return isFinishedGame === 1 ? true : false;
			}
		};

		const test_arr = [
			[1, 1, 1],
			[1, 0, 0],
			[0, 0, 0],
		];

		console.log(`Test funcion solución${isAnyRowComplete(test_arr)}`);

		// }

		// function getCol(matrix, col) {
		// 	var column = [];
		// 	for (var i in matrix) {
		// 		column.push(matrix[i][col]);
		// 	}
		// 	return column;
		// }

		//SOLUCION 2: [...][B]
		//SOLUCIÓN 3: [A][A]

		//1.1 - Preparación del dataset
		//Array
		//const isFinishGame = arr_states[i].reduce(function(a, b){a === b});

		// const matchElementsRow = arr =>{
		//
	};

	//Alert de que jugador a ganado

	//Problema 1: Se extrae la clase antes de que se haya modificado

	return (
		<>
			<div class="contanier">
				<div class="row">
					<Square
						turn={turn}
						x="0"
						y="0"
						handleClick={incrementTurn}
					/>
					<Square
						turn={turn}
						x="0"
						y="1"
						handleClick={incrementTurn}
					/>
					<Square
						turn={turn}
						x="0"
						y="2"
						handleClick={incrementTurn}
					/>
				</div>
				<div class="row">
					<Square
						turn={turn}
						x="1"
						y="0"
						handleClick={incrementTurn}
					/>
					<Square
						turn={turn}
						x="1"
						y="1"
						handleClick={incrementTurn}
					/>
					<Square
						turn={turn}
						x="1"
						y="2"
						handleClick={incrementTurn}
					/>
				</div>
				<div class="row">
					<Square
						turn={turn}
						x="2"
						y="0"
						handleClick={incrementTurn}
					/>
					<Square
						turn={turn}
						x="2"
						y="1"
						handleClick={incrementTurn}
					/>
					<Square
						turn={turn}
						x="2"
						y="2"
						handleClick={incrementTurn}
					/>
				</div>
			</div>
		</>
	);
};

Board.propTypes = {};

export default Board;
// Como escalariamos las cajas en funcion del número de cajas?
