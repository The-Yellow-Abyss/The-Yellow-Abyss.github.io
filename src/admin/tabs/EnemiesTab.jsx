import React, { useState, useEffect } from "react";
import "../TabStyles.css";

function EnemiesTab() {
  const [enemies, setEnemies] = useState([]);
  const [activeEnemyIndex, setActiveEnemyIndex] = useState(0);
  const [saving, setSaving] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("success");
  const [showToast, setShowToast] = useState(false);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    fetch("/data/enemies.json")
        .then((res) => res.json())
        .then((data) => {
        setEnemies(data);
        setLoading(false);
        })
        .catch((err) => {
        console.error("Errore nel caricamento:", err);
        setLoading(false);
        });
    }, []);

    if (loading) {
        return <div className="loading-message">Caricamento dei contenuti in corso...</div>;
    }


  const handleChange = (index, field, value) => {
    const updated = [...enemies];
    updated[index][field] = value;
    setEnemies(updated);
  };

  const handleImageUpload = (index, file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      handleChange(index, "image", reader.result);
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
      const response = await fetch("http://localhost:3001/api/save-enemies", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(enemies),
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

  const activeEnemy = enemies[activeEnemyIndex];

  return (
    
    <div className="tab-content">
      {/* Mini Tabs */}
      <div className="sub-tabs">
        {enemies.map((enemy, index) => (
          <button
            key={index}
            className={`sub-tab-button ${index === activeEnemyIndex ? "active" : ""}`}
            onClick={() => setActiveEnemyIndex(index)}
          >
            {enemy.name || `Nemico ${index + 1}`}
          </button>
        ))}
      </div>

      {activeEnemy && (
        <div className="card">
          <div className="form-group">
            <label>Nome</label>
            <input
              type="text"
              value={activeEnemy.name}
              onChange={(e) => handleChange(activeEnemyIndex, "name", e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Descrizione</label>
            <textarea
              value={activeEnemy.description}
              onChange={(e) =>
                handleChange(activeEnemyIndex, "description", e.target.value)
              }
            />
          </div>
          <div className="form-group">
            <label>Immagine</label>
            {activeEnemy.image && (
              <div className="preview">
                <img src={activeEnemy.image} alt="anteprima" />
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageUpload(activeEnemyIndex, e.target.files[0])}
            />
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

export default EnemiesTab;
