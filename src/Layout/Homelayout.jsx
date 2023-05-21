import Banner from "../Pages/Home/Banner";
import Header from "../share/Header";
import Footer from "../share/Footer";
import Gallary from "../Pages/Home/Gallary";

import Categories from "../Pages/Home/Categories";
import Subscription from "../Pages/Home/Subscription";
import Toppest from "../Pages/Home/Toppest";



const Homelayout = () => {
    return (
        <div>
           <Header></Header>
           <Banner></Banner>
           <Categories></Categories>
           <Gallary></Gallary>
         
           <Toppest></Toppest>
           <Subscription></Subscription>
           <Footer></Footer>

        </div>
    );
};

export default Homelayout;