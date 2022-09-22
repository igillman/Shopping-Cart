import React from "react";

const StatusProduct = (props) => {
    return(
        <div style={{ marginTop: '40px' }}>
            <p>Статус товара</p>

            <select name="select" onChange={ e => props.setStatus(e.target.value)}>
                <option value="active">Активный</option>
                <option value="not active" >Архивный</option>
            </select>
        </div>
        
    )
}

export default StatusProduct