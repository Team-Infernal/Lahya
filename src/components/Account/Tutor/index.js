import config from "../../../config";
import { useEffect } from "react";
import $ from "jquery";
import Offers from "../../offers";
const Tutor = () => {
    useEffect(() => {
        $.get("http://localhost:3002/api/users", data => {
            data.map(user => {       
                $.get(`http://localhost:3002/api/role/${user.id_permission}`, data2 => {
                    data2.map(user2 => {
                        if(user2.name === "student" || user2.name === "delegate") $("#selstudent").append(`<option value="${user.id}">${user.first_name+user2.name}</option>`)
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
        <div>
            <div id="espace-administration">
                <h1>Espace Tuteur</h1>
                <h2>Administration</h2>
                <form action="http://localhost/Lahya/server/php/action.php" method="post">
                    <label htmlFor="student">Students</label>
                    <select name="student" id="selstudent"></select>
                    <input type="submit" name="action" value="Create" id="addstudent" />
                    <input type="submit" name="action" value="Update" id="upstudent"/>
                    <input type="submit" name="action" value="Delete" id="delstudent"/>
                </form>  
                <form action="http://localhost/Lahya/server/php/action.php" method="post">
                    <label htmlFor="student">Business</label>
                    <select name="student" id="selbusiness"></select>
                    <input type="submit" name="action" value="Create" id="addbusiness" />
                    <input type="submit" name="action" value="Update" id="upbusiness"/>
                    <input type="submit" name="action" value="Delete" id="delbusiness"/>
                </form>  
                <form action="http://localhost/Lahya/server/php/action.php" method="post">
                    <label htmlFor="student">Offers</label>
                    <select name="student" id="seloffer"></select>
                    <input type="submit" name="action" value="Create" id="addoffer" />
                    <input type="submit" name="action" value="Update" id="upoffer"/>
                    <input type="submit" name="action" value="Delete" id="deloffer"/>
                </form>  
            </div>
            <Offers />
        </div>
	)
}

export default Tutor;