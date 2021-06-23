import React from "react";
import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export const LoginAgent = () => {
	const { store, actions } = useContext(Context);
	const history = useHistory();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

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
							<label htmlFor="inputPassword">Password:</label>
							<input
								type="password"
								className="form-control"
								value={password}
								onChange={e => setPassword(e.target.value)}
							/>
						</div>
						<button
							type="button"
							className="btn btn-primary my-4"
							onClick={e => {
								let result = actions.log_in_agent(email, password);
								if (result) {
									history.push("/demo");
								} else {
									alert("credenciales malas...");
								}
							}}>
							Log in
						</button>
					</form>
					<a onClick={e => history.push("/signup/user")}>No tienes cuenta? Registrate!</a>
				</div>
			</div>
		</div>
	);
};
