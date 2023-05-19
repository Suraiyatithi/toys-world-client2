

const DisneyToy = ({disneytoy}) => {
    const{_id,sellerName,toyName,subCategory,price,availableQuantity,picture,description}=disneytoy;
    return (
    

  
    <tbody className="p-3 border rounded shadow-lg pb-3 pt-3">
      <tr className="p-5 m-5 row row-cols-sm-3 row-cols-lg-6">
        <td className="col">{sellerName}</td>
        <td className="col">{toyName}</td>
        <td className="col">{subCategory}</td>
        <td className="col">${price}</td>
        <td className="col">{availableQuantity}</td>
        <td className="col"><button style={{background:"LightSEaGreen"}} className="btn text-white">View Details</button></td>
      </tr>
    
     
    </tbody>



    );
};

export default DisneyToy;