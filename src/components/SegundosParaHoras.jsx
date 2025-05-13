import React from 'react'

const SegundosParaHoras = (props) => {
    const horas = (props.segundosHoras / 60) / 60

    return (
        <div>
            <h1> {props.segundosHoras} segundos equivalem a {horas} horas. </h1>
        </div>
    )
}

export default SegundosParaHoras