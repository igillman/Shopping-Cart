import React,{useState, useContext, useEffect} from "react";
import { Link } from "react-router-dom";
import Quill from "../CreateProduct/ReactQuill/ReactQuill";
import StatusProduct from "../CreateProduct/StatusProduct/StatusProduct";
import Media from "../CreateProduct/Media/Media";
import classes from '../CreateProduct/CreateProduct.module.css'
import InputName from "../CreateProduct/InputName/InputName";
import PriceCities from "../CreateProduct/PriceCities/PriceCities";
import SVG from "../CreateProduct/SVG/svg";
import ButtonToSend from "../CreateProduct/ButtonToSend/ButtonToSend";
import ButtonToCancell from "../CreateProduct/ButtonToCancell/ButtonToCancell";
import ThemeContext from "../context";


const CreateProduct = (props) => {
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
    const {mainId, setMainId} = useContext(ThemeContext);
    const {secondId, setSecondId} = useContext(ThemeContext);

    useEffect(() => {
        getDatas();
    }, []);

    const getDatas = () => {
        fetch("http://localhost:4000/products")
        .then(res => res.json())
        .then(json => {
            let value = json[mainId];

                setName(value.name);
                setStatus(value.status);
                setSpecification(value.specification);
                setBackImage(value.backImage);
                {Array.isArray(value.price) ? setPriceObject(value.price) : 
                                                 setPriceOne(value.price)
                }
        })
    }

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
                fetch(`http://localhost:4000/products/${secondId}`, {
                    method: 'PUT',
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(blog)
                }).then(() => {
                    console.log('Снова на сервер');
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