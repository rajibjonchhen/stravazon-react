import React, { useEffect, useState } from "react";


import { Container, Row } from "react-bootstrap";
import  MyProductCard from "./ProductCard"

const Home = () => {
const [products, setProducts] = useState()

useEffect(()=>{
    fetchProducts()
},[])
   const fetchProducts = async() => {
        try {
            let response = await fetch("http://localhost:3000/products",{
                method:'GET'
            })
            if(response.ok){
                let data = await response.json()
                setProducts(data)
            }
        } catch (error) {
            console.log(error)
        }
   }

    return(<Container>
            <Row>

        {products && products.map(product=> {<MyProductCard key= {product._id} product={product}/>})}
       
    </Row>
    </Container>
    )
}

export default Home