'use client'
interface BotaomaisProps {
    num: number,
    num2: number;
}

export default function Botaomais({ num, num2 }: BotaomaisProps) {
    function somar() {
        const resultado = num + num2;
        alert(`O resultado da soma é ${resultado}`);
    }

    return (
        <>
            <button className="botao" onClick={() => { somar() }}>Somar</button>
        </>
    )
}
