import config from "../../config.js";

const Entreprise = () => {
    document.title = `Entreprise • ${config.site.name}`;

    return (
        <h1>Hello World</h1>
    )
}

export default Entreprise;
