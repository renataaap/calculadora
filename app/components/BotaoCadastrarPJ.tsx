'use client'

interface BotaoCadastrarPJProps {
    cnpj: string;
    nomeFantasia: string;
    dataAbertura: string;
    razaoSocial: string;
    endereco: string;
    telefone: string;
}

export default function BotaoCadastrarPJ({
    cnpj,
    nomeFantasia,
    dataAbertura,
    razaoSocial,
    endereco,
    telefone
}: BotaoCadastrarPJProps) {
    function cadastrar() {
        alert(
            `Cadastro de Pessoa Jurídica realizado com sucesso!\n\n` +
            `CNPJ: ${cnpj}\n` +
            `Razão Social: ${razaoSocial}\n` +
            `Nome Fantasia: ${nomeFantasia}\n` +
            `Data de Abertura: ${dataAbertura}\n` +
            `Endereço: ${endereco}\n` +
            `Telefone: ${telefone}`
        );
    }

    return (
        <button
            onClick={cadastrar}
            className="botao botao-operador w-full"
        >
            Cadastrar Pessoa Jurídica
        </button>
    );
}
