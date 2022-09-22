import React from "react";
import EditProducts from "../EditProducts/EditProducts";
const ProductsBody = (props) => {
    const indexOfLastPost = props.currentPage * props.postsPerPage;
    const indexOfFirstPost = indexOfLastPost - props.postsPerPage;
    const currentPosts = props.filteredCountries.slice(indexOfFirstPost, indexOfLastPost);

    let handleChange = (e, user) => {
        let value = e.target.checked;
        props.setCustomerState(
            currentPosts.map(elem => {
                if (elem.id === user.id) {
                    elem.select = value;
                    }
                return elem;
            })
      );
    }

    return(
        <>
            {currentPosts.map((user, index) => (
                            <tr key={index}>

                                <td><input          
                                            name="name"
                                            type="checkbox"
                                            checked={user.select}
                                            onChange={e => handleChange(e, user)}
                                    />
                                </td>   
                                <td>
                                    <EditProducts   ChangeProductIndex = {props.ChangeProductIndex} 
                                                    stateCustomer={props.stateCustomer} 
                                                    index = {index}
                                                    id = {user.id}
                                                    
                                                    />
                                      
                                </td>
                                
                                <td ><img src={user.backImage[0]} style = {{width: 60}} /></td> 
                                <td>{user.name}</td>
                                <td>{user.status}</td>
                                <td>{ Array.isArray(user.price) ? "См. редак": user.price}</td>
                            </tr>
                ))}
        </>
    )
}

export default ProductsBody