import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export const LoginUser = () => {
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
							onClick={async e => {
								let result = await actions.log_in(email, password);
								if (result) {
									history.push("/demo");
								} else {
									alert("credenciales malas...");
								}
							}}>
							Log in
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};
