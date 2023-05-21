import Swal from "sweetalert2";

const Subscription = () => {
    const handlesubscription=()=>{
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          })
    }
    return (
        <div>
            <div className='container text-center  mt-5 mb-5'>
<h4 style={{color:"darkmagenta"}} className='text-center m-3'>Add Subscription</h4>
<div>
<input className='p-2 w-50 border border-info rounded shadow-lg' type ='email' placeholder='Enter your Email'></input>
<button onClick={handlesubscription} style={{background:'LightSeaGreen'}} className='btn p-2'>Subscribe</button>
</div>

</div>
        </div>
    );
};

export default Subscription;