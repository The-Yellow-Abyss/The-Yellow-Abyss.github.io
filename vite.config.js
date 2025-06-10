import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Configurazione di Vite per cambiare la porta
export default defineConfig({
  server: {
    port: 3000, // Imposta la porta su 3000
  },
  plugins: [react()],
  base:'/',
});
