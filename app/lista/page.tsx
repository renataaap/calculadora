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
        <>
        <h1>Lista</h1>
        <ol type ="I">
            {frutas.map((fruta, index) => ( 
                <li key={index}>{fruta}</li>
            ))   
            }
         </ol>
        <h1>Lista de alunos</h1>
        <ol>
            <li> 
                <p>Aluno:{alunos[0].nome} </p>
                <p>Turma:{alunos[0].turma} </p>
            </li>
            <li> 
                <p>Aluno:{alunos[1].nome} </p>
                <p>Turma:{alunos[1].turma} </p>
            </li>
            <li> 
                <p>Aluno:{alunos[2].nome} </p>
                <p>Turma:{alunos[2].turma} </p>
            </li>
        </ol>
        </>
    );
}