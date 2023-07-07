import React from "react";
import "./Shopping.css"

function Header(props) {
    return (
        <div className='flex shopping-card'>
            <div onClick={() => props.handleShow(false)} >Shopping Cart App</div>
            <div className="me" onClick={() => props.handleShow(true)}> See your Cart
                <sup> {props.count} </sup>
            </div>
        </div>
    );
}

export default Header;