// HelpPage.jsx
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/style.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HelpPage = () => {
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

        <div className="main-content">
          <div className="breadcrumb">
            <Link to="/" className="breadcrumb-link">Home</Link> &gt;{' '}
            <Link to="/help" className="breadcrumb-current">Help</Link>
          </div>
          <div className="content-title">HELP PAGE</div>
          <div className="content-box">
            <form onSubmit={handleSubmit} className="bug-report-form">
              <label>
                Name:
                <input type="text" name="name" value={form.name} onChange={handleChange} required />
              </label>
              <label>
                Email:
                <input type="email" name="email" value={form.email} onChange={handleChange} required />
              </label>
              <label>
                Bug Title:
                <input type="text" name="title" value={form.title} onChange={handleChange} required />
              </label>
              <label>
                Description:
                <textarea name="description" value={form.description} onChange={handleChange} required />
              </label>
              <label>
                Steps to Reproduce:
                <textarea name="steps" value={form.steps} onChange={handleChange} required />
              </label>
              <label>
                Severity:
                <select name="severity" value={form.severity} onChange={handleChange}>
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                  <option value="Critical">Critical</option>
                </select>
              </label>
              <button type="submit">Submit Bug Report</button>
            </form>
            {showPopup && (
              <div className="popup-success-message">
                <span>Bug report saved and downloaded!</span>
                <button className="popup-close-btn" onClick={handleClosePopup} aria-label="Close">&times;</button>
              </div>
            )}
          </div>
          <div className="content-bottom"></div>
        </div>
        <Footer />
        <div className="right-sidebar" />
        <div className="content-bottom"></div>
      </div>
    </div>
  );
};

export default HelpPage;
