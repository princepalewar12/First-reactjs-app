import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CartProduct = () => {

    const [products, setProducts] = useState([])

    useEffect(()=>{
        const getDataFromApi =async () =>{
            try{
                const apiResponse = await axios.get('https://api.escuelajs.co/api/v1/products')
            setProducts(apiResponse.data)
            }catch(error){
                console.log(error);
            }
        }
        getDataFromApi()
    },[])

  return (
    <>
        {products.map((productInfo)=>(
            <div key={productInfo.id} className="product-list" style={{display: "inline-flex", flexWrap: "nowrap" }}>
            <Card style={{ width: "18rem" }}>
             <Card.Img variant="top" style={{width:"286px", height:"180px"}}src={productInfo.images} />
             <Card.Body>
               <Card.Title>{productInfo.title}</Card.Title>
               <Card.Text>Price:{productInfo.price}</Card.Text>
               <Button variant="primary">Buy Now</Button>
             </Card.Body>
           </Card>
          </div>
        ))}
    </>
  )
}

export default CartProduct