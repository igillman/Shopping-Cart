import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Products from './Products/Products';
import CreateProduct from './CreateProduct/CreateProduct';
import ChangeEditProduct from './ChangeEditProduct/ChangeEditProduct'
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import { useState } from 'react';
const App = (props) => {
    const [slim, setSlim] = useState('')

    const ChangeProductIndex = (index) => {
        setSlim(index);
    }
   

  return (
      <div className="App">
                <Link to = "/products">
                    <p>Продукты</p>
                </Link>   

          <Routes>
              <Route 
                      path="products/*" 
                      element= {<Products ChangeProductIndex = {ChangeProductIndex}/> }
              />
              <Route 
                      path="products/create" 
                      element= {<CreateProduct/> }
              />
              <Route 
                      path="products/edit" 
                      element= {<ChangeEditProduct /> }
              />
          </Routes>
      </div>  
   
  );
}

export default App;
