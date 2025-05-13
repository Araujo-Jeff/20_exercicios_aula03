import React from 'react'

const MinutosParaSegundos = (props) => {
    const segundos = (props.minutos * 60)

    return (
        <div>
            <h1> {props.minutos} minutos equivalem a {segundos} segundos </h1>
        </div>
    )
}

export default MinutosParaSegundos