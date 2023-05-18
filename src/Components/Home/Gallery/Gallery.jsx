import gallery1 from "../../../assets/g1.jpg";
import gallery2 from "../../../assets/g2.jpg";
import gallery3 from "../../../assets/g3.jpg";
import gallery4 from "../../../assets/g4.jpg";
import gallery5 from "../../../assets/g5.jpg";

const Gallery = () => {
  return (
    <div className="bg-teal-100">
        <h2 className="font-bold text-3xl text-center mb-6 text-teal-900">Here are some pictures from our shop gallery</h2>
      <div className="carousel w-7/12 max-h-96 mx-auto  pb-4">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={gallery1} className="w-full rounded-lg" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 rounded-lg">
            <a href="#slide5" className="btn btn-square">
              ❮
            </a>
            <a href="#slide2" className="btn btn-square">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={gallery2} className="w-full rounded-lg" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 rounded-lg">
            <a href="#slide1" className="btn btn-square">
              ❮
            </a>
            <a href="#slide3" className="btn btn-square">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={gallery3} className="w-full rounded-lg" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 rounded-lg">
            <a href="#slide2" className="btn btn-square">
              ❮
            </a>
            <a href="#slide4" className="btn btn-square">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={gallery4} className="w-full rounded-lg" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 rounded-lg">
            <a href="#slide3" className="btn btn-square">
              ❮
            </a>
            <a href="#slide5" className="btn btn-square">
              ❯
            </a>
          </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full">
          <img src={gallery5} className="w-full rounded-lg" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 rounded-lg">
            <a href="#slide4" className="btn btn-square">
              ❮
            </a>
            <a href="#slide1" className="btn btn-square">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
