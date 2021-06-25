import React from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import image from "../../img/profile.png";

export const ProfileAgents = () => {
	const history = useHistory();
	const { store } = useContext(Context);

	return (
		<div className="container-fluid">
			<h2 className="text-center mt-5">
				<b>
					Ag
					<span className="red">ent</span>
					es
				</b>
			</h2>
			<div className="d-flex flex-wrap">
				{store.searchAgent.map((item, index) => {
					return (
						<div key={index} className="card-max-width">
							<div className="row no-gutters">
								<div className="col-md-4">
									<img src={image} className="card-img-top img-thumbnail" alt="inmueble Img" />
								</div>
								<div className="col-md-8">
									<div className="card-body">
										<h3 className="card-title">
											{item.name} {item.last_name}
										</h3>
										<p className="card-text">{item.city}</p>
										<p className="card-text">{item.phone}</p>
										<p className="card-text">{item.email}</p>
										<button className="btn btn-danger" type="button" id="detailRs-button">
											Contactar
										</button>
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
