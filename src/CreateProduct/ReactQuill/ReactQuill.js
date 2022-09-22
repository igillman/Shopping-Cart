import React, {useState} from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Quill = (props) => {

    return(
        <div style={{ width:500, textAlign:"center", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                <p>Описание</p>
                <ReactQuill theme="snow" value={props.specification} onChange={ props.setSpecification } style={{maxWidth: 500}} />
        </div>  
    )
}

export default Quill;