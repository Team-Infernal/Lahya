import { useEffect } from "react";

import config from "../../../config";
import $ from "jquery";
//import "./styles.scss";

const Admin = () => {
    document.title = `Admin • ${config.site.name}`;
    
    useEffect(() => {
        $.get( "http://localhost:3002/api/users", data => {
            $("#student").empty();
            data.map(user => $("#student").append(`<option value="${user.id}">${user.first_name} ${user.last_name} ${user.class}</option>`))
        })
    }, []);
    useEffect(() => {
        $.get( "http://localhost:3002/api/users", data => {
            $("#tutor").empty();
            data.map(user => $("#tutor").append(`<option value="${user.id}">${user.first_name} ${user.last_name} ${user.class}</option>`))
        })
    }, []);            

	return (
		<div id="espace-administation">
            <h1>Espace Administation</h1>
                <select name="student" id="student">
				{
                    
                }
                </select>
                <input type="submit" value="Update" id="upstudent"/>
                <input type="submit" value="Delete" id="delstudent"/>                
              
                <select name="tutor" id="tutor">
                {
                    
                }
                </select>
                
                <input type="submit" value="Update" id="uptutor"/>
                <input type="submit" value="Delete" id="deltutor"/>   
		</div>
	)
}


export default Admin;