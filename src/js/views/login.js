import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export const Login = () => {
	const { email, setEmail } = useState("");
	const { password, setPassword } = useState("");

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
					</form>
				</div>
			</div>
		</div>
	);
};
