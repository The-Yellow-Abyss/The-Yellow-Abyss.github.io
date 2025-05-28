const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// API per salvare enemies
app.post("/api/save-enemies", (req, res) => {
  const enemies = req.body;
  const filePath = path.join(__dirname, "..", "public", "data", "enemies.json");

  fs.writeFile(filePath, JSON.stringify(enemies, null, 2), (err) => {
    if (err) {
      console.error("Errore nel salvataggio enemies:", err);
      return res.status(500).send("Errore nel salvataggio enemies");
    }
    res.status(200).send("Enemies salvati con successo");
  });
});

// API per salvare bosses
app.post("/api/save-bosses", (req, res) => {
  const enemies = req.body;
  const filePath = path.join(__dirname, "..", "public", "data", "bosses.json");

  fs.writeFile(filePath, JSON.stringify(enemies, null, 2), (err) => {
    if (err) {
      console.error("Errore nel salvataggio bosses:", err);
      return res.status(500).send("Errore nel salvataggio enemies");
    }
    res.status(200).send("Bosses salvati con successo");
  });
});

// API per salvare items
app.post("/api/save-items", (req, res) => {
  const items = req.body;
  const filePath = path.join(__dirname, "..", "public", "data", "items.json");

  fs.writeFile(filePath, JSON.stringify(items, null, 2), (err) => {
    if (err) {
      console.error("Errore nel salvataggio items:", err);
      return res.status(500).send("Errore nel salvataggio items");
    }
    res.status(200).send("Items salvati con successo");
  });
});

// API per salvare lore
app.post("/api/save-lore", (req, res) => {
  const loreData = req.body;
  const filePath = path.join(__dirname, "..", "public", "data", "lore.json");

  fs.writeFile(filePath, JSON.stringify(loreData, null, 2), (err) => {
    if (err) {
      console.error("Errore nel salvataggio lore:", err);
      return res.status(500).send("Errore nel salvataggio lore");
    }
    res.status(200).send("Lore salvato con successo");
  });
});

// API per salvare il bestiario (Enemies, Creatures, Bosses in un unico file)
app.post("/api/save-bestiary", (req, res) => {
  const bestiaryData = req.body;
  const filePath = path.join(__dirname, "..", "public", "data", "bestiary.json");

  fs.writeFile(filePath, JSON.stringify(bestiaryData, null, 2), (err) => {
    if (err) {
      console.error("Errore nel salvataggio bestiary:", err);
      return res.status(500).send("Errore nel salvataggio bestiary");
    }
    res.status(200).send("Bestiary salvato con successo");
  });
});




app.listen(PORT, () => {
  console.log(`✅ Server avviato su http://localhost:${PORT}`);
});
