import React from "react"
import Certificate from "../images/certificate.svg"

export default function Main1() {
    return (
        <div className="main1">
            <div className="container">
                <div className="main-text">
                    <h1>Welcome to the Family</h1>
                    <p>Get the most exclusive fashion collections</p>
                </div>
                <img src={Certificate}/>
            </div>
        </div>
    )
}