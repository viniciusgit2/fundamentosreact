import React from "react"
export default(props)=>{
  const status =props.nota <=7 ?"aprovado":'reprovado';
  return(
  <div>
    <h2>{props.titulo}
    </h2>
    <p><strong>{props.aluno}
    "tem nota"
    </strong>
    <p>
      <strong>
      {props.nota}
      </strong>
      </p>
    </p>
  </div>

  )
}