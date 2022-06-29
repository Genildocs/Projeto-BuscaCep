function pesquisarUsuario(){

    const user_id = document.getElementById("user_id").value

    const server_url = `https://jsonplaceholder.typicode.com/users/${user_id}`

    fetch(server_url)
    .then((server_response)=> server_response.json())
    .then((user_json) => {
        document.getElementById("user_name").innerHTML = "Nome: " + user_json.name
        document.getElementById("user_email").innerHTML = "Email: " + user_json.email
        document.getElementById("user_phone").innerHTML = "Phone: " + user_json.phone
        document.getElementById("company").innerHTML = "Empresa: " + user_json.company["name"]
        console.log(user_json)
    })

    

  }

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