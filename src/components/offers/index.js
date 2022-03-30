import { useEffect } from "react";
import $ from "jquery";

const Offers = () => {
    useEffect(() => {
        $.get("http://localhost:3002/api/internship", data =>{
            data.map(entreprise =>{
            //for qui affiche toutes infos des offres
                const content = "<div class='entreprise'>" +
                "<h4 class='title'>" + entreprise["title"] + "</h4>"
                + "<div class='description'>" + entreprise["description"] + "</div>"
                + "<div class='minor'>" + entreprise["minor"] + "</div>"
                + "<div class='lasts'>" + entreprise["lasts"] + "</div>"
                + "<div class='salary'>" + entreprise["salary"] + "</div>"
                + "<div class='published_at'>" + entreprise["published_at"] + "</div>"
                + "</div>"
                $("#offers-content").html(content)
                return 0;
            })
        })
    });
    return (
        <div id="offers">
            <h3> Latest offers </h3>
            <div id="offers-content"></div>
        </div>
    )
}

export default Offers;