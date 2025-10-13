import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "../css/table.css"

function Foglalas() {
    const [foglalasok, setFoglalasok] = useState([]);
    useEffect(() => {
        const fetchFoglalasok = async () => {
            try {
                const response = await axios.get("http://localhost:3000/foglalasok");
                setFoglalasok(response.data);
            } catch (error) {
                console.error("Hiba a foglalások lekérésekor:", error);
            }
        };
        fetchFoglalasok();
    }, []);

    return (
        <div>
            <h2>Foglalások listája</h2>
            <table>
                <thead>
                    <tr>
                        <th>Szoba Szám</th>
                        <th>Vendégek száma</th>
                        <th>Vendégéjszakák</th>
                    </tr>
                </thead>
                <tbody>
                    {foglalasok.length > 0 ?
                        foglalasok.map((foglalas, id) => (
                            <tr key={id}>
                                <td>{foglalas.szoba}</td>
                                <td>{foglalas.vendegek}</td>
                                <td>{foglalas.vendégéjszakák}</td>
                            </tr>
                        )) : <tr><td colSpan="5">Nincs megjeleníthető foglalás</td></tr>}
                </tbody>
            </table>
        </div>
    )
}
export default Foglalas;