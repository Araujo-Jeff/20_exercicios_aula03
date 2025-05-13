import React from 'react'

const SomaComEstilo = (props) => {
    return (
        <div>
            {/* <p className='soma'> O resultado de {props.num1} + {props.num2} é {props.num1 + props.num2} </p> */}
            <p style={{ color: 'magenta' }}> O resultado de {props.num1} + {props.num2} é {props.num1 + props.num2}</p>
        </div>
    )
}

export default SomaComEstilo