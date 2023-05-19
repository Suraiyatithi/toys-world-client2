import React, { useEffect } from 'react';
import { useState } from 'react';
import ToyCard from './ToyCard';

const Category = () => {
    const [toys, settoys] = useState([]);
    const [filteredtoys, setFilteredtoys] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('Disney-Princess');
    useEffect(() => {
        async function fetchData() {
          try {
            const response = await fetch('http://localhost:5000/category');
            const data = await response.json();
            settoys(data);
            setFilteredtoys(data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
        fetchData();
      }, [selectedCategory]);
      const handleFilter = (category) => {
        const filteredData = toys.filter((job) => job.subCategory === category);
        setFilteredtoys(filteredData);
        setSelectedCategory(category);
      };
   
    return (
        <div>
             <div className="App">
      <div>
        <button onClick={() => handleFilter('Disney-Princess')}>Disney Pricess</button>
        <button onClick={() => handleFilter('Frozen-doll')}>Frozen Doll</button>
        <button onClick={() => handleFilter('animation-Character')}>Animation character</button>
      </div>
      <h1>Filtered Jobs ({selectedCategory})</h1>
      {filteredtoys.map((toys) => (
        <ToyCard key={toys._id} toys={toys} />
      ))}
    </div>  
        </div>
    );
};

export default Category;