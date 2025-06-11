// ContactPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/style.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ContactPage = () => {
  return (
    <div>
      <Navbar />
      <div className="main">
        <div className="left-sidebar" />
        <div className="main-content about-vertical-layout about-hide-bottom">
          <div className="breadcrumb">
            <Link to="/" className="breadcrumb-link">Home</Link> &gt;{' '}
            <Link to="/contact" className="breadcrumb-current">Contatti</Link>
          </div>
          <div className="content-title">CONTATTI</div>
          <div className="content-title"></div>
          <div className="about-vertical-layout">
            <div style={{color: '#fff', fontSize: '1.2rem', textAlign: 'center', maxWidth: 600, margin: '0 auto'}}>
              <p>Per domande, feedback, o per conoscere i creator, ecco i contatti del team:</p>
              <ul style={{listStyle: 'none', padding: 0, margin: '1.5rem 0', fontSize: '1.1rem'}}>
                <li><strong>Prudenzano Cristian Pio</strong> <br /><span style={{color: '#ffe066'}}>c.prudenzano@studenti.uniba.it</span></li>
                <li style={{marginTop: '1.2rem'}}><strong>Mongelli Marco</strong> <br /><span style={{color: '#ffe066'}}>m.mongelli75@studenti.uniba.it</span></li>
                <li style={{marginTop: '1.2rem'}}><strong>Maggio Gianluca</strong> <br /><span style={{color: '#ffe066'}}>g.maggio21@studenti.uniba.it</span></li>
              </ul>
              
            </div>
          </div>
          <div className="content-bottom"><p>Oppure usa la pagina Help per segnalare un problema.</p></div>
        </div>
        <Footer />
        <div className="right-sidebar" />
        <div className="content-bottom"></div>
      </div>
    </div>
  );
};

export default ContactPage;
