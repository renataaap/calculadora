type Aluno = {
    nome: string;
    turma: string;
};

export default function AlunoCard({aluno}: {aluno: Aluno}) {
    return (
        <div className="card">
            <p><strong>{aluno.nome}</strong></p>
            <p>{aluno.turma}</p>
        </div>
    );
}