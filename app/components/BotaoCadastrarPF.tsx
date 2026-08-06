'use client'

interface BotaoCadastrarPFProps {
    nome: string;
    cpf: string;
    dataNascimento: string;
    nomePai: string;
    nomeMae: string;
}

export default function BotaoCadastrarPF({ nome, cpf, dataNascimento, nomePai, nomeMae }: BotaoCadastrarPFProps) {
    function cadastrar() {
        alert(`Cadastro de Pessoa Física realizado com sucesso!\n\n` +
            `Nome: ${nome}\n` +
            `CPF: ${cpf}\n` +
            `Data de Nascimento: ${dataNascimento}\n` +
            `Nome do Pai: ${nomePai}\n` +
            `Nome da Mãe: ${nomeMae}\n`
        );
    }

    return (
        <button
            onClick={cadastrar}
            className="botao botao-operador w-full"
        >
            Cadastrar Pessoa Física
        </button>
    );
}
