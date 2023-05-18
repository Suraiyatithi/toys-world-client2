

const DisneyToy = ({disneytoy}) => {
    const{_id,sellerName,toyName,subCategory,price,availableQuantity,picture,description}=disneytoy;
    return (
        <div>

  <table className="table">
    <thead>
      <tr>
        <th>Seller Name</th>
        <th>Toy Name</th>
        <th>Sub Category</th>
        <th>Price</th>
        <th>Available Quantity</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{sellerName}</td>
        <td>{toyName}</td>
        <td>{subCategory}</td>
        <td>${price}</td>
        <td>{availableQuantity}</td>
        <td><button className="btn btn-primary">View Details</button></td>
      </tr>
    
     
    </tbody>
  </table>

        </div>
    );
};

export default DisneyToy;