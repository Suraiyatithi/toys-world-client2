import Banner from "../Pages/Home/Banner";
import Header from "../share/Header";
import Footer from "../share/Footer";

import Categories from "../Pages/Home/Categories";



const Homelayout = () => {
    return (
        <div>
           <Header></Header>
           <Banner></Banner>
           <Categories></Categories>
           
           <Footer></Footer>

        </div>
    );
};

export default Homelayout;