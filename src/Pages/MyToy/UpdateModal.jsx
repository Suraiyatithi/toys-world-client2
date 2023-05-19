import React, { useContext } from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import { AuthContext } from '../../Provider/AuthProvider';

const UpdateModal = (props) => {
    const {user}=useContext(AuthContext)
    const{
        register,
        handleSubmit,
        watch,
        formState:{errors},
    }=useForm();

    const { handleToyUpdate } = props;
    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title
            className="text-center w-100 m-auto"
            id="contained-modal-title-vcenter"
          >
            Update Toy You Have added before
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            className="container text-center"
            onSubmit={handleSubmit(handleToyUpdate)}
          >
            {errors.exampleRequired && <span>This field is required</span>}
            <div className="">
           <input
              className="p-2 m-2 w-75 d-none"
              {...register("toyName")}
              placeholder="Toy Name"
              defaultValue={props?.toy?.toyName}
            />
           </div>
            <input
              className=" d-none"
              {...register("_id")}
              value={props?.toy?._id}
            />
  
  <div className="">
         <input
              className="p-2 m-2 w-75 d-none "
            
              {...register("sellerName", { required: true })}
              placeholder="sellerName"
              defaultValue={props?.toy?.sellerName}
            />
         </div>
         <div className="">
          <input
              className="p-2 m-2 w-75"
              {...register("price", { required: true })}
              placeholder="price"
              type="number"
              defaultValue={props?.toy?.price}
            />
          </div>
          <div className="">
          <input
              className="p-2 m-2 w-75"
              {...register("rating", { required: true })}
              placeholder="rating"
              type="number"
              defaultValue={props?.toy?.rating}
            />
          </div>
          <div className="">
          <input
              className="p-2 m-2 w-75"
              {...register("availableQuantity", { required: true })}
              placeholder="availableQuantity"
              type="number"
              defaultValue={props?.toy?.availableQuantity}
            />
          </div>
          <div className="">
          <input
              className="p-2 m-2 w-75 d-none"
              {...register("picture")}
              placeholder="image link"
              type="url"
              defaultValue={props?.toy?.picture}
            />
          </div>
         <div className="">
         <input
              className="p-2 m-2 w-75 d-none"
              value={user?.email}
              {...register("sellerEmail")}
           
              type="email"
              defaultValue={props?.toy?.sellerEmail}
            />
         </div>
              <div >
              <select className="p-2 m-2 w-75 d-none" {...register("subCategory")}>
              <option value="Disney Princess">Disney Princess</option>
              <option value="Frozen doll">Frozen doll</option>
              <option value="animation Character">animation Character</option>
             
            </select>
              </div>
            <div className="">
            <input
              className="p-2 m-2 w-75"
              {...register("description")}
              defaultValue={props?.toy?.description}
            />
            </div>
            <input className="submit-btn" value="Update toy" type="submit" />
          </form>
        </Modal.Body>
       
      </Modal>
    );
};

export default UpdateModal;