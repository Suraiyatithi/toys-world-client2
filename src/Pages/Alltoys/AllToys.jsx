import { useEffect, useState } from "react";
import DisneyToy from "./DisneyToy";
import Header from "../../share/Header";
import bg from '../../assets/3644477.jpg';
import { Link } from "react-router-dom";
import Footer from "../../share/Footer";

const AllToys = () => {
    const[disneytoys,setdisneytoys]=useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResult, setSearchResult] = useState(null);
    useEffect(() => {
        fetch('https://toy-world-server-suraiyatithi.vercel.app/toys')
            .then(res => res.json())
            .then(data => setdisneytoys(data));
    }, [])
    const handleSearch = () => {
        const foundToy = disneytoys.find(toy => toy.toyName === searchTerm);
        setSearchResult(foundToy ? foundToy : "Toy not found");
      }
      const handleSort = () => {
        const sortedToys = [...disneytoys].sort((a, b) => a.price - b.price);
        setdisneytoys(sortedToys);
      };

    return (
        <div  style={{backgroundImage:`url(${bg})`}}>
            <Header></Header>
           <div className=" mt-5 p-5">
           <h3 className="text-center" style={{color:"darkmagenta"}}>All the Disney Toy Collection</h3>
       <div className="text-center p-3 ">
       <input 
        type="text" className="p-2 border border-warning w-50"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Enter toy name"
      />
       
      <button  style={{background:"LightSeaGreen"}} className="btn m-2 p-2 text-white" onClick={handleSearch}>Search</button> 
      <button style={{background:"LightSeaGreen"}} className="btn m-2 p-2 text-white" onClick={handleSort}>Sort by Price</button>
      </div>
      {searchResult && (
        <div>
          {typeof searchResult === 'object' ? (
            <div>
                        <div className="container border shadow-lg">
            <table className="table mt-4 text-center p-3">
    <thead>
      <tr className="row row-cols-sm-3 row-cols-lg-6 ps-5 ms-5">
        <th className="col">Seller Name</th>
        <th>Toy Name</th>
        <th>Sub Category</th>
        <th>Price</th>
        <th>Available Quantity</th>
        <th>     </th>
      </tr>
    </thead>
    <tbody className="p-5 m-5 border shadow-lg pb-5 pt-5">
      <tr className="row row-cols-sm-3 text-center row-cols-lg-6 p-5 m-5">
        <td className="col">{searchResult.sellerName}</td>
        <td>{searchResult.toyName}</td>
        <td>{searchResult.subCategory}</td>
        <td>${searchResult.price}</td>
        <td>{searchResult.availableQuantity}</td>
        <td><Link >
          <button style={{background:"LightSEaGreen"}} className="btn text-white">View Details</button>
          </Link>
          </td>
      </tr>
    
     
    </tbody>
    </table>
    </div>
            </div>
          ) : (
            <p>{searchResult}</p>
          )}
        </div>
      )}

            <div className="container border border-3 border-info rounded shadow-lg">
            <table className="table  mt-4 text-center p-3">
    <thead>
      <tr className="row row-cols-sm-3  row-cols-lg-6 ps-5 ms-5 text-center">
        <th className="col">Seller Name</th>
        <th>Toy Name</th>
        <th>Sub Category</th>
        <th>Price</th>
        <th>Available Quantity</th>
        <th>    </th>
      </tr>
    </thead>
            {
                    disneytoys.map(disneytoy => <DisneyToy
                        key={disneytoy._id}
                        disneytoy={disneytoy}
                    ></DisneyToy>)
                }
                </table>
            </div>

           </div>
           <Footer></Footer>
        </div>
    );
};

export default AllToys;