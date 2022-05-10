
import React from "react";

export default (props) => {
    const{min=0,max=60}=props;
  
 const aleatorio =parseInt(Math.random()*(max-min))+min;

return (

    <div>
        
        <h2> "aleatório"</h2>
        <p>
            <strong>Valor mínimo{min} </strong>{props.min} 
        </p>
        <p>
            <strong>Valor máximo{max} </strong>{props.max} 
        </p>
        <p>
          
        </p>
        <p>valor escolhido{aleatorio}</p>
    </div>
)
}


