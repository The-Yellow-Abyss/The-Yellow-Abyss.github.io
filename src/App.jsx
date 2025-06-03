// my-app/src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreaturesPage from './pages/CreaturesPage';
import EnemiesPage from './pages/EnemiesPage';
import BossesPage from './pages/BossesPage';
import NPCPage from './pages/NPCPage';
import ItemsPage from './pages/ItemsPage';
import LorePage from './pages/LorePage';
import HelpPage from './pages/HelpPage';
import CodexPage from './pages/CodexPage';
import AdminPage from './admin/AdminPage';
import LoginPage from './admin/LoginPage';
import MechanicsPage from './pages/MechanicsPage';
import ScrollToTop from './components/ScrollToTop';

// import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <ScrollToTop />      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/creatures" element={<CreaturesPage />} />
        <Route path="/creatures/enemies" element={<EnemiesPage />} />
        <Route path="/creatures/bosses" element={<BossesPage />} />
        <Route path="/creatures/npc" element={<NPCPage />} />
        <Route path="/items" element={<ItemsPage />} />
        <Route path="/lore" element={<LorePage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/codex" element={<CodexPage />} />
        <Route path="/gamemechanics" element={<MechanicsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </Router>
  );
}

export default App;
