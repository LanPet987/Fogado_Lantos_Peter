import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function Szobak() {
    const [szobak, setSzobak] = useState([]);
        useEffect(() => {
            const fetchSzobak = async () => {
                try {
                    const response = await axios.get("http://localhost:8000/szobak");
                    setSzobak(response.data);
                } catch (error) {
                    console.error("Hiba a szobák lekérésekor:", error);
                }
            };
            fetchSzobak();
        }, []);

        return (
            <div>
                <h2>Szobák listája</h2>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Szobanév</th>
                            <th>Ágyak</th>
                            <th>pótágyak</th>
                        </tr>
                    </thead>
                </table>
            </div>
        )

}
export default Szobak;
