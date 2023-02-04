import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


const UpdateProduct =() => {
    const [name,setName] = useState('');
    const [price,setPrice] = useState('');
    const [category,setCategory] = useState('');
    const [company,setCompany] = useState('');
    const params = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        getProductDetails();
         //eslint-disable-next-line
    },[])

    const getProductDetails = async ()=>{
        console.warn(params);
        let result = await fetch(`http://localhost:5000/product/${params.id}`);
        result = await result.json();
        setName(result.name)
        setPrice(result.price)
        setCategory(result.category)
        setCompany(result.company)
    }

    const updateProduct = async ()=> {
       console.warn(name.price,category,company);
       let result = await fetch(`http://localhost:5000/product/${params.id}`,{
        method:'Put',
        body: JSON.stringify({name,price,category,company}),
        headers: {
            'Content-type':"application/json"
        }
       });
       result= await result.json()
       console.warn(result);
       navigate('/');
    }
    return(
        <div className="register">
            <h1>Update Product</h1>
            <input type="text" placeholder="Enter Product Name" className="inputBox"
            onChange={(e)=>{setName(e.target.value)}} value={name}/> 

            <input type="text" placeholder="Enter Product Price" className="inputBox"
            onChange={(e)=>{setPrice(e.target.value)}} value={price}/>  

            <input type="text" placeholder="Enter Product Category" className="inputBox"
            onChange={(e)=>{setCategory(e.target.value)}} value={category}/> 

            <input type="text" placeholder="Enter Product Company" className="inputBox"
            onChange={(e)=>{setCompany(e.target.value)}} value={company}/>  

            <button onClick={updateProduct} className="appButton">Update Product</button>
        </div>
    )
}

export default UpdateProduct