// função - getelementby id or class - addeventlistener - 

// dados iniciais das restrições
var db_restrição_inicial = {
    "data": [
        {
            "id": 1,
            "nome": "Intolerância à Lactose",
            "descrição": "Intolerância à lactose é uma condição em que o corpo é incapaz de digerir a lactose, um açúcar encontrado no leite e em outros produtos lácteos. Produtos como leite, queijo, iogurte, sorvete, pães, cereais, molhos, produtos de panificação, entre outros devem ser evitados.",
            "requisitos": "Oferecer opções de menu sem lactose, limpar cuidadosamente os utensílios e equipamentos de cozinha para evitar a contaminação cruzada de alimentos com lactose, rotulagem adequada de alimentos e funcionários que saibam  fornecer informações precisas sobre os ingredientes dos pratos."
        },
        {
            "id": 2,
            "nome": "Intolerância ao Glúten",
            "descrição": "Intolerância ao glúten é uma condição em que o sistema imunológico reage negativamente ao glúten, uma proteína encontrada em grãos como trigo, cevada e centeio.",
            "requisitos": "Restaurantes devem oferecer opções de menu sem glúten, como aqueles preparados com farinha de arroz, farinha de amêndoa ou farinha de grão de bico, e evitar a contaminação cruzada de alimentos com glúten. "
        },
        {
            "id": 3,
            "nome": "Veganismo",
            "descrição": "Veganismo é um estilo de vida que busca excluir o uso de produtos de origem animal em todas as esferas da vida, incluindo alimentação, vestuário e produtos de higiene e beleza.",
            "requisitos": "Restaurantes devem oferecer opções veganas e informar sobre ingredientes de origem animal em seus pratos. Além disso, a cozinha deve evitar a contaminação cruzada de ingredientes de origem animal com alimentos veganos. Para atender este público,  o ambiente do restaurante não deve conter produtos de origem animal ou que foram testados em animais, como sabonetes de mão, tapetes e cadeiras em couro animal, entre outros. "
        },
        {
            "id": 4,
            "nome": "Vegetarianismo",
            "descrição": "Vegetarianismo é um estilo de vida que exclui o consumo de carne e outros produtos animais. Vegetarianos mais flexíveis consumem alguns produtos de origem animal, como leite, ovos e queijo.",
            "requisitos": "Restaurantes devem oferecer opções vegetarianas e informar sobre ingredientes de origem animal em seus pratos, prezando por pratos sem carne, peixe, ovos e leite. Além disso, a cozinha deve evitar a contaminação cruzada de ingredientes de origem animal com alimentos vegetarianos."
        }
    ]
}

// localStorage.clear();

var db = JSON.parse(localStorage.getItem('db_restriction'));
if (!db) {
    db = db_restrição_inicial
};

function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertRestrição(restriction) {
    // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
    let novoId = 1;
    if (db.data.length != 0) 
      novoId = db.data[db.data.length - 1].id + 1;
    let novaRestrição = {
        "id": novoId,
        "nome": restriction.nome,
        "descrição" : restriction.descrição,
        "requisitos": restriction.requisitos
    };

    // Insere o novo objeto no array
    db.data.push(novaRestrição);
    displayMessage("Restrição inserida com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_restriction', JSON.stringify(db));
}

function updateRestrição(id, restriction) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let index = db.data.map(obj => obj.id).indexOf(id);

    // Altera os dados do objeto no array
    db.data[index].nome = restriction.nome,
    db.data[index].descrição = restriction.descrição,
    db.data[index].requisitos = restriction.requisitos

    displayMessage("Restrição alterada com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_restriction', JSON.stringify(db));
}

function deleteRestrição(id) {    
    // Filtra o array removendo o elemento com o id passado
    db.data = db.data.filter(function (element) { return element.id != id });

    displayMessage("Restrição removida com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_restriction', JSON.stringify(db));
}
