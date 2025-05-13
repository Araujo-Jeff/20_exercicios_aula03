import React from 'react'

const SegundosParaMinutos = (props) => {
    const minutos = (props.segundosMinutos / 60)

    return (
        <div>
            <h1>{props.segundosMinutos} segundos equivalem a {minutos} minutos.</h1>
        </div>
    )
}

export default SegundosParaMinutos