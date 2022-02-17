import React from "react";
import Owners from "../images/owners.svg"

export default function OwnersBenefits() {
    return (
        <div className="benefits-frame">
            <div className="container">
                <img src={Owners} />
                <div className="benefits-text">
                    <h2>Benefits</h2>
                    <ul>
                        <li>Access to exclusive real world Fashion Collections</li>
                        <li>Collections available only to 1000 people</li>
                        <li>Mint money will be donated to Charities</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}