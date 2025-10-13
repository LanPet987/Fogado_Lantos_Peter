import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "../css/table.css"

function Foglaltsag() {
    
    const [foglaltsag, setFoglaltsag] = useState([]);
    useEffect(() => {
        const fetchFoglaltsag = async () => {
            try {
                const response = await axios.get("http://localhost:3000/szobafoglaltsag");
                setFoglaltsag(response.data);
            } catch (error) {
                console.error("Hiba a foglalások lekérésekor:", error);
            }
        };
        fetchFoglaltsag();
    }, []);

    return (
        <div>
            <h2>A szobák foglaltsága</h2>
            <table>
                <thead>
                    <tr>
                        <th>Bérlő neve</th>
                        <th>Érkezés</th>
                        <th>Távozás</th>
                    </tr>
                </thead>
                <tbody>
                    {foglaltsag.length > 0 ?
                        foglaltsag.map((foglalt, id) => (
                            <tr key={id}>
                                <td>{foglalt.név}</td>
                                <td>{foglalt.érkezés}</td>
                                <td>{foglalt.távozás}</td>
                            </tr>
                        )) : <tr><td colSpan="5">Nincs megjeleníthető foglalás</td></tr>}
                </tbody>
            </table>
        </div>
    )

}

export default Foglaltsag;