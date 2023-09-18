import Swal from "sweetalert2";
import bg from '../../assets/childholdbanner.jpg'
import img from '../../assets/banner3.png'
import './formar/formar.css'
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Subscription = () => {
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
    const handlesubscription=()=>{
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          })
    }
    return (
   <div className="d-flex">
    <div className=""></div>
         <div className=" banner mx-auto"  style={{backgroundImage:`url(${bg})`}}>
    <div className="align-middle mt-5 pt-5">
    <div className='container text-center  mt-5 mb-5'>
<h6  data-aos="fade-right"  className='text-center fs-4 m-3 mt-5 pt-5'>ADD SUBSCRIPTION</h6>
<div>
<input className='p-2 w-50 border border-info rounded shadow-lg' type ='email' placeholder='Enter your Email'></input>
<button  data-aos="fade-right"  onClick={handlesubscription} style={{background:'LightSeaGreen'}} className='btn p-2 text-white'>Subscribe</button>
</div>

</div>
{/* <div className="">
    <img src={img} alt="" />
</div> */}
    </div>
        </div>
   </div>
    );
};

export default Subscription;