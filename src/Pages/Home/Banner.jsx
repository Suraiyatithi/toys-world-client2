import banner from '../../assets/banner3.png'
import bg from '../../assets/banner4.jpg'

const Banner = () => {
    return (
   <div className="ms-4">
         <div className="row row-cols-sm-1 row-cols-lg-2 container ms-5 m-5" style={{backgroundImage:`url(${bg})`}}>
          <div className="col mt-5 ps-5 pt-5  ">
            <h6 style={{color:"DarkMagenta"}} className='ps-2 fs-2 fw-bolder lh-base'>
                Best <br />Disney Toys <br />MarketPlace
            </h6>
           <div className="">
           <small className='ps-2'>We will provide you the you the most beautiful disney character that you are seeking for.Definitely we can say that you will be really satisfied with our services.best of luck and happy markettinf!</small>
           </div>
            <button className='btn text-white mt-4' style={{background:"LightSeaGreen"}}>Explore more</button>
            </div> 
            <div className="col">
                <img className='w-50 mt-3 mb-3 ' src={banner} alt="" /></div> 
        </div>
   </div>
    );
};

export default Banner;