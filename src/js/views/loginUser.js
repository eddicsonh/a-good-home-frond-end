import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
export const LoginUser = () => {
	const history = useHistory();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { store, actions } = useContext(Context);
	return (
		<div className="container">
			<div className="row justify-content-center mt-3">
				<div className="col-4 d-flex flex-column justify-content-center">
					<form>
						<div className="form-group">
							<label htmlFor="inputEmail">Email:</label>
							<input
								type="input"
								className="form-control"
								value={email}
								onChange={e => setEmail(e.target.value)}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="inputPassword">Contrasena:</label>
							<input
								type="password"
								className="form-control"
								value={password}
								onChange={e => setPassword(e.target.value)}
							/>
						</div>
						<button
							className="btn btn-primary my-4"
							onClick={e => {
								e.preventDefault();
								e.stopPropagation();
								let result = actions.log_in(email, password);
								if (result) {
									history.push("/");
								} else {
									alert("credenciales malas...");
								}
							}}>
							Log in
						</button>
					</form>
					<a href="#" onClick={e => history.push("/signup/user")}>
						No tiene cuenta? Registrese aqui!
					</a>
				</div>
			</div>
		</div>
	);
};
