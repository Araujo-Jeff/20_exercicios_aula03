import React from 'react'

const ImagemCondicional2 = () => {
    const escolhaAlternativa = (tipoImagem) => {
        if (tipoImagem === "LOGO") {
            return <img src="/logo_react.png" alt="" />
        } else if (tipoImagem === "PERSONAGEM") {
            return <img src="/personagem.jpeg" alt="" />
        } else {
            return <p>Comando invalido</p>
        }
    }

    return (
        <div>
            {escolhaAlternativa("PERSONAGEM")}
            {/* {escolhaAlternativa("LOGO")} */}
            {/* {escolhaAlternativa("OUTROS")} */}
        </div>
    )
}

export default ImagemCondicional2