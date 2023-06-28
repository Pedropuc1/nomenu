function leDados () {
    let strDados = localStorage.getItem('db');
    let objDados = {};

    if (strDados) {
        objDados = JSON.parse (strDados);
    }
    else {
        objDados = { restaurantes: [ 
            {
                id_restaurante: 1,
                foto_restaurante: "",
                nome_restaurante: "Vegan food",
                cep_restaurante: "30730-330",
                rua_restaurante: "Dois de Maio",
                numero_restaurante: "222",
                bairro_restaurante: "Cidade Nova",
                cidade_restaurante: "Belo Horizonte",
                telefone_restaurante: "(31) 3333-4444",
                rede_social: "instagram/veganfood.com",
                email_restaurante: "veganfood@restaurante.com",
                senha_restaurante: "v3f4g578"
            },
            {
                id_restaurante: 2,
                foto_restaurante: "",
                nome_restaurante: "Delícias do leite",
                cep_restaurante: "30890-010",
                rua_restaurante: "Jasmin",
                numero_restaurante: "672",
                bairro_restaurante: "Vila das Flores",
                cidade_restaurante: "Betim",
                telefone_restaurante: "(31) 3434-5555",
                rede_social: "facebook/Delicias-do-Leite.com",
                email_restaurante: "leitedelicias@restaurante.com",
                senha_restaurante: "Delicias123"
            },
            {
                id_restaurante: 3,
                foto_restaurante: "",
                nome_restaurante: "Healthier",
                cep_restaurante: "35467-891",
                rua_restaurante: "Esmeralda",
                numero_restaurante: "1027",
                bairro_restaurante: "Centro",
                cidade_restaurante: "Sabará",
                telefone_restaurante: "(31) 3766-5456",
                rede_social: "instagram/healthier.sabara.com",
                email_restaurante: "healthier@restaurante.com",
                senha_restaurante: "He4lt1er"
            }
        
        
        ]
    }

    return objDados;
}
}
function salvaDados (dados) {
    localStorage.setItem ('db', JSON.stringify (dados));
}


window.onload = function() {
    let titulo1 = document.getElementById('titulo1');
    let titulo2 = document.getElementById('titulo2');
    let titulo3 = document.getElementById('titulo3');
    let strHtml1 = '';
    let strHtml2 = '';
    let strHtml3 = '';
    let descHtml1 = '';
    let descHtml2 = '';
    let descHtml3 = '';
    let objDados = leDados ();

    for (i=0; i< 1; i++) {
        strHtml1 += `${objDados.restaurantes[i].nome_restaurante}`
    }
    for (i=1; i< 2; i++) {
        strHtml2 += `${objDados.restaurantes[i].nome_restaurante}`
    }
    for (i=2; i< 3; i++) {
        strHtml3 += `${objDados.restaurantes[i].nome_restaurante}`
    }
    for (i=0; i< 1; i++) {
        descHtml1 += `${objDados.restaurantes[i].telefone_restaurante}`
    }
    for (i=1; i< 2; i++) {
        descHtml2 += `${objDados.restaurantes[i].telefone_restaurante}`
    }
    for (i=2; i< 3; i++) {
        descHtml3 += `${objDados.restaurantes[i].telefone_restaurante}`
    }


    document.getElementById('titulo1').innerHTML = strHtml1;
    document.getElementById('titulo2').innerHTML = strHtml2;
    document.getElementById('titulo3').innerHTML = strHtml3;
    document.getElementById('telefone1').innerHTML = descHtml1;
    document.getElementById('telefone2').innerHTML = descHtml2;
    document.getElementById('telefone3').innerHTML = descHtml3;
}

function imprimirmodal() {
    let titulomodal1 = document.getElementById('titulomodal1');
    let titulomodal2 = document.getElementById('titulomodal2');
    let titulomodal3 = document.getElementById('titulomodal3');
    let strHtml1 = '';
    let strHtml2 = '';
    let strHtml3 = '';
    let descHtml1 = '';
    let descHtml2 = '';
    let descHtml3 = '';
    let objDados = leDados ();

    for (i=0; i< 1; i++) {
        strHtml1 += `${objDados.restaurantes[i].nome_restaurante}`
    }
    for (i=1; i< 2; i++) {
        strHtml2 += `${objDados.restaurantes[i].nome_restaurante}`
    }
    for (i=2; i< 3; i++) {
        strHtml3 += `${objDados.restaurantes[i].nome_restaurante}`
    }
    for (i=0; i< 1; i++) {
        descHtml1 += `Telefone: ${objDados.restaurantes[i].telefone_restaurante} <br> Cidade: ${objDados.restaurantes[i].cidade_restaurante} <br> Bairro: ${objDados.restaurantes[i].bairro_restaurante} <br> Rua: ${objDados.restaurantes[i].rua_restaurante} <br> Numero: ${objDados.restaurantes[i].numero_restaurante}`
    }
    for (i=1; i< 2; i++) {
        descHtml2 += `Telefone: ${objDados.restaurantes[i].telefone_restaurante} <br> Cidade: ${objDados.restaurantes[i].cidade_restaurante} <br> Bairro: ${objDados.restaurantes[i].bairro_restaurante} <br> Rua: ${objDados.restaurantes[i].rua_restaurante} <br> Numero: ${objDados.restaurantes[i].numero_restaurante}`
    }
    for (i=2; i< 3; i++) {
        descHtml3 += `Telefone: ${objDados.restaurantes[i].telefone_restaurante} <br> Cidade: ${objDados.restaurantes[i].cidade_restaurante} <br> Bairro: ${objDados.restaurantes[i].bairro_restaurante} <br> Rua: ${objDados.restaurantes[i].rua_restaurante} <br> Numero: ${objDados.restaurantes[i].numero_restaurante}`
    }


    document.getElementById('titulomodal1').innerHTML = strHtml1;
    document.getElementById('titulomodal2').innerHTML = strHtml2;
    document.getElementById('titulomodal3').innerHTML = strHtml3;
    document.getElementById('modalbody1').innerHTML = descHtml1;
    document.getElementById('modalbody2').innerHTML = descHtml2;
    document.getElementById('modalbody3').innerHTML = descHtml3;
}

// configuração dos botões

document.getElementById ('btnmodal1').addEventListener ('click', imprimirmodal);
document.getElementById ('btnmodal2').addEventListener ('click', imprimirmodal);
document.getElementById ('btnmodal3').addEventListener ('click', imprimirmodal);
