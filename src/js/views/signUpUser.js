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
	async function saveUser() {
		if (
			user.name.trim() != "" &&
			user.last_name.trim() != "" &&
			user.email.trim() != "" &&
			user.phone.trim() != "" &&
			user.id_document.trim() != "" &&
			user.password.trim() != ""
		) {
			await actions.sign_up_user(user);
		}
	}
	return (
		<div className="container">
			<div className="row justify-content-center mt-3">
				<div className="col-4 d-flex flex-column justify-content-center">
					<form>
						<div className="form-group">
							<label>Nombre</label>
							<input
								type="input"
								className="form-control"
								value={name}
								onChange={e => setName(e.target.value)}
							/>
						</div>
						<div className="form-group">
							<label>Apellido</label>
							<input
								type="input"
								className="form-control"
								value={last_name}
								onChange={e => setLastName(e.target.value)}
							/>
						</div>
						<div className="form-group">
							<label>Email</label>
							<input
								type="input"
								className="form-control"
								value={email}
								onChange={e => setEmail(e.target.value)}
							/>
						</div>
						<div className="form-group">
							<label>Telefono</label>
							<input
								type="input"
								className="form-control"
								value={phone}
								onChange={e => setPhone(e.target.value)}
							/>
						</div>
						<div className="form-group">
							<label>Cedula</label>
							<input
								type="input"
								className="form-control"
								value={id_document}
								onChange={e => setIdDocument(e.target.value)}
							/>
						</div>
						<div className="form-group">
							<label>Contrasena</label>
							<input
								type="password"
								className="form-control"
								value={password}
								onChange={e => setPassword(e.target.value)}
							/>
						</div>
						<button
							type="button"
							className="btn btn-primary form-control"
							onClick={async e => {
								e.preventDefault();
								e.stopPropagation();
								await actions.sign_up_user(email, name, last_name, id_document, phone, password);
								history.push("/");
							}}>
							Save
						</button>
						<Link className="mt-3 w-100 text-center" to="/">
							Back
						</Link>
					</form>
				</div>
			</div>
		</div>
	);
};
