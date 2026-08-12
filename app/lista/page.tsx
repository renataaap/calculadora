'use client'
import { useState } from "react";
import AlunoCard from "../components/AlunosCard";

const turmaSelec: Record<string, string> = {
    "1": "idev3",
    "2": "idev4",
    "3": "idev5"
};

export default function Lista() {
    const alunos = [
        {
            nome: "guilherme",
            turma: "idev4"
        },
        {
            nome: "maria",
            turma: "idev4"
        },
        {
            nome: "caio",
            turma: "idev5"
        },
        {
            nome: "carol",
            turma: "idev5"
        },
        {
            nome: "joao",
            turma: "idev3"
        },
        {
            nome: "mauro",
            turma: "idev3"
        }
    ];

    const [alunoSelec, setAlunoSelec] = useState("0")

    const listaFiltrada = alunos.filter(
        (aluno) => aluno.turma === turmaSelec[alunoSelec]
    )

    return (
        <>
            <div className="lista">
                <h1>Alunos</h1>

                <button onClick={() => setAlunoSelec("1")}>
                    Idev3
                </button>
                <button onClick={() => setAlunoSelec("2")}>
                    Idev4
                </button>
                <button onClick={() => setAlunoSelec("3")}>
                    Idev5
                </button>

                <h1>Lista de alunos</h1>

                <div className="card-container">
                    {listaFiltrada.map((aluno, index) => (
                        <AlunoCard key={index} aluno={aluno} />
                    ))}
                </div>
            </div>
        </>
    );
}
