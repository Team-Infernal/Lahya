import config from "../../config";
import "./styles.scss";

const About = () => {
    document.title = `About us • ${config.site.name}`;

    return (
        <div id= "about">
            <h1>A propos</h1>
            <p>Ce site web à été créé par 4 membres de la Team Infernal:</p>
            <ul>
                <li>Samuel Ward</li>
                <li>Tristan Jehanno</li>
                <li>Kylian Renault</li>
                <li>Charles Lefranc</li>
            </ul>
            <p><b>Infernal</b> est une communauté passionnée d'informatique et de jeux vidéo fondée en 2012. À ce jour, notre communauté accueille plus de 60 personnes et ne cesse de grandir! N'hésitez surtout pas à nous rejoindre si vous cherchez une petite communauté prête à évoluer grâce à notre serveur <a href="https://discord.gg/team-infernal"><b>Discord</b></a>.</p>
        </div>
    )
}

export default About;

