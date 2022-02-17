import React from "react";

export default function NavBar() {
    return (
        <div className="container">
            <div className="nav">
                <h1>DYGION</h1>
                <ul>
                    <li>
                        <a href="">Roadmap</a>
                    </li>
                    <li>
                        <a href="">Implementations</a>
                    </li>
                    <li>
                        <button className="c-wallet">Connect Wallet</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}