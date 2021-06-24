import React from "react";
import { Link, useHistory } from "react-router-dom";

export const DropDownButton = () => {
	const history = useHistory();
	return (
		<div className="ml-auto">
			<div className="btn-group mr-4">
				<button
					className="btn btn-danger dropdown-toggle"
					type="button"
					id="dropdownMenuUser"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					Ingresar | Registrarse
				</button>
				<div className="dropdown-menu" aria-labelledby="dropdownMenuUser">
					<a className="dropdown-item" onClick={e => history.push("/login/user")}>
						Usuario
					</a>
					<a className="dropdown-item" onClick={e => history.push("/login/agent")}>
						Agente
					</a>
				</div>
			</div>
		</div>
	);
};
