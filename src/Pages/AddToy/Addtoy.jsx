import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import Header from "../../share/Header";
import { Container } from "react-bootstrap";
import bg from '../../assets/login1.jpg'



const Addtoy = () => {
    const {user}=useContext(AuthContext);
 
    const{
        register,
        handleSubmit,
        watch,
        formState:{errors},
    }=useForm();
    const onSubmit=(data)=>{
      
        fetch("http://localhost:5000/mytoys",
        {
            method:"post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
        });
      console.log(data);
    }
    // const options = [
    //     { value: "Disney Princess", label: "Disney Princess" },
    //     { value: "Frozen doll", label: "Frozen doll" },
    //     { value: "animation Character", label: "animation Character" },
       
    //   ];
    return (
        <div>
            <Header></Header>
            <Container style={{backgroundImage:`url(${bg})`}}>
                <h3  className="text-center mt-5 mb-3 text-white pt-5">Add Here If You Want to Add Toy</h3>
            <div className="row row-cols-sm-1 row-cols-lg-2">
           <div className="col">
           <form onSubmit={handleSubmit(onSubmit)}>
            {errors.exampleRequired && <span>This field is required</span>}
           <div className="">
           <input
              className="p-2 m-2 w-75"
              {...register("toyName")}
              placeholder="Toy Name"
              defaultValue="Barbe"
            />
           </div>
{/* _id,sellerName,toyName,subCategory,price,availableQuantity,picture,description */}
         <div className="">
         <input
              className="p-2 m-2 w-75"
              {...register("sellerName", { required: true })}
              placeholder="sellerName"
              defaultValue="sellerName"
            />
         </div>
          <div className="">
          <input
              className="p-2 m-2 w-75"
              {...register("price", { required: true })}
              placeholder="price"
              type="number"
            />
          </div>
          <div className="">
          <input
              className="p-2 m-2 w-75"
              {...register("rating", { required: true })}
              placeholder="rating"
              type="number"
            />
          </div>
          <div className="">
          <input
              className="p-2 m-2 w-75"
              {...register("availableQuantity", { required: true })}
              placeholder="availableQuantity"
              type="number"
            />
          </div>
          <div className="">
          <input
              className="p-2 m-2 w-75"
              {...register("picture")}
              placeholder="image link"
              type="url"
              defaultValue="https://i.ibb.co/y6BBZ20/download.jpg"
            />
          </div>
         <div className="">
         <input
              className="p-2 m-2 w-75"
              value={user?.email}
              {...register("sellerEmail")}
              placeholder="your email"
              type="email"
            />
         </div>
              <div >
              <select className="p-2 m-2 w-75" {...register("subCategory")}>
              <option value="Disney Princess">Disney Princess</option>
              <option value="Frozen doll">Frozen doll</option>
              <option value="animation Character">animation Character</option>
              
            </select>
              </div>
            <div className="">
            <input
              className="p-2 m-2 w-75"
              {...register("description")}
              placeholder="description"
            />
            </div>
           <div className="">
           <input style={{background:'LightSeaGreen'}} className="btn w-75 ms-2 ps-5 pe-5 pt-2 pb-2 mb-5 text-white" value="Post Toy" type="submit" />
           </div>
            </form>
            </div> 
            <div className="col"></div>
           
</div>
</Container>
        </div>
    );
};

export default Addtoy;