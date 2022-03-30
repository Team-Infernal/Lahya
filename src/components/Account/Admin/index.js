import ManaBusiness from "../../Management/Business";
import ManaOffers from "../../Management/Offers";
import ManaStudent from "../../Management/Student";
import ManaTutor from "../../Management/Tutor";
import config from "../../../config";
//import "./styles.scss";

const Admin = () => {
    document.title = `Admin • ${config.site.name}`;
    return(
        <>
            <h1>Espace d'administration</h1>
            <ManaBusiness/>
            <ManaOffers/>
            <ManaStudent/>
            <ManaTutor/>
        </>
    );


}


export default Admin;