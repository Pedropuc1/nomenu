
window.onload = function () {
    imprimeDadosLocalizacao();
};

const objDadosRestaurantes = {
    "restaurantes": [
        {
            "id": 1,
            "foto": "...",
            "nome": "Padaria SELEVE",
            "cep": "30170-001",
            "rua": "Av. Álvares Cabral",
            "numero": "399",
            "bairro": "Lourdes",
            "cidade": "Belo Horizonte",
            "telefone": "(31) 3786-4001",
            "redeSocial": "https://www.instagram.com/seleve_seleve/",
            "email": "contato@seleve.com.br",
            "senha": "SELEVE30170001",
            "isMilkProteinAllergic": true,
            "isCeliac": true,
            "isGlutenIntolerant": true,
            "isLactoseIntolerant": true,
            "isVegan": true,
            "isVegetarian": true
        },
        {
            "id": 2,
            "foto": "...",
            "nome": "La Vie Salutare - Empório Low Carb BH",
            "cep": "30170-090",
            "rua": "R. Marília de Dirceu",
            "numero": "145",
            "bairro": "Lourdes",
            "cidade": "Belo Horizonte",
            "telefone": "(31) 99662-7433",
            "redeSocial": "https://www.instagram.com/laviesalutare/",
            "email": "",
            "senha": "LAVIE30170090",
            "isMilkProteinAllergic": false,
            "isCeliac": true,
            "isGlutenIntolerant": true,
            "isLactoseIntolerant": true,
            "isVegan": false,
            "isVegetarian": false
        },
        {
            "id": 3,
            "foto": "...",
            "nome": "San Ro Restaurante Vegano e Vegetariano",
            "cep": "30150-370",
            "rua": "Rua Professor Moraes",
            "numero": "651",
            "bairro": "Funcionários",
            "cidade": "Belo Horizonte",
            "telefone": "(31) 3264-9236",
            "redeSocial": "https://www.instagram.com/sanro_vegetariano/",
            "email": "",
            "senha": "SANRO30150370",
            "isMilkProteinAllergic": false,
            "isCeliac": false,
            "isGlutenIntolerant": false,
            "isLactoseIntolerant": false,
            "isVegan": true,
            "isVegetarian": true
        },
        {
            "id": 4,
            "foto": "...",
            "nome": "Café com Letras",
            "cep": "30112-010",
            "rua": " R. Antônio de Albuquerque",
            "numero": "781",
            "bairro": "Savassi",
            "cidade": "Belo Horizonte",
            "telefone": "(31) 3264-9236",
            "redeSocial": "https://www.instagram.com/cafe_com_letras/",
            "email": "",
            "senha": "CAFECOMLETRAS30112010",
            "isMilkProteinAllergic": false,
            "isCeliac": false,
            "isGlutenIntolerant": false,
            "isLactoseIntolerant": false,
            "isVegan": true,
            "isVegetarian": true
        },
        {
            "id": 5,
            "foto": "...",
            "nome": "A Pão de Queijaria - Savassi",
            "cep": "30112-011",
            "rua": " R. Antônio de Albuquerque",
            "numero": "856",
            "bairro": "Funcionários",
            "cidade": "Belo Horizonte",
            "telefone": "(31) 2512-6360",
            "redeSocial": "https://www.instagram.com/apaodequeijaria/?igshid=MzRlODBiNWFlZA%3D%3D",
            "email": "",
            "senha": "APAODEQUEIJARIA301123011",
            "isMilkProteinAllergic": false,
            "isCeliac": false,
            "isGlutenIntolerant": true,
            "isLactoseIntolerant": false,
            "isVegan": true,
            "isVegetarian": true
        },
        {
            "id": 6,
            "foto": "...",
            "nome": "DHUY PIZZA",
            "cep": "90610-270",
            "rua": "R. Silva Só",
            "numero": "96",
            "bairro": "Santa Cecília",
            "cidade": "Porto Alegre",
            "telefone": "(51) 4040-4500",
            "redeSocial": "https://www.instagram.com/dhuypizza/",
            "email": "",
            "senha": "DHUYPIZZA90610270",
            "isMilkProteinAllergic": false,
            "isCeliac": true,
            "isGlutenIntolerant": true,
            "isLactoseIntolerant": true,
            "isVegan": true,
            "isVegetarian": true
        },
        {
            "id": 7,
            "foto": "...",
            "nome": "Magnólia",
            "cep": "30130-170",
            "rua": "R. Sergipe",
            "numero": "314",
            "bairro": "Boa Viagem",
            "cidade": "Belo Horizonte",
            "telefone": " (31) 3291-5320",
            "redeSocial": "https://www.instagram.com/magnoliarestaurante/",
            "email": "",
            "senha": "MAGNOLIA30130170",
            "isMilkProteinAllergic": false,
            "isCeliac": false,
            "isGlutenIntolerant": true,
            "isLactoseIntolerant": true,
            "isVegan": true,
            "isVegetarian": true
        },
        {
            "id": 8,
            "foto": "...",
            "nome": "Sandubem",
            "cep": "22290-240",
            "rua": " Av. Pasteur",
            "numero": "184",
            "bairro": "Botafogo",
            "cidade": "Rio de Janeiro",
            "telefone": "(21) 97266-1322",
            "redeSocial": "https://www.instagram.com/sandubem.oficial/",
            "email": "",
            "senha": "SANDUBEM22290240",
            "isMilkProteinAllergic": false,
            "isCeliac": true,
            "isGlutenIntolerant": true,
            "isLactoseIntolerant": true,
            "isVegan": true,
            "isVegetarian": true
        },
        {
            "id": 9,
            "foto": "...",
            "nome": "Las Chicas Vegan",
            "cep": "31190-000",
            "rua": "Av. Augusto de Lima",
            "numero": "233",
            "bairro": "Centro",
            "cidade": "Belo Horizonte",
            "telefone": "(31) 3327-2758",
            "redeSocial": "https://www.instagram.com/laschicasvegan/",
            "email": "",
            "senha": "LASCHICASVEGAN",
            "isMilkProteinAllergic": false,
            "isCeliac": false,
            "isGlutenIntolerant": true,
            "isLactoseIntolerant": false,
            "isVegan": true,
            "isVegetarian": true
        },
    ]
};

function imprimeDadosLocalizacao() {
    let tela1 = document.querySelector('.tela1');
    let localizacaoHtml1 = '';

    localizacaoHtml1 += `
        <div> 
            <h4 class="font_logo color_theme">${objDadosRestaurantes.restaurantes[2].nome}</h4>
            <p>
                Endereço: ${objDadosRestaurantes.restaurantes[2].rua}, ${objDadosRestaurantes.restaurantes[2].numero} Bairro ${objDadosRestaurantes.restaurantes[2].bairro}, ${objDadosRestaurantes.restaurantes[2].cidade}<br>
                Telefone: ${objDadosRestaurantes.restaurantes[2].telefone}<br>
                <a class = "color_theme" href="${objDadosRestaurantes.restaurantes[2].redeSocial}" target="_blank">Instagram</a><br>
            </p>
        </div>`;
    


    tela1.innerHTML = localizacaoHtml1;

}