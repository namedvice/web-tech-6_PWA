import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {


  const [activeTab, setActiveTab] = useState(0);
  const [selectedTabName,setSelectedTabName] = useState('');

  function handleTabClick(tabIndex,tabName) {
    setActiveTab(tabIndex);
    setSelectedTabName(tabName)
  }
  if ("serviceWorker" in navigator) {
    // register service worker
    navigator.serviceWorker.register("service-worker.js");
  }


  return (
    <div className="App">
      <header className="App-header">

      </header>
      <div className="tab-bar">
        <button
            className={activeTab === 0 ? "tab-active" : "tab"}
            onClick={() => handleTabClick(0, "Главная")}
        >
          Главная
        </button>
        <button
            className={activeTab === 1 ? "tab-active" : "tab"}
            onClick={() => handleTabClick(1, "Услуги")}
        >
          Услуги
        </button>
        <button
            className={activeTab === 2 ? "tab-active" : "tab"}
            onClick={() => handleTabClick(2,"О нас")}
        >
          О нас
        </button>
        <button
            className={activeTab === 3 ? "tab-active" : "tab"}
            onClick={() => handleTabClick(3,"Контакты")}
        >
          Контакты
        </button>
      </div>
      <div className="main-text">
        Выбрано:
        {selectedTabName}
      </div>
    </div>
  );
}

export default App;
