'use client'
import { useState } from "react"

export default function Materiais() {
    const [ferramentas, setFerramentas] = useState('');
    return (
        <div className="informacoes">
            <h1>Materiais de construção</h1>
            <div className="botoes-info">
                <button className="botao" onClick={() => setFerramentas('1')}>Carriola</button>
                <button className="botao" onClick={() => setFerramentas('2')}>Pá de bico</button>
                <button className="botao" onClick={() => setFerramentas('3')}>Desempenadeira</button>
            </div>
            {ferramentas == '1' &&
                <p>Função: transportar cargas pesadas, entulhos e materiais de construção em geral.</p>
            }
            {ferramentas == '2' &&
                <p>Função: cavar o solo e juntar ou carregar materiais soltos.</p>
            }
            {ferramentas == '3' &&
                <p>Função: aplicar, nivelar e dar acabamento em argamassa, reboco ou gesso.</p>
            }
        </div>
    )
}
