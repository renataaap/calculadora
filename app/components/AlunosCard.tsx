interface cardProps {
    nome: string,
    turma: string
}

export default function Card({nome, turma}:cardProps) {
    return (
        <div className="card">
            <p><strong>{nome}</strong></p>
            <p>{turma}</p>
        </div>
    )

}