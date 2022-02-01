import React, { useState } from "react";
import * as PropTypes from "prop-types";

import "../../styles/Board.css";
import Square from "./Square.jsx";

//Funciones primarias

const transformStringToArrByDelimiter = (id, delimiter) => {
	return id.split(delimiter);
};
//-------------------------------------------------------------------------------------------------
const arr_states = [
	[0, 0, 0],
	[0, 0, 0],
	[0, 0, 0],
];

var Win = false;

const Board = () => {
	//Objeto para almacenar los estados de los botones (o, red, blue)

	//Variable que almacena el turno
	const [turn, setCount] = useState(0);

	const Funcionality = (ev) => {
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
		//Todos los elementos de una fila en un array son iguales al primero de la fila
		const allEqualForRow = (arr, iRow) => {
			//Input array nxn
			var rArr = arr[iRow];
			return rArr.every((val) => val === rArr[0]);
		};
		const allEqualArrN = (arr) => {
			//Input array n
			return arr.every((val) => val === arr[0]);
		};
		//Todos los elementos de una fila de un array son strings
		const allString = (arr, iRow) => {
			//Input array nxn
			var rArr = arr[iRow];
			for (let value of rArr) {
				if (typeof value !== "string") {
					return false;
				}
			}
			return true;
		};
		//Todos los elementos de una fila de un array son strings
		const allStringArrN = (arr) => {
			//Input array nxn
			for (let value of arr) {
				if (typeof value !== "string") {
					return false;
				}
			}
			return true;
		};

		//CASO 1: Comprobación de filas [A][...]
		const isAnyRowComplete = (arr) => {
			for (let row in arr) {
				const iRow = parseInt(row);
				console.log(`Que contiene la matriz: ${typeof arr[row]}`);
				if (allEqualForRow(arr, iRow) && allString(arr, iRow)) {
					return true;
				}
			}
			return false;
		};

		//CASO 2: Comprobacion de columnas [...][B]
		//Trasponer array
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

		const isAnyColumnComplete = (arr) => {
			return isAnyRowComplete(trasposeArray(arr));
		};

		const test_arr = [
			[0, 0, "blue"],
			["blue", 0, 0],
			["blue", "blue", "blue"],
		];

		console.log(`${test_arr[0]} - Todos string: ${allString(test_arr, 0)}`);

		const testRows = isAnyRowComplete(test_arr);
		console.log(`Test Filas: ${testRows}`);
		const copy_arr = test_arr.slice();
		const testColumns = isAnyColumnComplete(copy_arr);
		console.log(`Test Columnas: ${testColumns}`);

		//CASO 3: La diagonal es igual
		//Preparando dataset
		//Diagonal principal
		const principalDiagonalArr = (arr) => {
			const diagonalArr = [];
			for (let i in arr) {
				for (let j in arr) {
					if (i === j) {
						diagonalArr.push(arr[parseInt(i)][parseInt(j)]);
						console.log(arr[parseInt(i)][parseInt(j)]);
					}
				}
			}
			return diagonalArr;
		};
		console.log(
			`Diagonal principal array: ${principalDiagonalArr(arr_states)}`
		);
		//Comprobación diagonal principal
		const isCompletePrincipalDiagonal = (arr) => {
			const pricipalDiagonal = principalDiagonalArr(arr);
			return (
				allEqualArrN(pricipalDiagonal) &&
				allStringArrN(pricipalDiagonal)
			);
		};

		//Diagonal secundaria
		const secondaryDiagonalArr = (arr) => {
			const diagonalArr = [];
			const dim = arr[0].length;
			for (let i = 0, j = dim - 1; i < dim, j > -1; i++, j--) {
				diagonalArr.push(arr[i][j]);
			}

			return diagonalArr;
		};
		console.log(
			`Diagonal secondary array: ${secondaryDiagonalArr(arr_states)}`
		);
		console.log(
			`Diagonal secondary array: ${allStringArrN(
				secondaryDiagonalArr(arr_states)
			)}`
		);
		//Comprobación diagonal secundaria
		const isCompleteSecondaryDiagonal = (arr) => {
			const secondaryDiagonal = secondaryDiagonalArr(arr);
			return (
				allEqualArrN(secondaryDiagonal) &&
				allStringArrN(secondaryDiagonal)
			);
		};

		//Evaluación de las comprobaciones
		const IsFinishGame = (arr) => {
			if (
				isAnyRowComplete(arr) ||
				isAnyColumnComplete(arr) ||
				isCompletePrincipalDiagonal(arr) ||
				isCompleteSecondaryDiagonal(arr)
			) {
				//Alerta de que jugador ha ganado
				alert(`El jugador ${color} ha ganado!!!`);
				window.onload = load;
			}
		};
		Win = IsFinishGame(arr_states); //<------------NECESITO SACAR ESTE DATO A OTRO COMPONENTE
		console.log(`Ha ganado: ${Win}`);
	};

	return (
		<>
			<div className="contanier">
				<div className="row">
					<Square
						turn={turn}
						x="0"
						y="0"
						handleClick={Funcionality}
					/>
					<Square
						turn={turn}
						x="0"
						y="1"
						handleClick={Funcionality}
					/>
					<Square
						turn={turn}
						x="0"
						y="2"
						handleClick={Funcionality}
					/>
				</div>
				<div className="row">
					<Square
						turn={turn}
						x="1"
						y="0"
						handleClick={Funcionality}
					/>
					<Square
						turn={turn}
						x="1"
						y="1"
						handleClick={Funcionality}
					/>
					<Square
						turn={turn}
						x="1"
						y="2"
						handleClick={Funcionality}
					/>
				</div>
				<div className="row">
					<Square
						turn={turn}
						x="2"
						y="0"
						handleClick={Funcionality}
					/>
					<Square
						turn={turn}
						x="2"
						y="1"
						handleClick={Funcionality}
					/>
					<Square
						turn={turn}
						x="2"
						y="2"
						handleClick={Funcionality}
					/>
				</div>
			</div>
		</>
	);
};

Board.propTypes = {};

export { Win };
export default Board;
