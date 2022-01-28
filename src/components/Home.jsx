import React from "react";
import MyNavbar from "./components/MyNavbar"
import MyFooter from "./components/Myfooter"

const Home = () => {
const [products, setProducts] = useState()

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

    return(
        <div class="card-body">
                    <h5 class="card-title bg-warning p-1 text-center text-white">Product Detail</h5>   
                    <p> Product : ${item.name}</p>
                    <p> Brand : ${item.brand}</p>
                    <p> Price : ${item.price}</p>
                    <p> Info : ${item.description}</p>
                    <p>User Id : <br/> <small>${item._id}</small></p>
                    <a href="detail-page.html?productId=${item._id}" class="btn btn-primary">Detail </a>
                </div>
    )
}

export default Home