import React from "react";
import { useState, useContext } from "react";
import { Context } from "../store/appContext";
import logo from "../../img/logo.png";

export const Search = () => {
	const { store, actions } = useContext(Context);
	const [location, setLocation] = useState("");

	return (
		<div className="container-fluid home">
			<img src={logo} className="mt-5 logo_tamano" />
			<h2 className="text-center mt-3">
				<b>
					Encuentra <span className="red">tu</span> hogar
				</b>
			</h2>
			<div className="text-center mt-5">
				<div className="input-group mb-3">
					<div className="input-group-prepend">
						<div className="form-group">
							<select className="form-control" id="selectTypeTransaction">
								<option>Comprar</option>
								<option>Alquilar</option>
							</select>
						</div>
					</div>
					<input
						type="text"
						className="form-control"
						placeholder="Urbanización o Ciudad"
						value={location}
						onChange={e => setLocation(e.target.value)}
					/>
					<div>
						<button
							className="btn btn-primary"
							type="button"
							id="button-addon2"
							onClick={() => {
								actions.searchRealStates(location);
							}}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="50"
								height="20"
								fill="currentColor"
								className="bi bi-search"
								viewBox="0 0 16 16">
								<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
							</svg>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
