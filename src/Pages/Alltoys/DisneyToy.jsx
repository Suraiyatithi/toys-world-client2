

const DisneyToy = ({disneytoy}) => {
    const{_id,sellerName,toyName,subCategory,price,availableQuantity,picture,description}=disneytoy;
    return (
    

  
    <tbody className="p-5 border shadow-lg pb-5 pt-5">
      <tr className="p-5 m-5">
        <td>{sellerName}</td>
        <td>{toyName}</td>
        <td>{subCategory}</td>
        <td>${price}</td>
        <td>{availableQuantity}</td>
        <td><button style={{background:"LightSEaGreen"}} className="btn text-white">View Details</button></td>
      </tr>
    
     
    </tbody>



    );
};

export default DisneyToy;