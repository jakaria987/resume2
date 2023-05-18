import { useState } from 'react';
import MathToys from './MathToys';
import LanguageToys from './LanguageToys';
import ScienceToys from './ScienceToys';

const TabSystem = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 0:
        return <MathToys />;
      case 1:
        return <LanguageToys />;
      case 2:
        return <ScienceToys />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="tab-container">
        <div
          className={`tab ${activeTab === 0 ? 'active' : ''}`}
          onClick={() => handleTabClick(0)}
        >
          Math Toys
        </div>
        <div
          className={`tab ${activeTab === 1 ? 'active' : ''}`}
          onClick={() => handleTabClick(1)}
        >
          Language Toys
        </div>
        <div
          className={`tab ${activeTab === 2 ? 'active' : ''}`}
          onClick={() => handleTabClick(2)}
        >
          Science Toys
        </div>
      </div>
      <div className="tab-content">{renderTabContent()}</div>
    </div>
  );
};

export default TabSystem;
