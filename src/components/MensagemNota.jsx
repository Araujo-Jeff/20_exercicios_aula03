import React from 'react'

const MensagemNota = () => {
    const escolhaMensagem = (nota) => {
        if (nota >= 7) {
            return <p>Aprovado</p>
        } else if (nota >= 5 && nota < 7) {
            return <p>Em Recuperação</p>
        } else {
            return <p>Reprovado</p>
        }
    }

    return (
        <div>
            {escolhaMensagem(8)}
        </div>
    )
}

export default MensagemNota