import React from "react";
import { useState } from "react";

const AddProduct =() => {
    const [name,setName] = useState();
    const [price,setPrice] = useState();
    const [category,setCategory] = useState();
    const [company,setCompany] = useState();
    const [error,setError] = useState(false);

    const addProduct = async ()=>{
       
        if(!name || !price || !category || !company)
        {
            setError(true);
            return false;
        }

        const userId = JSON.parse(localStorage.getItem('user'))._id;
        let result = await fetch("http://localhost:5000/add-product",{
            method:'post',
            body:JSON.stringify({name,price,category,company,userId}),
            headers:{
                "Content-type":"application/json"
            }
        });
        result= await result.json();
        console.log(result);
    }
    return(
        <div className="register">
            <h1>Add Product</h1>
            <input type="text" placeholder="Enter Product Name" className="inputBox"
            onChange={(e)=>{setName(e.target.value)}} value={name}/> 
           { error && !name && <span className="invalid-input">Enter Valid Name</span>} 

            <input type="text" placeholder="Enter Product Price" className="inputBox"
            onChange={(e)=>{setPrice(e.target.value)}} value={price}/>  
            { error && !name && <span className="invalid-input">Enter Valid Price</span>} 

            <input type="text" placeholder="Enter Product Category" className="inputBox"
            onChange={(e)=>{setCategory(e.target.value)}} value={category}/> 
            { error && !name && <span className="invalid-input">Enter Valid Category</span>} 

            <input type="text" placeholder="Enter Product Company" className="inputBox"
            onChange={(e)=>{setCompany(e.target.value)}} value={company}/>  
            { error && !name && <span className="invalid-input">Enter Valid Company</span>} 

            <button onClick={addProduct} className="appButton">Add Product</button>
        </div>
    )
}

export default AddProduct