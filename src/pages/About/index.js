import config from "../../config";

const About = () => {
    document.title = `About us • ${config.site.name}`;

    return (
        <div id= "about">
            <h1>Hello world!</h1>
        </div>
    )
}

export default About;

