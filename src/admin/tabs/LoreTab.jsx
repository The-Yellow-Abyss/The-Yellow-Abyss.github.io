// src/tabs/LoreTab.jsx
import React, { useState, useEffect } from "react";
import "../TabStyles.css";

function LoreTab() {
  const [entries, setEntries] = useState([]);
  const [saving, setSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/lore.json")
      .then((res) => res.json())
        .then((data) => {
        setEntries(data);
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
    const updated = [...entries];
    updated[index][field] = value;
    setEntries(updated);
  };

  const saveToServer = async () => {
    setSaving(true);
    setSaveStatus("");

    try {
      const response = await fetch("http://localhost:3001/api/save-lore", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(entries),
      });

      if (response.ok) {
        setSaveStatus("Modifiche salvate con successo!");
      } else {
        throw new Error("Errore nel salvataggio");
      }
    } catch (error) {
      console.error(error);
      setSaveStatus("Errore durante il salvataggio.");
    } finally {
      setSaving(false);
      setTimeout(() => setSaveStatus(""), 3000);
    }
  };

  return (
    <div className="tab-content">
      {entries.map((entry, index) => (
        <div key={index} className="card">
          <div className="form-group">
            <label>Titolo</label>
            <input
              type="text"
              value={entry.title}
              onChange={(e) => handleChange(index, "title", e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Testo</label>
            <textarea
              rows={4}
              value={entry.content}
              onChange={(e) => handleChange(index, "content", e.target.value)}
            />
          </div>
        </div>
      ))}
      <button className="btn-save" onClick={saveToServer} disabled={saving}>
        {saving ? "Salvataggio..." : "Salva modifiche"}
      </button>
      {saveStatus && <p className="save-status">{saveStatus}</p>}
    </div>
  );
}

export default LoreTab;
