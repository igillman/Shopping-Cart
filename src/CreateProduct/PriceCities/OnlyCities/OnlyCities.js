import React, { useState } from "react";

const OnlyCities = (props) => {
    const [prices, setPrices] = useState(props.priceObject)

    const handleChange = (e, index) => {
        setPrices((prePrices) => {
            const newPrices = [...prePrices]
            newPrices[index].price = e.target.value
            return newPrices
        })
    }

    return(
        <table className="table border shadow">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Город</th>
                            <th scope="col">Цена</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.priceObject.map((el, index) => (
                            <tr key={index}>
                                <th scope="row">{el.name}</th>
                                <th> <input type="number"
                                            onChange={(e) => handleChange(e, index)}
                                            value = {prices[index].price}
                                        />
                                </th>
                            </tr>   
                        ))}
                    </tbody>
        </table>
    )
}

export default OnlyCities;