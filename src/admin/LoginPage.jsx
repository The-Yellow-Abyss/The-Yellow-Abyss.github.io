// src/admin/LoginPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./styles/LoginPage.css";

function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Reindirizza alla pagina Admin
    navigate("/admin");
  };

  return (
    <div className="login-container">
      <h1>Welcome to Foggia!</h1>
      <p>
        <p>⠀⠀⠀⠀⠀⠀⠀ ⣠⣤⣤⣤⣤⣤⣄⡀⠀⠀</p>
        <p>⠀⠀⠀⠀⠀⢰⡿⠋⠁⠀⠀⠈⠉⠙⠻⣷⣄⠀</p>
        <p>⠀⠀⠀⠀⢀⣿⠇⠀⢀⣴⣶⡾⠿⠿⠿⢿⣿⣦⡀⠀</p>
        <p>⠀⠀⣀⣀⣸⡿⠀⠀⢸⣿⣇⠀⠀⠀⠀⠀⠀⠙⣷⡀⠀</p>
        <p>⠀⣾⡟⠛⣿⡇⠀⠀⢸⣿⣿⣷⣤⣤⣤⣤⣶⣶⣿⠇⠀⠀</p>
        <p>⢀⣿⠀⢀⣿⡇⠀⠀⠀⠻⢿⣿⣿⣿⣿⣿⠿⣿⡏⠀⠀⠀⠀⢴⣶⣶⣿⣿⣿⣆</p>
        <p>⢸⣿⠀⢸⣿⡇⠀⠀⠀⠀⠀⠈⠉⠁⠀⠀⠀⣿⡇⣀⣠⣴⣾⣮⣝⠿⠿⠿⣻⡟</p>
        <p>⢸⣿⠀⠘⣿⡇⠀⠀⠀⠀⠀⠀⠀⣠⣶⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠁⠉⠀</p>
        <p>⠸⣿⠀⠀⣿⡇⠀⠀⠀⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠉⠀</p>
        <p>⠀⠻⣷⣶⣿⣇⠀⠀⠀⢠⣼⣿⣿⣿⣿⣿⣿⣿⣛⣛⣻⠉⠁⠀</p>
        <p>⠀⠀⠀⠀⢸⣿⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀</p>
        <p>⠀⠀⠀⠀⢸⣿⣀⣀⣀⣼⡿⢿⣿⣿⣿⣿⣿⡿⣿⣿⡿⠀</p>
        <p>⠀⠀⠀⠀⠀⠙⠛⠛⠛⠋⠁⠀⠙⠻⠿⠟⠋⠑⠛⠋⠀⠀</p>
⠀⠀⠀⠀⠀⠀⠀
      </p>
      <button onClick={handleLogin}>Go to admin Panel ඞ</button>
    </div>
  );
}

export default LoginPage;
