import { NavLink } from "react-router-dom";
import "./styles.scss";

const Connection = () => {
	return (
		<div id="connection-module">
			<h3 id="connection-module-title">My account</h3>
			<div id="connection-module-links">
				<div id="connection-module-login">
					<NavLink to="/login">Login</NavLink>
				</div>
				<div id="connection-module-register">
					<NavLink to="/register">Don't have an account?</NavLink>
				</div>
			</div>
		</div>
	)
}

export default Connection;