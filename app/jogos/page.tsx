'use client'
import { useState } from "react";

export default function Lista() {
    const jogos = [
        { nome: "Cyberpunk 2077 ", produtora: "RDP" },
        { nome: "The Witcher 2", produtora: "RDP" },
        { nome: "Midnight Club", produtora: "RockStars" },
        { nome: "Red Dead Redemption 2", produtora: "RockStars" }
    ];

    const [tipoCalc, setTipoCalc] = useState("0");

    return (
        <>
            <h1>Jogos</h1>

            <button onClick={() => setTipoCalc("1")}>
                Produtora RDP
            </button>

            <button onClick={() => setTipoCalc("2")}>
                Produtora RockStars
            </button>

            {tipoCalc === "1" &&
                jogos.map((jogo, index) => {
                    if (jogo.produtora === "RDP") {
                        return (
                            <div key={index}>
                                <p>{jogo.nome}</p>
                                <p>{jogo.produtora}</p>
                            </div>
                        );
                    }

                    return null;
                })}

            {tipoCalc === "2" &&
                jogos.map((jogo, index) => {
                    if (jogo.produtora === "RockStars") {
                        return (
                            <div key={index}>
                                <p>{jogo.nome}</p>
                                <p>{jogo.produtora}</p>
                            </div>
                        );
                    }
                })}
        </>
    );
}