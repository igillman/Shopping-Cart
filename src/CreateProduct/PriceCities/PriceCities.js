import React, { useState, useRef } from "react";
import classes from './PriceCities.module.css';
import OnlyCities from './OnlyCities/OnlyCities'

const PriceCities = (props) => {
    const [isChecked, setIsChecked] = useState(false);
    const [list, setList] = useState(<OnlyCities setPriceObject = {props.setPriceObject} priceObject = {props.priceObject}/>);

    let onePrice = useRef();

    let changeOnePrice = (event) => {
        let price = event.target.value;
        props.setPriceOne(price)
    }   

    let handleChange = () => {
        setIsChecked(!isChecked)

        if (isChecked){
            setList(<OnlyCities setPriceObject = {props.setPriceObject} priceObject = {props.priceObject}/>)
            props.setPriceOne('')

        }
        else if (!isChecked){
            setList(null)
        }
    }
    
    return(
        <div className={classes.box}>
            <p>Цена</p>
            <label className={classes.labelprice}>
                <input type="checkbox" onChange={handleChange} />

                <p>Одна цена для всех городов</p>
                <input type="number" onChange={changeOnePrice} value = {props.priceOne} ref={onePrice} disabled = {!isChecked}/>
            </label>

            {list}
        </div>
    )
}

export default PriceCities