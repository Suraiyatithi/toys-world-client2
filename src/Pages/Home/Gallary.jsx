import col1 from '../../assets/disneygallary1.jpg';
import col2 from '../../assets/disney gallary2.jpg';
import col3 from '../../assets/disneygalley3.jpg';
import col4 from '../../assets/disneygallary4.jpg'
import col5 from  '../../assets/disneygallary6.jpg'
import col6 from '../../assets/disneygellary7.jpg';
import col7 from '../../assets/disney gallary2.jpg'
import AOS from 'aos'; // Import AOS
import React, { useEffect } from 'react';
import 'aos/dist/aos.css'; 
import './formar/formar.css';

const Gallary = () => {
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
        <div className='container text-center mt-5 pt-3'>
          
<h1 data-aos="fade-right" className='mt-3 text-center fs-1 mb-5'>EXPLORE OUR GALLARY</h1>
{/* <p><small>Here is some of our best toys collection.You will explore <br />more and more photo after fully visited our website and also you cn added photo on this </small></p> */}
<div className='row row-cols-sm-1 row-cols-lg-3 '>

<div className="col">
<img data-aos="fade-right"   className=' mb-3 w-100' src={col1}/>


</div>




<div className="" >
    
<img data-aos="fade-right"  className='col mb-2 w-100' src={col3}/>

 
<img  data-aos="fade-right" className='col mt-5 w-100' src={col4}/>
</div>


<div className="">
<img data-aos="fade-left" className='col mb-4 w-100 ' src={col5}/>
{/* <img className='col  w-100' src={col6}/> */}
<img data-aos="fade-left" className='col mb-4 mt-5 w-100' src={col7}/>

</div>



</div>



</div>
      
    );
};

export default Gallary;