//import Admin from "../../components/Account/Admin";
import config from "../../config.js";
import Tutor from "../../components/Account/Tutor";
//import Student from "../../components/Account/Student";

const Account = () => {
    document.title = `My Account • ${config.site.name}`;

    return (
        <div id= "Account">
            <Tutor/>
        </div>
    )
}

export default Account;
