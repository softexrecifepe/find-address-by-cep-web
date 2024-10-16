async function getAddress(cep: string) {
  const url = `https://viacep.com.br/ws/${cep}/json/`;

  try {
    const response = await fetch(url);

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Ocorreu um erro inesperado.", error);
  }
}

getAddress("5533fdsfsd0");
console.log("Restante do código...");
