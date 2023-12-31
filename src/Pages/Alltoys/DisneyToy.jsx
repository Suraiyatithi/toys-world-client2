import { Link } from "react-router-dom";

const DisneyToy = ({disneytoy}) => {
    const{_id,sellerName,toyName,subCategory,price,availableQuantity,picture,description}=disneytoy;
    return (
    

  
    <tbody className=" border rounded shadow-lg pb-3 pt-3">
      <tr className="p-2 ps-5 text-center m-5 row row-cols-sm-3 row-cols-lg-6">
        <td className="col">{sellerName}</td>
        <td className="col">{toyName}</td>
        <td className="col">{subCategory}</td>
        <td className="col ps-5">${price}</td>
        <td className="col ps-3">{availableQuantity}</td>
        <td className="col"><Link to={`/toys/${_id}`}> <button style={{background:"LightSEaGreen"}} className="btn text-white">View Details</button></Link></td>
      </tr>
    
     
    </tbody>



    );
};

export default DisneyToy;