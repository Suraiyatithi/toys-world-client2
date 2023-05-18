import { useEffect, useState } from "react";
import DisneyToy from "./DisneyToy";

const AllToys = () => {
    const[disneytoys,setdisneytoys]=useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => setdisneytoys(data));
    }, [])

    return (
        <div>
            <h3 style={{color:"darkmagenta"}}>All the Disney Toy Collection</h3>
            

            <div className="">
            {
                    disneytoys.map(disneytoy => <DisneyToy
                        key={disneytoy._id}
                        disneytoy={disneytoy}
                    ></DisneyToy>)
                }
            </div>
        </div>
    );
};

export default AllToys;