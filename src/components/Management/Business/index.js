import { useEffect, useState } from "react";
import $ from "jquery";

import { getRole } from "../../../functions";
import { BusinessForm } from "../forms";

const ManaBusiness = () => {

    const [businesses, setBusinesses] = useState([]);
    const [business, setBusiness] = useState({
        type: "",
        role: "",
        is: "business",
        data: {},
    });

    const role = getRole();

    useEffect(() => {
        $.get("https://lahya.net/api/company", data => {
            data.map(business => setBusinesses(businesses => [...businesses, business]));
        });
    },[]);

    return (
        <div id="mana-business">        
            <h2 id="mana-business-title">Companies</h2>
            <div id="mana-business-content">
                <select name="business" id="business-select">
                {
                    businesses.map(business => <option key={`${business.id}${business.name.replace(" ", "").toLowerCase()}`} value={business.id}>{business.name}</option>)
                }
                </select> 
                <button id="business-add" onClick={() => setBusiness({
                    type: "add",
                    role: role,
                    is: "business",
                    data: {},
                })}>Add</button>
                <button id="business-edit" onClick={() => setBusiness({
                    type: "edit",
                    role: role,
                    is: "business",
                    data: businesses.filter(business => business.id.toString() === $("#business-select").val())[0],
                })}>Edit</button>
                <button id="business-delete" onClick={() => setBusiness({
                    type: "delete",
                    role: role,
                    is: "business",
                    data: businesses.filter(business => business.id.toString() === $("#business-select").val())[0],
                })}>Delete</button>
            </div>
            <div id="mana-business-form">
            {
                business.type ? <BusinessForm data={business} /> : null
            }
            </div>
        </div>
    )
}


export default ManaBusiness;