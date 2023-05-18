import banner from '../../../assets/Banner.jpg'
import './Banner.css'
const Banner = () => {
  return (
    <div>
        <h3 className="text-4xl text-teal-900 font-bold text-center bg-teal-100 pt-12">Welcome to Our ToyToy Shop</h3>
    <div className="hero min-h-screen bg-teal-100">
        
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={banner}
          className="max-w-lg banner rounded-lg shadow-2xl"
        />
        <div>
          
          <p className="py-6 text-xl font-bold">
          We started Blithe Spirit Limited in 2007 to sell educational toys and games that were hard to find in Ireland on our website www.blithe.ie. <br /><br /> Our children are now young adults but when they were growing up we saw the value in combining play with learning. <br /><br />
          We discover the secret to perfectly developed children and family/work life balance. Well no not really. <br /><br /> indoor and outdoor use, including picnic tables, sand boxes & kitchens. View Little Tikes products here.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Banner;
