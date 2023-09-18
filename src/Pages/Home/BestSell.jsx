
import img1 from '../../assets/balloon.png'
import React, { useRef, useState,useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import img0 from '../../assets/monkey2.jpg';
import img2 from '../../assets/clipart2743004 - Copy.png'
import img3 from '../../assets/photooo1.jpg'
import img4 from '../../assets/photooo2.jpg';
import img5 from '../../assets/photoo3.jpg';
import img6 from '../../assets/photoo4.jpg';
import img7 from '../../assets/photoo5.jpg';
import img8 from '../../assets/photooo6.jpg';
import img9 from '../../assets/photoo7.jpg';
import img10 from '../../assets/photoo8.jpg';
import img11 from '../../assets/photoo9.jpg';
import img12 from '../../assets/photoo10.jpg'
import { FaArrowRight } from 'react-icons/fa';

import AOS from 'aos';
import 'aos/dist/aos.css';



const BestSell = () => {
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
    return (
        <div>
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-4 p-5">
                    <img data-aos="fade-right" className='w-100' src={img1} alt="" />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 mt-5">
                  <h3 data-aos="fade-right" className='text-center'>parent Favouite Product<FaArrowRight></FaArrowRight></h3>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
        <div className="ps-5 text-center ms-5">
        <div data-aos="fade-right" className="d-flex justify-between">
          <img style={{height:"8rem",width:"6rem"}} className='m-1 p-2 border border-info' src={img0} alt="" />
          <div className="p-3">
            <p>Disney Toys</p>
            <h4 style={{colour:"LightSeaGreen"}}>$30</h4>
          </div>
          </div>
          <div data-aos="fade-right" className="d-flex justify-between">
          <img style={{height:"8rem",width:"6rem"}} className='m-1 p-2 border border-info' src={img2} alt="" />
          <div className="p-3">
            <p>Disney Toys</p>
            <h4 style={{colour:"LightSeaGreen"}}>$30</h4>
          </div>
          </div>
          <div data-aos="fade-right" className="d-flex justify-between">
          <img style={{height:"8rem",width:"6rem"}} className='m-1 p-2 border border-info' src={img3} alt="" />
          <div className="p-3">
            <p>Disney Toys</p>
            <h4 style={{colour:"LightSeaGreen"}}>$30</h4>
          </div>
          </div>
          <div data-aos="fade-right" className="d-flex justify-between">
          <img style={{height:"8rem",width:"6rem"}} className='m-1 p-2 border border-info' src={img7} alt="" />
          <div className="p-3">
            <p>Disney Toys</p>
            <h4 style={{colour:"LightSeaGreen"}}>$30</h4>
          </div>
          </div>
        
        </div>
      
        
        </SwiperSlide>
        <SwiperSlide>
      <div className="ps-5 text-center ms-5">
      <div data-aos="fade-right" className="d-flex justify-between ">
          <img style={{height:"8rem",width:"6rem"}} className='m-1 p-2 border border-info' src={img6} alt="" />
          <div className="p-3">
            <p>Disney Toys</p>
            <h4 style={{colour:"LightSeaGreen"}}>$30</h4>
          </div>
          </div>
          <div data-aos="fade-right" className="d-flex justify-between">
          <img style={{height:"8rem",width:"6rem"}} className='m-1 p-2 border border-info' src={img7} alt="" />
          <div className="p-3">
            <p>Disney Toys</p>
            <h4 style={{colour:"LightSeaGreen"}}>$30</h4>
          </div>
          </div>
          <div data-aos="fade-right" className="d-flex justify-between">
          <img style={{height:"8rem",width:"6rem"}} className='m-1 p-2 border border-info' src={img2} alt="" />
          <div className="p-3">
            <p>Disney Toys</p>
            <h4 style={{colour:"LightSeaGreen"}}>$30</h4>
          </div>
          </div>
          <div data-aos="fade-right" className="d-flex justify-between">
          <img style={{height:"8rem",width:"6rem"}} className='m-1 p-2 border border-info' src={img0} alt="" />
          <div className="p-3">
            <p>Disney Toys</p>
            <h4 style={{colour:"LightSeaGreen"}}>$30</h4>
          </div>
          </div>
      </div>
      
        </SwiperSlide>
        <SwiperSlide>
      <div className="ps-5 text-center ms-5">
      <div data-aos="fade-right" className="d-flex justify-between">
          <img style={{height:"8rem",width:"6rem"}} className='m-1 p-2 border border-info' src={img9} alt="" />
          <div className="p-3">
            <p>Disney Toys</p>
            <h4 style={{colour:"LightSeaGreen"}}>$30</h4>
          </div>
          </div>
          <div data-aos="fade-right" className="d-flex justify-between">
          <img style={{height:"8rem",width:"6rem"}} className='m-1 p-2 border border-info' src={img10} alt="" />
          <div className="p-3">
            <p>Disney Toys</p>
            <h4 style={{colour:"LightSeaGreen"}}>$30</h4>
          </div>
          </div>
          <div data-aos="fade-right" className="d-flex justify-between">
          <img style={{height:"8rem",width:"6rem"}} className='m-1 p-2 border border-info' src={img6} alt="" />
          <div className="p-3">
            <p>Disney Toys</p>
            <h4 style={{colour:"LightSeaGreen"}}>$30</h4>
          </div>
          </div>
          <div data-aos="fade-right" className="d-flex justify-between">
          <img style={{height:"8rem",width:"6rem"}} className='m-1 p-2 border border-info' src={img11} alt="" />
          <div className="p-3">
            <p>Disney Toys</p>
            <h4 style={{colour:"LightSeaGreen"}}>$30</h4>
          </div>
          </div>
      </div>
        
        </SwiperSlide>
        <SwiperSlide>
      <div className="ps-5 text-center ms-5">
      <div data-aos="fade-right" className="d-flex justify-between">
          <img style={{height:"8rem",width:"6rem"}} className='m-1 p-2 border border-info' src={img12} alt="" />
          <div className="p-3">
            <p>Disney Toys</p>
            <h4 style={{colour:"LightSeaGreen"}}>$30</h4>
          </div>
          </div>
          <div data-aos="fade-right" className="d-flex justify-between">
          <img style={{height:"8rem",width:"6rem"}} className='m-1 p-2 border border-info' src={img10} alt="" />
          <div className="p-3">
            <p>Disney Toys</p>
            <h4 style={{colour:"LightSeaGreen"}}>$30</h4>
          </div>
          </div>
          <div data-aos="fade-right" className="d-flex justify-between">
          <img style={{height:"8rem",width:"6rem"}} className='m-1 p-2 border border-info' src={img3} alt="" />
          <div className="p-3">
            <p>Disney Toys</p>
            <h4 style={{colour:"LightSeaGreen"}}>$30</h4>
          </div>
          </div>
          <div data-aos="fade-right" className="d-flex justify-between">
          <img style={{height:"8rem",width:"6rem"}} className='m-1 p-2 border border-info' src={img5} alt="" />
          <div className="p-3">
            <p>Disney Toys</p>
            <h4 style={{colour:"LightSeaGreen"}}>$30</h4>
          </div>
          </div>
      </div>
        
        </SwiperSlide>
     
      </Swiper>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 mt-5">
                  <h3 data-aos="fade-left" className='text-center'>Best Selling Product <FaArrowRight/></h3>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
      <div className="ps-5 text-center ms-5">
      <div data-aos="fade-left" className="d-flex justify-between">
          <img style={{height:"8rem",width:"6rem"}} className='m-1 p-2 border border-info' src={img12} alt="" />
          <div className="p-3">
            <p>Disney Toys</p>
            <h4 style={{colour:"LightSeaGreen"}}>$30</h4>
          </div>
          </div>
          <div data-aos="fade-left" className="d-flex justify-between">
          <img style={{height:"8rem",width:"6rem"}} className='m-1 p-2 border border-info' src={img10} alt="" />
          <div className="p-3">
            <p>Disney Toys</p>
            <h4 style={{colour:"LightSeaGreen"}}>$30</h4>
          </div>
          </div>
          <div data-aos="fade-left" className="d-flex justify-between">
          <img style={{height:"8rem",width:"6rem"}} className='m-1 p-2 border border-info' src={img3} alt="" />
          <div className="p-3">
            <p>Disney Toys</p>
            <h4 style={{colour:"LightSeaGreen"}}>$30</h4>
          </div>
          </div>
          <div data-aos="fade-left" className="d-flex justify-between">
          <img style={{height:"8rem",width:"6rem"}} className='m-1 p-2 border border-info' src={img5} alt="" />
          <div className="p-3">
            <p>Disney Toys</p>
            <h4 style={{colour:"LightSeaGreen"}}>$30</h4>
          </div>
          </div>
      </div>
       
        </SwiperSlide>
        <SwiperSlide>
<div className="ps-5 text-center ms-5">
<div data-aos="fade-left" className="d-flex justify-between">
          <img style={{height:"8rem",width:"6rem"}} className='m-1 p-2 border border-info' src={img0} alt="" />
          <div className="p-3">
            <p>Disney Toys</p>
            <h4 style={{colour:"LightSeaGreen"}}>$30</h4>
          </div>
          </div>
          <div data-aos="fade-left" className="d-flex justify-between">
          <img style={{height:"8rem",width:"6rem"}} className='m-1 p-2 border border-info' src={img2} alt="" />
          <div className="p-3">
            <p>Disney Toys</p>
            <h4 style={{colour:"LightSeaGreen"}}>$30</h4>
          </div>
          </div>
          <div data-aos="fade-left" className="d-flex justify-between">
          <img style={{height:"8rem",width:"6rem"}} className='m-1 p-2 border border-info' src={img3} alt="" />
          <div className="p-3">
            <p>Disney Toys</p>
            <h4 style={{colour:"LightSeaGreen"}}>$30</h4>
          </div>
          </div>
          <div data-aos="fade-left" className="d-flex justify-between">
          <img style={{height:"8rem",width:"6rem"}} className='m-1 p-2 border border-info' src={img11} alt="" />
          <div className="p-3">
            <p>Disney Toys</p>
            <h4 style={{colour:"LightSeaGreen"}}>$30</h4>
          </div>
          </div>
</div>
        </SwiperSlide>
        <SwiperSlide>
<div className="ps-5 text-center ms-5">
<div data-aos="fade-left" className="d-flex justify-between">
          <img style={{height:"8rem",width:"6rem"}} className='m-1 p-2 border border-info' src={img9} alt="" />
          <div className="p-3">
            <p>Disney Toys</p>
            <h4 style={{colour:"LightSeaGreen"}}>$30</h4>
          </div>
          </div>
          <div data-aos="fade-left" className="d-flex justify-between">
          <img style={{height:"8rem",width:"6rem"}} className='m-1 p-2 border border-info' src={img10} alt="" />
          <div className="p-3">
            <p>Disney Toys</p>
            <h4 style={{colour:"LightSeaGreen"}}>$30</h4>
          </div>
          </div>
          <div data-aos="fade-left" className="d-flex justify-between">
          <img style={{height:"8rem",width:"6rem"}} className='m-1 p-2 border border-info' src={img6} alt="" />
          <div className="p-3">
            <p>Disney Toys</p>
            <h4 style={{colour:"LightSeaGreen"}}>$30</h4>
          </div>
          </div>
          <div data-aos="fade-left" className="d-flex justify-between">
          <img style={{height:"8rem",width:"6rem"}} className='m-1 p-2 border border-info' src={img11} alt="" />
          <div className="p-3">
            <p>Disney Toys</p>
            <h4 style={{colour:"LightSeaGreen"}}>$30</h4>
          </div>
          </div>
</div>
          
        </SwiperSlide>
        <SwiperSlide>
      <div className="ps-5 text-center ms-5">
      <div data-aos="fade-left" className="d-flex justify-between">
          <img style={{height:"8rem",width:"6rem"}} className='m-1 p-2 border border-info' src={img0} alt="" />
          <div className="p-3">
            <p>Disney Toys</p>
            <h4 style={{colour:"LightSeaGreen"}}>$30</h4>
          </div>
          </div>
          <div data-aos="fade-left" className="d-flex justify-between">
          <img style={{height:"8rem",width:"6rem"}} className='m-1 p-2 border border-info' src={img2} alt="" />
          <div className="p-3">
            <p>Disney Toys</p>
            <h4 style={{colour:"LightSeaGreen"}}>$30</h4>
          </div>
          </div>
          <div data-aos="fade-left" className="d-flex justify-between">
          <img style={{height:"8rem",width:"6rem"}} className='m-1 p-2 border border-info' src={img3} alt="" />
          <div className="p-3">
            <p>Disney Toys</p>
            <h4 style={{colour:"LightSeaGreen"}}>$30</h4>
          </div>
          </div>
          <div data-aos="fade-left" className="d-flex justify-between">
          <img style={{height:"8rem",width:"6rem"}} className='m-1 p-2 border border-info' src={img11} alt="" />
          <div className="p-3">
            <p>Disney Toys</p>
            <h4 style={{colour:"LightSeaGreen"}}>$30</h4>
          </div>
          </div>
      </div>
        
        </SwiperSlide>
        <SwiperSlide>
     <div className="ps-5 text-center ms-5">
     <div data-aos="fade-left" className="d-flex justify-between">
          <img style={{height:"8rem",width:"6rem"}} className='m-1 p-2 border border-info' src={img3} alt="" />
          <div className="p-3">
            <p>Disney Toys</p>
            <h4 style={{colour:"LightSeaGreen"}}>$30</h4>
          </div>
          </div>
          <div data-aos="fade-left" className="d-flex justify-between">
          <img style={{height:"8rem",width:"6rem"}} className='m-1 p-2 border border-info' src={img2} alt="" />
          <div className="p-3">
            <p>Disney Toys</p>
            <h4 style={{colour:"LightSeaGreen"}}>$30</h4>
          </div>
          </div>
          <div data-aos="fade-left" className="d-flex justify-between">
          <img style={{height:"8rem",width:"6rem"}} className='m-1 p-2 border border-info' src={img0} alt="" />
          <div className="p-3">
            <p>Disney Toys</p>
            <h4 style={{colour:"LightSeaGreen"}}>$30</h4>
          </div>
          </div>
          <div data-aos="fade-left" className="d-flex justify-between">
          <img style={{height:"8rem",width:"6rem"}} className='m-1 p-2 border border-info' src={img4} alt="" />
          <div className="p-3">
            <p>Disney Toys</p>
            <h4 style={{colour:"LightSeaGreen"}}>$30</h4>
          </div>
          </div>
     </div>
        
        </SwiperSlide>
      
      </Swiper>
                </div>

            </div>
        </div>
    );
};

export default BestSell;