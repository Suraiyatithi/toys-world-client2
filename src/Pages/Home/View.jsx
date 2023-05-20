import React from 'react';
import { useLoaderData } from "react-router-dom";
import Header from '../../share/Header';

const View = () => {
        const toyInfo=useLoaderData();
        const {_id,sellerName,toyName,sellerEmail,subCategory,rating,price,availableQuantity,picture,description}=toyInfo;
        return (
         <div className="">
            <Header></Header>
          <div  className="">
          <div   className="mt-5 container m-5 border rounded border-2 bg-white shadow-lg p-5">
           <div className="row row-cols-sm-1 row-cols-lg-2">
                <div className="col">
                    <h5>{toyName}</h5>
                    <h6>{sellerName}</h6>
    <p>{sellerEmail}</p>
    <p><small>{description}</small></p>
    <h4>${price}</h4>
    <p><small>{rating}</small></p>
    <p>Quantity available:{availableQuantity}</p>
                </div>
                <div className="col ps-5">
                    <img className="ms-5" src={picture} alt="" />
                </div>
            </div>
           </div>
          </div>
         </div>
        );

};

export default View;