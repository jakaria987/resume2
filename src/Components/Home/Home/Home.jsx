import Banner from "../Banner/Banner";
import ExtraSectionOne from "../ExtraSectionOne/ExtraSectionOne";
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
            <ExtraSectionOne></ExtraSectionOne>
        </div>
    );
};

export default Home;