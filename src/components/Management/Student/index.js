import { useEffect, useState } from "react";
import $ from "jquery";
//import "./styles.scss";

import { Form } from "../forms";

const ManaStudent = () => {

    const [students, setStudents] = useState([]);
    const [student, setStudent] = useState({
        type: "empty",
        data: {},
    });

    useEffect(() => {
        $.get("http://localhost:3002/api/users", data => {
            data.map(user => {
                if (user.id_permission === 1) setStudents(students => [...students, user]);
                return null;
            });
        });
    }, []);

    return (
        <div>
            <label htmlFor="student">Student</label>
            <select name="student" id="student-select">
                {
                    students.map(student => {
                        return (
                            <option key={`${student.id}${student.first_name.replace(" ", "").toLowerCase()}`} value={student.id}>{student.first_name + " " + student.last_name}</option>
                        )
                    })
                }
            </select>
            <button id="student-add" onClick={() => setStudent({
                type: "add",
                role: "student",
                data: {},
            })}>Add</button>
            <button id="student-edit" onClick={() => setStudent({
                type: "edit",
                role: "student",
                data: students.filter(student => student.id.toString() === $("#student-select").val())[0],
            })}>Edit</button>
            <button id="student-delete" onClick={() => setStudent({
                type: "delete",
                role: "student",
                data: students.filter(student => student.id.toString() === $("#student-select").val())[0],
            })}>Delete</button>
            <div id="student-form">
                {
                    student.type === "empty" ? null : <Form data={student} />
                }
            </div>
        </div>
    )
}

export default ManaStudent;