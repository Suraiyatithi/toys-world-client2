
import { Outlet } from 'react-router-dom';
import Header from '../share/Header';

//  style={{backgroundImage:`url(${bg})`}}
const LoginLayOut = () => {
    return (
        <div>
            <Header></Header>
           <Outlet></Outlet> 
           
        </div>
    );
};

export default LoginLayOut;