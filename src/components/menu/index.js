import { NavLink, useLocation } from "react-router-dom";

import config from "../../config";
import "./styles.scss";

const Menu = ({ setMenuState }) => {
	
	const { pathname } = useLocation();

	return (
		<div id="menu">
			<div id="menu-left">
				<div id="menu-left-title">
					<h1>{ config.site.name }</h1>
				</div>
				<div id="menu-left-details">
				{
					config.menu.left.map(section => (
						<div key={section.shortName} onClick={() => setMenuState(false)}>
							<NavLink to={section.route}>{ section.name }</NavLink>
						</div>
					))
				}
				</div>
			</div>
			<div id="menu-right">
				<div id="menu-right-exit" onClick={() => setMenuState(false)}>
					<i className="fas fa-xmark fa-fw"></i>
				</div>
				<div id="menu-right-details">
				{
					config.menu.right.map(section => (
						<div key={section.name.replace(" ", "").toLowerCase()} onClick={() => setMenuState(false)}>
							<NavLink to={section.route} className={pathname === section.route ? "bold" : null}>{pathname === section.route ? <i className="fas fa-angle-right fa-fw"></i> : null}{section.name}</NavLink>
						</div>
					))
				}
				</div>
			</div>
		</div>
	)
}

export default Menu;