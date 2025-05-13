import React from 'react'

const SubtraiComEstilo = (props) => {
  return (
    <div>
      {/* <p className='subtracao'> O resultado de {props.num1} - {props.num2} é {props.num1 - props.num2} </p> */}
      <p style={{ color: 'yellow' }}> O resultado de {props.num1} - {props.num2} é {props.num1 - props.num2}</p>
    </div>
  )
}

export default SubtraiComEstilo