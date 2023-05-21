import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ToyCard from './ToyCard';
import bg from '../../assets/3644477.jpg'
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

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
        <div className='text-center'>
            <h3 style={{color:'darkmagenta'}}>Popular Category</h3>
            <p><small>Most of the people like this category .here are some of the simple <br />of our toy category you will definetly see all the category added by our speacial member,you can
            <br /> alse added your toy collection.</small></p>
           <Link to='/alltoys'> <button style={{background:"lightseagreen"}} className='btn '>Go to All Category <FaArrowRight></FaArrowRight> </button></Link>
        <div style={{backgroundImage:`url(${bg})`}} className='container border  mt-4 mb-4 text-center'>
          <Tabs>
      <TabList>
        <Tab >Disney Princess</Tab>
        <Tab>Frozen Doll</Tab>
        <Tab>Animationb Character</Tab>
      </TabList>

      <TabPanel>
        <h3  style={{color:"darkmagenta"}}>Disney Princess</h3>
        <p><small>Disney princess are most likely real princess and the fairy tail <br />
        visit out all toys page ,you will see more of the toys you will love those product.</small></p>
      <div className="row row-cols-sm-1 row-cols-lg-2">
        {
            DisneyPrincess.map((toys)=>
            <ToyCard key={toys._id} toys={toys} />)
        }
      </div>
      </TabPanel>

     
      <TabPanel>
        <h3  style={{color:"darkmagenta"}}>Frozen Doll</h3>
        <p> <small>Frozen Doll are most likely real princess and the fairy tail <br />
        visit out all toys page ,you will see more of the toys you will love those product.</small></p>
      <div className="row row-cols-sm-1 row-cols-lg-2">
        {
            FrozenDoll.map((toys)=>
            <ToyCard key={toys._id} toys={toys} />)
        }
      </div>
      </TabPanel>
      <TabPanel>
        <h3 style={{color:"darkmagenta"}}>Animation Character</h3>
        <p><small>Animation charater are most likely real princess and the fairy tail <br />
        visit out all toys page ,you will see more of the toys you will love those product.</small></p>
      <div className="row row-cols-sm-1 row-cols-lg-2">
        {
            animationCharacter.map((toys)=>
            <ToyCard key={toys._id} toys={toys} />)
        }
      </div>
      </TabPanel>
    </Tabs>
  </div>
        </div>
    );
};

export default Categories;