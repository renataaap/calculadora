interface textoProps {
    tag: string,
    title: string,
    description: string,
    botao: string
}

export default function Texto ({tag, title, description, botao}:textoProps) {
    return (
        <>
            <div className="card">
                <div className="card-content">
                    <span className="card-tag">{tag}</span>
                    <h3 className="card-title">{title}</h3>
                    <p className="card-description">{description}</p>
                    <a href="#" className="card-btn">{botao}</a>
                </div>
            </div>
        </>
    )
}