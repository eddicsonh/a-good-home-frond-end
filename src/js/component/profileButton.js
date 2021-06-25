import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { Context } from "../store/appContext";

export const ProfileButton = () => {
	const history = useHistory();
	const { store, actions } = useContext(Context);

	return (
		<div className="btn mr-4">
			{store.user.length > 0 ? (
				<button
					className="btn btn-danger"
					type="button"
					id="profile-button"
					onClick={e => history.push("/user/profile")}>
					Perfil
				</button>
			) : (
				<button
					className="btn btn-danger"
					type="button"
					id="profile-button"
					onClick={e => history.push("/agent/profile")}>
					Perfil
				</button>
			)}
			{store.token != "" ? (
				<div className="btn mr-4">
					<button
						type="button"
						className="btn btn-danger"
						onClick={async e => {
							await actions.log_out();
							history.push("/");
						}}>
						Salir
					</button>
				</div>
			) : (
				<Redirect to="/" />
			)}

			{store.token_agent != "" ? (
				<div className="btn mr-4">
					<button
						type="button"
						className="btn btn-danger"
						onClick={async e => {
							await actions.log_out_agent();
							history.push("/");
						}}>
						Salir
					</button>
				</div>
			) : (
				<Redirect to="/" />
			)}
		</div>
	);
};
