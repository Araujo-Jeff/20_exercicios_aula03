import React from 'react'

const MultiplicaComEstilo = (props) => {
    return (
        <div>
            {/* <p className='multiplicacao'> O resultado de {props.num1} x {props.num2} é {props.num1 * props.num2} </p> */}
            <p style={{ color: 'blue' }}> O resultado de {props.num1} x {props.num2} é {props.num1 * props.num2}</p>
        </div>
    )
}

export default MultiplicaComEstilo