import { Navigate } from "react-router-dom";

import config from "../../../config";

const Logout = () => {
	document.title = `Logging out • ${config.site.name}`;

	const logout = () => {
		document.cookie = "loggedin=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
		return <Navigate to="/" />;
	}

	return (
		<div>
			<h1>Logging out...</h1>
			{
				logout()
			}
		</div>
	)
}

export default Logout;