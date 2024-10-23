"use client";
import { useState } from "react";
import { getAddress } from "../../get-address";

export default function Home() {
  const [address, setAddress] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleGetAddress() {
    setAddress(null);
    setLoading(true);

    try {
      const result = await getAddress("53080195");

      setAddress(result.logradouro);
      console.log(result.logradouro);
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
        <span>Endereço: {address}</span>
        <button
          onClick={handleGetAddress}
          className={`${
            loading && "opacity-30"
          } px-5 w-fit py-3 bg-blue-700 text-white rounded-xl`}
        >
          {loading ? "Carregando..." : "Obter endereço"}
        </button>
      </div>
    </div>
  );
}
