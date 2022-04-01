import { useEffect, useState } from "react";
import $ from "jquery";

import { OfferForm } from "../forms";
import { getId, getRole } from "../../../functions";

const ManaOffers = () => {

    const [offers, setOffers] = useState([]);
    const [offer, setOffer] = useState({
        type: "",
        role: "",
        is: "offer",
        data: {},
    });

    const role = getRole();
    const id = getId();

    useEffect(() => {
        $.get("https://lahya.net/api/internship", data => {
            data.filter(offer => {
                return role === "admin" || id === offer.id_company.toString();
            }).map(offer => {
                setOffers(offers => [...offers, offer]);
                return null;
            });
        });
    }, [id, role]);

    return (
        <div id="mana-offer">
            <h2 id="mana-offer-title">Offers</h2>
            <div id="mana-offer-content">
                <select name="offer" id="offer-select">
                {
                    offers.map(offer => <option key={`${offer.id}${offer.title.replace(" ", "").toLowerCase()}`} value={offer.id}>{offer.title}</option>)
                }
                </select> 
                <button id="offer-add" onClick={() => setOffer({
                    type: "add",
                    role: role,
                    is: "offer",
                    data: {},
                })}>Add</button>
                <button id="offer-edit" onClick={() => setOffer({
                    type: "edit",
                    role: role,
                    is: "offer",
                    data: offers.filter(offer => offer.id.toString() === $("#offer-select").val())[0],
                })}>Edit</button>
                <button id="offer-delete" onClick={() => setOffer({
                    type: "delete",
                    role: role,
                    is: "offer",
                    data: offers.filter(offer => offer.id.toString() === $("#offer-select").val())[0],
                })}>Delete</button>
            </div>
            <div id="mana-offer-form">
            {
                offer.type ? <OfferForm data={offer} /> : null
            }
            </div>
        </div>
    )
}

export default ManaOffers;