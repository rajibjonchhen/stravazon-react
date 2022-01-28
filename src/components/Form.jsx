import React, {useState, useEffect} from "react";

import ProductCard from "./home/ProductCard";



const Form = () => {
useState[product,setProduct] = useState({})
useEffect(()=>{

},[])
    return(
        <div>
            <form onsubmit="" className="mt-5 bg-secondary  p-5 rounded-lg text-white">
                  <div className="form-row">
                    <div className="form-group col">
                      <label for="name">Product Name *</label>
                      <input type="name" className="form-control" id="name" required/>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col">
                      <label for="description">Description *</label>
                      <textarea type="text" className="form-control" id="description" row="4" required/>
                    </div>
                    </div>
                
                    <div className="form-row">
                  <div className="form-group col">
                    <label for="brand">Brand *</label>
                    <input type="text" className="form-control" id="brand" required/>
                  </div>
                  </div>
                  
                    <div className="form-row">
                      <div className="form-group col">
                        <label for="image">Image Url *</label>
                        <input type="text" className="form-control" id="image" required/>
                      </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col">
                          <label for="price">Price *</label>
                          <input type="number" className="form-control" id="price" required/>
                        </div>
                      </div>
                        <div className="m-2 d-flex">
                          <button type="button" className="btn btn-primary mr-2" onclick="handlePostSubmit(event)">Submit</button>
                          <button type="Reset" className="btn btn-warning mr-2">Reset</button>
                          <a type="button" href="/" className="btn btn-danger mr-2">Cancel</a>
                        <button type="button" id="deleteBtn" onclick="handleDelete()" className="btn bg-danger text-white my-2 my-sm-0" ><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                          <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                        </svg></span></button>
                        </div>
                </form>
        </div>
    )
}

export default Form