import { Navigate } from "react-router-dom";

import config from "../../config.js";
import Admin from "../../components/Account/Admin";
import Student from "../../components/Account/Student";
import Tutor from "../../components/Account/Tutor";
import Business from "../../components/Account/Business"; 
import { getRole, isLoggedIn } from "../../functions";
import "./styles.scss";

const Account = () => {
    document.title = `My Account • ${config.site.name}`;
    const role = getRole();

    return (
        <div id="account">
            {
                !isLoggedIn()
                ? <Navigate to="/login" />
                : role === "admin"
                ? <Admin />
                : role === "business"
                ? <Business/>
                : role === "tutor"
                ? <Tutor />
                : <Student />
            }
        </div>
    )
}

export default Account;
