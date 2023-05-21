
import { Link } from 'react-router-dom';
import bg from '../assets/coove3r.jpg'
import logo from '../assets/magicalland.jpg'

const Footer = () => {
    return (
        <div  className='text-white pt-5 pb-5' style={{backgroundImage:`url(${bg})`}}>
          <h4 className='text-center mt-3 mb-3'>About Us</h4>
          <div className="row row-cols-sm-1 row-cols-lg-3 mt-4">
          <div className="">
            <img className='w-50' src={logo} alt="" />
            <h5 style={{color:"brown"}} className='mt-3'>Magical Land</h5>

          </div>
             
            <div className="">
            <h6>Contact us</h6>
            <p>Phone:+880178962499</p>
            <p><small>Email:<Link to='magicalland@gmail.com'>magicalland@gmail.com</Link></small></p>
            <p><small>google:<Link to='google.com'>www.google.magicalland.com</Link></small></p>
            </div>
            <div className=""></div>
           
          </div>
        </div>
    );
};

export default Footer;