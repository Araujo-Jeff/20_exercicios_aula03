import React from 'react'

const Usuario = (props) => {
    return (
        <div>
            <p>Nome: {props.nome}</p>
            <p>Email: {props.email}</p>
            <p>Telefone: {props.telefone}</p>
        </div>
    )
}

export default Usuario