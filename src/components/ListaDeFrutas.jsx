import React from 'react'
import Frutas from './Frutas'

const ListaDeFrutas = () => {
    const opcoesDeFrutas = ["Banana", "Maçã", "Laranja", "Morango"]

    return (
        <div>
            <h3>Lista de Frutas</h3>
            <ul>
                {
                    opcoesDeFrutas.map((fruta, index) => (
                        <Frutas key={index} Frutas={opcoesDeFrutas} />
                    ))

                }
            </ul>
        </div>
    )
}

export default ListaDeFrutas