import React,{useState} from "react";
import { Link } from "react-router-dom";
import Quill from "./ReactQuill/ReactQuill";
import StatusProduct from "./StatusProduct/StatusProduct";
import Media from "./Media/Media";
import classes from './CreateProduct.module.css'
import InputName from "./InputName/InputName";
import PriceCities from "./PriceCities/PriceCities";
import SVG from "./SVG/svg";
import ButtonToSend from "./ButtonToSend/ButtonToSend";
import ButtonToCancell from "./ButtonToCancell/ButtonToCancell";


const CreateProduct = () => {
    const [name, setName] = useState('');
    const [idIndex, setIdIndex] = useState(1);
    const [status, setStatus] = useState('active');
    const [specification, setSpecification] = useState();
    const [backImage, setBackImage] = useState([]);
    const [priceOne, setPriceOne] = useState('');  
    const [priceObject, setPriceObject] = useState([
                            {"id": 1, "name": "Алматы", "price" : ''},
                            {"id": 2, "name": "Астана", "price" : ''},
                            {"id": 3, "name": "Уральск", "price" : ''}
    ]);

    const sendDatas = () => {
        let id = setIdIndex(idIndex + 1);
        let price;
                if (priceOne == ''){
                    price = priceObject;
                }
                else{
                    price = priceOne
                } 

        if( name == '' || specification == "<p><br></p>" || backImage.length == 0 || price == null){
            alert('Заполните все данные!')
        }
        else {
                const blog = {id, name, status, price, specification, backImage};
                fetch('http://localhost:4000/products', {
                    method: 'POST',
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(blog)
                }).then(() => {
                    console.log('Отправлено');
                })
        }
    }


    return(
        <div className={classes.box}>
            <div className={classes.boxone}>
                <Link to = "/products">
                    <SVG />
                </Link>   
                <div className={classes.boxone}>
                    <div className={classes.boxone}>
                        <InputName  setName={setName} name = {name} />
                        <Quill setSpecification = {setSpecification} specification = {specification}/>
                    </div>
                    <Media setBackImage = {setBackImage} backImage = {backImage}/>
                    
                    <PriceCities 
                            setPriceObject = {setPriceObject} 
                            priceObject = {priceObject}
                            priceOne = {priceOne}
                            setPriceOne = {setPriceOne}
                    />
                    <ButtonToSend sendDatas = {sendDatas}/>
                    <Link to = "/products">
                        <ButtonToCancell/>
                    </Link>
                </div>
            </div>
            <div>
                <StatusProduct setStatus = {setStatus}/>
            </div>
        </div>
    )
}

export default CreateProduct;