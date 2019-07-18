import React from 'react'

const Lista = (props) => {
  return (
   <div> 
     <div> {props.numero} . {props.titulo}  </div>
     <div> <span> {props.criarData} </span></div>
    <button onClick = {props.remover}>Remover</button>


   </div>

  )
 
}
export default Lista