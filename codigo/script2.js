let notaComentario = 0;

window.onload = (e) => {
    let stars = document.querySelectorAll('input[name="rating"]');
    for (let p = 0; p < stars.length; p++) {
        stars[p].addEventListener('click', function () {
            notaComentario = this.value;
        })
    }
};

function leDados() {
    let strDados = localStorage.getItem('db1');
    let objDados = {};

    if (strDados) {
        objDados = JSON.parse(strDados);
    }
    else {
        objDados = {
            comentario: [
                { nome: "Júlia Moreira", avaliacao: 5, comentario: "Muito bom o restaurante. Ótimo atendimento. Comida deliciosa." },
                { nome: "Jõao Silva", avaliacao: 4.5, comentario: "Comida deliciosa, atendeu muito bem minhas restrições." },
                { nome: "Amélia Nascimento", avaliacao: 4, comentario: "Comida boa, preço acessível" }]
        }
    }

    return objDados;
}

function salvaDados(dados) {
    localStorage.setItem('db1', JSON.stringify(dados));
}

function incluirComentario() {
    // Ler os dados do localStorage
    let objDados = leDados();

    // Incluir um novo contato
    let strNome = document.getElementById('NomeComentario').value;
    let strComentario = document.getElementById('Comentario').value;
    let novoComentario = {
        nome: strNome,
        avaliacao: parseFloat(notaComentario),
        comentario: strComentario
    };
    objDados.comentario.push(novoComentario);

    // Salvar os dados no localStorage novamente
    salvaDados(objDados);

    // Atualiza os dados da tela
    imprimeDados();
}

function imprimeDados() {
    let tela = document.getElementById('tela');
    let tela_estrela = document.getElementById("tela_estrela");
    let strMediaEstrela = '';
    let strHtml = '';
    let objDados = leDados();
    let media = 0;

    for (i = 0; i < objDados.comentario.length; i++) {
        media += objDados.comentario[i].avaliacao;
        strHtml += `<div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <p class="card-text"><b>${objDados.comentario[i].nome}</b><br> ${objDados.comentario[i].avaliacao} estrelas <br> ${objDados.comentario[i].comentario}</p></p>
                        </div>
                    </div>`
    }
    console.log(media);
    media /= objDados.comentario.length;

    if (media >= 0.5 && media < 1) {
        strMediaEstrela = `<i class="fas fa-star-half-alt estrelas_media"></i><i class="fa fa-star-o" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i>`;
    } else if (media == 1) {
        strMediaEstrela = `<i class="fas fa-star estrelas_media"></i><i class="fa fa-star-o" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i>`;
    } else if (media > 1 && media <= 1.5) {
        strMediaEstrela = `<i class="fas fa-starestrelas_media"></i> <i class="fas fa-star-half-alt"></i><i class="fa fa-star-o" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i>`;
    } else if (media > 1.5 && media <= 2) {
        strMediaEstrela = `<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fa fa-star-o" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i>`;
    } else if (media > 2 && media <= 2.5) {
        strMediaEstrela = `<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i><i class="fa fa-star-o" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i>`;
    } else if (media > 2.5 && media <= 3) {
        strMediaEstrela = `<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fa fa-star-o" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i>`;
    } else if (media > 3 && media <= 3.5) {
        strMediaEstrela = `<i class="fas fa-star estrelas_media"></i><i class="fas fa-star estrelas_media"></i><i class="fas fa-star estrelas_media"></i><i class="fas fa-star-half-alt estrelas_media"></i>`;
    } else if (media > 3.5 && media <= 4) {
        strMediaEstrela = `<i class="fas fa-star estrelas_media"></i><i class="fas fa-star estrelas_media"></i><i class="fas fa-star estrelas_media"></i><i class="fas fa-star estrelas_media"></i>`;
    } else if (media > 4 && media <= 4.5) {
        strMediaEstrela = `<i class="fas fa-star estrelas_media"></i><i class="fas fa-star estrelas_media"></i><i class="fas fa-star estrelas_media"></i><i class="fas fa-star estrelas_media"></i><i class="fas fa-star-half-alt estrelas_media"></i>`;
    } else if (media > 4.5 && media <= 5) {
        strMediaEstrela = `<i class="fas fa-star estrelas_media"></i><i class="fas fa-star estrelas_media"></i><i class="fas fa-star estrelas_media"></i><i class="fas fa-star estrelas_media"></i><i class="fas fa-star estrelas_media"></i>`;
    }


    tela.innerHTML = strHtml;
    tela_estrela.innerHTML = strMediaEstrela;
}

// Configura os botões
document.getElementById('btnCarregaDados').addEventListener('click', imprimeDados);
document.getElementById('EnviarComentario').addEventListener('click', incluirComentario);
