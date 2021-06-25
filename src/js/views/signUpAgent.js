import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const SignUpAgent = () => {
	const { store, actions } = useContext(Context);
	const history = useHistory();
	const [name, setName] = useState("");
	const [last_name, setLast_name] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [description, setDescription] = useState("");
	const [city, setCity] = useState("");

	return (
		<div className="container-fluid login-signup">
			<div className="row justify-content-center mt-3">
				<div className="col-6 d-flex flex-column justify-content-center">
					<div className="signup card mt-4 mb-4">
						<div className="card-body">
							<div className="p-3">
								<div className="mb-4">
									<h3 className="h4 font-weight-bold text-theme">Registro</h3>
								</div>

								<h6 className="h5">Bienvenido!</h6>
								<p className="text-muted mt-2 mb-4">Registrate para poder acceder</p>
								<form>
									<div className="form-row">
										<div className="col">
											<label>Nombre:</label>
											<input
												type="input"
												className="form-control"
												value={name}
												onChange={event => setName(event.target.value)}
											/>
										</div>
										<div className="col">
											<label>Apellido:</label>
											<input
												type="input"
												className="form-control"
												value={last_name}
												onChange={e => setLast_name(e.target.value)}
											/>
										</div>
									</div>
									<div className="form-row">
										<div className="col">
											<label>Telefono:</label>
											<input
												type="input"
												className="form-control"
												value={phone}
												onChange={e => setPhone(e.target.value)}
											/>
										</div>
										<div className="col">
											<label>Locacion:</label>
											<input
												type="input"
												className="form-control"
												value={city}
												onChange={e => setCity(e.target.value)}
											/>
										</div>
									</div>
									<div className="form-row mt-1">
										<div className="col">
											<label htmlFor="inputEmail">Email:</label>
											<input
												type="input"
												className="form-control"
												value={email}
												onChange={e => setEmail(e.target.value)}
											/>
										</div>
										<div className="col">
											<label htmlFor="inputPassword">Password:</label>
											<input
												type="password"
												className="form-control"
												value={password}
												onChange={e => setPassword(e.target.value)}
											/>
										</div>
									</div>
									<div className="form-group">
										<label>Descripcion del agente:</label>
										<textarea
											type="input"
											className="form-control"
											value={description}
											onChange={e => setDescription(e.target.value)}
										/>
									</div>
									<button
										type="button"
										className="btn btn-danger"
										onClick={async e => {
											await actions.sign_up_agent(
												email,
												password,
												name,
												last_name,
												phone,
												description,
												city
											);
											history.push("/login/agent");
										}}>
										Registrar
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
