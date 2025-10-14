import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Szobak from "../components/szobak.jsx";
import Foglalas from "../components/foglalas.jsx";
import Foglaltsag from "../components/foglaltsag.jsx";
import Layout from "../components/layout.jsx";
import Fejlec from "../components/fejlec.jsx";

function Fooldal() {
    return (
        <div>
            <Fejlec />
            <Layout />

            <Foglalas />
            <Foglaltsag />

        </div>
    )
}
export default Fooldal;