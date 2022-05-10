import "./Card.css";
import React from "react";

export default (props) => {

    const cardStyle = {
        backgroundColor: props.color || '#f000',
        borderColor: props.color || '#f1234',
    }
    
    
    return (
        <div className Card="red">
        
            <div className="Title">{props.titulo}</div>
            <div className="Content">
                {props.children}
            </div>
        </div>
    );
};
