import React from 'react';

const ToyCard = ({toys}) => {
    const{_id,sellerName,toyName,subCategory,price,availableQuantity,picture,description}=toys
    return (
        <div>
      <div className="">{toyName}</div>
        </div>
    );
};

export default ToyCard;