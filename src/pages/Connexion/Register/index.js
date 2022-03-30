import { NavLink } from "react-router-dom";

import config from "../../../config";
import "../styles.scss";

const Register = () => {
	document.title = `Register • ${config.site.name}`;

	return (        
		<div id="register">
			<div id="register-container">
				<h1 id="register-title">Create a {config.site.name} account</h1>
				<form id="register-form" method="post" action="http://localhost/server/php/register.php">
					<div id="register-form-tc">
						<input type="text" placeholder="First Name" name="first_name" required />
						<input type="text" placeholder="Last Name" name="last_name" required />
					</div>
					<input type="email" placeholder="Email" name="login" required />
					<input type="password" placeholder="Password" name="hash" required />
					<input type="text" placeholder="School" name="school" required />
					<input type="text" placeholder="Class" name="class" required />
					<input type="submit" value="Register" />
				</form>
				<p id="register-login"><NavLink to="/login">Already have an account?</NavLink></p>
			</div>
		</div>
	)
}

export default Register;