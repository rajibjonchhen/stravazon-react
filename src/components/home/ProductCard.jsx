import React from "react"
import { Link } from "react-bootstrap-icons";
import { Col } from "react-bootstrap";

const ProductCard = ({product}) => {

    return(
      <Col>
      <Link to='/detailProduct/${product._id}'>
            <div className="card-body">
                <h5 className="card-title bg-warning p-1 text-center text-white">Product Detail</h5>   
                    <p> Product : {product.name}</p>
                    <p> Brand : {product.brand}</p>
                <p> Price : {product.price}</p>
                <p> Info : {product.description}</p>
            <p>User Id : <br/> <small>{product._id}</small></p>
        </div>
      </Link>
      </Col>
       
      
    )
}

export default ProductCard