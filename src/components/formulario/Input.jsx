import "./Input.css";
import React, { useState } from "react";

export default (props) => {
    const [valor, setValor] = useState("Inicial");

    function mudando(e) {
        console.log(e)
        setValor(e.target.value)
    return(
<div>
    <input value={valor}></input>
    <h2>{valor}</h2>
    <input value={valor}on onChange={quandomudar}></input>
</div>
    )
    }
}