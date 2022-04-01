import { useEffect } from "react";
import { getId } from "../../functions"
import $ from "jquery";
import moment from "moment";

const fillOptions = tab => {
    console.log("Length:"+tab.length)
    let optionString = "";
    for(let i = 0; i < tab.length; i++) {
        console.log(i)
        optionString+=`<option value=${i}>${tab[i]}</option>`;
    }
    $("#selectWish").append(optionString);
    return 0;
}

const apply = () => {
    let url = "http://localhost:3002/api/application"
    let cv = prompt("Enter your CV link here")
    let letter = prompt("Enter your motivation letter here")
    alert("Done, wait for the answer of the company ! ")
}

const Application = () => {
    
    useEffect(() => {
        let tab = [];
        let id = getId();
        $.get(`http://localhost:3002/api/users/${id}/wishlists`, data => {
            $("#wishlist").empty();
            data.map(element => {
                console.log(element["id_internship"])
                tab.push(element["id_internship"])
                $("#wishlist").append("<div class='element' id='"+element["id_internship"]+"'>" +
                "<h4 class='title'> Offre " + element["id_internship"] + " :" + element["title"] +  "</h4>"
                + "<div class='description'>Description : " + element["description"] + "</div>"
                + "<div class='minor'>Mineure : " + element["minor"] + "</div>"
                + "<div class='lasts'>Date de fin de Stage" + moment(element["lasts"]).format("DD/MM/YYYY") + "</div>"
                + "<div class='salary'>Rémunération :" + Math.round(element["salary"]) + "€</div>"
                + "<div class='published_at'>Publié le : " + moment(element["published_at"]).format("DD/MM/YYYY") + "</div>"
                );
            return 0;
            }); 
        }).then(() => {
            fillOptions(tab);
        });
        console.log(tab)
        
        $("#deleteWishlist").click(() => {
            $.delete(`http://localhost:3002/api/wishlist/`)
        })
        /*$("#Apply").click(() => {
            $.post("http://localhost:3002/api/application", data => {
                
            })
        })*/
        return id;
    })

    return(
        <>
            <h2> Wishlist </h2>
            <select id="selectWish">
            </select>
            <button id="apply" onClick={() => apply()}>Apply</button>
            <button id="Delete">Delete offer</button>
            <div id="wishlist">
            </div>
        </>
    );
}


export default Application;