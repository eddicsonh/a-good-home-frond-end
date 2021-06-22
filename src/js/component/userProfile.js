import React from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

export const UserProfile = () => {
	return (
		<div className="container">
			<div className="main-body">
				<nav aria-label="breadcrumb" className="main-breadcrumb">
					<ol className="breadcrumb">
						<li className="breadcrumb-item">
							<a href="index.html">Home</a>
						</li>
						<li className="breadcrumb-item">
							<a href="javascript:void(0)">User</a>
						</li>
						<li className="breadcrumb-item active" aria-current="page">
							User Profile
						</li>
					</ol>
				</nav>
                
			</div>
		</div>
	);
};
