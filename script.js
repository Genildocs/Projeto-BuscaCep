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

 
  let btn = document.getElementById("limpaform");

  btn.onclick = function(){
      document.getElementById("busca_cep").value = "";
      document.getElementById("cep_number").innerHTML = ""
      document.getElementById("address").innerHTML = ""
      document.getElementById("district").innerHTML = ""
      document.getElementById("city").innerHTML = ""
      
  }

const url = 'https://economia.awesomeapi.com.br/last/'
const coins = 'USD-BRL,EUR-BRL,BTC-BRL'

fetch(url + coins)
    .then(function(response){
      return response.json()
    })
    .then(function(data){
      const dolarReal = data.USDBRL

      let estaData = new Date(dolarReal.create_date)

      document.getElementById('title').innerHTML = dolarReal.name
      document.getElementById('thisdate').innerHTML = estaData.toLocaleString()
      document.getElementById('valorAtul').innerHTML = parseFloat(dolarReal.high).toLocaleString('pt-br',{
        style: 'currency',
        currency: 'BRL'})
    
    })

    alert('Site em constante atualização...')