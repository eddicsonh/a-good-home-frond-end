import React from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

export const Inmuebles = () => {
	const history = useHistory();
	const { store } = useContext(Context);

	return (
		<div className="container-fluid">
			<h2 className="text-center mt-5">
				<b>
					In
					<span className="red">muebl</span>
					es
				</b>
			</h2>
			<div className="d-flex flex-wrap">
				{store.realStates.map((item, index) => {
					const image = require(`../../img/${item.image}.png`);
					return (
						<div key={index} className="card-max-width">
							<div className="row no-gutters">
								<div className="col-md-4">
									<img src={image} className="card-img-top img-thumbnail" alt="inmueble Img" />
								</div>
								<div className="col-md-8">
									<div className="card-body">
										<h3 className="card-title">{item.name}</h3>
										<p className="card-text">
											<span className="red">
												$-
												{item.price}
											</span>
										</p>
										<p className="card-text">{item.location}</p>
										<p className="card-text">{item.phone}</p>
										<button
											className="btn btn-danger"
											type="button"
											id="detailRs-button"
											onClick={e => history.push("/inmueble/detail")}>
											Ver detalle
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
