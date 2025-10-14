import React from "react";
import Bal from "./bal";
import Kozep from "./kozep";
import Jobb from "./jobb";
import "../css/hely.css";

function Layout() {
    return (
        <div className="container">
            <Bal />
            <Kozep />
            <Jobb />
        </div>
    );
}

export default Layout;