import React from "react";

const ButtonToSend = (props) => {
    return (
        <div>
            <button onClick={props.sendName}>Отправить</button>
        </div>
    )
}

export default ButtonToSend;