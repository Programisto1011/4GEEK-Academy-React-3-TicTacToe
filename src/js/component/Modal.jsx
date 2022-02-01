import React, { useState } from "react";
import * as PropTypes from "prop-types";
import { Modal, Button } from "react-bootstrap";
//Install npm install react-bootstrap bootstrap@5.1.3

import "../../styles/Modal.css";

function IModal(props) {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(props.Win);

	return (
		<>
			<Button variant="primary" onClick={handleShow}>
				Launch static backdrop modal
			</Button>

			<Modal show={show} backdrop="static" keyboard={false}>
				<Modal.Header>
					<Modal.Title>Modal title</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					I will not close if you click outside me. Don't even try to
					press escape key.
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary">Understood</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default IModal;
