import { useEffect, useState } from "react";
import $ from "jquery";

import { getRole } from "../../../functions";
import { BusinessForm } from "../forms";

const ManaBusiness = () => {

    const [businesses, setBusinesses] = useState([]);
    const [business, setBusiness] = useState({
        type: "",
        data: {},
    });

    const role = getRole();

    useEffect(() => {
        $.get("http://localhost:3002/api/company", data => {
            data.map(business => setBusinesses(businesses => [...businesses, business]));
        });
    },[]);

    return (
        <div>        
            <label htmlFor="business">Offers</label>
            <select name="business" id="business-select">
            {
                businesses.map(business => <option key={`${business.id}${business.name.replace(" ", "").toLowerCase()}`} value={business.id}>{business.name}</option>)
            }
            </select> 
            <button id="offer-add" onClick={() => setBusiness({
                type: "add",
                role: role,
                data: {},
            })}>Add</button>
            <button id="offer-edit" onClick={() => setBusiness({
                type: "edit",
                role: role,
                data: businesses.filter(business => business.id.toString() === $("#business-select").val())[0],
            })}>Edit</button>
            <button id="offer-delete" onClick={() => setBusiness({
                type: "delete",
                role: role,
                data: businesses.filter(business => business.id.toString() === $("#business-select").val())[0],
            })}>Delete</button>
            <div id="offer-form">
            {
                business.type ? <BusinessForm data={business} /> : null
            }
            </div>
        </div>
    )
}


export default ManaBusiness;