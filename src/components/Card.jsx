import React from "react"
import aleatorio from "../aleatorio";
import  "./Card.css";
import "./index.css"
import "./ App.css"
import '.App'
export default(props)=>{
const Cardstyle={
     Backgroundcolor:props.color ='#F5E845',
titulo:props.color='#F5E845'
}

return(
  <div className="Card">
     <div> conteudo</div>
   <div >{props.titulo}</div>

 <div className="titulo"style={Cardstyle}>
 <div className="titulo">{props.titulo}
<div className="Content">{props.Alunos}
{props.childrem}
</div>
 </div>
 </div>
</div>

)
}

