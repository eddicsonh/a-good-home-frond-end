import React from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const history = useHistory();

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">A GOOD HOME</span>
			</Link>
			<div className="ml-auto">
				<div className="btn-group mr-4">
					<button
						className="btn btn-secondary dropdown-toggle"
						type="button"
						id="dropdownMenuUser"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false">
						Log-in/Sign-up
					</button>
					<div className="dropdown-menu" aria-labelledby="dropdownMenuUser">
						<a className="dropdown-item" onClick={e => history.push("/login/user")}>
							Usuario
						</a>
						<a className="dropdown-item" onClick={e => history.push("/login/agent")}>
							Agente
						</a>
					</div>
				</div>
				<div className="btn mr-4">
					<button
						className="btn btn-secondary"
						type="button"
						id="profile-button"
						onClick={e => history.push("/user/profile")}>
						Profile
					</button>
				</div>
				{/* 
				<div className="btn-group mr-4">
					<button
						className="btn btn-secondary dropdown-toggle"
						type="button"
						id="dropdownMenuAgent"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false">
						agent
					</button>
					<div className="dropdown-menu" aria-labelledby="dropdownMenuAgent">
						
					</div>
				</div> */}
			</div>
		</nav>
	);
};
