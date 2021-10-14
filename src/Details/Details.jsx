import React from 'react'
import "./Details.css"
import useTransactions from '../useTransactions';
function Details({title}) {
   const {total} = useTransactions(title);
   return (
        <div className="details_wrapper">
            <h3>{title}</h3>
            <div className="img_Wrapper"></div>
            <h3>${total}</h3>
        </div>
    )
}

export default Details;
