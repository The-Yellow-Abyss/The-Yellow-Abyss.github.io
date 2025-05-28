// src/AdminPage.jsx
import React, { useState } from "react";
import EnemiesTab from "./tabs/EnemiesTab";
import ItemsTab from "./tabs/ItemsTab";
import LoreTab from "./tabs/LoreTab";
import "./styles/AdminPage.css";
import BestiaryTab from "./tabs/BestiaryTab";

const tabs = [
  { key: "enemies", label: "Bestiario", component: <BestiaryTab /> },
  { key: "items", label: "Oggetti", component: <ItemsTab /> },
  { key: "lore", label: "Lore", component: <LoreTab /> },
];


function AdminPage() {
  const [activeTab, setActiveTab] = useState("enemies");

  return (
    <div className="admin-container">
      <nav className="navbar">
        <div className="navbar-title">Admin Panel</div>
        <div className="navbar-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              className={`tab-button ${activeTab === tab.key ? "active" : ""}`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </nav>
      <main className="admin-main-content">
        {tabs.find((tab) => tab.key === activeTab)?.component}
      </main>
    </div>
  );
}

export default AdminPage;
