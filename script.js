  function buscaCep(){
    const busca_cep = document.getElementById("busca_cep").value

    const server_url = `https://cep.awesomeapi.com.br/json/${busca_cep}`

    fetch(server_url)
    .then((server_response)=> server_response.json())
    .then((user_json) => {
        document.getElementById("cep_number").innerHTML = "Cep: " + user_json.cep
        document.getElementById("address").innerHTML = "Endereço: " + user_json.address
        document.getElementById("district").innerHTML = "Bairro: " + user_json.district
        document.getElementById("city").innerHTML = "Cidade: " + user_json.city + "/" + user_json.state
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