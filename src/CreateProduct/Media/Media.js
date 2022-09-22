import React from "react";
import classes from './Media.module.css'

const Media = (props) => {  

    let onSelectFile = (event) => {
        let selectedFile = event.target.files;
        let toArray = Array.from(selectedFile);
        const imagesArray = toArray.map((file) => {
            return URL.createObjectURL(file)
        })
        props.setBackImage(choosenImage => choosenImage.concat(imagesArray));
    }

    return(
        <div className={classes.media}>
            <p>Медиа</p>
            <section>
                <label>
                    Add images
                    <br />
                    <input
                        className={classes.inputimage} 
                        type="file" 
                        name="images" 
                        onChange={onSelectFile} 
                        multiple 
                        accept="image/png, image/jpeg"/>
                </label>

                <div className="images">
                    {props.backImage.map((image, index) => {
                        return(
                            <div key={index} className={classes.images}>
                                <img src={image} height="200"/>
                                <br/>
                                <button onClick={() => {
                                    props.setBackImage(props.backImage.filter( element => element !== image ))
                                }}>
                                    Удалить изображение
                                </button>
                                <p>{index + 1}</p>
                            </div>
                        )
                    })}
                </div>
                
            </section>
         </div>
    )
}
export default Media