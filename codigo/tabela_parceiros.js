// declara um conjunto inicial de contatos
var db_parceiros_inicial = {
    "data": [
        {
            "id": 1,
            "nome": "Lear",
            "cidade": "Belo Horizonte",
            "cep": "32698936",
            "categoria": "Industria",
            "email": "Lian@liansuporte.br",
            "cnpj": "236.531.988.595/1469-01",
            "telefone": "3135365711",
            "website": "lean.com.br",
            "logo": "https://assets-global.website-files.com/6019e43dcfad3c059841794a/6019e43dcfad3cda2341797d_lear%20original%20logo.svg",
            "descricao": "Queremos apoiar a causa da NoMenu, acreditamos em ummundo melhor."
        },
        {
            "id": 2,
            "nome": "Supermercado BH",
            "cidade": "Betim",
            "cep": "31.811.357",
            "categoria": "Supermercado",
            "email": "bh@ajudabh.hl",
            "cnpj": "473.534.988.695/5713-38",
            "telefone": "31-32649755",
            "website": "supermercadobh.net",
            "logo": "https://www.supermercadosbh.com.br/wp-content/themes/supermercadosbh/assets/images/logo-bh-white.png",
            "descricao": "Nosso foco é conseguir atender a todos os nossos clientes."
        },
        {
            "id": 3,
            "nome": "Flora",
            "cidade": "Rio de Janeiro",
            "cep": "66.337.871",
            "categoria": "Floricultura",
            "email": "Flora@helpflora.net",
            "cnpj": "978.534.988.695/9768-77",
            "telefone": "37-31369458",
            "website": "flora.br",
            "logo": "https://sofloriculturas.com.br/logo.png",
            "descricao": " Nossa essencia vem da terra!"
        },
        {
            "id": 4,
            "nome": "Boca do forno",
            "cidade": "Betim",
            "cep": "32.641.754",
            "categoria": "restaurante",
            "email": "bca@helpboca.org",
            "cnpj": "196.534.988.695/6666-01",
            "telefone": "31-35975861",
            "website": "bocadoforno.br",
            "logo": "http://bocadoforno.com.br/wp-content/themes/Boca/img/logo.png",
            "descricao": "O melhor da culinária, somente aqui."
        },
        {
            "id": 5,
            "nome": "Stellants",
            "cidade": "São Paulo",
            "cep": "12.467.349",
            "categoria": "Industria",
            "email": "stella@contato.com",
            "cnpj": "963.534.988.695/7931-91",
            "telefone": "11-54853122",
            "website": "stellants.com.br",
            "logo": "https://www.media.stellantis.com/build/images/stellantis_logo.png",
            "descricao": "Entendemos as necessidades das pessoas em quererem qualidade de vida e apoiamos essa ideia."
        },
        {
            "id": 6,
            "nome": "Vale",
            "cidade": "Rio de Janeiro",
            "cep": "25.123.789",
            "categoria": "Mineradora",
            "email": "vale@faleconosco.info",
            "cnpj": "596.534.988.695/9586-25",
            "telefone": "37-35314705",
            "website": "vale.com.br",
            "logo": "https://www.vale.com/documents/d/guest/vale-logo",
            "descricao": "Trabalhamos com ações brasileiras e queremos apoiar a causa da NoMenu, acreditamos em um mundo melhor."
        }

    ]
}

// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var db = JSON.parse(localStorage.getItem('db_parceiro'));
if (!db) {
    db = db_parceiros_inicial
};

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertContato(parceiro) {
    // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
    let novoId = 1;
    if (db.data.length != 0)
        novoId = db.data[db.data.length - 1].id + 1;
    let novoContato = {
        "id": novoId,
        "nome": parceiro.nome,
        "email": parceiro.email,
        "cnpj": parceiro.cnpj,
        "telefone": parceiro.telefone,
        "cidade": parceiro.cidade,
        "cep": parceiro.cep,
        "categoria": parceiro.categoria,
        "website": parceiro.website,
        "logo": parceiro.logo,
        "descricao": parceiro.descricao
    };

    // Insere o novo objeto no array
    db.data.push(novoContato);
    displayMessage("Parceiro cadastrado com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_parceiro', JSON.stringify(db));
}

function updateContato(id, parceiro) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let index = db.data.map(obj => obj.id).indexOf(id);

    // Altera os dados do objeto no array
    db.data[index].nome = parceiro.nome,
        db.data[index].email = parceiro.email,
        db.data[index].cnpj = parceiro.cnpj,
        db.data[index].telefone = parceiro.telefone,
        db.data[index].cidade = parceiro.cidade,
        db.data[index].cep = parceiro.cep,
        db.data[index].categoria = parceiro.categoria,
        db.data[index].website = parceiro.website,
        db.data[index].logo = parceiro.logo,
        db.data[index].descricao = parceiro.descricao


    displayMessage("Contato alterado com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_parceiro', JSON.stringify(db));
}

function deleteContato(id) {
    // Filtra o array removendo o elemento com o id passado
    db.data = db.data.filter(function (element) { return element.id != id });

    displayMessage("Contato removido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_parceiro', JSON.stringify(db));
}