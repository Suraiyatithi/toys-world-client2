import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import bg from '../../assets/littletitlebg.jpg'
import img1 from '../../assets/littletitle2.png'
import img2 from '../../assets/littletitle3.png';
const Littletitle = () => {
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
        <div className='m-5 p-4'>
            <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-2">
                <div  className="col p-3">
<div style={{backgroundImage:`url(${bg})`}} className="row p-4">
<div  className="col-md-4 col-sm-12 col-lg-4">
<img data-aos="fade-right" className='w-75' src={img1} alt="" />
</div>
<div className="col-md-8 col-lg-8 col-sm-12">
    <h6 data-aos="fade-right">Flash Sale</h6>
    <h1 data-aos="fade-right" className='mb-3'>Baby's Choice</h1>
    <p data-aos="fade-right" className='pb-5'>35% Off For all collection</p>
</div>
</div>
                </div>
                <div  className="col p-3">
                 
                    <div style={{backgroundImage:`url(${bg})`}} className="row p-4">
                   <div  className="col-md-4 col-lg-4 col-sm-12">
                   <img data-aos="fade-left" className='w-100' src={img2} alt="" />
                   </div>
                    <div className="col-md-8 col-lg-8 col-sm-12">
    <h6 data-aos="fade-left">Funny Toys</h6>
    <h1 data-aos="fade-left">Disney Choice</h1>
    <p data-aos="fade-left">25% Off For all collection</p>
</div>
                    </div>
           
                </div>
            </div>
        </div>
    );
};

export default Littletitle;