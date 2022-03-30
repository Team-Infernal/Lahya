import { useEffect } from "react";
import $ from "jquery";
//import "./styles.scss";

const ManaOffers = () => {
    useEffect(() => {
        $.get("http://localhost:3002/api/internship", data => {
            data.map(offers => {
                $("#seloffers").append(`<option value="${offers.id}">${offers.title}</option>`)
                return null;
            })
        })
        $()
    }, [])

    return(
        <div>        
            <label htmlFor="offers">Offers</label>
            <select name="offers" id="seloffers"></select>
            <button id="addoffer">Add</button>
            <button id="editoffer">Edit</button>
            <button id="deleteoffer">Delete</button> 
        </div>
    )
}

export default ManaOffers;