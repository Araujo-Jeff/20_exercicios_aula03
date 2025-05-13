import React from 'react'

const AnimalFavorito = () => {
    const escolhaAnimal = (animal) => {
        if (animal === "cachorro") {
            return <h1>Eu amo cachorro!</h1>
        } else if (animal === "gato") {
            return <h2>Eu amo gatos!</h2>
        } else {
            return <h3> Eu amo todos os animais!!!</h3>
        }
    }

    return (
        <div>
            {escolhaAnimal("cachorro")}
            {/* {escolhaAnimal("gato")} */}
            {/* {escolhaAnimal("outros")} */}
        </div>
    )
}

export default AnimalFavorito