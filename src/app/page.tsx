"use client";
import { useEffect, useState } from "react";
import { getAddress } from "../../get-address";

import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

import { MdDelete } from "react-icons/md";

type Address = {
  id: string;
  cep: string;
  logradouro: string;
  complemento: string;
  unidade: string;
  bairro: string;
  localidade: string;
  uf: string;
  estado: string;
  regiao: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
  createdAt: Date;
};

function formatDate(date: Date) {
  const result = formatDistanceToNow(new Date(date), {
    includeSeconds: true,
    locale: ptBR,
  });

  return result;
}

export default function Home() {
  const [inputValue, setInputValue] = useState("");

  const [addresses, setAddresses] = useState<Address[] | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleGetAddress() {
    if (inputValue.length < 8) {
      alert("CEP inválido!");
      return;
    }

    setLoading(true);

    try {
      const result = await getAddress(inputValue);

      const newAddress: Address = {
        id: self.crypto.randomUUID(),
        createdAt: new Date(),
        ...result,
      };

      setAddresses([newAddress].concat(addresses ? addresses : []));
    } catch (error) {
      console.log(error);
      alert("Ocorreu um erro ao obter o endereço.");
    } finally {
      setLoading(false);
    }
  }

  function handleDeleteAddress(id: string) {
    if (addresses === null) return;

    const filteredAddresses = addresses.filter(
      (endereco) => endereco.id !== id
    );

    setAddresses(filteredAddresses);
  }

  useEffect(() => {
    const result = localStorage.getItem("@addresses");

    if (result === null) return;

    setAddresses(JSON.parse(result));
  }, []);

  useEffect(() => {
    if (addresses === null) return;

    localStorage.setItem("@addresses", JSON.stringify(addresses));
  }, [addresses]);

  return (
    <div className="flex flex-col gap-6 px-56 mt-20">
      <div className="flex px-64 gap-2">
        <input
          onChange={(event) => setInputValue(event.target.value)}
          placeholder="Digite o CEP aqui"
          className="flex flex-1 rounded-md border border-black px-4 py-2"
        />

        <button
          disabled={inputValue === ""}
          onClick={handleGetAddress}
          className={`${
            loading && "opacity-30"
          } w-fit px-5 py-2 bg-blue-700 text-white rounded-xl`}
        >
          {loading ? "Carregando..." : "Obter endereço"}
        </button>
      </div>

      <table className="[&>*>*]:border [&>*>*]:border-black [&>*>*]:h-[35px] [&>*>*]:text-center">
        <thead>
          <tr>
            <th>Logradouro</th>
            <th>Bairro</th>
            <th>Cidade</th>
            <th>Estado</th>
            <th>CEP</th>
            <th>Consultado em</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody className="">
          {addresses?.map((endereco) => (
            <tr key={endereco.id}>
              <td>{endereco.logradouro}</td>
              <td>{endereco.bairro}</td>
              <td>{endereco.localidade}</td>
              <td>{endereco.uf}</td>
              <td>{endereco.cep}</td>
              <td>{formatDate(endereco.createdAt)}</td>
              <td className="flex">
                <button
                  title="Excluir endereço"
                  onClick={() => handleDeleteAddress(endereco.id)}
                  className="p-1"
                >
                  <MdDelete size={24} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
