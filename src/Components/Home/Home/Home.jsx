import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import TabSystem from "../ShopCategory/ShopCategory";
import Toys from "../Toys/Toys";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            {/* <TabSystem></TabSystem> */}
            <Toys></Toys>
            
        </div>
    );
};

export default Home;