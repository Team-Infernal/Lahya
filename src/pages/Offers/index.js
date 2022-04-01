import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import $ from "jquery";
import moment from "moment";

import { isLoggedIn } from "../../functions";

const Offers = () => {
    
    useEffect(() => {
        $.get("http://localhost:3002/api/internship", data =>{
            data.map(entreprise =>{
                const content = "<div class='entreprise'>" +
                "<h4 class='title'>Titre:" + entreprise["title"] + "</h4>"
                + "<div class='description'>Description:" + entreprise["description"] + "</div>"
                + "<div class='minor'>Mineure:" + entreprise["minor"] + "</div>"
                + "<div class='lasts'>Date de fin de Stage" + moment(entreprise["lasts"]).format("DD/MM/YYYY") + "</div>"
                + "<div class='salary'>Rémunération:" + Math.round(entreprise["salary"]) + "€</div>"
                + "<div class='published_at'>Publié le:" + moment(entreprise["published_at"]).format("DD/MM/YYYY") + "</div>"
                + "</div>"
                $("#offers-content").append(content)
                return 0;
            });
        });
    }, []);

    return (
        <>
            {
                !isLoggedIn()
                ? <Navigate to="/login" />
                : <div id="offers">
                    <h3> Latest offers </h3>
                    <div id="offers-content"></div>
                </div>
            }
        </>
    )
}

export default Offers;