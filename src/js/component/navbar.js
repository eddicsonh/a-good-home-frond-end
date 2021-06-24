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
					A<span className="red">GOOD</span>
					HOME
				</span>
			</Link>
			{store.loggedIn ? <ProfileButton /> : <DropDownButton />}
		</nav>
	);
};
