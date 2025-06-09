// my-app/src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import HomePage from './pages/HomePage';
import HelpPage from './pages/HelpPage';
import MechanicsPage from './pages/MechanicsPage';


import CreaturesPage from './pages/CreaturesPage';
import EnemiesPage from './pages/EnemiesPage';
import BossesPage from './pages/BossesPage';
import NPCPage from './pages/NPCPage';
import ItemsPage from './pages/ItemsPage';

import ItemDetailPage from './pages/ItemDetailPage'; 
import EnemyDetailPage from './pages/EnemyDetailPage'; 
import BossDetailPage from './pages/BossDetailPage'; 
import NPCDetailPage from './pages/NPCDetailPage'; 

import LorePage from './pages/LorePage';
import CodexPage from './pages/CodexPage';

import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';


import GoogleTranslate from './components/GoogleTranslate';
import AboutPage from './pages/AboutPage'; // Importazione mancante di AboutPage
import ContactPage from './pages/ContactPage';

function App() {

  return (
    <Router>
      <ScrollToTop />      

      {/* Inserisco il widget Google Translate */}
      <GoogleTranslate />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/creatures" element={<CreaturesPage />} />
        <Route path="/creatures/enemies" element={<EnemiesPage />} />
        <Route path="/creatures/enemies/:enemyName" element={<EnemyDetailPage />} />
        <Route path="/creatures/bosses" element={<BossesPage />} />
        <Route path="/creatures/bosses/:bossName" element={<BossDetailPage />} />
        <Route path="/creatures/npc" element={<NPCPage />} />
        <Route path="/creatures/npc/:npcName" element={<NPCDetailPage />} />
        <Route path="/items" element={<ItemsPage />} />
        <Route path="/items/:itemName" element={<ItemDetailPage />} />
        <Route path="/lore" element={<LorePage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/codex" element={<CodexPage />} />
        <Route path="/gamemechanics" element={<MechanicsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
