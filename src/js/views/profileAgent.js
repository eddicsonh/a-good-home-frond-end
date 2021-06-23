import React from "react";
import "../../styles/profileAgent.scss";

export const ProfileAgent = () => {
	return (
		<div className="row px-sm">
			<div className="col-md-4 mb-3">
				<div className="card">
					<div className="card-body">
						<div className="photo d-flex flex-column align-items-center text-center">
							<img
								src={
									"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
								}
								alt="Admin"
								className="rounded-circle"
								height="150"
								width="150"
							/>
							<div className="description mt-3">
								<h4>Nombre del agente</h4>
								<p className="text-secondary mb-1">Locacion del agente</p>
								<p className="text-muted font-size-sm">Descripcion</p>
							</div>
						</div>
					</div>
				</div>
				<div className="card mt-3">
					<ul className="list-group list-group-flush">
						<li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
							<h6 className="logo mb-0">Twitter</h6>
							<a>@</a>
						</li>
						<li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
							<h6 className="logo mb-0">Twitter</h6>
							<a>@</a>
						</li>
						<li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
							<h6 className="logo mb-0">Twitter</h6>
							<a>@</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="col-md-8">
				<div className="card">
					<div className="card-body">
						<div className="row">
							<div className="col-sm-3">
								<h6>Nombre:</h6>
							</div>
							<div className="col-sm-9">
								<p>Elena Pena</p>
							</div>
						</div>
						<hr />
						<div className="row">
							<div className="col-sm-3">
								<h6>Email:</h6>
							</div>
							<div className="col-sm-9">
								<p>@gmail.com</p>
							</div>
						</div>
						<hr />
						<div className="row">
							<div className="col-sm-3">
								<h6>Phone:</h6>
							</div>
							<div className="col-sm-9">
								<p>5555</p>
							</div>
						</div>
						<hr />
						<button>editar</button>
					</div>
				</div>
			</div>
		</div>
	);
};
