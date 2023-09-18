
import { Link } from 'react-router-dom';
import bg from '../assets/coove3r.jpg'
import logo from '../assets/magicalland.jpg'

const Footer = () => {
    return (
        <div  className='text-white'>
     <div style={{background:"LightSeaGreen"}} className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-4 p-5">
      <div className=" ">
     <h4 className='text-center mt-3 mb-3'>About Us</h4>
     <p>we provide the best disney product also we reach the client heart as it is related to child we are always concern about.</p>
</div>
<div className="">
  <h4 className='mb-3 mt-3'>Contact Us</h4>
  <p>Gulshan,Dhaka Division ,Dhaka-1212</p>
  <p>disneyworld@gmail.com</p>
  <p>+990687767889</p>
</div>
<div className="">
  <h4 className='mb-3 mt-3'>Information</h4>
  <p>Terms and conditions</p>
  <p>Privacy policy</p>
<p>Product Quality</p>
<p>Adding Product</p>
<p>Payment methods</p>
</div>
<div className="">
  <h4 className='mt-3 mb-3 '>Send Us Feedback</h4>
  <input className='p-2' type="text" name="" id="" />
  <button style={{background:"pink"}} className='btn text-white'>Send</button>
</div>
     </div>
     <div style={{background:"pink"}} className="text-center">
      <p className='p-2'>Copyright © 2022 the privacy policy and terms of Disney world.</p>
     </div>
        </div>
    );
};

export default Footer;