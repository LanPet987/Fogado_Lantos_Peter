import React from "react";
import "../css/hely.css";
import Szobak from "./szobak";

function Jobb() {
    return (
        <div className="jobb">
            <h2>Jobb oldal</h2>
            <p>Ez a jobb oldali komponens.</p>
            <Szobak />
        </div>
    );
}
export default Jobb;