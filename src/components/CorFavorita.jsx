import React from 'react'

const CorFavorita = () => {
    const escolhaCor = (cor) => {
        if (cor === "amarelo") {
            return <div style={{ backgroundColor: 'yellow', width: '100px', height: '100px', border: '1px solid black' }} >Amarelo</div>
        } else if (cor === "vermelho") {
            return <div style={{ backgroundColor: 'red', width: '100px', height: '100px', border: '1px solid black' }} >Vermelho</div>
        } else if (cor === "azul") {
            return <div style={{ backgroundColor: 'blue', width: '100px', height: '100px', border: '1px solid black' }} >Azul</div>
        }
    }

    return (
        <div>
            <h5>Minha cor favorita</h5>
            {escolhaCor("azul")}
        </div>
    )
}

export default CorFavorita