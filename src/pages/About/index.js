import config from "../../config";
import "./styles.scss";

const About = () => {
    document.title = `About us • ${config.site.name}`;

    return (
        <div id= "about">
            <h1>About</h1>
            <p>This website was made by 4 members of <a href="https://teaminfernal.fr"><b>Team Infernal</b></a>:</p>

            <ul>
                <li>Samuel Ward</li>
                <li>Tristan Jehanno</li>
                <li>Kylian Renault</li>
                <li>Charles Lefranc</li>
            </ul>
            
        </div>
    )
}

export default About;

