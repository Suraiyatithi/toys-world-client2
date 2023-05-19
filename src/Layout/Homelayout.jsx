import Banner from "../Pages/Home/Banner";
import Header from "../share/Header";
import Footer from "../share/Footer";
import Category from "../Pages/Home/Category";



const Homelayout = () => {
    return (
        <div>
           <Header></Header>
           <Banner></Banner>
           <Category></Category>
           <Footer></Footer>

        </div>
    );
};

export default Homelayout;