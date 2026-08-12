'use client'
import { useState } from "react";
import Card from "../components/AlunosCard";

export default function Lista() {
    var alunos = [
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


                {alunoSelec === "1" && (
                    <>
                        {alunos.map((aluno, index) => 
                        aluno.turma === "idev3" &&
                        <Card nome={aluno.nome} turma={aluno.turma}></Card>
                        )}
                    </>
                )}
                {alunoSelec === "2" && (
                    <>
                        {alunos.map((aluno, index) => 
                        aluno.turma === "idev4" &&
                        <Card nome={aluno.nome} turma={aluno.turma}></Card>
                        )}
                    </>
                )}
                {alunoSelec === "3" && (
                    <>
                        {alunos.map((aluno, index) => 
                        aluno.turma === "idev5" &&
                        <Card nome={aluno.nome} turma={aluno.turma}></Card>
                        )}
                    </> 
                )}
        
        </div>
        </>
    );
}
