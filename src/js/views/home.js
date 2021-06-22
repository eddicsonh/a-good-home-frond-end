import React from "react";
import { Search } from "../component/search";
import "../../styles/home.scss";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export const Home = () => (
	<div className="container-fluid home">
		<Search />
	</div>
);
