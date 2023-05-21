import React from "react";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Toys from "./Toys";
import { Container } from "react-bootstrap";
import Header from "../../share/Header";
import Footer from "../../share/Footer";
import bg from '../../assets/3644477.jpg';


import Swal from "sweetalert2";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";


const Mytoy = () => {
    const { user } = useContext(AuthContext);
    const [toys, settoys] = useState([]);
    const [modal,setmodal]=React.useState(false)
    const [over, setover] = useState(false);
    const url = `https://toy-world-server-suraiyatithi.vercel.app/mytoys?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => settoys(data))
    }, [url,user,over]);

    // useEffect(() => {
    //     fetch(`http://localhost:5000/mytoys/${user?.email}`)
    //       .then((res) => res.json())
    //       .then((data) => {
    //         console.log(data);
    //         settoys(data);
    //       });
    //   }, [user, over]);
    const handleSort = () => {
        const sortedToys = [...toys].sort((a, b) => a.price - b.price);
        settoys(sortedToys);
      };
      const handleSortdis = () => {
        const sortedToys = [...toys].sort((a, b) => b.price - a.price);
        settoys(sortedToys);
      };
    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`https://toy-world-server-suraiyatithi.vercel.app/mytoys/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Toy has been deleted.',
                                'success'
                            )
                            const remaining = toys.filter(cof => cof._id !== _id);
                            settoys(remaining);
                        }
                    })

            }
        })
    }
    
    const handleToyUpdate=(data)=>{
        console.log(data);
        fetch(`https://toy-world-server-suraiyatithi.vercel.app/mytoys/${data._id}`,{
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(data)
        })
        .then((res)=>res.json())
        .then((result)=>{
            if(result.modifiedCount> 0){
               setover(!over)
               Swal.fire({
                title: 'Success!',
                text: 'Toy Updated Successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
            })
            }
            console.log(result);
        })
    }
    return (
<div className="">
    <Header></Header>
    
    <div className="p-5" style={{backgroundImage:`url(${bg})`}}>
    <Container>
            <h3 style={{color:"darkmagenta"}} className="text-center">My Submission List</h3>
            <button style={{background:"LightSeaGreen"}} className="btn m-2 p-2 text-white" onClick={handleSort}>Price <FaArrowUp></FaArrowUp></button>
            <button style={{background:"LightSeaGreen"}} className="btn m-2 p-2 text-white" onClick={handleSortdis}> Price<FaArrowDown></FaArrowDown></button>
            <div className="container border border-3 border-info rounded shadow-lg">
            <table className="table  mt-4 text-center p-3">
    <thead>
      <tr className="row row-cols-sm-3 ps-5 row-cols-lg-6  text-center">
        <th className="col">Toy Name</th>
        <th className="col">Sub Category</th>
        <th className="col">Price</th>
        <th className="col">Rating</th>
        
        <th className="col">Available Quantity</th>
        <th className="col">Edit/Delete</th>
        
      </tr>
    </thead>

    {
                    toys.map(toy => <Toys
                        key={toy._id}
                        toy={toy}
                        handleDelete={handleDelete}
                        modal={modal}
                        setmodal={setmodal}
                        handleToyUpdate={handleToyUpdate}
                    ></Toys>)
                }

    </table>
    </div>
    </Container>
        </div>
    
    <Footer></Footer>
</div>
    );
};

export default Mytoy;