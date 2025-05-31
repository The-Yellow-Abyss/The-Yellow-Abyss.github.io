// src/codex/bestiary.js
import rattoNormale from '../codex/enemies/ratto_normale.png';
import rattoInfetto from '../codex/enemies/ratto_infetto.png';
import ragnoVedetta from '../codex/enemies/ragno_vedetta.png';
import ragnoEmatofago from '../codex/enemies/ragno_ematofago.png';
import ragnoCarogna from '../codex/enemies/ragno_carogna.png';
import ragnoSilente from '../codex/enemies/ragno_silente.png';
import pipistrelloCieco from '../codex/enemies/pipistrello_cieco.png';
import pipistrelloFamelico from '../codex/enemies/pipistrello_famelico.png';
import blattaOscura from '../codex/enemies/blatta_oscura.png';
import blattaSerrata from '../codex/enemies/blatta_serrata.png';
import blattaRancida from '../codex/enemies/blatta_rancida.png';
import medicoPestilenza from '../codex/enemies/medico_della_pestilenza.png';
import reDeiRatti from '../codex/enemies/re_dei_ratti_nemico.png';
import monaco from '../codex/enemies/monaco_deforme.png';

export const enemies = [
  {
    title: "Medico della pestilenza",
    description: "Medici provenienti da tutto il continente che, come Maria dalle Donne, sono giunti per studiare la pestilenza. Non riuscendo a resistere agli effetti incomprensibili della malattia, sono diventati creature grottesche e violente. Sembrano capaci di controllare i ratti mutati dalla pestilenza.",
    image: medicoPestilenza,
  },
  {
    title: "Re dei ratti",
    description: "Un groviglio di ratti legati per la coda, mutati dalla pestilenza. Queste abominazioni sembrano esercitare un'influenza innaturale sugli altri ratti infetti, guidandoli in attacchi coordinati.",
    image: reDeiRatti,
  },
  {
    title: "Monaco",
    description: "Monaci cappuccini di Elealia, un tempo accompagnati dall'esercito papale del ducato di Gheya per purificare le catacombe. Ormai tutti colpiti dalla pestilenza, hanno assunto forme mostruose, perfino più disturbanti dei medici della peste.",
    image: monaco,
  },
  {
    title: "Ratto delle cantine",
    description: "Un ratto comune delle fogne, reso più aggressivo dalla pestilenza. I suoi attacchi sono caotici ma prevedibili.",
    image: rattoNormale,
  },
  {
    title: "Ratto del flagello",
    description: "Ricoperto di pustole pulsanti, questo ratto è stato profondamente deformato dalla pestilenza. È feroce, imprevedibile e porta con sé un'infezione che si diffonde rapidamente.",
    image: rattoInfetto,
  },
  {
    title: "Ragno Vedetta",
    description: "La sua presenza segnala l'inizio di un'area infestata. Il suo veleno è letale e agisce in pochi secondi. È veloce, silenzioso e difficile da colpire.",
    image: ragnoVedetta,
  },
  {
    title: "Ragno Ematofago",
    description: "Si nutre del sangue delle sue vittime ancora vive. Il suo morso non è letale all'istante, ma induce febbre e dissanguamento rapido.",
    image: ragnoEmatofago,
  },
  {
    title: "Ragno Carogna",
    description: "Caccia solo su corpi agonizzanti. Il suo veleno distrugge lentamente i tessuti, prolungando il dolore delle vittime.",
    image: ragnoCarogna,
  },
  {
    title: "Ragno Silente",
    description: "Creatura comune nelle zone buie delle catacombe. Non particolarmente pericoloso se affrontato singolarmente, ma letale in gruppo.",
    image: ragnoSilente,
  },
  {
    title: "Blatta Oscura",
    description: "Insetto comune mutato. Attacca in piccoli gruppi e si nutre di carne in decomposizione. Una minaccia solo se ignorato.",
    image: blattaOscura,
  },
  {
    title: "Blatta Serrata",
    description: "Questa variante emana una sostanza viscosa che rallenta i movimenti e irrita la pelle. Il contatto prolungato può essere fatale.",
    image: blattaSerrata,
  },
  {
    title: "Blatta Rancida",
    description: "Insetto corazzato dalla corazza rossastra. Le sue mandibole possono lacerare anche il cuoio spesso. È territorialmente aggressiva.",
    image: blattaRancida,
  },
  {
    title: "Pipistrello Cieco",
    description: "Un tempo inoffensivo abitante delle catacombe, ora attacca senza esitazione. I suoi attacchi sono rapidi ma disorganizzati.",
    image: pipistrelloCieco,
  },
  {
    title: "Pipistrello Famelico",
    description: "Mutato dalla pestilenza, presenta un corpo emaciato ma ali ampie. Si lancia sulle vittime per nutrirsi del loro sangue.",
    image: pipistrelloFamelico,
  },
];
