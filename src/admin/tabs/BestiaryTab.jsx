import React, { useState, useEffect } from "react";
import "../TabStyles.css";

function BestiaryTab() {
  const [bestiary, setBestiary] = useState([]);
  const [activeCategory, setActiveCategory] = useState("Enemy");
  const [activeIndex, setActiveIndex] = useState(0);
  const [saving, setSaving] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("success");
  const [showToast, setShowToast] = useState(false);
  const [loading, setLoading] = useState(true);
  const [newItem, setNewItem] = useState({
    name: "",
    category: "Enemy",
    description: "",
  });

  const categories = ["Enemy", "Creature", "Boss"];

  useEffect(() => {
    fetch("/data/bestiary.json")
      .then((res) => res.json())
      .then((data) => {
        setBestiary(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Errore nel caricamento:", err);
        setLoading(false);
      });
  }, []);

  const filtered = bestiary.filter((item) => item.category === activeCategory);
  const activeItem = filtered[activeIndex] || {};

  const handleChange = (index, field, value) => {
    const itemIndex = bestiary.findIndex(
      (item) => item.name === filtered[index].name
    );
    const updated = [...bestiary];
    updated[itemIndex][field] = value;
    setBestiary(updated);
  };

  const handleImageUpload = (index, file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      handleChange(index, "image", reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleStatChange = (key, value) => {
    const itemIndex = bestiary.findIndex(
      (item) => item.name === activeItem.name
    );
    const updated = [...bestiary];
    updated[itemIndex].statistics[key] = parseInt(value) || 0;
    setBestiary(updated);
  };

  const addStat = () => {
    const key = prompt("Nome della statistica:");
    if (!key) return;
    const itemIndex = bestiary.findIndex(
      (item) => item.name === activeItem.name
    );
    const updated = [...bestiary];
    updated[itemIndex].statistics[key] = 0;
    setBestiary(updated);
  };

  const removeStat = (key) => {
    const itemIndex = bestiary.findIndex(
      (item) => item.name === activeItem.name
    );
    const updated = [...bestiary];
    delete updated[itemIndex].statistics[key];
    setBestiary(updated);
  };

  const handleSkillChange = (i, value) => {
    const itemIndex = bestiary.findIndex(
      (item) => item.name === activeItem.name
    );
    const updated = [...bestiary];
    updated[itemIndex].skills[i] = value;
    setBestiary(updated);
  };

  const addSkill = () => {
    const itemIndex = bestiary.findIndex(
      (item) => item.name === activeItem.name
    );
    const updated = [...bestiary];
    updated[itemIndex].skills.push("");
    setBestiary(updated);
  };

  const removeSkill = (i) => {
    const itemIndex = bestiary.findIndex(
      (item) => item.name === activeItem.name
    );
    const updated = [...bestiary];
    updated[itemIndex].skills.splice(i, 1);
    setBestiary(updated);
  };

  const saveToServer = async () => {
    setSaving(true);
    try {
      const response = await fetch("http://localhost:3001/api/save-bestiary", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bestiary),
      });

      if (response.ok) {
        showToastMessage("Modifiche salvate con successo!", "success");
      } else {
        throw new Error("Errore nel salvataggio");
      }
    } catch (err) {
      console.error(err);
      showToastMessage("Errore durante il salvataggio.", "error");
    } finally {
      setSaving(false);
    }
  };

  const showToastMessage = (message, type = "success") => {
    setToastMessage(message);
    setToastType(type);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 5000);
  };

  const addNewItem = () => {
    const newEntry = {
      ...newItem,
      image: "",
      statistics: {},
      skills: [],
    };

    const updated = [...bestiary, newEntry];
    setBestiary(updated);

    const newFiltered = updated.filter((item) => item.category === newItem.category);

    setActiveCategory(newItem.category);
    setActiveIndex(newFiltered.length - 1);

    setNewItem({
      name: "",
      category: "Enemy",
      description: "",
    });

    showToastMessage("Nuova creatura aggiunta!", "success");
  };

  if (loading) {
    return (
      <div className="loading-message">
        Caricamento dei contenuti in corso...
      </div>
    );
  }

  return (
    <div className="tab-content">

      {/* Form aggiunta nuova creatura */}
      <div className="new-entry-form">
        <h3>Nuovo Personaggio Bestiario</h3>
        <div className="form-group">
          <label>Nome</label>
          <input
            type="text"
            value={newItem.name}
            onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Categoria</label>
          <select
            value={newItem.category}
            onChange={(e) =>
              setNewItem({ ...newItem, category: e.target.value })
            }
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Descrizione</label>
          <textarea
            value={newItem.description}
            onChange={(e) =>
              setNewItem({ ...newItem, description: e.target.value })
            }
          />
        </div>
        <button
          className="btn-add"
          onClick={() => {
            addNewItem();
            saveToServer();
        }}
          disabled={!newItem.name.trim()}
        >
          + Aggiungi personaggio al bestiario
        </button>
      </div>

      {/* Tabs categoria */}
      <div className="category-tabs">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`tab-button ${cat === activeCategory ? "active" : ""}`}
            onClick={() => {
              setActiveCategory(cat);
              setActiveIndex(0);
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Sottotabs */}
      <div className="sub-tabs">
        {filtered.map((item, index) => (
          <button
            key={item.name + index}
            className={`sub-tab-button ${index === activeIndex ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
          >
            {item.name || `${activeCategory} ${index + 1}`}
          </button>
        ))}
      </div>

      {activeItem && (
        <div className="card">
          <div className="form-group">
            <label>Nome</label>
            <input
              type="text"
              value={activeItem.name || ""}
              onChange={(e) =>
                handleChange(activeIndex, "name", e.target.value)
              }
            />
          </div>

          <div className="form-group">
            <label>Descrizione</label>
            <textarea
              value={activeItem.description || ""}
              onChange={(e) =>
                handleChange(activeIndex, "description", e.target.value)
              }
            />
          </div>

          <div className="form-group">
            <label>Immagine</label>
            {activeItem.image && (
              <div className="preview">
                <img src={activeItem.image} alt="anteprima" />
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                handleImageUpload(activeIndex, e.target.files[0])
              }
            />
          </div>

          {/* Statistiche dinamiche */}
          <div className="form-group">
            <label>Statistiche</label>
            {activeItem.statistics &&
              Object.entries(activeItem.statistics).map(([key, value]) => (
                <div key={key} className="dynamic-input">
                  <input
                    type="text"
                    value={key}
                    readOnly
                    disabled
                    className="readonly-label"
                  />
                  <input
                    type="number"
                    value={value}
                    onChange={(e) => handleStatChange(key, e.target.value)}
                  />
                  <button onClick={() => removeStat(key)}>✕</button>
                </div>
              ))}
            <button className="add-button" onClick={addStat}>+ Aggiungi Statistica</button>
          </div>

          {/* Skills dinamiche */}
          <div className="form-group">
            <label>Abilità (Skills)</label>
            {activeItem.skills &&
              activeItem.skills.map((skill, i) => (
                <div key={i} className="dynamic-input">
                  <input
                    type="text"
                    value={skill}
                    onChange={(e) => handleSkillChange(i, e.target.value)}
                  />
                  <button onClick={() => removeSkill(i)}>✕</button>
                </div>
              ))}
            <button className="add-button" onClick={addSkill}>+ Aggiungi Skill</button>
          </div>
        </div>
      )}

      <button className="btn-save" onClick={saveToServer} disabled={saving}>
        {saving ? "Salvataggio..." : "Salva modifiche"}
      </button>

      {showToast && (
        <div className={`toast-notification ${toastType}`}>
          {toastMessage}
        </div>
      )}
    </div>
  );
}

export default BestiaryTab;
