import React from 'react'
import Produto from './Produto'

const ListaProdutos = () => {
    const produtos = [
        {
            nome: "Monitor",
            preco: "400,00",
            categoria: "Video"
        },
        {
            nome: "Teclado",
            preco: "120,00",
            categoria: "Dispositivo"
        }
    ]

    return (
        <div>
            <h1>Lista de Produtos</h1>
            {
                produtos.map((produto, index) => (
                    <Produto key={index} nome={produto.nome} preco={produto.preco} categoria={produto.categoria} />
                ))
            }
        </div>
    )
}

export default ListaProdutos