import React from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import rigo from "../../img/logo.png";

export const Inmuebles = () => {
	const { store } = useContext(Context);

	return (
		<div className="container">
			<div className="d-flex flex-wrap">
				{store.realStates.map((item, index) => {
					return (
						<div key={index} className="card card-max-width">
							<img src={rigo} className="card-img-top" alt="Character Img" />
							<div className="card-body">
								<h5 className="card-title">{item.name}</h5>
							</div>
							<ul className="list-group list-group-flush">
								<li className="list-group-item">{item.location}</li>
							</ul>
						</div>
					);
				})}
			</div>
		</div>
	);
};
