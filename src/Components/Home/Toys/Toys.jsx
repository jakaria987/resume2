import React, { useEffect, useState } from "react";
import Toy from "./Toy";
// import "./Jobs.css";

const Toys = () => {

    const [toys, setToys] = useState([]);
  const [activeTab, setActiveTab] = useState("ScienceToys");

  useEffect(() => {
    fetch(`http://localhost:5000/allToys/${activeTab}`)
      .then((res) => res.json())
      .then((result) => {
        setToys(result);
        console.log(result);
      });
  }, [activeTab]);

  

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div>




      <h1 className="title text-center mt-5 p-5">Available Toys</h1>
      <div className="tab-container text-center">
        <div className="text-center w-100 m-auto">
          <div className="tabs d-flex justify-content-center align-items-center">
            <div
              onClick={() => handleTabClick("ScienceToys")}
              className={`tab  tab2 tab3 ScienceToys ${
                activeTab == "ScienceToys" ? " bg-danger text-black" : ""
              }`}
            >
              Science Toys
            </div>
            <div
              onClick={() => handleTabClick("MathToys")}
              className={`tab  tab2 tab3 MathToys ${
                activeTab == "MathToys" ? " bg-danger text-black" : ""
              }`}
            >
              Math Toys
            </div>
            <div
              onClick={() => handleTabClick("EngineeringKits")}
              className={`tab  tab2 tab3 EngineeringKits ${
                activeTab == "EngineeringKits" ? " bg-danger text-black" : ""
              }`}
            >
              Engineering Kits
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 ">
        {toys?.map((toy) => (
          <Toy toy={toy}></Toy>
        ))}
      </div>
    </div>
  );
};

export default Toys;