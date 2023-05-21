import Banner from "../Banner/Banner";
import ExtraSectionOne from "../ExtraSectionOne/ExtraSectionOne";
import ExtraSectionTwo from "../ExtraSectionTwo/ExtraSectionTwo";
import Gallery from "../Gallery/Gallery";
import Toys from "../Toys/Toys";
import Xtraa from "../xtraa/Xtraa";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            {/* <TabSystem></TabSystem> */}
            <Toys></Toys>
            <ExtraSectionOne></ExtraSectionOne>
            <ExtraSectionTwo></ExtraSectionTwo>
            <Xtraa></Xtraa>
        </div>
    );
};

export default Home;