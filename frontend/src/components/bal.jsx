import React from "react";
import "../css/hely.css";
import kep from "../assets/logo.png"
import "../css/kep_link.css"
import holloko from "../assets/holloko_masolata.jpg"

function Bal() {
    return (
        <div className="bal">
            <h2>Bal oldal</h2>
            <p>Ez a bal oldali komponens.</p>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, animi consequuntur!
                Quos ex officia adipisci tenetur reiciendis harum fugit commodi,
                fugiat magnam rem eveniet corrupti corporis? Quos praesentium ex tenetur.
            </p>

            <p className="para-link">
                <div className="szoveg"> Tájékoztató oldal:</div>
                <a href="https://falusiturizmus.eu/ajanlo/turisztikai-paradicsomma-is-valhatna-a-falu-mutatjuk-mivel-csalogatnak-tiszasulyre-a-turistakat/" target="_blank">
                    <img src={kep} alt="" />
                </a>
            </p>
            <div className="holloko-div">
                <img src={holloko} alt="Hollókő" className="holloko" />
            </div>

        </div>

    );
}
export default Bal;