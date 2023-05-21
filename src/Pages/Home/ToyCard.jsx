import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { FaRegStar } from 'react-icons/fa';
import Rating from 'react-rating';

const ToyCard = ({toys}) => {
    const{_id,sellerName,toyName,rating,subCategory,price,availableQuantity,picture,description}=toys
    return (
        <div className='col ps-5 mb-5'>
   <div className="">
   <Card style={{ width: '18rem' }}>
      <Card.Img style={{maxHeight:'14rem'}} variant="top" src={picture} />
      <Card.Body>
        <Card.Title>{toyName}</Card.Title>
        <Card.Text>
   <div className="">
    <p>Price:{price}</p>
    <p>
    <Rating
  placeholderRating={rating}
  emptySymbol={<FaRegStar/>}
  placeholderSymbol={<FaStar className='text-warning'></FaStar>}
  fullSymbol={<FaStar/>}
/> <small>{rating}</small>
      </p>
   </div>
        </Card.Text>
       <Link to={`/category/${_id}`}><Button style={{background:"LightSeaGreen"}} variant="primary">View Details</Button></Link> 
      </Card.Body>
    </Card>
   </div>
        </div>
    );
};

export default ToyCard;