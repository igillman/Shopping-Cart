import React, { useContext } from "react";
import {Link } from 'react-router-dom';
import ThemeContext from "../../context";
const EditProducts = (props) =>{
    const {mainId, setMainId} = useContext(ThemeContext);
    const {secondId, setSecondId} = useContext(ThemeContext);

    const EditProduct = () => {
        let id = props.id;
        let obj = props.stateCustomer.find(o => o.id === id);
        let arrKey = props.stateCustomer.indexOf(obj);
        setMainId(arrKey);
        setSecondId(id);
    }

    return(
        <>
            <Link to = "/products/edit">
                <button className = "btn btn-primary mb-2" onClick={EditProduct}>Редактировать</button>
            </Link>
           
        </>
    )
}

export default EditProducts;
