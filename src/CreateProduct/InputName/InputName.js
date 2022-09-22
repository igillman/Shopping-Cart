import React from "react";

const InputName = (props) => {  

    const handleChange = (e) => {
        let name = e.target.value;
        props.setName(name);
    }       
  
    return(
        <>
            <p>Название товара</p>
            <input className="form-control" value={props.name} type="text" onChange={handleChange}/>
        </>

    )
}

export default InputName