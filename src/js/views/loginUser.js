import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
export const LoginUser = () => {
	const history = useHistory();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { store, actions } = useContext(Context);
	return (
		<div className="container-fluid login-signup">
			<div className="row login justify-content-center">
				<div className="col-4 d-flex flex-column justify-content-center">
					<div className="login card mt-5">
						<div className="card-body">
							<div className="p-3">
								<div className="mb-4">
									<h3 className="h4 font-weight-bold text-theme">Login</h3>
								</div>

								<h6 className="h5">Bienvenido de vuelta!</h6>
								<p className="text-muted mt-2 mb-4">Ingresa tu email y contraseña para acceder</p>

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
									<div className="form-group mb-5">
										<label htmlFor="inputPassword">Password</label>
										<input
											type="password"
											className="form-control"
											value={password}
											onChange={e => setPassword(e.target.value)}
										/>
									</div>
									<button
										type="button"
										className="btn btn-danger"
										onClick={e => {
											let result = actions.log_in(email, password);
											if (result) {
												history.push("/");
											} else {
												alert("credenciales malas...");
											}
										}}>
										Log in
									</button>
									<p className="text-muted text-center mt-5">
										<a href="#" onClick={e => history.push("/signup/user")}>
											No tienes cuenta? Registrate!
										</a>
									</p>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
