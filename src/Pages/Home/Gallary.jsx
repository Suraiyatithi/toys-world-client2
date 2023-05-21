import col1 from '../../assets/coll10.jpg';
import col2 from '../../assets/cola11.jpg'
import col3 from '../../assets/col7.jpg';
import col4 from '../../assets/col2.jpg'
import col5 from  '../../assets/col19.jpg'
import col6 from '../../assets/col8.jpg'

const Gallary = () => {
    return (
        <div className='container text-center mt-5 pt-3'>
          
<h3 style={{color:"darkmagenta"}} className='mt-3 text-center'>Explore our Gellary</h3>
<p><small>Here is some of our best toys collection.You will explore <br />more and more photo after fully visited our website and also you cn added photo on this </small></p>
<div className='row row-cols-sm-1 row-cols-lg-3 p-5'>

<div className="col">
<img className=' mb-3
' src={col1}/>

<img src={col2}/>
</div>




<div className="">
    
<img className='col mb-2' src={col3}/>


<img className='col mt-5' src={col4}/>
</div>


<div className="">
<img className='col mb-4' src={col5}/>

<img className='col mt-3' src={col6}/>
</div>



</div>



</div>
      
    );
};

export default Gallary;