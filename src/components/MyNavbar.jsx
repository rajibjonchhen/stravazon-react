import React from "react";
import { Link } from "react-router-dom";

const MyNavbar = () => {

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="form.html">
            Strivazon
    </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
            <Link to='/'>    
              <a>Home <span className="sr-only">(current)</span></a>
            </Link>
            </li>
            <li className="nav-item ml-2">
            <Link to='/BackOffice'>    
             Back-Office
            </Link>
            </li>
           
          </ul>
          {/* <form className="form-inline my-2 my-lg-0">
            <select defaultValue="1" className="custom-select" id="selectFilter">
                <option value="1" >Name</option>
                <option value="2">Brand</option>
                <option value="3">Price</option>
              </select>
                <input id="search" className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onKeyUp="searchWith(event)"/>
            
          </form> */}
        </div>
      </nav>
    )
}

export default MyNavbar