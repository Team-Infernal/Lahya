import $ from "jquery";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

import { isLoggedIn } from "../../functions/index.js";
import config from "../../config.js";

const Business = () => {
    const [comments, setComments] = useState([]);

    document.title = `Business • ${config.site.name}`;

    useEffect(() => {
        $.get("http://localhost:3002/api/grades_by_students", data => data).then(commentList => {
            $.get("http://localhost:3002/api/users", data => data).then(userList => {
                $.get("http://localhost:3002/api/company", data => data).then(companyList => {
                    commentList.forEach(comment => {
                        const user = userList.find(user => user.id.toString() === comment.id_users.toString());
                        const company = companyList.find(company => company.id.toString() === comment.id_company.toString());

                        setComments(comments => [...comments, {
                            commentId: comment.id,
                            score: comment.value,
                            reaction: comment.reaction_emoji,
                            comment: comment.comment,
                            company: company,
                            user: {
                                id: comment.id_users,
                                name: {
                                    first: user?.first_name || "unknown",
                                    last: user?.last_name || "unknown",
                                },
                            },
                        }]);
                    });
                });
            });
        });
    }, []);

    return (
        <>
        {
            !isLoggedIn()
            ? <Navigate to="/login" />
            : <div id="business">
                <h3> Business </h3>
                <div id="business-content">
                    {
                        comments.map(comment => (
                            <div key={comment.commentId}>
                                <h3>{comment.company.name}</h3>
                                <h4>Posted by {comment.user.name.first} {comment.user.name.last}</h4>
                                <p>{comment.comment}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        }
        </>
    )
}

export default Business;
