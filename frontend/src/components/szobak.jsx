import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "../css/table.css"
import "../css/szobak.css"

function Szobak() {
    const [szobak, setSzobak] = useState([]);
    useEffect(() => {
        const fetchSzobak = async () => {
            try {
                const response = await axios.get("http://localhost:3000/szobak");
                setSzobak(response.data);
            } catch (error) {
                console.error("Hiba a szobák lekérésekor:", error);
            }
        };
        fetchSzobak();
    }, []);

    return (
        <div id="igazitas">
            <h2>Szobák listája</h2>
            <table>
                <thead>
                    <tr>
                        <th>Szobaszám</th>
                        <th>Szobanév</th>
                        <th>Ágyak</th>
                        <th>pótágyak</th>
                    </tr>
                </thead>
                <tbody>
                    {szobak.length > 0 ?
                        szobak.map((szoba, id) => (
                            <tr key={id}>
                                <td>{id + 1}</td>
                                <td>{szoba.sznev}</td>
                                <td>{szoba.agy}</td>
                                <td>{szoba.potagy}</td>
                            </tr>
                        )) : <tr><td colSpan="4">Nincs megjeleníthető szoba</td></tr>}
                </tbody>
            </table>
        </div>
    )

}
export default Szobak;
