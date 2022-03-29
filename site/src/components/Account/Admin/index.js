import config from "../../../config";
import $ from "jquery";
//import "./styles.scss";

const Admin = () => {
    $(document).ready(() => {
        //$("#upstudent").click(() => {        
            $.get( "http://localhost:3002/api/users", data => {
                console.log("boby")
            })
        //})
    }) 
	return (
		<div id="Espace Administation">
            <h1>Espace Administation</h1>
                <select name="student" id="student">
				{
                    
                }
                </select>
                <input type="submit" value="Update" id="upstudent"/>
                <input type="submit" value="Delete" id="delstudent"/>                
                <select name="delegate" id="delegate">
                {
                    
                }
                </select>
                <input type="submit" value="Update" id="updelegate"/>
                <input type="submit" value="Delete" id="deldelegate"/>   
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