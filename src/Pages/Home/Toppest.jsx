import React from 'react';
import per1 from '../../assets/person1.jpg';
import per2 from '../../assets/person2.jpg';
import per3 from '../../assets/person3.jpg';
import trophy from '../../assets/tropf.jpg'
import { FaStar } from 'react-icons/fa';
import { FaRegStar } from 'react-icons/fa';
import Rating from 'react-rating';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Toppest = () => {
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
    const personCardStyle = {
        height: '20rem',
        position: 'relative',
        background:"pink",
        transform:' skew(-4deg)' 
         // Add relative positioning
      };
    
      const personImageStyle = {
        position: 'absolute',
        top: '0',
        left: '80%',
        transform: 'translateX(-50%)',
        marginTop: '-8rem', // Adjust this margin as needed
        width: '50%',
       
      };
   
    return (
        <div className='container mb-5 mt-5'>
            <h3 data-aos="fade-right" className='text-center fs-1 '>TOPPEST SELLER</h3>
            <p data-aos="fade-right" className='text-center mb-5 pb-5'><small>They earn their position by their hard working and <br></br> they are also very passionte about their work and working hard makes them successful</small></p>
            <div className=" ">
                <div className="row mt-5 mb-5">
                    <div data-aos="fade-right" className='col-sm-12 col-lg-4 col-md-4 p-4'>
                    <div style={personCardStyle}  className="col border rounded shining-border shadow-lg p-4 mt-3">
                     
                        <div className=" mt-4">
                        <h5>Herry Murcell</h5>
                        <p><small>Greatest Seller Top 1. He actually deserver this .and he also a hard working person</small></p>
                        <p>
                        <Rating
  placeholderRating={5}
  emptySymbol={<FaRegStar/>}
  placeholderSymbol={<FaStar className='text-warning'></FaStar>}
  fullSymbol={<FaStar/>}
/> <small>{5}</small>

                        </p>
                        <small>(1M people reacted)</small>
                        </div>
                        <div className="">
                            <img style={personImageStyle} className='w-50 circle' src={per1} alt="" />
                        </div>
                   
                    </div>
                    </div>
                    <div data-aos="fade-right" className="col-sm-12 col-lg-4 col-md-4 p-4">
                    <div  style={personCardStyle}  className="col  border  rounded shadow-lg p-4 mt-3">
                       
                       <div className="col mt-4">
                         <h5>Allisa Abbww</h5>
                        <p><small>Greatest Seller Top 2.
                            He actually deserver this .and he also a hard working person</small></p>
                        <p>
                        <Rating
  placeholderRating={5}
  emptySymbol={<FaRegStar/>}
  placeholderSymbol={<FaStar className='text-warning'></FaStar>}
  fullSymbol={<FaStar/>}
/> <small>{5}</small>
                        </p>
                        <small>(1M people reacted)</small>
                       </div>
                            
                       <div className="col ">
                            <img style={personImageStyle} className='w-50 circle' src={per2} alt="" />
                        </div>
                    </div>
                    </div>
                    <div data-aos="fade-left" className="col-sm-12 col-lg-4 col-md-4 p-4">
                    <div  style={personCardStyle}  className="col  border  rounded shadow-lg p-4 mt-3">
                      
                        <div className="col mt-4">
                        <h5>Rihena Singu</h5>
                        <p><small>Greatest Seller Top 3. He actually deserver this .and he also a hard working person</small></p>
                        <p>
                        <Rating
  placeholderRating={5}
  emptySymbol={<FaRegStar/>}
  placeholderSymbol={<FaStar className='text-warning'></FaStar>}
  fullSymbol={<FaStar/>}
/> <small>{5}</small> 
                        </p>
                        <small>(1M people reacted)</small>
                        </div>
                        <div className="col">
                            <img style={personImageStyle} className='w-50 circle' src={per3} alt="" />
                        </div>
                    </div>
                    </div>
                   

                </div>
             
            </div>
        </div>
    );
};

export default Toppest;