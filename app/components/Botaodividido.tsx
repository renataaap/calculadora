'use client'
interface BotaodivididoProps {
    num: number,
    num2: number;
}

export default function Botaodividido({ num, num2 }: BotaodivididoProps) {
    function dividir() {
        const resultado = num / num2;
        alert(`O resultado da divisão é ${resultado}`);
    }

    return (
        <>
            <button className="botao" onClick={() => { dividir() }}>Dividir</button>
        </>
    )
}
