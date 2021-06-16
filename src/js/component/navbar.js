import React from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const history = useHistory();

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link>
			<div className="ml-auto">
				<a className="nav-link">
					<button className="btn btn-primary mr-1" onClick={e => history.push("/login")}>
						log-in
					</button>
					<button className="btn btn-primary " onClick={e => history.push("/demo")}>
						sign-up
					</button>
				</a>
			</div>
		</nav>
	);
};
