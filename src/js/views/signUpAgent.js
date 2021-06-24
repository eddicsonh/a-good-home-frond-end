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

	return (
		<div className="container">
			<div className="row justify-content-center mt-3">
				<div className="col-4 d-flex flex-column justify-content-center">
					<form>
						<div className="form-group">
							<label>Nombre:</label>
							<input
								type="input"
								className="form-control"
								value={name}
								onChange={event => setName(event.target.value)}
							/>
						</div>
						<div className="form-group">
							<label>Apellido:</label>
							<input
								type="input"
								className="form-control"
								value={last_name}
								onChange={e => setLast_name(e.target.value)}
							/>
						</div>
						<div className="form-group">
							<label>Telefono:</label>
							<input
								type="input"
								className="form-control"
								value={phone}
								onChange={e => setPhone(e.target.value)}
							/>
						</div>
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
						<div className="form-group">
							<label>Descripcion del agente:</label>
							<input
								type="input"
								className="form-control"
								value={description}
								onChange={e => setDescription(e.target.value)}
							/>
						</div>
						<button
							type="button"
							className="btn btn-primary form-control"
							onClick={async e => {
								await actions.sign_up_agent(email, password, name, last_name, phone, description);
								history.push("/agent/profile");
							}}>
							Registrar
						</button>
					</form>
				</div>
			</div>

			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
