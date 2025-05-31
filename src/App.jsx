// my-app/src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BestiaryPage from './pages/BestiaryPage';
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
        <Route path="/bestiary" element={<BestiaryPage />} />
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
