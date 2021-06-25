const URLAPI = "http://127.0.0.1:3000";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user: [],
			loggedIn: false,
			token: "",
			endpoint: "http://127.0.0.1:3000/",
			realStates: [],
			realStates_status: false,
			agent: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			searchRealStates: async location => {
				const store = getStore();
				const response = await fetch(`${URLAPI}/real_state/seach_rs/${location}`);
				const realStateObject = await response.json();
				setStore({
					realStates: realStateObject.response,
					realStates_status: true
				});
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			sign_up_user: async (email, name, last_name, id_document, phone, password) => {
				let response = await fetch("http://127.0.0.1:3000/sign-up", {
					method: "POST",
					body: JSON.stringify({
						email,
						name,
						last_name,
						id_document,
						phone,
						password
					}),
					headers: {
						"Content-type": "application/json"
					}
				});
				if (response.ok) {
					response = await response.json();
					setStore({
						id: response.id,
						email: response.email,
						name: response.name,
						last_name: response.last_name,
						id_document: response.id_document,
						phone: response.phone,
						password: response.password
					});
					return true;
				}
				return false;
			},
			update_user: async (name, last_name, phone, password) => {
				let response = await fetch("http://192.168.0.13:3000/user/profie/<user_id>", {
					method: "PUT",
					body: JSON.stringify({
						name,
						last_name,
						phone,
						password
					}),
					headers: {
						"Content-type": "application/json"
					}
				});
			},
			get_user: async () => {
				const store = getStore();
				const response = await fetch("http://127.0.0.1:3000/user/</user_id>");
				const data = await response.json();
				setStore({ user: data.user });
				store.user.id;
			},
			log_in: async (email, password) => {
				let response = await fetch("http://127.0.0.1:3000/log-in", {
					method: "POST",
					body: JSON.stringify({
						email,
						password
					}),
					headers: {
						"Content-type": "application/json"
					}
				});
				if (response.ok) {
					let body = await response.json();
					setStore({
						token: body.token,
						user: [body.user],
						loggedIn: true
					});
					localStorage.setItem("token", body.token);
					localStorage.setItem("user", JSON.stringify(body.user));
					return true;
				}
				return false;
			},
			log_out: () => {
				setStore({
					token: "",
					user: null,
					loggedIn: false
				});
				localStorage.removeItem("token");
				localStorage.removeItem("user");
			},
			setToken: (token, user) => {
				setStore({
					token,
					user: JSON.parse(user)
				});
			},

			sign_up_agent: async (email, password, name, last_name, phone, description) => {
				let response = await fetch("http://127.0.0.1:3000/signup/agent", {
					method: "POST",
					body: JSON.stringify({
						email,
						name,
						last_name,
						phone,
						description
					}),
					headers: {
						"Content-type": "application/json"
					}
				});
				if (response.ok) {
					response = await response.json();
					setStore({
						id: response.id,
						email: response.email,
						name: response.name,
						last_name: response.last_name,
						phone: response.phone,
						description: response.description
					});
					return true;
				}
				return false;
			},
			log_in_agent: async (email, password) => {
				let response = await fetch("http://127.0.0.1:3000/log-in/agent", {
					method: "POST",
					body: JSON.stringify({
						email,
						password
					}),
					headers: {
						"Content-type": "application/json"
					}
				});
				if (response.ok) {
					let body = await response.json();
					setStore({
						token_agent: body.token_agent,
						agent: [body.agent],
						loggedIn: true
					});

					localStorage.setItem("token_agent", body.token_agent);
					localStorage.setItem("agent", JSON.stringify(body.agent));
					return true;
				}
				return false;
			},
			log_out_agent: () => {
				setStore({
					token_agent: "",
					agent: null,
					loggedIn: false
				});
				localStorage.removeItem("token_agent");
				localStorage.removeItem("agent");
			},
			setToken_agent: (token_agent, agent) => {
				setStore({
					token_agent,
					agent: JSON.parse(agent)
				});
			},

			get_agent: async () => {
				const store = getStore();
				const response = await fetch("http://127.0.0.1:3000/agent/<agent_id>");
				const data = await response.json();
				setStore({ agent: data.agent });
				store.agent.id;
			}
		}
	};
};

export default getState;
