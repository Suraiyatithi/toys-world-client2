import banner from '../../assets/banner3.png'
import bg from '../../assets/toybannerbfg.jpg'
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../assets/bear-infant-toy-baby-f29b0fee97534d69d98f9e80f9afcab0.png';
import img2 from '../../assets/infant-child-care-stock-photography-play-child-care-a68ff3d9b2360a287e601a63bab57553.png';
import img3 from '../../assets/educational-toys-child-care-toddler-toy-55cbdea0bd57095cce6e5398d8479461.png'
import './formar/formar.css'
import img4 from '../../assets/bannner44.png'
import img6 from '../../assets/bannerfinnal.png'
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {
  const triggerAnimations = () => {
    AOS.refresh(); // Refresh AOS to trigger animations
  };

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
    });

    // Attach the scroll event listener
    window.addEventListener('scroll', triggerAnimations);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', triggerAnimations);
    };
  }, []);
  const headingStyle = {
    fontSize: '2rem', // Adjust the font size as needed
    fontWeight: 'bold',
    textAlign: 'center',
  };

    return (
   <div className=" mt-3">
         <div className="" style={{backgroundImage:`url(${bg})`}}>
        

<Carousel data-bs-theme="dark">
  <Carousel.Item>
    <div class="row">
      <div class="col-md-6 col-lg-6 align-middle">
   
   <div className=" text-center text-white mt-5 pt-5">
   <h1 data-aos="fade-right" style={{ fontSize: '5rem', fontWeight: 'bold', textAlign: 'center' }} className='align-middle mt-5 pt-5  fst-italic mt-5'>Get 30% Off</h1>
    <p data-aos="fade-right">In Latest Baby Products and disney Toys</p>
    <button data-aos="fade-right" style={{background:"LightSEaGreen"}} className='btn text-white'>Shop Now</button>
   </div>
     
      </div>
      <div class="col-md-6">
      
        <img
          className="d-block w-75 m-5"
          src={img2}
          alt="First slide"
          data-aos="fade-left"
        />
      </div>
    </div>
  </Carousel.Item>
  <Carousel.Item>
    <div class="row">
      <div class="col-md-6">
   
      <div className=" text-center text-white mt-5 pt-5">
   <h1 data-aos="fade-right"  style={{ fontSize: '5rem', fontWeight: 'bold', textAlign: 'center' }}  className='align-middle  fst-italic mt-5 pt-5'>Get 30% Off</h1>
    <p data-aos="fade-right">In Latest Baby Products and disney Toys</p>
    <button data-aos="fade-right" style={{background:"LightSEaGreen"}} className='btn text-white'>Shop Now</button>
   </div>
      </div>
      <div class="col-md-6">
     
          <img
          className="d-block w-75 m-5"
          src={img1}
          alt="Second slide"
          data-aos="fade-left"
        />
      </div>
    </div>
  </Carousel.Item>
  <Carousel.Item>
    <div class="row">
      <div class="col-md-6 p-5">
        <img
          className="d-block w-100 mt-5 mb-5"
          src={img6}
          alt="Third slide"
          data-aos="fade-right"
        />
      </div>
      <div class="col-md-6">
        {/* <Carousel.Caption> */}
        <div className=" text-center text-white mt-5 pt-5">
   <h1 data-aos="fade-left"  style={{ fontSize: '5rem', fontWeight: 'bold', textAlign: 'center' }} className='align-middle mt-5 pt-5 fst-italic '>Get 30% Off</h1>
    <p data-aos="fade-left">In Latest Baby Products and disney Toys</p>
    <button data-aos="fade-left" style={{background:"LightSEaGreen"}} className='btn text-white'>Shop Now</button>
   </div>
    
      </div>
    </div>
  </Carousel.Item>
</Carousel>
</div>
   </div>
    );
};
export default Banner;