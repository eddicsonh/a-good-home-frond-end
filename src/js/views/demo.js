import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { Context } from "../store/appContext";

//demo.js lo utilice como prueba  par probar el login y logout

export const Demo = () => {
	return (
		<div className="container">
			<h1>Welcome!</h1>
		</div>
	);
};
