import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { DropDownButton } from "../component/dropDownButton";
import { ProfileButton } from "../component/profileButton";
import { Context } from "../store/appContext";
export const Navbar = () => {
	const history = useHistory();
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					A<span className="left-logo">GOOD</span>
					HOME
				</span>
			</Link>

			{store.loggedIn ? <ProfileButton /> : <DropDownButton />}
			<Link to="/findagent">
				<div className="d-flex flex-row">
					<div className="p-2">
						<span>Encuentra un Agente</span>
					</div>
				</div>
			</Link>
		</nav>
	);
};
