
import { Outlet } from 'react-router-dom';
import Header from '../share/Header';
import bg from '../assets/login2.jpg'
import Footer from '../share/Footer';


//  style={{backgroundImage:`url(${bg})`}}
const LoginLayOut = () => {
    return (
        <div style={{backgroundImage:`url(${bg})`}}>
            <Header></Header>
           <Outlet></Outlet> 
           <Footer></Footer>
           
        </div>
    );
};

export default LoginLayOut;