import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";

export const ProfileAgent = () => {
	const { store, actions } = useContext(Context);
	const agent = store.agent[0];
	console.log(agent);
	return (
		<div className="container">
			<div className="main-body">
				<h1>
					<span>
						P<span className="red">er</span>
						fil
					</span>
				</h1>
				<hr />
				<div className="row px-sm">
					<div className="col-md-4 mb-3">
						<div className="card">
							<div className="card-body">
								<div className="d-flex flex-column align-items-center text-center">
									<img
										src={"https://i.pinimg.com/564x/c0/fc/f1/c0fcf164efd9a75a5f7d8065d4365451.jpg"}
										alt="Admin"
										className="rounded-circle"
										height="150"
										width="150"
									/>
									<div className="mt-3">
										<h4>
											{agent.name} {agent.last_name}
										</h4>
										<h4 />
										<p className="text-secondary mb-1">{agent.city}</p>
										<p className="text-muted font-size-sm">{agent.description}</p>
									</div>
								</div>
							</div>
						</div>
						<div className="card mt-3">
							<ul className="list-group list-group-flush">
								<li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
									<h6 className="mb-0">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
											className="feather feather-instagram mr-2 icon-inline text-danger">
											<rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
											<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
											<line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
										</svg>
									</h6>
									<a className="text-secondary">
										@{agent.name}
										{agent.last_name}
									</a>
								</li>
								<li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
									<h6 className="mb-0">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
											className="feather feather-twitter mr-2 icon-inline text-info">
											<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
										</svg>
									</h6>
									<a className="text-secondary">
										@{agent.name}_{agent.last_name}
									</a>
								</li>
								<li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
									<h6 className="mb-0">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
											className="feather feather-facebook mr-2 icon-inline text-primary">
											<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
										</svg>
									</h6>
									<a className="text-secondary">
										@{agent.name} {agent.last_name}
									</a>
								</li>
								<hr />
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
									<div className="col-sm-9 text-secondary">
										<p>
											{agent.name} {agent.last_name}
										</p>
									</div>
								</div>
								<hr />
								<div className="row">
									<div className="col-sm-3">
										<h6>Email:</h6>
									</div>
									<div className="col-sm-9 text-secondary">
										<p>{agent.email}</p>
									</div>
								</div>
								<hr />
								<div className="row">
									<div className="col-sm-3">
										<h6>Phone:</h6>
									</div>
									<div className="col-sm-9 text-secondary">
										<p>{agent.phone}</p>
									</div>
								</div>
								<hr />
								<a className="btn btn-danger" target="__blank">
									Edit
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
