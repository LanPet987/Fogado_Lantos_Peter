import React from "react";
import "../css/hely.css";
import Szobak from "./szobak";

function Jobb() {
    return (
        <div className="jobb">
            <h2>Jobb oldal</h2>
            <p>Ez a jobb oldali komponens.</p>
            <Szobak />
            <p className="felszereltseg">
                A házban összesen 21 fő fér el.
                <br />
                Felszereltségünk:
                <ol>
                    <li>Ruhásszekrény</li>
                    <li>Saját fürdőszoba zuhanytálca</li>
                    <li>WC</li>
                </ol>
            </p>
        </div>
    );
}
export default Jobb;