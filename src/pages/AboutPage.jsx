// AboutPage.jsx
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/style.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import siteMap from '../assets/site-map.png';

const AboutPage = () => {
  // State for form fields
  const [form, setForm] = useState({
    name: '',
    email: '',
    title: '',
    description: '',
    steps: '',
    severity: 'Medium',
  });
  const [submitted, setSubmitted] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const popupTimeout = useRef(null);

  // Show popup for 5 seconds or until closed
  useEffect(() => {
    if (submitted) {
      setShowPopup(true);
      if (popupTimeout.current) clearTimeout(popupTimeout.current);
      popupTimeout.current = setTimeout(() => {
        setShowPopup(false);
        setSubmitted(false);
      }, 5000);
    }
    return () => {
      if (popupTimeout.current) clearTimeout(popupTimeout.current);
    };
  }, [submitted]);

  const handleClosePopup = () => {
    setShowPopup(false);
    setSubmitted(false);
    if (popupTimeout.current) clearTimeout(popupTimeout.current);
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const bugReport = {
      ...form,
      date: new Date().toISOString(),
    };
    const json = JSON.stringify(bugReport, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `bug-report-${Date.now()}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    setSubmitted(true);
    setForm({ name: '', email: '', title: '', description: '', steps: '', severity: 'Medium' });
  };

  return (
    <div>
      <Navbar />
      <div className="main">
        <div className="left-sidebar" />

        <div className="main-content about-vertical-layout about-hide-bottom">
          <div className="breadcrumb">
            <Link to="/" className="breadcrumb-link">Home</Link> &gt;{' '}
            <Link to="/about" className="breadcrumb-current">About</Link>
          </div>
          <div className="content-title">ABOUT PAGE</div>
          <div className="about-vertical-layout">
            <div className="about-video-horizontal-placeholder" style={{ width: '560px', height: '315px', maxWidth: '90vw', maxHeight: '50vh', background: '#111', borderRadius: '18px', boxShadow: '0 4px 24px 0 rgba(0,0,0,0.18)', margin: '0 auto 2.5vh auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {/* Video Placeholder (16:9 ratio, same as HomePage) */}
            </div>
            <div className="about-image-container site-map-bg-container">
              <img
                src={siteMap}
                alt="Site Map"
                className="site-map-image"
              />
              <div className="site-map-buttons">
                <Link to="/" className="site-map-btn">Home</Link>
                <Link to="/creatures" className="site-map-btn">Creatures</Link>
                <Link to="/lore" className="site-map-btn">Lore</Link>
                <Link to="/codex" className="site-map-btn">Codex</Link>
                <Link to="/items" className="site-map-btn">Items</Link>
                <Link to="/gamemechanics" className="site-map-btn">Game</Link>
              </div>
            </div>
          </div>
        </div>
        <Footer />
        <div className="right-sidebar" />
        <div className="content-bottom"></div>
      </div>
    </div>
  );
};

export default AboutPage;
