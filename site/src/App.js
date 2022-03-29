import { useState } from "react";

import Navbar from "../src/components/navbar";
import Footer from "./components/footer";
import Menu from "./components/menu";
import Content from "./components/content";
import "./styles/index.scss";

const App = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const setMenuState = (status) => {
		setIsMenuOpen(status);
	}

	return (
		<div className="App">
			{ isMenuOpen ? <Menu setMenuState={setMenuState} /> : null }
			<Navbar setMenuState={setMenuState}/>
			<Content />
			<Footer />
		</div>
	);
}

export default App;