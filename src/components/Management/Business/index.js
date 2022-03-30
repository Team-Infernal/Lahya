import { useEffect } from "react";
import $ from "jquery";
//import "./styles.scss";

const ManaBusiness = () => {   
    useEffect(() => {
        $.get("http://localhost:3002/api/company", data => {
            data.map(company => {
                $("#selbusiness").append(`<option value="${company.id}">${company.name}</option>`)
                return null;
            })
        })
    },[]);
	return (
        <div>        
            <label htmlFor="business">Business</label>
            <select name="business" id="selbusiness"></select>
            <button id="addbusiness">Add</button>
            <button id="editbusiness">Edit</button>
            <button id="deletebusiness">Delete</button> 
        </div>
	)
}


export default ManaBusiness;