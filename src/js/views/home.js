import React from "react";
import { useContext } from "react";
import { Search } from "../component/search";
import "../../styles/home.scss";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { Inmuebles } from "../component/inmuebles";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<React.Fragment>
			<Search />

			{store.realStates_status ? <Inmuebles /> : ""}
		</React.Fragment>
	);
};
