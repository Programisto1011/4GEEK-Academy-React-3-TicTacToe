import React from "react";
import Board from "../component/Board.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Main = () => {
	return (
		<>
			<Board x="0" y="0" turn="0" />
		</>
	);
};

export default Main;
