import config from "../../config";
import "./styles.scss";

const Navbar = ({ setMenuState }) => {
    return (
        <nav id="navbar">
            <div id="navbar-title">
                <h1>{ config.site.name }</h1>
            </div>
            <div id="navbar-menu" onClick={() => setMenuState(true)}>
                <i className="fas fa-bars fa-fw"></i>
            </div>
        </nav>
    );
};

export default Navbar;