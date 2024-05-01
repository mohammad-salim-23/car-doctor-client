import About from "../About/About";
import Banner from "../Banner/Banner";
import OurProducts from "../OurProducts/OurProducts";
import Service from "../Service/Service";


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <About></About>
           <Service></Service>
           <OurProducts></OurProducts>
        </div>
    );
};

export default Home;