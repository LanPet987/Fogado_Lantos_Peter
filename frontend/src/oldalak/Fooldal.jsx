import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Szobak from "../components/szobak.jsx";

function Fooldal() {
    return (
        <div>
            <h1>Főoldal</h1>
            <Szobak />



        </div>
    )
}
export default Fooldal;