import React, { useEffect, useState } from "react";
import Toy from "./Toy";

const Toys = () => {

    const [toys, setToys] = useState([]);
  const [activeTab, setActiveTab] = useState("ScienceToys");

  useEffect(() => {
    fetch(`https://assignment11-server-rho.vercel.app/allToy/${activeTab}`)
      .then((res) => res.json())
      .then((result) => {
        setToys(result);
        // console.log(result);
      });
  }, [activeTab]);

  

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="bg-teal-100 pb-4">




<hr className="border border-teal-300 mt-2 " />
      <h1 className="title text-center p-5 text-3xl font-bold text-teal-600">Available Toys</h1>
      <div className="tab-container text-center ">
        <div className="text-center w-100 mx-auto flex items-center">
          <div className="tabs mx-auto ">
            {/* <div className="grid grid-cols-2"> */}
            <div
              onClick={() => handleTabClick("ScienceToys")}
              className={`tab tab2 tab3 ScienceToys ${
                activeTab == "ScienceToys" ? " bg-danger text-black" : ""
              }`}
            >
              <button className="text-2xl ">ScienceToys</button>
            </div>
            {/* </div> */}
            <div
              onClick={() => handleTabClick("MathToys")}
              className={`tab  tab2 tab3 MathToys ${
                activeTab == "MathToys" ? " bg-danger text-black" : ""
              }`}
            >
              <button className="text-2xl ">MathToys</button>
            </div>
            <div
              onClick={() => handleTabClick("EngineeringKits")}
              className={`tab  tab2 tab3 EngineeringKits ${
                activeTab == "EngineeringKits" ? " bg-danger text-black" : ""
              }`}
            >
            <button className="text-2xl ">EngineeringKits</button>

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