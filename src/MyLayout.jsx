import React from "react";
import MyNavbar from "./components/MyNavbar"
import MyFooter from "./components/Myfooter"
import { propTypes } from "react-bootstrap/esm/Image";

const MyLayout = ({props}) => {

    return(<>
        <MyNavbar/>
            {props.children}
        <MyFooter/>
    </>)
}

export default MyLayout