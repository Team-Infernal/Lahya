import { useEffect } from "react";
import { getId } from "../../functions"
import $ from "jquery";
import moment from "moment";

const Application = () => {
    useEffect(() => {
        let id = getId();
        let id_internship;
        $.get(`http://localhost:3002/api/users/${id}/wishlists`, data => {
            $("#wishlist").empty()
            data.map(element => {
                id_internship = element["id_internship"];
                $("#wishlist").append("<div class='element' id='"+element["id_internship"]+"'>" +
                "<h4 class='title'> Offre " + element["id_internship"] + " :" + element["title"] + "</h4>"
                + "<div class='description'>Description : " + element["description"] + "</div>"
                + "<div class='minor'>Mineure : " + element["minor"] + "</div>"
                + "<div class='lasts'>Date de fin de Stage" + moment(element["lasts"]).format("DD/MM/YYYY") + "</div>"
                + "<div class='salary'>Rémunération :" + Math.round(element["salary"]) + "€</div>"
                + "<div class='published_at'>Publié le : " + moment(element["published_at"]).format("DD/MM/YYYY") + "</div>"
                + "</div><button id='post"+ element["id_internship"] +"' >Postuler</button><button id='del"+element["id_internship"]+"'>Supprimer de la wishlist</button>" 
                    
                );
                return 0;
            });
        });

        $("#deleteWishlist").click(() => {
            $.delete(`http://localhost:3002/api/wishlist/`)
        })
        $("#postuler").click(() => {
            $.post("http://localhost:3002/api/application", data => {

            })
        })
        $(`#post${id_internship}`).click(() =>{
            $("#post").append(`<input type="text" name="cv_link"/>`)
        })
    })

    return(
        <>
        <h2> Wishlist </h2>
        <div id="wishlist">
        </div>
        <div id="post">
        </div>
        </>
    );
}


export default Application;