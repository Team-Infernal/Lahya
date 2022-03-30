import { useEffect } from "react";
import $ from "jquery";
import Formtutor from "./formtutor";
//import "./styles.scss";

const ManaTutor = () => {
    useEffect(() => {
        $.get("http://localhost:3002/api/users", data => {
            data.map(user => {       
                $.get(`http://localhost:3002/api/role/${user.id_permission}`, data2 => {
                    data2.map(user2 => {
                        if(user2.name === "tutor") $("#seltutor").append(`<option value="${user.id}">${user.first_name+ " " +user.last_name}</option>`);
                        return null;         
                    })
                })
                return null;
            })
        });
        $("#addtutor").click(() =>{
            $("#form").html(<Formtutor />);
        }); 
    }, []);

    return(
        <div>
            <label htmlFor="tutor">Tutor</label>
            <select name="tutor" id="seltutor"></select> 
            <button id="addtutor">Add</button>
            <button id="edittutor">Edit</button>
            <button id="deletetutor">Delete</button> 
            <div id="form"></div> 
        </div>   

    )
}

export default ManaTutor;