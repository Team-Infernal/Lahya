import { useEffect } from "react";
import $ from "jquery";
//import "./styles.scss";

const ManaStudent = () => {
    useEffect(() => {
        $.get("http://localhost:3002/api/users", data => {
            data.map(user => {       
                $.get(`http://localhost:3002/api/role/${user.id_permission}`, data2 => {
                    data2.map(user2 => {
                        if(user2.name === "student" || user2.name === "delegate") $("#selstudent").append(`<option value="${user.id}">${user.first_name+user2.name}</option>`);
                        return null;         
                    })
                })
                return null;
            })
        })
    }, []);

    return(
        <div>
            <label htmlFor="student">Students</label>
            <select name="student" id="selstudent"></select>
            <button id="addstudent">Add</button>
            <button id="editstudent">Edit</button>
            <button id="deletestudent">Delete</button> 
        </div>
    )
}

export default ManaStudent;