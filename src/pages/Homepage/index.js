// import Login from "../../components/login";
import config from "../../config";
import { Section1, Section2 } from "./sections";

import "./styles.scss";

const Homepage = () => {
    document.title = `Home • ${config.site.name}`;

    return (
        <div id="homepage">
            <Section1 />
            {/* <div id="homepage-login">
                <Login />
            </div> */}
            <Section2 /> 
        </div>
    )
}

export default Homepage;
