function leDados() {
  var strDados = localStorage.getItem('db') //pegar o item db
  var objDados = {} //variável pra guardar os dados

  if (strDados) {
    objDados = JSON.parse(strDados) //pega os dados da string e converte em um objeto JSON, SE já houver o strDados
  }
  else {//se não houver os dados salvos no localstorage, cria esses 
    objDados = {
      "restaurantes": [
        {
          "id": 1,
          "foto": "https://veganfrozenfood.com.br/wp-content/uploads/2021/11/Vegan-fachada-2-1536x1152.jpeg",
          "nome": "Vegan food",
          "cep": "30730-330",
          "rua": "Dois de Maio",
          "numero": "222",
          "bairro": "Cidade Nova",
          "cidade": "Belo Horizonte",
          "estado": "Minas Gerais",
          "telefone": "31 3333 4444",
          "redeSocial": "instagram/veganfood.com",
          "email": "veganfood@restaurante.com",
          "senha": "v3f4g578",
          "isMilkProteinAllergic": false, 
          "isCeliac": false,
          "isGlutenIntolerant": true,
          "isLactoseIntolerant": true,
          "isVegan": true,
        },
        {
          "id": 2,
          "foto": "https://lh3.googleusercontent.com/p/AF1QipNyNx60BjMGcmVYkQDPyEvdtZAn6SjjZWbbxPY=s680-w680-h510",
          "nome": "Delícias do leite",
          "cep": "30890-010",
          "rua": "Jasmin",
          "numero": "672",
          "bairro": "Vila das Flores",
          "cidade": "Betim",
          "estado": "Minas Gerais",
          "telefone": "31 3434-5555",
          "redeSocial": "facebook/Delicias-do-Leite.com",
          "email": "leitedelicias@restaurante.com",
          "senha": "Delicias123",
          "isMilkProteinAllergic": true, 
          "isCeliac": false,
          "isGlutenIntolerant": true,
          "isLactoseIntolerant": true,
          "isVegan": false,

        },
        {
          "id": 3,
          "foto": "https://images.adsttc.com/media/images/5ab9/3634/f197/cc6e/5400/00b7/large_jpg/0376.jpg?1522087455",
          "nome": "Healthier",
          "cep": "35467-891",
          "rua": "Esmeralda",
          "numero": "1027",
          "bairro": "Centro",
          "cidade": "Sabará",
          "estado": "Minas Gerais",
          "telefone": "31 3766 5456",
          "redeSocial": "instagram/healthier.sabara.com",
          "email": "healthier@restaurante.com",
          "senha": "He4lt1er",
          "isMilkProteinAllergic": false, 
          "isCeliac": true,
          "isGlutenIntolerant": true,
          "isLactoseIntolerant": false,
          "isVegan": true,
        },
      ]
    }
  }

  return objDados; //vai retornar os dados que leu
}

function saveDados(dados) {

  localStorage.setItem('db', JSON.stringify(dados))
  //põe os dados no localStorage e o stringify faz eles voltarem a ser string 

}

function insertRestaurante() {
  //ler os dados no localstorage
  objDados = leDados();

  //incluir novo contato
  let strNome = document.getElementById('nome').value;
  let strFoto = document.getElementById('foto');
  let strCep = document.getElementById('cep').value;
  let strRua = document.getElementById('rua').value;
  let strNumero = document.getElementById('numero').value;
  let strBairro = document.getElementById('bairro').value;
  let strCidade = document.getElementById('cidade').value;
  let strEstado = document.getElementById('uf').value;
  let strContato = document.getElementById('contato').value;
  let strRedes = document.getElementById('redes').value;
  let strEmail = document.getElementById('email').value;
  let strSenha = document.getElementById('senha').value;
  let strAllergicMilk = document.getElementById('allergicMilk').value;
  let strCeliac = document.getElementById('celiac').value;
  let strGlutenIntolerant = document.getElementById('glutenIntolerant').value;
  let strLactoseIntolerant = document.getElementById('lactoseIntolerant').value;
  let strVegan = document.getElementById('vegan').value;

  let novoRestaurante = {
    nome: strNome,
    foto: strFoto,
    cep: strCep,
    rua: strRua,
    numero: strNumero,
    bairro: strBairro,
    cidade: strCidade,
    estado: strEstado,
    telefone: strContato,
    redeSocial: strRedes,
    email: strEmail,
    senha: strSenha,
    isMilkProteinAllergic: strAllergicMilk, 
    isCeliac: strCeliac,
    isGlutenIntolerant: strGlutenIntolerant,
    isLactoseIntolerant: strLactoseIntolerant,
    isVegan: strVegan,
  };

  objDados.restaurantes.push(novoRestaurante);

  //salvar os dados no localstorage
  saveDados(objDados);
}


function printDados(){
  let tela = document.getElementById('tela');
  let strHtml = '';
  let objDados = leDados()

  for(i=0; i < objDados.restaurantes.length; i++){
    strHtml += `<p>${objDados.restaurantes[i].nome} - ${objDados.restaurantes[i].foto} - ${objDados.restaurantes[i].cep} - ${objDados.restaurantes[i].rua} -
    ${objDados.restaurantes[i].numero} - ${objDados.restaurantes[i].bairro} - ${objDados.restaurantes[i].cidade} - ${objDados.restaurantes[i].estado}- ${objDados.restaurantes[i].telefone} -
    ${objDados.restaurantes[i].redeSocial} - ${objDados.restaurantes[i].email} <br> - ${objDados.restaurantes[i].isMilkProteinAllergic} - ${objDados.restaurantes[i].isCeliac} - 
    ${objDados.restaurantes[i].isLactoseIntolerant} - ${objDados.restaurantes[i].isLactoseIntolerant} - ${objDados.restaurantes[i].isVegan}</p>`
  }

  tela.innerHTML = strHtml;
}


document.getElementById('btnsubmitRestaurante').addEventListener('click', insertRestaurante);
document.getElementById('btnmostrarRestaurante').addEventListener('click', printDados);