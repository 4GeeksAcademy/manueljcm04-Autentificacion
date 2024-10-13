import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	useEffect(() => {
		
		if (localStorage.getItem("token")) {
			setIsAuthenticated(true);
		}
	}, []);

	const logout = () => {
		localStorage.removeItem("token");
		setIsAuthenticated(false);
	};

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Inicio</span>
				</Link>
				<div className="ml-auto">
					{!isAuthenticated && (
						<>
							<Link to="/signup">
								<button className="btn btn-primary m-1">Signup</button>
							</Link>
							<Link to="/login">
								<button className="btn btn-primary m-1">Login</button>
							</Link>
						</>
					)}
					{isAuthenticated && (
						<Link to="/">
							<button className="btn btn-primary m-1" onClick={logout}>Logout</button>
						</Link>
					)}
				</div>
			</div>
		</nav>
	);
};