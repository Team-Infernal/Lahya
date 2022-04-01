import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import $ from "jquery";
import moment from "moment";

import { isLoggedIn } from "../../functions";
import "./styles.scss";

const Offers = () => {

    const [offers, setOffers] = useState([]);
    
    useEffect(() => {
        $.get("https://lahya.net/api/internship", data =>{
            data.map(offer => setOffers(offers => [...offers, offer]));
        });
    }, []);

    return (
        <>
            {
                !isLoggedIn()
                ? <Navigate to="/login" />
                : <div id="offers">
                    <h3 id="offers-title">Latest offers</h3>
                    <div id="offers-content">
                        {
                            offers.map(offer => (
                                <div className="offer" key={offer.id}>
                                    <h4 className="offer-title">{offer.title}</h4>
                                    <p className="offer-description"><span className="bold">Description:</span> {offer.description}</p>
                                    <p className="offer-minor"><span className="bold">Minor:</span> {offer.minor}</p>
                                    <p className="offer-salary"><span className="bold">Salary:</span> {Math.round(offer.salary)}€</p>
                                    <p className="offer-ends"><span className="bold">Ends</span> on {moment(offer.lasts).format("DD/MM/YYYY")}</p>
                                    <p className="offer-published"><span className="bold">Published</span> on {moment(offer.published_at).format("DD/MM/YYYY")}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            }
        </>
    )
}

export default Offers;