import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ToyCard from './ToyCard';
import bg from '../../assets/6514482.jpg'
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import img1 from '../../assets/clipart2743004.png';
import img2 from '../../assets/clipart2873484.png';
import img3 from '../../assets/clipart555749.png';
import './formar/formar.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Categories = () => {
    const [toys, settoys] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchtoys = async () => {
          try {
            const response = await fetch('https://toy-world-server-suraiyatithi.vercel.app/category');
            const data = await response.json();
            settoys(data);
            setLoading(false);
          } catch (error) {
            console.log('Error fetching toys:', error);
            setLoading(false);
          }
        };
    
        fetchtoys();
      }, []);
      const DisneyPrincess = toys.filter(toy => toy.subCategory === 'Disney-Princess');
      const FrozenDoll = toys.filter(toy => toy.subCategory === 'Frozen-doll');
      const animationCharacter = toys.filter(toy => toy.subCategory === 'animation-Character');
    
      if (loading) {
        return <p>Loading...</p>;
      }
   
    
    return (
      <div  style={{backgroundImage:`url(${bg})`}} className='text-center background'>
      <h1 data-aos="fade-right" className='fs-1 pt-5'>POPULAR CATEGORY</h1>
    
     <Link to='/alltoys'> <button data-aos="fade-right" style={{background:"lightseagreen"}} className='btn text-white '>Go to All Category <FaArrowRight></FaArrowRight> </button></Link>
        
        <div className='row'>
        <div className="col-md-4 col-lg-4 col-sm-12  text-center mx-auto ps-5">
          <div data-aos="fade-right" className="text-center  rounded-background m-3">
            <img  className='w-50' src={img3} alt="" />
          </div>
          <div data-aos="fade-right" className="text-center rounded-background m-3">
            <img  className='w-50' src={img2} alt="" />
          </div>
          {/* <div className="text-center rounded-background ">
            <img className='w-50' src={img3} alt="" />
          </div> */}

        </div>
        <div className='col-md-8 col-sm-12 col-lg-8 text-center'>
     
        <div className='container border  mt-5 pt-5 mb-4 text-center'>
          <Tabs className=''>
            <div className="row"></div>
   <div className="className='col-md-8 col-sm-12 col-lg-8'">
   <TabList >
        <Tab data-aos="fade-right" >Disney Princess</Tab>
        <Tab data-aos="fade-right">Frozen Doll</Tab>
        <Tab data-aos="fade-right">Animationb Character</Tab>
      </TabList>
   </div>

    <div className="className='col-md-8 col-sm-12 col-lg-8'">
    <TabPanel >

  
      <div className="row row-cols-sm-1 row-cols-lg-2">
        {
            DisneyPrincess.map((toys)=>
            <ToyCard key={toys._id} toys={toys} 
           />)
        }
      </div>
      </TabPanel>

     
      <TabPanel>
    
      <div className="row row-cols-sm-1 row-cols-lg-2">
        {
            FrozenDoll.map((toys)=>
            <ToyCard key={toys._id} toys={toys} />)
        }
      </div>
      </TabPanel>
      <TabPanel>
      
      <div className="row row-cols-sm-1 row-cols-lg-2">
        {
            animationCharacter.map((toys)=>
            <ToyCard key={toys._id} toys={toys} />)
        }
      </div>
      </TabPanel>
    </div>
    </Tabs>
  </div>
  </div>
  </div>
        </div>
    );
};

export default Categories;
