import Login from "../../components/login";
import config from "../../config";

import "./styles.scss";

const Homepage = () => {
    document.title = `Home • ${config.site.name}`;

    return (
        <div id="homepage">
            <div id="homepage-title">
                <h1>Welcome to <span className="accent-primary">Lahya</span>!</h1>
                <p className="italic">The place to find your dream job & internship.</p>
            </div>
            <div id="homepage-login">
                <Login />
            </div>
        </div>
    )
}

export default Homepage;
