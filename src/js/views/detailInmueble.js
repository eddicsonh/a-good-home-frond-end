import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const DetailInmueble = props => {
	const { store, actions } = useContext(Context);
	let { rsId } = useParams();

	return (
		<div className="container-fluid">
			{store.realStates.map((item, index) => {
				if (item.id == rsId) {
					const image = require(`../../img/${item.image}.png`);
					return (
						<div>
							<div className="row">
								<div className="col-sm-5">
									<img src={image} className="rounded mx-auto d-block" alt="Responsive image" />
									<h5 className="text-center">
										<span> {item.description}</span>
										<b className="red"> Precio:</b> {item.price}$
									</h5>
								</div>
								<div className="col-sm-6">
									<h3 className="text-center">
										<span className="red">Ubicación</span>
										<hr />
									</h3>
									<p>{item.location}</p>
									<h3 className="text-center">
										<span className="red">Descripción</span>
										<hr />
									</h3>
									<ul>
										<li>
											<p>
												<b>Superficie Total: </b>
												{item.total_area} m²
											</p>
										</li>
										<li>
											<p>
												<b>Superficie Construida: </b>
												{item.builded_surface} m²
											</p>
										</li>
										<li>
											<p>
												<b>Baños: </b>
												{item.bathrooms}
											</p>
										</li>
										<li>
											<p>
												<b>Habitaciones: </b>
												{item.rooms}
											</p>
										</li>
										<li>
											<p>
												<b>Puestos de Estacionamiento: </b>
												{item.parkings}
											</p>
										</li>
									</ul>
									<h3 className="text-center">
										<span className="red">Mas Información</span>
										<hr />
									</h3>
									<p>{item.additional_information}</p>
									<h3 className="text-center">
										<span className="red">Contactos</span>
										<hr />
									</h3>
									<p>
										<b>Telefono: </b>
										{item.phone}
									</p>
									<p>
										<b>Redes Sociales</b>@{item.RRSS}
									</p>
								</div>
							</div>
							<div className="container">
								<h3 className="text-center mt-5">
									<span className="red">Agentes Inmobiliaros</span>
									<hr />
								</h3>
								<div className="text-center mt-2">
									<button className="btn btn-danger">Contactar Uno</button>
								</div>
							</div>

							<div className="row mt-5">
								<div className="col-sm-6 text-center">
									<h4>
										Comunícate con el vendedor
										<hr />
									</h4>
									<ul>
										<li>
											<p>
												Verifica que el inmueble exista y las condiciones de la documentación
												del mismo.
											</p>
										</li>
										<li>
											<p>
												Siempre habla por teléfono con el vendedor y presta especial atención si
												está en el exterior.
											</p>
										</li>
									</ul>
								</div>
								<div className="col-sm-6 text-center">
									<h4>
										Al pagar o reservar
										<hr />
									</h4>
									<ul>
										<li>
											<p>
												No uses servicios de pago anónimos para pagar, reservar o adelantar
												dinero.
											</p>
										</li>
										<li>
											<p>
												Sospecha de inmuebles con valores muy inferiores a los normales del
												mercado.
											</p>
										</li>
									</ul>
								</div>
							</div>
						</div>
					);
				}
			})}
		</div>
	);
};
