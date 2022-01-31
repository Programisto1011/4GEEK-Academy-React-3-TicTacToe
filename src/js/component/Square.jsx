import React, { useState } from "react";
import * as PropTypes from "prop-types";
// include your styles into the webpack bundle
import "../../styles/Square.css";

//create your first component
const Square = (props) => {
	const handleClick = (ev) => {
		setisActive(true);
		props.handleClick(ev);
	};

	const [isActive, setisActive] = useState(false);

	return (
		<>
			<button
				id={`${props.x}_${props.y}`} //Id identificador de la posición
				className="Square "
				onClick={handleClick}
				disabled={isActive}></button>
		</>
	);
};

Square.propTypes = {
	x: PropTypes.string.isRequired,
	y: PropTypes.string.isRequired,
};

export default Square;
// Como escalariamos las cajas en funcion del número de cajas?
