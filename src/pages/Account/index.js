import Admin from "../../components/Account/Admin";
import config from "../../config.js";

const Account = () => {
    document.title = `My Account • ${config.site.name}`;

    return (
        <div id= "Account">
            <Admin />
        </div>
    )
}

export default Account;
