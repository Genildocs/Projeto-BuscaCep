  function buscaCep(){
    const busca_cep = document.getElementById("busca_cep").value

    const cep_url = `https://viacep.com.br/ws/${busca_cep}/json/`

    fetch(cep_url)
    .then((server_response)=> server_response.json())
    .then((user_json) => {
        document.getElementById("cep_number").innerHTML = "Cep: " + user_json.cep
        document.getElementById("address").innerHTML = "Endereço: " + user_json.logradouro
        document.getElementById("district").innerHTML = "Bairro: " + user_json.bairro
        document.getElementById("city").innerHTML = "Cidade: " + user_json.localidade + "/" + user_json.uf
        console.log(user_json)
    })
  }

  function limparCampo(){
      document.getElementById("busca_cep").value = "";
      document.getElementById("cep_number").innerHTML = ""
      document.getElementById("address").innerHTML = ""
      document.getElementById("district").innerHTML = ""
      document.getElementById("city").innerHTML = ""
  }