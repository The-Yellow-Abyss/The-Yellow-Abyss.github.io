import React, { useState, useEffect } from "react";
import "../TabStyles.css";

function ItemsTab() {
  const [items, setItems] = useState([]);
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [saving, setSaving] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("success");
  const [showToast, setShowToast] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/items.json")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Errore nel caricamento:", err);
        setLoading(false);
      });
  }, []);

  const handleChange = (index, field, value) => {
    const updated = [...items];
    updated[index][field] = value;
    setItems(updated);
  };

  const handleImageUpload = (index, file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      handleChange(index, "icon", reader.result);
    };
    reader.readAsDataURL(file);
  };

  const showToastMessage = (message, type = "success") => {
    setToastMessage(message);
    setToastType(type);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 5000);
  };

  const saveToServer = async () => {
    setSaving(true);
    try {
      const response = await fetch("http://localhost:3001/api/save-items", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(items),
      });

      if (response.ok) {
        showToastMessage("Modifiche salvate con successo!", "success");
      } else {
        throw new Error("Errore nel salvataggio");
      }
    } catch (error) {
      console.error(error);
      showToastMessage("Errore durante il salvataggio.", "error");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="loading-message">Caricamento dei contenuti in corso...</div>;
  }

  const currentItem = items[activeItemIndex];

  return (
    <div className="tab-content">
      {/* Sotto-tab per ogni item */}
      <div className="sub-tabs">
        {items.map((item, index) => (
          <button
            key={index}
            className={`sub-tab-button ${index === activeItemIndex ? "active" : ""}`}
            onClick={() => setActiveItemIndex(index)}
          >
            {item.name || `Oggetto ${index + 1}`}
          </button>
        ))}
      </div>

      {/* Dettagli del singolo item */}
      <div className="card">
        <div className="form-group">
          <label>Nome Oggetto</label>
          <input
            type="text"
            value={currentItem.name}
            onChange={(e) => handleChange(activeItemIndex, "name", e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Descrizione</label>
          <textarea
            value={currentItem.description}
            onChange={(e) => handleChange(activeItemIndex, "description", e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Tipo</label>
          <input
            type="text"
            value={currentItem.type}
            onChange={(e) => handleChange(activeItemIndex, "type", e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Icona</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleImageUpload(activeItemIndex, e.target.files[0])}
          />
          {currentItem.icon && (
            <div className="preview">
              <img src={currentItem.icon} alt="anteprima icona" />
            </div>
          )}
        </div>
      </div>

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

export default ItemsTab;
