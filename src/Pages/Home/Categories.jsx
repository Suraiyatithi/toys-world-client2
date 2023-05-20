import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ToyCard from './ToyCard';

const Categories = () => {
    const [toys, settoys] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchtoys = async () => {
          try {
            const response = await fetch('http://localhost:5000/category');
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
        <div className='container text-center'>
          <Tabs>
      <TabList>
        <Tab>Disney Princess</Tab>
        <Tab>Frozen Doll</Tab>
        <Tab>Animationb Character</Tab>
      </TabList>

      <TabPanel>
        <h3>Disney Princess</h3>
      <div className="row row-cols-sm-1 row-cols-lg-2">
        {
            DisneyPrincess.map((toys)=>
            <ToyCard key={toys._id} toys={toys} />)
        }
      </div>
      </TabPanel>

     
      <TabPanel>
        <h3>Frozen Doll</h3>
      <div className="row row-cols-sm-1 row-cols-lg-2">
        {
            FrozenDoll.map((toys)=>
            <ToyCard key={toys._id} toys={toys} />)
        }
      </div>
      </TabPanel>
      <TabPanel>
        <h3>Animation Character</h3>
      <div className="row row-cols-sm-1 row-cols-lg-2">
        {
            animationCharacter.map((toys)=>
            <ToyCard key={toys._id} toys={toys} />)
        }
      </div>
      </TabPanel>
    </Tabs>
  
        </div>
    );
};

export default Categories;