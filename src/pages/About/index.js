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
            <p>Today, students carry out their research of internship in company using their personal and professional networks, and by applying for offers found everywhere. In order to make this stage of internship research easier and practical, we created Lahya. It is a web site that brings together different internship offers, and that allows to store the data of companies that have already taken a trainee, or who are looking for one.</p>
        </div>
    )
}

export default About;

