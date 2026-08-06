'use client'
import { useState } from "react";
import Botaomais from "../components/Botaomais";
import Botaomenos from "../components/Botaomenos";
import Botaovezes from "../components/Botaovezes";
import Botaodividido from "../components/Botaodividido";
import Botaotrapezio from "../components/Botaotrapezio";

export default function Soma() {
    const [num, setNum] = useState<number>(0);
    const [num2, setNum2] = useState<number>(0);
    const [num3, setNum3] = useState<number>(0);
    const [tipoCalc, setTipoCalc] = useState<string>('1');

    return (
        <main className="pagina">
            <div className="card">

                {/* Cabeçalho */}
                <h1 className="card-titulo">Cálculos</h1>
                <p className="card-subtitulo">Selecione a modalidade e insira os dados</p>

                {/* Alternador de abas */}
                <div className="abas">
                    <button
                        onClick={() => setTipoCalc('1')}
                        className={`aba ${tipoCalc === '1' ? 'aba-ativa' : ''}`}
                    >
                        Cálculo de números
                    </button>
                    <button
                        onClick={() => setTipoCalc('2')}
                        className={`aba ${tipoCalc === '2' ? 'aba-ativa' : ''}`}
                    >
                        Cálculo de área
                    </button>
                </div>

                {/* Conteúdo Dinâmico */}
                {tipoCalc === '1' ? (
                    <div>
                        <div className="campo">
                            <label>Número 1</label>
                            <input
                                type="number"
                                placeholder="Digite o primeiro número"
                                onChange={(e) => setNum(Number(e.target.value))}
                            />
                        </div>

                        <div className="campo">
                            <label>Número 2</label>
                            <input
                                type="number"
                                placeholder="Digite o segundo número"
                                onChange={(e) => setNum2(Number(e.target.value))}
                            />
                        </div>

                        {/* Grade para botões de operações simples */}
                        <div className="grade-botoes">
                            <Botaomais num={num} num2={num2} />
                            <Botaomenos num={num} num2={num2} />
                            <Botaovezes num={num} num2={num2} />
                            <Botaodividido num={num} num2={num2} />
                        </div>
                    </div>
                ) : (
                    <div>
                        <div className="campo">
                            <label>Base Maior (Número 1)</label>
                            <input
                                type="number"
                                placeholder="Digite a base maior"
                                onChange={(e) => setNum(Number(e.target.value))}
                            />
                        </div>

                        <div className="campo">
                            <label>Base Menor (Número 2)</label>
                            <input
                                type="number"
                                placeholder="Digite a base menor"
                                onChange={(e) => setNum2(Number(e.target.value))}
                            />
                        </div>

                        <div className="campo">
                            <label>Altura (Número 3)</label>
                            <input
                                type="number"
                                placeholder="Digite a altura"
                                onChange={(e) => setNum3(Number(e.target.value))}
                            />
                        </div>

                        <div className="grade-botoes">
                            <Botaotrapezio num={num} num2={num2} num3={num3} />
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}
