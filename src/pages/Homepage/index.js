// import Login from "../../components/login";
import config from "../../config";
import { Section1, Section2, Section3, Section4 } from "./sections";

import "./styles.scss";

const Homepage = () => {
    document.title = `Home • ${config.site.name}`;

    return (
        <div id="homepage">
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
        </div>
    )
}

export default Homepage;
