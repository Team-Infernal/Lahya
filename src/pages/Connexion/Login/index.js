import { NavLink } from "react-router-dom";

import config from "../../../config";
import "../styles.scss";

const Login = () => {
	document.title = `Login • ${config.site.name}`;

	return (
		<div id="login">
			<h1 id="login-title">Login to {config.site.name}</h1>
			<form id="login-form" method="post" action="http://localhost/server/php/login.php">
				<input type="email" placeholder="Email" name="email" required />
				<input type="password" placeholder="Password" name="password" required />
				<input type="submit" value="Login" />
			</form>
			<p id="login-register"><NavLink to="/register">Don't have an account?</NavLink></p>
		</div>
	)
}

export default Login;