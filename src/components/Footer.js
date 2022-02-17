import React from "react";

export default function Footer() {

    let year = new Date().getFullYear()

    return (
        <div className="container">
            <div className="footer">
                <h1>DYGION</h1>
                <small>© Copyright {year}</small>
                <div className="footer-links">
                    <h2>Links</h2>
                    <ul>
                        <li>
                            <a href="">Roadmap</a>
                        </li>
                        <li>
                            <a href="">Implementations</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}