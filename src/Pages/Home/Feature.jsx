
import React, { useRef,useEffect,useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';

import './formar/formar.css'
import img1 from '../../assets/monkey2.jpg';
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

// Import Swiper styles
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Keyboard, Scrollbar, Navigation,  FreeMode, Pagination} from 'swiper/modules';

import imgright from '../../assets/firstright.png';
import imgleft from '../../assets/secondleft.png';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Feature = () => {
      const swiperRef = useRef(null);
  const [isPrevButtonVisible, setIsPrevButtonVisible] = useState(false);

  useEffect(() => {
    const swiper = swiperRef.current && swiperRef.current.swiper;

    if (swiper) {
      // Listen to the "slideChange" event to determine whether to show the previous button
      swiper.on('slideChange', () => {
        setIsPrevButtonVisible(swiper.activeIndex > 0);
      });

      // Trigger an initial check to hide the previous button if needed
      setIsPrevButtonVisible(swiper.activeIndex > 0);
    }
  }, []);

  const handleNext = () => {
    try {
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.slideNext();
      }
    } catch (error) {
      console.error('Error in handleNext:', error);
    }
  };

  const handlePrev = () => {
    try {
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.slidePrev();
      }
    } catch (error) {
      console.error('Error in handlePrev:', error);
    }
  };
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
        <div  className='p-5'>
          <h1 data-aos="fade-right" className='fs-1 text-center mb-2'>OUR FEATURES COLLECTION</h1>
          <p data-aos="fade-right" className='text-center mb-5'>We try to provide the best collection and new collection</p>
               <Swiper
        ref={swiperRef}
        slidesPerView={3}
        spaceBetween={30}
        pagination={false}
        modules={[Keyboard, Scrollbar, Navigation]}
        className="mySwiper relative"
        breakpoints={{
        
          300: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2, 
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
    <div className="d-flex  mx-auto">
      <div className=""></div>
  
   <div className="mx-auto d-flex">
     
   <div className="">
           <button style={{background:"pink"}} data-aos="fade-left " className="fs-1 ps-5 pe-4 text-white" onClick={handlePrev}>
            &lt;<img className='w-50 ' src={imgright}></img>
          </button>
          </div>
          <div className="">
        <button style={{background:"pink"}} data-aos="fade-right " className="fs-1  text-white" onClick={handleNext}>
          <img className='w-50 mb-1' src={imgleft}></img>&gt;
        </button>
        </div>
   </div>
    </div>
    <SwiperSlide>
        <div data-aos="fade-right"  className="border product-card m-2 mb-4 d-flex p-1 border rounded ">
           <img className='w-50' src={img1} alt="" />
           <div className="text-center align-middle mt-5 pt-5">
            <h3 className="previous-price text-danger">$80</h3>
            <h6>Monkey Disney toy</h6>
            <p>$70</p>
            <div className="discount-price">Save $10</div>
           </div>
           </div>
           <div data-aos="fade-right"  className="border product-card m-2 d-flex p-1 border rounded ">
           <img className='w-50' src={img10} alt="" />
           <div className="text-center align-middle mt-5 pt-5">
           <h3 className="previous-price text-danger">$80</h3>
            <h6>Monkey Disney toy</h6>
            <p>$70</p>
            <div className="discount-price">Save $10</div>
           </div>
           </div>
       
        </SwiperSlide>
        <SwiperSlide>
        <div data-aos="fade-right" className="border product-card m-2 mb-4 d-flex p-1 border rounded ">
           <img className='w-50' src={img3} alt="" />
           <div className="text-center align-middle mt-5 pt-5">
           <h3 className="previous-price text-danger">$80</h3>
            <h6>Monkey Disney toy</h6>
            <p>$70</p>
            <div className="discount-price">Save $10</div>
           </div>
           </div>
           <div data-aos="fade-right"  className="border product-card m-2 d-flex p-1 border rounded ">
           <img className='w-50' src={img9} alt="" />
           <div className="text-center align-middle mt-5 pt-5">
           <h3 className="previous-price text-danger">$80</h3>
            <h6>Monkey Disney toy</h6>
            <p>$70</p>
            <div className="discount-price">Save $10</div>
           </div>
           </div>
        </SwiperSlide>
        <SwiperSlide>
        <div data-aos="fade-left"  className="border product-card m-2 d-flex p-1 border rounded ">
           <img className='w-50' src={img5} alt="" />
           <div className="text-center align-middle mt-5 pt-5">
           <h3 className="previous-price text-danger">$80</h3>
            <h6>Monkey Disney toy</h6>
            <p>$70</p>
            <div className="discount-price">Save $10</div>
           </div>
           </div>
           <div data-aos="fade-left"  className="border product-card m-2 d-flex p-1 border rounded ">
           <img className='w-50' src={img6} alt="" />
           <div className="text-center align-middle mt-5 pt-5">
           <h3 className="previous-price text-danger">$80</h3>
            <h6>Monkey Disney toy</h6>
            <p>$70</p>
            <div className="discount-price">Save $10</div>
           </div>
           </div>
        </SwiperSlide>
        <SwiperSlide>
        <div data-aos="fade-right" className="border product-card m-2 d-flex p-1 border rounded ">
           <img className='w-50' src={img7} alt="" />
           <div className="text-center align-middle mt-5 pt-5">
           <h3 className="previous-price text-danger">$80</h3>
            <h6>Monkey Disney toy</h6>
            <p>$70</p>
            <div className="discount-price">Save $10</div>
           </div>
           </div>
           <div data-aos="fade-right" className="border product-card m-2 d-flex p-1 border rounded ">
           <img className='w-50' src={img8} alt="" />
           <div className="text-center align-middle mt-5 pt-5">
           <h3 className="previous-price text-danger">$80</h3>
            <h6>Monkey Disney toy</h6>
            <p>$70</p>
            <div className="discount-price">Save $10</div>
         
           </div>
           </div>
        </SwiperSlide>
        <SwiperSlide>
        <div data-aos="fade-right" className="border product-card m-2 mb-5 d-flex p-1 border rounded ">
           <img className='w-50' src={img9} alt="" />
           <div className="text-center align-middle mt-5 pt-5">
           <h3 className="previous-price text-danger">$80</h3>
            <h6>Monkey Disney toy</h6>
            <p>$70</p>
            <div className="discount-price">Save $10</div>
           </div>
           </div>
           <div data-aos="fade-right" className="border product-card m-2 d-flex p-1 border rounded ">
           <img className='w-50' src={img11} alt="" />
           <div className="text-center align-middle mt-5 pt-5">
           <h3 className="previous-price text-danger">$80</h3>
            <h6>Monkey Disney toy</h6>
            <p>$70</p>
            <div className="discount-price">Save $10</div>
        
           </div>
           </div>
        </SwiperSlide>
        <SwiperSlide>
        <div data-aos="fade-left"  className="border product-card m-2 d-flex p-1 border rounded ">
           <img className='w-50' src={img12} alt="" />
           <div className="text-center align-middle mt-5 pt-5">
           <h3 className="previous-price text-danger">$80</h3>
            <h6>Monkey Disney toy</h6>
            <p>$70</p>
            <div className="discount-price">Save $10</div>
         
           </div>
           </div>
           <div data-aos="fade-left" className="border product-card m-2 d-flex p-1 border rounded ">
           <img className='w-50' src={img2} alt="" />
           <div className="text-center align-middle mt-5 pt-5">
           <h3 className="previous-price text-danger">$80</h3>
            <h6>Monkey Disney toy</h6>
            <p>$70</p>
            <div className="discount-price">Save $10</div>
          
           </div>
           </div>
        </SwiperSlide>
       
      </Swiper>
         </div>
    );
};

export default Feature;