"use client";

import { getAddress } from "../../get-address";

export default function Home() {
  let address = "Rua Teste";

  async function handleGetAddress() {
    try {
      const result = await getAddress("55330000");
      address = result;

      console.log(result);
    } catch (error) {
      console.log(error);
      alert("Ocorreu um erro ao obter o endereço.");
    }
  }

  return (
    <div>
      <h1>Página Home</h1>
      <span>Endereço: {address}</span>
      <button
        onClick={handleGetAddress}
        className="px-5 py-3 bg-blue-700 text-white rounded-xl"
      >
        Obter endereço
      </button>
    </div>
  );
}
