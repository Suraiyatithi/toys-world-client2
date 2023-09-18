import Banner from "../Pages/Home/Banner";
import Header from "../share/Header";
import Footer from "../share/Footer";
import Gallary from "../Pages/Home/Gallary";

import Categories from "../Pages/Home/Categories";
import Subscription from "../Pages/Home/Subscription";
import Toppest from "../Pages/Home/Toppest";
import '../App.css'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Littletitle from "../Pages/Home/Littletitle";
import Feature from "../Pages/Home/Feature";
import BestSell from "../Pages/Home/BestSell";

const Homelayout = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Duration of the animation (in ms)
        });
      }, []);
    return (
        <div>
           <Header></Header>
           <Banner></Banner>
           <Littletitle></Littletitle>
           <Feature></Feature>
           <Categories></Categories>
         
           <BestSell></BestSell>
           <Gallary></Gallary>
         
           <Toppest></Toppest>
           <Subscription></Subscription>
           <Footer></Footer>

        </div>
    );
};

export default Homelayout;