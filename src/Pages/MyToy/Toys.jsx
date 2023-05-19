import { Link } from "react-router-dom";
import UpdateModal from "./UpdateModal";

const Toys = ({toy,handleDelete,modal,setmodal,handleToyUpdate}) => {
      const{_id,sellerName,toyName,subCategory,price,availableQuantity,rating,picture,description}=toy;
    return (
    

  
    <tbody className="p-3 border rounded shadow-lg text-center pb-3 pt-3">
      <tr className="p-5 row row-cols-sm-3 text-center row-cols-lg-6">
        {/* <td className="col">{sellerName}</td> */}
        <td className="col">{toyName}</td>
        <td className="col">{subCategory}</td>
        <td className="col">${price}</td>
        <td className="col">{rating}</td>
        <td className="col ps-5">{availableQuantity}</td>
        <td className="col ps-5">
            <button onClick={()=>handleDelete(_id)}>D</button>
            <button onClick={()=>setmodal(true)}>Up</button>
            <UpdateModal
                    show={modal}
                    onHide={() => setmodal(false)}
                    toy={toy}
                    handleToyUpdate={handleToyUpdate}
                  />



        
        </td>
       
       </tr>
    
     
    </tbody>



    );
};

export default Toys;