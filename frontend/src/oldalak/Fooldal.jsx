import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Szobak from "../components/szobak.jsx";
import Foglalas from "../components/foglalas.jsx";
import Foglaltsag from "../components/foglaltsag.jsx";

function Fooldal() {
    return (
        <div>
            <h1>Főoldal</h1>
            <Szobak />
            <Foglalas />
            <Foglaltsag />

        </div>
    )
}
export default Fooldal;