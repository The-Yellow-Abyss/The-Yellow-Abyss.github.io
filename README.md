# The-Yellow-Abyss.github.io

## Descrizione

Manuale per avviare il sito e il server Admin del progetto **The Yellow Abyss**.

---

## Requisiti Preliminari

Prima di avviare il progetto, assicurati di avere installato:

* **Node.js** (consigliata la versione 16 o superiore)
* **npm** (Node Package Manager, incluso con Node.js)
* Un terminale o prompt dei comandi

---

## Come Installare Node.js e npm

### Windows

1. Vai sul sito ufficiale: [https://nodejs.org/](https://nodejs.org/)
2. Scarica e installa la versione LTS (Long-Term Support).
3. Verifica l’installazione aprendo il Prompt dei comandi e digitando:

   ```bash
   node -v
   npm -v
   ```

   Se vedi un numero di versione, l’installazione è andata a buon fine.

### MacOS

1. Usa Homebrew (se non ce l’hai, installalo da [https://brew.sh/](https://brew.sh/)):

   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```
2. Installa Node.js con Homebrew:

   ```bash
   brew install node
   ```
3. Verifica l’installazione:

   ```bash
   node -v
   npm -v
   ```

### Linux (Debian/Ubuntu)

1. Aggiorna i pacchetti e installa Node.js:

   ```bash
   sudo apt update
   sudo apt install nodejs npm
   ```
2. Verifica l’installazione:

   ```bash
   node -v
   npm -v
   ```

   *Se la versione di Node.js è troppo vecchia, si consiglia di installare tramite NodeSource ([https://github.com/nodesource/distributions](https://github.com/nodesource/distributions))*

---

## Installazione del progetto e delle dipendenze

1. Clona il repository o scarica il progetto:

   ```bash
   git clone https://github.com/The-Yellow-Abyss/The-Yellow-Abyss.github.io.git
   ```

   oppure scarica lo ZIP da GitHub e decomprimi.

2. Accedi alla cartella del progetto:

   ```bash
   cd The-Yellow-Abyss.github.io
   ```

3. Installa tutte le dipendenze necessarie (incluso React e Vite):

   ```bash
   npm install
   ```

4. Installa il pacchetto `react-icons`:

   ```bash
   npm install react-icons
   ```

---

## Avvio del progetto React con Vite

1. Nella cartella principale del progetto, avvia il server di sviluppo:

   ```bash
   npm run dev
   ```

2. Apri il browser e vai all’indirizzo indicato (di solito `http://localhost:3000` o `http://localhost:5173`).

3. Durante lo sviluppo, puoi premere `r` nel terminale per ricaricare il progetto senza chiudere il server.

---

## Avvio del server Admin


1. Dal terminale, spostati nella cartella server:

   ```bash
   cd server
   ```
   
![alt text](image.png)


2. Avvia il server:

   ```bash
   node server.js
   ```

![alt text](image-1.png)


3. usa react e segui i comandi di vite da terminale usa r per reload

![alt text](image-2.png)


4. Il server Admin dovrebbe essere attivo e pronto per l’uso.



---

## Risorse Utili

* [Documentazione di progetto (PDF)](The%20Yellow%20Abyss%20-%20PPM%20Documentazione_%20V_1.2.pdf)
* [Manuale utente per inizializzazione sito React (PDF)](Documentazione%20utente%20inizializazione%20sito%20The%20Yellow%20Abyss.pdf)
* Video panoramica del sito: [https://youtu.be/C2zgA6FvGac](https://youtu.be/C2zgA6FvGac)
* Video trailer del gioco: [https://youtu.be/ovdiGDEuoYU](https://youtu.be/ovdiGDEuoYU)

---

## Note Finali

* Per aggiornare il progetto, fermare il server con `Ctrl+C` e ripetere `npm run dev`.
* Assicurati che le porte di default usate da Vite e dal server Admin non siano bloccate dal firewall.
* Se incontri problemi, verifica le versioni di Node.js e npm e aggiornale se necessario.

---

