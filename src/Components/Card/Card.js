import React from "react";
import classes from './Card.module.css';
const Card = (props) =>{
    const card =classes.card;

    return(
        <div className={`${card} ${props.className}`}>{props.children}</div>
    );

}
export default Card;