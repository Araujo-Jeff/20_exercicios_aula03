import React from 'react'

const DivideComEstilo = (props) => {
    return (
        <div>
            <h1></h1>
            {/* <p className='divisao'> O resultado de {props.num1} : {props.num2} é {props.num1 / props.num2} </p> */}
            {<p style={{ color: 'red' }}> O resultado de {props.num1} : {props.num2} é {props.num1 / props.num2} </p>}
        </div>
    )
}

export default DivideComEstilo