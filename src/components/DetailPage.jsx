import React, {useState, useEffect} from "react";

import ProductCard from "./home/ProductCard";
import { useParams } from "react-router-dom";




const DetailPage = () => {

    const [productId, setProductId] = useState()
    const [product, setProduct] = useState()
    const [reviews, setReviews] = useState()
    const params = useParams()
    useEffect(()=> {
        let id = params.id
        setProductId(id)
        fetchProduct()
    },[])

    const fetchProduct = async() => {
        try {
            let response = await fetch("http://localhost:3000/products" + productId,{
                method:'GET'
            })
            if(response.ok){
                let data = await response.json()
                setProduct(data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const fetchReview = async() => {
        try {
            let response = await fetch(`http://localhost:3000/products/${productId}/reviews` ,{
                method:'GET'
            })
            if(response.ok){
                let data = await response.json()
                setReviews(data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return(<>
  {product &&   <div>
       <div>
           <div>
               <img src={product.imageUrl} alt={product.name}/>
           </div>
           <div>
               <p>{product.name}</p>
               <p>{product.price}</p>
               <p>{product.description}</p>
               <button>Show reviews</button>
              
           </div>
           
       </div>
        <div>
            <ul>

            {reviews && reviews.map(review => {<li>{review.comment} - {review.rate}</li>})}
            </ul>
        </div>
       </div>}
    </>
    )
}

export default DetailPage