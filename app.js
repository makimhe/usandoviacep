// console.log(rua);

const enderecoUsuario = {
  logradouro: document.querySelector("#logradouro"),
  bairro: document.querySelector("#bairro"),
  cidade: document.querySelector("#cidade"),
  estado: document.querySelector("#estado"),
  cep: "06436330",
};

async function consultaCep(cep) {
  const url = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
  const resposta = await url.json();

  let cepUsuario = {
    logradouro: resposta.logradouro,
    bairro: resposta.bairro,
    cidade: resposta.localidade,
    estado: resposta.estado,
  };inserirDados(cepUsuario);
  console.log(cepUsuario);
}

consultaCep(enderecoUsuario.cep);

function inserirDados(cepUsuario) {
  enderecoUsuario.logradouro.innerText = cepUsuario.logradouro;
  enderecoUsuario.bairro.innerText = cepUsuario.bairro;
  enderecoUsuario.cidade.innerText = cepUsuario.cidade;
  enderecoUsuario.estado.innerText = cepUsuario.estado;
}

