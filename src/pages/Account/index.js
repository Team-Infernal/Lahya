//import Admin from "../../components/Account/Admin";
import config from "../../config.js";
import Admin from "../../components/Account/Admin";
//import Student from "../../components/Account/Student";

const Account = () => {
    document.title = `My Account • ${config.site.name}`;

    return (
        <div id= "Account">
            <Admin/>
        </div>
    )
}

export default Account;
