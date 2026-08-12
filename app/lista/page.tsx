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

            {alunoSelec === "1" && 
                alunos.map((aluno, index) => {
                if (aluno.turma === "idev3") {
                    return (
                        <div key={index}>
                            <p>{aluno.nome}</p>
                            <p>{aluno.turma}</p>
                        </div>
                    );
                }
                
                return null

            })}

            {alunoSelec === "2" && 
                alunos.map((aluno, index) => {
                    if (aluno.turma === "idev4") {
                        return (
                            <div key={index}>
                                <p>{aluno.nome}</p>
                                <p>{aluno.turma}</p>
                            </div>
                        );
                    }
                    return null
                })}
        
            {alunoSelec === "3" && 
                alunos.map((aluno, index) => {
                    if (aluno.turma === "idev5") {
                        return (
                            <div key={index}>
                                <p>{aluno.nome}</p>
                                <p>{aluno.turma}</p>
                            </div>
                        );
                    }
                    return null
                })}

        </div>
        </>
    );
}
