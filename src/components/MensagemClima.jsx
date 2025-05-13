import React from 'react'

const MensagemClima = () => {
    const mensagem = (tipoClima) => {
        if (tipoClima === "sol") {
            return <h1>Dia Ensolarado</h1>
        } else if (tipoClima === "chuva") {
            return <h2>Leve seu guarda chuva</h2>
        } else if (tipoClima === "nublado") {
            return <h3>Dia Nublado</h3>
        } else {
            return <p>Atenção! Comando invalido</p>
        }

    }
    return (
        <div>
            {mensagem("chuva")}
            {/* {mensagem("sol")} */}
            {/* {mensagem("nublado")} */}
            {/* {mensagem("outros")} */}
        </div>
    )
}

export default MensagemClima