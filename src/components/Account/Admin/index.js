import ManaBusiness from "../../Management/Business";
import ManaOffers from "../../Management/Offers";
import ManaStudent from "../../Management/Student";
import ManaTutor from "../../Management/Tutor";
import config from "../../../config";

const Admin = () => {
    document.title = `Admin • ${config.site.name}`;
    return(
        <div id="account-admin">
            <h1 id="account-admin-title">Espace d'administration</h1>
            <ManaBusiness/>
            <ManaOffers/>
            <ManaStudent/>
            <ManaTutor/>
        </div>
    );


}


export default Admin;