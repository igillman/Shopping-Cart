import React from "react";

const ButtonToSend = (props) => {
    return (
        <div>
            <button className="btn btn-success" onClick={props.sendDatas}>Отправить</button>
        </div>
    )
}

export default ButtonToSend;