import React from "react";

export const Search = () => {
	return (
		<div className="container-fluid home-home">
			<h2 className="text-center pt-5">
				<i className="home-Title">El hogar de tus sueños está a un solo paso</i>
			</h2>
			<div className="container-fluid home-input">
				<div className="input-group">
					<input
						type="text"
						className="form-control home-input"
						placeholder="       Agente Inmobiliario, Ciudad o Urbanización"
					/>
					<span className="input-group-btn">
						<button className="btn btn-danger home-button" type="button">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="50"
								height="20"
								fill="currentColor"
								className="bi bi-search"
								viewBox="0 0 16 16">
								<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
							</svg>
						</button>
					</span>
				</div>
			</div>
		</div>
	);
};
