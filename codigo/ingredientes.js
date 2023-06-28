
//Sugestao
let ingredientesVeganos = [
    { ingrediente: "Tofu", prato: "Tofu mexido com legumes"},
    { ingrediente: "Leite de amêndoa", prato: "Smoothie de frutas com leite de amêndoa"},
    { ingrediente: "Grão de bico", prato: "Hummus de grão de bico"},
    { ingrediente: "Quinoa", prato: "Salada de quinoa com vegetais"},
    { ingrediente: "Levedura nutricional", prato: "Queijo vegano de levedura nutricional"},
    { ingrediente: "Tempeh", prato: "Tempeh grelhado com molho teriyaki"},
    { ingrediente: "Leite de coco", prato: "Curry de legumes com leite de coco"},
    { ingrediente: "Aveia em flocos", prato: "Biscoitos de aveia e passas"},
    { ingrediente: "Sementes de chia", prato: "Pudim de chia com frutas"},
    { ingrediente: "Manteiga de amendoim", prato: "Smoothie de banana e manteiga de amendoim"}
  ];
  
  
  var sugest = document.getElementById("result-sugestao");
  var myButton = document.getElementById("button-sugestao");
  var count = 0;
  
  myButton.addEventListener("click", displaySugest);
  
  function displaySugest() {
    sugest.innerHTML = "<b>"+ingredientesVeganos[count].ingrediente+"</b></br>"+ingredientesVeganos[count].prato;
    count++;
    if (count == ingredientesVeganos.length) {
      count = 0;
    }
  }
  //fim sugestao
  
  
  function buscarInformacoes(nome) {
    for (var i = 0; i < data.length; i++) {
      if (data[i].nome.toLowerCase() === nome.toLowerCase()) {
        return data[i];
      }
    }
    return null;
  }
  
  var botao = document.getElementById("button-addon2");
  var input = document.getElementById("input-field");
  var resultado = document.getElementById("result-container");
  
  input.addEventListener('input', function() {
    input.classList.add('loading-animation');
  });
  
  input.addEventListener('blur', function() {
    input.classList.remove('loading-animation');
  });
  
  input.addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
  
      botao.click();
    }
  });
  
  botao.addEventListener("click", function () {
    var nome = input.value;
    var informacoes = buscarInformacoes(nome);
  
    if (informacoes !== null) {
      resultado.innerHTML = "<b>Nome:</b> " + informacoes.nome + "<br>" +
        "<b>Vegano:</b> " + informacoes.vegano + "<br>" +
        "<b>Descrição:</b> " + informacoes.descrição;
    } else {
      resultado.innerHTML = "Nenhuma informação encontrada.";
    }
  });
  