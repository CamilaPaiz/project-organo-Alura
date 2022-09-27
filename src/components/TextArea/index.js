import React from "react";
import './TextArea.css'

const TextArea = (props) =>{
    const placeholderModificada = `${props.placeholder}`

    const onType = (event) => {
        props.onNewValue(event.target.value);
     
    }

return(
    <div className="text-area">
        <label>{props.label}</label>
        <input  value={props.value} onChange={onType} required={props.required} placeholder={placeholderModificada}/>
    </div>
)
}

export default TextArea;