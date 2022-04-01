import { useEffect, useState } from "react";
import $ from "jquery";
//import "./styles.scss";

import { Form } from "../forms";

const ManaTutor = () => {

    const [tutors, setTutors] = useState([]);
    const [tutor, setTutor] = useState({
        type: "",
        role: "",
        data: {},
    });

    useEffect(() => {
        $.get("https://lahya.net/api/users", data => {
            data.map(user => {
                if (user.id_permission === 2) setTutors(tutors => [...tutors, user]);
                return null;
            });
        });
    }, []);

    return (
        <div id="mana-tutor">
            <h2 id="mana-tutor-title">Tutor</h2>
            <div id="mana-tutor-content">
                <select name="tutor" id="tutor-select">
                {
                    tutors.map(tutor => <option key={`${tutor.id}${tutor.first_name.replace(" ", "").toLowerCase()}`} value={tutor.id}>{tutor.first_name + " " + tutor.last_name}</option>)
                }
                </select>
                <button id="tutor-add" onClick={() => setTutor({
                    type: "add",
                    role: "tutor",
                    data: {},
                })}>Add</button>
                <button id="tutor-edit" onClick={() => setTutor({
                    type: "edit",
                    role: "tutor",
                    data: tutors.filter(tutor => tutor.id.toString() === $("#tutor-select").val())[0],
                })}>Edit</button>
                <button id="tutor-delete" onClick={() => setTutor({
                    type: "delete",
                    role: "tutor",
                    data: tutors.filter(tutor => tutor.id.toString() === $("#tutor-select").val())[0],
                })}>Delete</button>
            </div>
            <div id="mana-tutor-form">
            {
                tutor.type ? <Form data={tutor} /> : null
            }
            </div>
        </div>
    )
}

export default ManaTutor;