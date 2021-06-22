import React from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const history = useHistory();

	return (
		<nav className="navbar navbar-light bg-light">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					A<span className="red">GOOD</span>
					HOME
				</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Sing up / Register</button>
				</Link>
			</div>
		</nav>
	);
};
