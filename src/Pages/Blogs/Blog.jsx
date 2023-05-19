
import Card from 'react-bootstrap/Card';

import Header from '../../share/Header';
import bg1 from '../../assets/blog.jpg'
import bg from '../../assets/3644477.jpg'
import Footer from '../../share/Footer';


const Blog = () => {
  


    return (
      <div style={{backgroundImage:`url(${bg})`}}>
        <Header></Header>
      
        <div   className=' text-center'>
           <h3 style={{color:"darkmagenta"}} className='text-center p-5'>Here is Our Daily Blog Page</h3> 
           <div className="m-4">

    <div className='row  row-cols-1 text-center'>
    <Card style={{backgroundImage:`url(${bg1})`}} className='w-75 p-5 col mx-auto'>
      <Card.Body>
        <Card.Title className='mb-4'>What is an access token and refresh token?How do they <br />and where should we store them in client site?</Card.Title>
       
        <Card.Text>
<div className="row row-cols-sm-1 row-cols-lg-3 justify-content-between">
    <div className="col"></div>
  <div className="col">
  <Card.Subtitle className="mb-2 text-muted">Access & Refresh Token</Card.Subtitle>
  <p>A refresh token helps re-validate a user without re-enter their login in multiple time.wherres the access token is re-issued,which provided the refresh token is a valid one.It is used for request a new access token from tyhe authorization server.
    
  </p>
  </div>
  

<div className="col"></div></div>
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{backgroundImage:`url(${bg1})`}} className='w-75 p-5 col mx-auto mt-4'>
      <Card.Body>
        <Card.Title className='mb-4'>Compare SQL & NoSQL Database</Card.Title>
       
        <Card.Text>
<div className="row row-cols-sm-1 row-cols-lg-3 justify-content-between">
    <div className="col"></div>
  <div className="col">
  <Card.Subtitle className="mb-2 text-muted">SQL Database</Card.Subtitle>
  <p>SQL databse are vertically scalable,where it is table base.It is better for multi-row transactions</p>
    <Card.Subtitle className="mb-2 text-muted">NoSQL Database</Card.Subtitle>
  <p>NoSQL database are horizontally scalable and these are document ,key-value,graph or wide column store that is better for document or json.</p>
  </div>
  

<div className="col"></div></div>
        </Card.Text>
       
      </Card.Body>
    </Card>
    <Card style={{backgroundImage:`url(${bg1})`}} className='w-75 p-5 col mx-auto mt-4'>
      <Card.Body>
        <Card.Title className='mb-4'>What is express js & Next Js</Card.Title>
       
        <Card.Text>
<div className="row row-cols-sm-1 row-cols-lg-3 justify-content-between">
    <div className="col"></div>
  <div className="col">
  <Card.Subtitle className="mb-2 text-muted">Express Js</Card.Subtitle>
  <p>Express Js is basically Nodejs base web application framework to build apis and server side application</p>
    <Card.Subtitle className="mb-2 text-muted">Next Js</Card.Subtitle>
  <p>NextJs is a React Framework that gives you to building blocks to create web application that handle tooling and configuration needed for  react. </p>
  </div>
  

<div className="col"></div></div>
        </Card.Text>
      
      </Card.Body>
    </Card>
    <Card style={{backgroundImage:`url(${bg1})`}} className='w-75 p-5 col mx-auto mt-4 mb-4'>
      <Card.Body>
        <Card.Title className='mb-4'>What is MongoDB aggregate & How does it work?</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Custom Hook</Card.Subtitle>
        <Card.Text>
<div className="row row-cols-sm-1 row-cols-lg-3 justify-content-between">
    <div className="col"></div>
  <div className="col">
  <Card.Subtitle className="mb-2 text-muted">MongoDB Aggregate</Card.Subtitle>
  <p>Aggregate is basically a way of processing a large number of document by passing them different stages.Think about the phone numbers on your cell phone.you can refer them individually.MongoDb Aggregate Work thus way</p>
  </div>
  

<div className="col"></div></div>
        </Card.Text>
       
      </Card.Body>
    </Card>
    </div>
   
 </div>
 </div>
 <Footer></Footer>

 </div>
    );
};

export default Blog;