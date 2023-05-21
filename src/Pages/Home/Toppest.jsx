import React from 'react';
import per1 from '../../assets/person1.jpg';
import per2 from '../../assets/person2.jpg';
import per3 from '../../assets/person3.jpg';
import trophy from '../../assets/tropf.jpg'

const Toppest = () => {
    return (
        <div className='container mb-5'>
            <h3 style={{color:"darkmagenta"}} className='text-center '>Toppest Seller</h3>
            <p className='text-center'><small>They earn their position by their hard working and <br></br> they are also very passionte about their work and working hard makes them successful</small></p>
            <div className="row row-cols-1 row-cols-2 c">
                <div className="col">
                    <div className="row row-cols-sm-1 row-cols-lg-2 border border-info rounded shadow-lg p-4 mt-3">
                        <div className="col">
                            <img className='w-50' src={per1} alt="" />
                        </div>
                        <div className="col mt-4">
                        <h5>Herry Murcell</h5>
                        <p><small>Greatest Seller Top 1. He actually deserver this .and he also a hard working person</small></p>
                        <p>

                        </p>
                        </div>
                    </div>
                    <div className="row row-cols-sm-1 row-cols-lg-2  border border-info rounded shadow-lg p-4 mt-3">
                        <div className="col ">
                            <img className='w-50' src={per2} alt="" />
                        </div>
                       <div className="col mt-4">
                         <h5>Allisa Abbww</h5>
                        <p><small>Greatest Seller Top 2.
                            He actually deserver this .and he also a hard working person</small></p>
                        <p></p>
                       </div>
                            
                    
                    </div>
                    <div className="row row-cols-sm-1 row-cols-lg-2  border border-info rounded shadow-lg p-4 mt-3">
                        <div className="col">
                            <img className='w-50' src={per3} alt="" />
                        </div>
                        <div className="col mt-4">
                        <h5>Rihena Singu</h5>
                        <p><small>Greatest Seller Top 3. He actually deserver this .and he also a hard working person</small></p>
                        <p>
                            
                        </p>
                        </div>
                    </div>
                   

                </div>
                <div className="col">
                    <img className='w-75 ps-4 ms-5' src={trophy} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Toppest;