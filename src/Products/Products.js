import React, {useEffect, useState, useContext} from "react"
import classes from './Products.module.css'
import { Link } from "react-router-dom"
import Pagination from "./Pagination/Pagination";
import ProductsBody from "./ProductsBody/ProductsBody";

const Products = (props) => {
    const [stateCustomer, setCustomerState] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);
    const [searchingValue, setSearchingValue] = useState('');

    const filteredCountries = stateCustomer.filter(element => {
        return element.name.toLowerCase().includes(searchingValue.toLowerCase())
    })

    const handleChangeAll = (e) => {
        let value = e.target.checked;
            setCustomerState(
                stateCustomer.map(el => {
                el.select = value;
                return el;
            })
        );
    }

    useEffect(() => {
        getDatas();
    }, []);

    async function getDatas() {
        const response = await fetch("http://localhost:4000/products");
        const products = await response.json();
        setCustomerState(products)
    }

    const handleDeleteAll = () => {
        let arrayids = [];
        stateCustomer.forEach(d => {
            if (d.select) {
              arrayids.push(d.id);
            }
          });
        
        arrayids.map( el => {
            fetch(`http://localhost:4000/products/${el}`, {
            method: 'DELETE',   
            headers: {
                "Content-Type": "application/json"
            },
            })
            .then(res => {   
                if (res.ok) { console.log("HTTP request successful") }
                else { console.log("HTTP request unsuccessful") }
                return res
            })  
            .then(() => {
                getDatas();
            })

        })
    }

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return(
        <div className={classes.backfon}>
            <h2>Товары</h2>
            <Link to = "/products/create">
                <button className="btn btn-success">Добавить</button>
            </Link>

            <button className="btn btn-danger" onClick={ () => { handleDeleteAll() } }>Удалить</button>
  
            <div>
                <input  
                    className="form-control"
                    style = {{ textAlign: 'center' }} 
                    type="text" 
                    placeholder="Поиск по названию"
                    onChange={ (event) => setSearchingValue(event.target.value)}
                />

                <table className="table border shadow">
                    <thead className="thead-dark">
                        <tr>
                        <th>
                            <input  name="name"
                                    type="checkbox"
                                    onChange={e => handleChangeAll(e)}
                            />
                        </th>
                        <th scope="col"></th>
                        <th scope="col">Изображение</th>
                        <th scope="col">Название</th>
                        <th scope="col">Статус</th>
                        <th scope="col">Цена</th>
                        </tr>
                    </thead>
                    <tbody>
                        <ProductsBody  
                            setCustomerState = {setCustomerState} 
                            postsPerPage = {postsPerPage} 
                            stateCustomer = {stateCustomer}
                            currentPage = {currentPage}
                            filteredCountries = {filteredCountries}
                            ChangeProductIndex = {props.ChangeProductIndex}
                          
                            />
                    </tbody>
                </table>

                <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={stateCustomer.length}
                    paginate={paginate}
                />
            </div>
        </div>
    )
}

export default Products