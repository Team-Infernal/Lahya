import { Routes, Route } from "react-router-dom";

import Homepage from "../../pages/Homepage";
import About from "../../pages/About";
import News from "../../pages/News";
import Privacy from "../../pages/Privacy";
import Terms from "../../pages/Terms";
import Account from "../../pages/Account";
import NoMatch from "../../pages/NoMatch";
import Admin from "../Account/Admin";

import "./styles.scss";

const Content = () => {
	return (
		<main>
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/about" element={<About />} />
				<Route path="/news" element={<News />} />
				<Route path="/privacy" element={<Privacy />} />
				<Route path="/terms" element={<Terms />} />
				<Route path="/account" element={<Account />} />
				<Route path="*" element={<NoMatch />} />
				<Route path="/admin" element={<Admin />}/>
			</Routes>
		</main>
	)
}


export default Content;