// Variável global para armazenar os pratos cadastrados
var pratos = [];

// Função para abrir o pop-up de cadastro de pratos
function abrirPopup() {
  document.getElementById('popup').style.display = 'block';
}

// Função para fechar o pop-up de cadastro de pratos
function fecharPopup() {
  document.getElementById('popup').style.display = 'none';
}

// Função para adicionar um prato ao array de pratos
function adicionarPrato() {
  var nome = document.getElementById('nomePrato').value;
  var descricao = document.getElementById('descricaoPrato').value;
  var ingredientes = document.getElementById('ingredientesPrato').value;
  var restricoes = document.getElementById('restricoesPrato').value;

  var prato = {
    nome: nome,
    descricao: descricao,
    ingredientes: ingredientes,
    restricoes: restricoes
  };

  pratos.push(prato);

  // Limpar os campos do formulário do prato após adicionar
  document.getElementById('nomePrato').value = '';
  document.getElementById('descricaoPrato').value = '';
  document.getElementById('ingredientesPrato').value = '';
  document.getElementById('restricoesPrato').value = '';
}

// Função para remover um prato do array de pratos
function removerPrato(index) {
  pratos.splice(index, 1);
  printDados();
  salvarPratos(); // Salvar os pratos atualizados no localStorage novamente
}

// Função para salvar os pratos e concluir o processo de cadastro
function salvarPratos() {
  // Adicionar os pratos ao objeto de dados
  var objDados = leDados();
  objDados.pratos = pratos;

  // Salvar os dados no localStorage
  saveDados(objDados);

  // Fechar o pop-up e limpar o array de pratos
  fecharPopup();
  pratos = [];

  // Limpar a tela e exibir os dados atualizados
  printDados();
}

// Função para recuperar os dados do localStorage
function leDados() {
  var dados = localStorage.getItem('dados');
  if (dados) {
    return JSON.parse(dados);
  } else {
    return {};
  }
}

// Função para salvar os dados no localStorage
function saveDados(objDados) {
  localStorage.setItem('dados', JSON.stringify(objDados));
}

// Função para exibir os pratos cadastrados na página
function printDados() {
  var pratosContainer = document.getElementById('pratosContainer');
  pratosContainer.innerHTML = ''; // Limpar o conteúdo anterior

  var objDados = leDados();
  var pratos = objDados.pratos || [];

  for (var i = 0; i < pratos.length; i++) {
    var prato = pratos[i];

    var pratoCard = document.createElement('div');
    pratoCard.classList.add('prato-card');

    var nomeElement = document.createElement('h3');
    nomeElement.textContent = prato.nome;
    pratoCard.appendChild(nomeElement);

    var descricaoElement = document.createElement('p');
    descricaoElement.textContent = prato.descricao;
    pratoCard.appendChild(descricaoElement);

    var ingredientesElement = document.createElement('p');
    ingredientesElement.textContent = prato.ingredientes;
    pratoCard.appendChild(ingredientesElement);

    var restricoesElement = document.createElement('p');
    restricoesElement.textContent = prato.restricoes;
    pratoCard.appendChild(restricoesElement);

    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'x';
    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('click', (function(index) {
      return function() {
        removerPrato(index);
      };
    })(i));
    pratoCard.appendChild(deleteButton);

    pratosContainer.appendChild(pratoCard);
  }
}

// Event listener para o botão "Cadastrar Pratos"
document.getElementById('btnCadastroPratos').addEventListener('click', abrirPopup);

// Chamar a função printDados() para exibir os pratos cadastrados ao carregar a página
printDados();