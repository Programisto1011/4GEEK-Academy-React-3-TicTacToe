import React from "react";
import IModal from "../component/Modal.jsx";
import Board, { Win } from "../component/Board.jsx";

//create your first component
const Main = () => {
	return (
		<>
			<IModal Win={Win} />
			<h1>{Win}</h1>
			<Board />
		</>
	);
};

export default Main;
