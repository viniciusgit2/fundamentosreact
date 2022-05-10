import React from "react"
import alunos from "../../data/alunos";
 
export default function ComParametro(props) {
    const status = props.nota >= 7? "reprovado": "aprovado"
    
    const notaInt = Math.ceil(props.nota)

    return (
        <div>
            <h2>{props.titulo}</h2>
            <p>
                <strong> </strong>aluno={props.alunos}
                tem nota={props.nota}
                <strong> {props.nota} </strong>e está {status}
               
            </p>
        </div>
    );
}
