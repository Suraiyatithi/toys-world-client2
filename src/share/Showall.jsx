import { useLoaderData } from "react-router-dom";


const Showall = () => {
    const toyInfo=useLoaderData();
    const {_id,sellerName,toyName,sellerEmail,subCategory,rating,price,availableQuantity,picture,description}=toyInfo;
    return (
        <div className="row row-cols-sm-1 row-cols-lg-2">
            <div className="col">
                <h5>{toyName}</h5>
                <h6>{toyInfo.sellerName?.sellerName}</h6>
<p>{sellerEmail}</p>
<p><small>{description}</small></p>
<h4>${price}</h4>
<p><small>{rating}</small></p>
<p>Quantity available:{availableQuantity}</p>
            </div>
            <div className="col">
                <img src={picture} alt="" />
            </div>
        </div>
    );
};

export default Showall;