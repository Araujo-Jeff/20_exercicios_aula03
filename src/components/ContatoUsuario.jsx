import React from 'react'
import Usuario from './Usuario'

const ContatoUsuario = () => {
    const usuarios = [
        {
            nome: "Jeff",
            email: "jeff@gmail.com",
            telefone: 999570724
        }
    ]

    return (
        <div>
            <h4>Contato de Usuario</h4>
            {
                usuarios.map((usuario, index) => (
                    <Usuario key={index} nome={usuario.nome} email={usuario.email} telefone={usuario.telefone} />
                ))
            }
        </div>
    )
}

export default ContatoUsuario