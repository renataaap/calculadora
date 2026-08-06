'use client'
import { useState } from "react";
export default function Informacao() {
    const [orientação, setOrientação] = useState<string>('');
    return (
        <div className="informacoes">
        <h1>informativo de animais</h1>
        <div className="botoes-info">
            <button className="botao" onClick={()=>setOrientação('1')}>Leão</button>
            <button className="botao" onClick={()=>setOrientação('2')}>Macaco</button>
            <button className="botao" onClick={()=>setOrientação('3')}>Repteis</button>
        </div>
        {orientação === '1' &&
        <p>a jaula do leão deve ser mantida a distância de pelo menos 5m pois o animal pode atacar</p>
        }
        {orientação === '2' &&
        <p>não alimente os macacos pois a alimentação com itens industriaizados podem prejudicar sua saúde</p>
        }
        {orientação === '3' &&
        <p>nãu use flash ao fotografar os repteis pois pode prejudicar os animais</p>
        }
        </div>
    );
}
