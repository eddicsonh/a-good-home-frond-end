import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { Context } from "../store/appContext";

//demo.js lo utilice como prueba  par probar el login y logout

export const Demo = () => {
	const { store, actions } = useContext(Context);
	const history = useHistory();

	return (
		<div className="container">
			<h1>Welcome!</h1>
			{/* {store.token_agent != "" ? ( */}
			{/* // 				<button */}
			{/* // 					type="button"
// 					className="btn btn-primary"
// 					onClick={async e => { */}
			{/* // 						await actions.log_out_agent();
// 						history.push("/");
// 					}}>
// 					salir
// 				</button> */}
			{/* // 			) : (
// 				<Redirect to="/" />
// 			)} */}
		</div>
	);
};
