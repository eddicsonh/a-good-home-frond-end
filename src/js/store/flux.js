const getState = ({ getStore, getActions, setStore }) => {
	return {
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
	};
};

export default getState;
