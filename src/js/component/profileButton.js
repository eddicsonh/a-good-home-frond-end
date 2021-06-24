import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { Context } from "../store/appContext";

export const ProfileButton = () => {
	const history = useHistory();
	const { store, actions } = useContext(Context);

	return (
		<div className="btn mr-4">
			<button
				className="btn btn-secondary"
				type="button"
				id="profile-button"
				onClick={e => history.push("/user/profile")}>
				Perfil
			</button>
			{store.token != "" ? (
				<button
					type="button"
					className="btn btn-primary"
					onClick={async e => {
						await actions.log_out();
						history.push("/");
					}}>
					salir
				</button>
			) : (
				<Redirect to="/" />
			)}
		</div>
	);
};
