'use client'
import { useState } from "react";
import BotaoCadastrarPF from "../components/BotaoCadastrarPF";
import BotaoCadastrarPJ from "../components/BotaoCadastrarPJ";

export default function Cadastro() {
    // Seleção de tipo de cadastro ('PF' ou 'PJ')
    const [tipoPessoa, setTipoPessoa] = useState<string>('PF');

    // Estados para Pessoa Física
    const [nome, setNome] = useState<string>('');
    const [cpf, setCpf] = useState<string>('');
    const [dataNascimento, setDataNascimento] = useState<string>('');
    const [nomePai, setNomePai] = useState<string>('');
    const [nomeMae, setNomeMae] = useState<string>('');

    // Estados para Pessoa Jurídica
    const [cnpj, setCnpj] = useState<string>('');
    const [nomeFantasia, setNomeFantasia] = useState<string>('');
    const [dataAbertura, setDataAbertura] = useState<string>('');
    const [razaoSocial, setRazaoSocial] = useState<string>('');
    const [endereco, setEndereco] = useState<string>('');
    const [telefone, setTelefone] = useState<string>('');

    return (
        <main className="pagina">
            <div className="card card-largo">

                {/* Cabeçalho */}
                <h1 className="card-titulo">Formulário de Cadastro</h1>
                <p className="card-subtitulo">Selecione o tipo de perfil para preencher os dados</p>

                {/* Seleção de Tipo de Pessoa */}
                <div className="abas">
                    <button
                        type="button"
                        onClick={() => setTipoPessoa('PF')}
                        className={`aba ${tipoPessoa === 'PF' ? 'aba-ativa' : ''}`}
                    >
                        Pessoa Física
                    </button>
                    <button
                        type="button"
                        onClick={() => setTipoPessoa('PJ')}
                        className={`aba ${tipoPessoa === 'PJ' ? 'aba-ativa' : ''}`}
                    >
                        Pessoa Jurídica
                    </button>
                </div>

                {/* Formulário Condicional */}
                {tipoPessoa === 'PF' ? (
                    <div>
                        <div className="campo">
                            <label>Nome Completo</label>
                            <input
                                type="text"
                                placeholder="Digite o nome completo"
                                onChange={(e) => setNome(e.target.value)}
                            />
                        </div>

                        <div className="campo">
                            <label>CPF</label>
                            <input
                                type="text"
                                placeholder="000.000.000-00"
                                onChange={(e) => setCpf(e.target.value)}
                            />
                        </div>

                        <div className="campo">
                            <label>Data de Nascimento</label>
                            <input
                                type="date"
                                onChange={(e) => setDataNascimento(e.target.value)}
                            />
                        </div>

                        <div className="campo">
                            <label>Nome do Pai</label>
                            <input
                                type="text"
                                placeholder="Digite o nome do pai"
                                onChange={(e) => setNomePai(e.target.value)}
                            />
                        </div>

                        <div className="campo">
                            <label>Nome da Mãe</label>
                            <input
                                type="text"
                                placeholder="Digite o nome da mãe"
                                onChange={(e) => setNomeMae(e.target.value)}
                            />
                        </div>

                        <div className="grade-botoes">
                            <BotaoCadastrarPF
                                nome={nome}
                                cpf={cpf}
                                dataNascimento={dataNascimento}
                                nomePai={nomePai}
                                nomeMae={nomeMae}
                            />
                        </div>
                    </div>
                ) : (
                    <div>
                        <div className="campo">
                            <label>CNPJ</label>
                            <input
                                type="text"
                                placeholder="00.000.000/0001-00"
                                onChange={(e) => setCnpj(e.target.value)}
                            />
                        </div>

                        <div className="campo">
                            <label>Razão Social</label>
                            <input
                                type="text"
                                placeholder="Razão social da empresa"
                                onChange={(e) => setRazaoSocial(e.target.value)}
                            />
                        </div>

                        <div className="campo">
                            <label>Nome Fantasia</label>
                            <input
                                type="text"
                                placeholder="Nome fantasia da empresa"
                                onChange={(e) => setNomeFantasia(e.target.value)}
                            />
                        </div>

                        <div className="campo">
                            <label>Data de Abertura</label>
                            <input
                                type="date"
                                onChange={(e) => setDataAbertura(e.target.value)}
                            />
                        </div>

                        <div className="campo">
                            <label>Endereço</label>
                            <input
                                type="text"
                                placeholder="Rua, número, bairro, cidade - UF"
                                onChange={(e) => setEndereco(e.target.value)}
                            />
                        </div>

                        <div className="campo">
                            <label>Telefone</label>
                            <input
                                type="tel"
                                placeholder="(00) 00000-0000"
                                onChange={(e) => setTelefone(e.target.value)}
                            />
                        </div>

                        <div className="grade-botoes">
                            <BotaoCadastrarPJ
                                cnpj={cnpj}
                                nomeFantasia={nomeFantasia}
                                dataAbertura={dataAbertura}
                                razaoSocial={razaoSocial}
                                endereco={endereco}
                                telefone={telefone}
                            />
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}
