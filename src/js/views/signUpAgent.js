import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

export const SignUpAgent = () => {
	const history = useHistory();
	const [names, setNames] = useState("");
	const [last_name, setLast_name] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<div className="container">
			<div className="row justify-content-center mt-3">
				<div className="col-4 d-flex flex-column justify-content-center">
					<form>
						<div className="form-group">
							<label htmlFor="inputEmail">Nombre:</label>
							<input
								type="input"
								className="form-control"
								value={names}
								onChange={event => setNames(event.target.value)}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="inputEmail">Apellido:</label>
							<input
								type="input"
								className="form-control"
								value={last_name}
								onChange={e => setLast_name(e.target.value)}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="inputEmail">Telefono:</label>
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
						<button className="btn btn-primary my-4">Log in</button>
					</form>
				</div>
			</div>

			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
