import React from 'react'

const HorasParaSegundos = (props) => {
    const segundos = (props.horas * 60) * 60

    return (
        <div>
            <h1> {props.horas} horas equivalem a {segundos} segundos </h1>
        </div>
    )
}

export default HorasParaSegundos