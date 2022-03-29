import { useEffect } from "react";

import config from "../../../config";
import $ from "jquery";
//import "./styles.scss";

const Admin = () => {
    document.title = `Admin • ${config.site.name}`;
    
    useEffect(() => {
        $.get("http://localhost:3002/api/users", data => {
            data.map(user => {       
                $.get(`http://localhost:3002/api/role/${user.id_permission}`, data2 => {
                    data2.map(user2 => {
                        if(user2.name === "student" || user2.name === "delegate") $("#selstudent").append(`<option value="${user.id}">${user.first_name+user2.name}</option>`)
                        else if(user2.name === "tutor") $("#seltutor").append(`<option value="${user.id}">${user.first_name+user2.name}</option>`)
                        return null;         
                    })
                })
                return null;
            })
        })
        $.get("http://localhost:3002/api/company", data => {
            data.map(company => {
                $("#selbusiness").append(`<option value="${company.id}">${company.name}</option>`)
                return null;
            })
        })
    },[]);
	return (
		<div id="espace-administration">
            <h1>Espace Administration</h1>
            <form action="http://localhost/Lahya/server/php/action.php" method="post">
                <label htmlFor="student">Students</label>
                <select name="student" id="selstudent"></select>
                <input type="submit" name="action" value="Create" id="addstudent"/>
                <input type="submit" name="action" value="Update" id="upstudent"/>
                <input type="submit" name="action" value="Delete" id="delstudent"/>
            </form>  
            <form action="http://localhost/Lahya/server/php/action.php" method="post">         
                <label htmlFor="tutor">Tutor</label>
                <select name="tutor" id="seltutor"></select>    
                <input type="submit" name="action" value="Create" id="addtutor"/>            
                <input type="submit" value="Update" id="uptutor"/>
                <input type="submit" value="Delete" id="deltutor"/>
            </form>
            <form action="http://localhost/Lahya/server/php/action.php" method="post">         
                <label htmlFor="business">Business</label>
                <select name="business" id="selbusiness"></select>
                <input type="submit" value="Create" id="addbusiness"/>
                <input type="submit" value="Update" id="upbusiness"/>
                <input type="submit" value="Delete" id="delbusiness"/>
            </form>
            <form action="http://localhost/Lahya/server/php/action.php" method="post">         
                <label htmlFor="offers">Offers</label>
                <select name="offers" id="seloffers"></select>
                <input type="submit" value="Create" id="addoffer"/>
                <input type="submit" value="Update" id="upoffer"/>
                <input type="submit" value="Delete" id="deloffer"/>
            </form>
		</div>
	)
}


export default Admin;