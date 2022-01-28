import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";




const DetailPage = () => {

    const [productId, setProductId] = useState(null)
    const [product, setProduct] = useState(null)
    const [reviews, setReviews] = useState(null)
    const [showReview, setShowReview] = useState(false)
    const params = useParams()
    
    
    useEffect(()=> {
        let id = params.id
        setProductId(productId)
        fetchProduct(id)
        fetchReview(id)
        
    },[productId===null])

  const handleData = (data) =>{
    setProduct(data)
  }

    const fetchProduct = async(id) => {
        try {
            let response = await fetch("http://localhost:3001/products/" + id,{
                method:'GET'
            })
            if(response.ok){
                let data = await response.json()
                console.log(data)
                handleData(data)
                
            } else {
                console.log("error in loading the product detail")
            }
        } catch (error) {
            // console.log(error)
        }
    }
    
    const fetchReview = async(id) => {
        try {
            let response = await fetch(`http://localhost:3001/products/${id}/reviews` ,{
                method:'GET'
            })
            if(response.ok){
                let data = await response.json()
                console.log(data)
                setReviews(data)
            }else{
                console.log("error in loading the product review")

            }
        } catch (error) {
            // console.log(error)
        }
    }

    return(<>
  {product &&   <div>
       <div>
           <div>
               <img src={product.imageUrl} alt={product.name}/>
           </div>
           <div>
               <p>Product Name{product.name}</p>
               <p>Price {product.price}</p>
               <p>Description {product.description}</p>
               <button onClick={setShowReview(true)}>Show reviews</button>
              
           </div>
           
       </div>
        <div style={{display:showReview? 'block':'none'}}>
            <ul>

            {reviews && reviews.map(review => {<li>{review.comment} - {review.rate}</li>})}
            </ul>
        </div>
       </div>}
    </>
    )
}

export default DetailPage