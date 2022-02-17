import React from "react";
import Main1 from "./components/Main1"
import NavBar from "./components/NavBar"
import NewOwners from "./components/NewOwners";
import OwnersBenefits from "./components/OwnersBenefits";
import Footer from "./components/Footer";

export default function App() {
    return (
        <div>
            <nav>
                <NavBar />
            </nav>
            <main>
                <Main1 />
            </main>
            <NewOwners />
            <OwnersBenefits />
            <footer>
                <Footer />
            </footer>
        </div>
    )
}