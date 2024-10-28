"use client";
import { useState } from "react";
import { getAddress } from "../../get-address";

const names = [
  "Arthur de Oliveira",
  "Lucas Galvão",
  "Izabelle Alves",
  "Gabryella Silva",
  "Camilinha Barros",
];

const enderecos = [
  {
    id: self.crypto.randomUUID(),
    cep: "51270380",
    logradouro: "Rua Engenho Carau",
    complemento: "",
    unidade: "1",
    bairro: "Cohab",
    localidade: "Recife",
    uf: "PE",
    estado: "Pernambuco",
    regiao: "Nordeste",
    ibge: "2611606",
    gia: "",
    ddd: "81",
    siafi: "2619",
  },
  {
    id: self.crypto.randomUUID(),
    cep: "30130010",
    logradouro: "Avenida Afonso Pena",
    complemento: "",
    unidade: "2",
    bairro: "Centro",
    localidade: "Belo Horizonte",
    uf: "MG",
    estado: "Minas Gerais",
    regiao: "Sudeste",
    ibge: "3106200",
    gia: "",
    ddd: "31",
    siafi: "4123",
  },
  {
    id: self.crypto.randomUUID(),
    cep: "01310000",
    logradouro: "Avenida Paulista",
    complemento: "",
    unidade: "3",
    bairro: "Bela Vista",
    localidade: "São Paulo",
    uf: "SP",
    estado: "São Paulo",
    regiao: "Sudeste",
    ibge: "3550308",
    gia: "1004",
    ddd: "11",
    siafi: "7107",
  },
  {
    id: self.crypto.randomUUID(),
    cep: "40020000",
    logradouro: "Praça da Sé",
    complemento: "Edifício Central",
    unidade: "4",
    bairro: "Centro Histórico",
    localidade: "Salvador",
    uf: "BA",
    estado: "Bahia",
    regiao: "Nordeste",
    ibge: "2927408",
    gia: "",
    ddd: "71",
    siafi: "3849",
  },
  {
    id: self.crypto.randomUUID(),
    cep: "70040900",
    logradouro: "Esplanada dos Ministérios",
    complemento: "",
    unidade: "5",
    bairro: "Zona Cívico-Administrativa",
    localidade: "Brasília",
    uf: "DF",
    estado: "Distrito Federal",
    regiao: "Centro-Oeste",
    ibge: "5300108",
    gia: "",
    ddd: "61",
    siafi: "9701",
  },
];

export default function Home() {
  const [address, setAddress] = useState(null);
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");

  async function handleGetAddress() {
    if (inputValue.length !== 8) {
      alert("CEP inválido");
      return;
    }

    setLoading(true);

    try {
      const result = await getAddress(inputValue);
      setAddress(result.logradouro);
      // address = result;

      console.log(result);
    } catch (error) {
      console.log(error);
      alert("Ocorreu um erro ao obter o endereço.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h1>Página Home</h1>

      <div className="flex flex-col gap-2">
        <label>Endereço</label>
        <input
          onChange={(event) => setInputValue(event.target.value)}
          placeholder="Digite o CEP aqui"
          className="rounded-md border border-black px-4 p-3"
        />

        <button
          disabled={inputValue === ""}
          onClick={handleGetAddress}
          className={`${
            loading && "opacity-30"
          } w-fit px-5 py-3 bg-blue-700 text-white rounded-xl`}
        >
          {loading ? "Carregando..." : "Obter endereço"}
        </button>
      </div>

      {/* <ul>
        <li>Arthur de Oliveira</li>
        <li>Lucas Galvão</li>
        <li>Izabelle Alves</li>
        <li>Gabryella Silva</li>
        <li>Camilinha Barros</li>
      </ul> */}

      <ul>
        {enderecos.map((endereco) => (
          <li key={endereco.id}>{endereco.logradouro}</li>
        ))}
      </ul>
    </div>
  );
}
