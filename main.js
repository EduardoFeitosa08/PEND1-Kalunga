'use strict'

import produtos from "./produtos_atualizados.json" with {type:'json'}

function criarConteudo(produto){
    const estante = document.getElementById('container')
    const card = document.createElement('div')
    const preview = document.createElement('div')
    const img = document.createElement('img')
    const download = document.createElement('p')
    const info_produto = document.createElement('div')
    const nome = document.createElement('p')
    const preco = document.createElement('p')
    const button_comprar = document.createElement('button')

    img.src = ('./img/' + produto.imagem)
    nome.textContent = produto.nome
    preco.textContent = produto.preco
    button_comprar.textContent = "Comprar"

    estante.appendChild(card)
    card.appendChildren(preview, info_produto)
    preview.appendChildren(img, download)

    card.classList.add('card')
    img.classList.add('imagem')
    download.classList.add('download')
    info_produto.classList.add('info-produto')
    button_comprar.classList.add('button-comprar')
    info_produto.appendChild(button_comprar)

    document.documentElement.style.setProperty('--nome', info_produto.appendChild(nome))
    document.documentElement.style.setProperty('--preco', info_produto.appendChild(preco))

}

produtos.forEach(criarConteudo)