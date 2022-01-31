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

		//Todos los elementos del array son iguales
		const allEqual = (arr, iRow) => {
			var rArr = arr[iRow];
			return rArr.every((val) => val === rArr[0]);
		};
		//CASO 1: Comprobación de filas [A][...]
		const isAnyRowComplete = (arr) => {
			for (let row in arr) {
				const index_row = parseInt(row);
				if (allEqual(arr, index_row)) {
					return true;
				}
			}
			return false;
		};

		//CASO 2: Comprobacion de columnas [...][B]
		//Tranponer array
		const trasposeArray = (matrix) => {
			let arr = [];
			for (let i = 0; i < matrix.length; i++) {
				arr.push([]);
				for (let j = 0; j < matrix.length; j++) {
					arr[i].push(matrix[j][i]);
				}
			}
			return arr;
		};

		const test_arr = [
			[2, 2, 2],
			[3, 0, 2],
			[4, 2, 2],
		];

		const testRows = isAnyRowComplete(test_arr);
		console.log(`Test Filas: ${testRows}`);
		const copy_arr = test_arr.slice();
		const testColumns = isAnyRowComplete(trasposeArray(copy_arr));
		console.log(`Test Columnas: ${testColumns}`);

		//CASO 3: La diagonal es igual
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
