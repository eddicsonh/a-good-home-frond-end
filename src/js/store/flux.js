const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: "",
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
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
				let response = await fetch("http://192.168.0.13:3000/sign-up", {
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
						last_name: response.last_name
					});
					return true;
				}
				return false;
			},
			log_in: async (email, password) => {
				let response = await fetch("http://192.168.0.13:3000/log-in", {
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
						user: body.user
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
					user: null
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
			sign_up: async (name, last_name, phone, email, password) => {
				let response = await fetch("http://localhost:3000/sign-up", {
					method: "POST",
					body: JSON.stringify({
						name,
						last_name,
						phone,
						email,
						password
					}),
					headers: {
						"Content-Type": "application/json"
					}
				});
			}
		}
	};
};

export default getState;
