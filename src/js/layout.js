import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import { LoginAgent } from "./views/loginAgent";
import { SignUpAgent } from "./views/signUpAgent";
import { SignUpUser } from "./views/signUpUser";
import { LoginUser } from "./views/loginUser";
import { UserProfile } from "./component/userProfile";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/signup/agente">
							<SignUpAgent />
						</Route>
						<Route exact path="/signup/user">
							<SignUpUser />
						</Route>
						<Route exact path="/login/user">
							<LoginUser />
						</Route>
						<Route exact path="/user/profile">
							<UserProfile />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route exact path="/login/agent">
							<LoginAgent />
						</Route>
						<Route exact path="/demo">
							<Demo />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
