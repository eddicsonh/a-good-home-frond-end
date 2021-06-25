import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
export const SignUpUser = () => {
	const history = useHistory();
	const { store, actions } = useContext(Context);
	const [name, setName] = useState("");
	const [last_name, setLastName] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [id_document, setIdDocument] = useState("");
	const [password, setPassword] = useState("");
	return (
		<div className="container">
			<div className="row justify-content-center mt-3">
				<div className="col-6 d-flex flex-column justify-content-center">
					<div className="signup card mt-4">
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
												onChange={e => setLastName(e.target.value)}
											/>
										</div>
									</div>
									<div className="form-group mt-1">
										<label>Telefono:</label>
										<input
											type="input"
											className="form-control"
											value={phone}
											onChange={e => setPhone(e.target.value)}
										/>
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
											<label>Cedula de identidad</label>
											<input
												type="input"
												className="form-control"
												value={id_document}
												onChange={e => setIdDocument(e.target.value)}
											/>
										</div>
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
										className="btn btn-danger form-control"
										onClick={async e => {
											e.preventDefault();
											e.stopPropagation();
											await actions.sign_up_user(
												email,
												name,
												last_name,
												id_document,
												phone,
												password
											);
											history.push("/login/user");
										}}>
										Save
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>

			<Link to="/">
				<button className="btn btn-danger">Back home</button>
			</Link>
		</div>
	);
};

// async function saveUser() {
// 	if (
// 		user.name.trim() != "" &&
// 		user.last_name.trim() != "" &&
// 		user.email.trim() != "" &&
// 		user.phone.trim() != "" &&
// 		user.id_document.trim() != "" &&
// 		user.password.trim() != ""
// 	) {
// 		await actions.sign_up_user(user);
// 	}
// }
