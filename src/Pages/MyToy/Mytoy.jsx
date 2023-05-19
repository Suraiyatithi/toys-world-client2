import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Toys from "./Toys";
import { Container } from "react-bootstrap";
import Header from "../../share/Header";
import Footer from "../../share/Footer";
import bg from '../../assets/3644477.jpg';

import Swal from "sweetalert2";


const Mytoy = () => {
    const { user } = useContext(AuthContext);
    const [toys, settoys] = useState([]);
    const url = `http://localhost:5000/mytoys?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => settoys(data))
    }, [url]);
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


                fetch(`http://localhost:5000/mytoys/${_id}`, {
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
    return (
<div className="">
    <Header></Header>
    
    <div className="p-5" style={{backgroundImage:`url(${bg})`}}>
    <Container>
            <h3 style={{color:"darkmagenta"}} className="text-center">My Submission List</h3>
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