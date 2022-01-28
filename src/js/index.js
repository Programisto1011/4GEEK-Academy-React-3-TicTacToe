//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/Main.css";

//import your own components
import Main from "./view/Main.jsx";

//render your react application
ReactDOM.render(<Main />, document.querySelector("#app"));
