import { useEffect } from "react";
import { getId } from "../../functions"
import $ from "jquery";
import moment from "moment";

const fillOptions = tab => {
    let optionString = "";
    for(let i = 0; i < tab.length; i++) {
        optionString+=`<option value=${i}>Offer ${tab[i]}</option>`;
    }
    $("#selectWish").append(optionString);
    return 0;
}

const displayApplication = () => {
    $("#form_application").empty();
    $("#form_application").append(
    `<form action="https://lahya.net/auth/form.php" method="post">
        <input type="hidden" name="action" value="add" />
        <input type="hidden" name="id" value="${getId()}" />
        <div>
            <label for="cv">Enter CV link :</label>
            <input type="text" name="cv" id="cv" required />
        </div>
        <div>
            <label for="motivation">Enter motivation link : </label>
            <input type="text" name="motivation" id="motivation" />
        </div>
        <button type="submit">Submit</button>
    </form>`);
}

const Application = () => {
    
    useEffect(() => {
        let tab = [];
        let id = getId();
        $.get(`https://lahya.net/api/users/${id}/wishlists`, data => {
            $("#wishlist").empty();
            data.map(element => {
                tab.push(element["id_internship"])
                $("#wishlist").append("<div class='element' id='"+element["id_internship"]+"'>" +
                    "<h4 class='title'> Offer " + element["id_internship"] + ": " + element["title"] +  "</h4>"
                    + "<div class='description'>Description: " + element["description"] + "</div>"
                    + "<div class='minor'>Minor: " + element["minor"] + "</div>"
                    + "<div class='lasts'>Ends on: " + moment(element["lasts"]).format("DD/MM/YYYY") + "</div>"
                    + "<div class='salary'>Salary: " + Math.round(element["salary"]) + "€</div>"
                    + "<div class='published_at'>Published on: " + moment(element["published_at"]).format("DD/MM/YYYY") + "</div>"
                );
                return 0;
            }); 
        }).then(() => {
            fillOptions(tab);
        });
        
        $("#deleteWishlist").click(() => {
            $.delete(`https://lahya.net/api/wishlist/`)
        });
        return id;
    })

    return(
        <>
            <h2> Wishlist </h2>
            <form action="/server/php/form.php" method="post">
                <input type="hidden" name="action" value="delete" />

                <select id="selectWish">
                </select>
                <div>
                    <input type="submit" value="delete" />
                </div>
            </form>
            <button id="apply" onClick={displayApplication} >Apply</button>
            <div id="form_application"></div>
            <div id="wishlist">
            </div>
        </>
    );
}


export default Application;