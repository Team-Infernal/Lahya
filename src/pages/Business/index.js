import $ from "jquery";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";

import { isLoggedIn } from "../../functions/index.js";
import config from "../../config.js";

const Business = () => {
    document.title = `Business • ${config.site.name}`;

    useEffect(() => {
        $.get("http://localhost:3002/api/company", data =>{
            data.map(entreprise =>{
                
                const content = 
                "<h4 class='name'>Name: " + entreprise["name"] + "</h4>"
                + "<div class='student-accepted'>Student Accepted: " + entreprise["students_accepted"] + "</div>"
                
                $("#business-content").append(content)
                return 0;
            })
            $.get("http://localhost:3002/api/grades_by_students", data =>{
                data.map(commentary => {
                    console.log(commentary)
                    return 0;
                })
            })
        })
    });
    return (
        <>
        {
            !isLoggedIn()
            ? <Navigate to="/login" />
            : <div id="business">
                <h3> Business </h3>
                <div id="business-content"></div>
            </div>
        }
        </>
    )
}

export default Business;
