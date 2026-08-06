export default function Lista() {
    let frutas = ['maracuja', 'laranja', 'morango', 'uva', 'kiwi']

    let alunos = [
        {
            nome:"guilherme",
            turma:"1ª A"
        },
        {
            nome:"maria",
            turma:"2º A"
        },
        {
            nome:"joão",
            turma:"3º A"
        }
    ]
    
    return (
        <div className="lista">
        <h1>Lista</h1>
        <ol type ="I">
            {frutas.map((fruta, index) => ( 
                <li key={index}>{fruta}</li>
            ))   
            }
         </ol>
        <h1>Lista de alunos</h1>
        <ol>
            {alunos.map((aluno, index) => (
                <li key={index}>
                    <p>{aluno.nome}</p>
                    <p>{aluno.turma}</p>
                </li>
            ))
            } 
        </ol>
        </div>
    );
}
