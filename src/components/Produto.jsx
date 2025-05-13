import React from 'react'

const Produto = ({ nome, preco, categoria }) => {
    return (
        <div style={{ border: '1px solid #ccc', padding: '10px', margin: '5px' }}>
            <h4>Nome: {nome}</h4>
            <p>Preço : {preco} </p>
            <p>Categoria: {categoria}</p>
        </div>
    )
}

export default Produto