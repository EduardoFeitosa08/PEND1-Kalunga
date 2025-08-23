'use strict'

import produtos from "./produtos_atualizados.json" with { type: "json"};

function criarConteudo(produto){
    const estante = document.getElementById('container-principal')
    const card = document.createElement('div')
    const preview = document.createElement('div')
    const img = document.createElement('img')
    const download = document.createElement('p')
    const info_produto = document.createElement('div')
    const nome = document.createElement('p')
    const preco = document.createElement('p')
    const button_comprar = document.createElement('button')

    img.src = './img/' + produto.imagem
    nome.textContent = produto.nome
    nome.classList.add('produto-nome')
    preco.textContent = ('R$ ' + produto.preco)
    preco.classList.add('preco')
    button_comprar.textContent = "Comprar"
    download.textContent = "DOWNLOAD"

    estante.appendChild(card)
    card.append(preview, info_produto)
    preview.append(img, download)
    preview.classList.add('preview')

    card.classList.add('card')
    img.classList.add('imagem')
    download.classList.add('download')
    info_produto.classList.add('info-produto')
    button_comprar.classList.add('button-comprar')


    document.documentElement.style.setProperty('--nome', info_produto.appendChild(nome))
    document.documentElement.style.setProperty('--preco', info_produto.appendChild(preco))

    info_produto.appendChild(button_comprar)

}

produtos.forEach(criarConteudo)