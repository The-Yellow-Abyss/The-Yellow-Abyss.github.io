// src/data/npcs.js
import vecchiettoImage from '/codex/npc/Yellow_King_npc.png';
import vecchiettoDialogueImage from '/codex/npc/hastur_dialogue.png';
import mariaDelleDonneImage from '/codex/npc/Maria_delle_donne_npc.png';
import mariaDelleDonneDialogueImage from '../codex/npc/maria_dalle_donne_dialogue.png';
import achillusImage from '/codex/npc/Achillus_npc.png';
import achillusDialogueImage from '/codex/npc/achillus_dialogue.png';
import reDeiRattiImage from '/codex/npc/Rat_King_npc.png';
import reDeiRattiDialogueImage from '/codex/npc/Rat_King_npc.png';

export const npcs = [
  {
    name: "Vecchietto",
    description: "Vecchio signore dalla natura ignota, sembra avere uno strano legame con le catacombe. Conosce affondo la natura della pestilenza e sembra non esserne affetto, aiutando la protagonista dando informazioni ermetiche o vendendo oggetti nel negozio presente nei piani delle catacombe.",
    image: vecchiettoImage,
    dialogue_image: vecchiettoDialogueImage
  },
  {
    name: "Maria Delle Donne",
    description: "Dottoressa nata il 127 anno dell'era della ragione, originaria del regno Demeter la madre era originaria del regno Haurelis. Laureata in medicina all'università degli studi Mendeleev nel regno Demeter. Lei è tra i medici che sono stati inviati per studiare e fermare la pestilenza.",
    image: mariaDelleDonneImage,
    dialogue_image: mariaDelleDonneDialogueImage
  },
  {
    name: "Achillus",
    description: "Soldato dell'esercito papale. Una guarnigione di soldati dell'esercito papale venne inviata dal ducato di Gheya per accompagnare i monaci cappuccini della città monacale Elealia per santificare la capitale di Tetai. Achillus ora e' l'ultimo della sua guarnigione che è rimasto in vita.",
    image: achillusImage,
    dialogue_image: achillusDialogueImage
  },
  {
    name: "Re dei ratti",
    description: "Misteriosa creatura presente nelle catacombe, sembra non venir colpito dagli effetti della pestilenza. Il suo obiettivo sembra essere quello di liberarsi degli altri “finti re dei ratti” e “ratti traditor” presenti nelle catacombe, chiedendo aiuto alla protagonista e compensandola con premi di vario tipo.",
    image: reDeiRattiImage,
    dialogue_image: reDeiRattiDialogueImage
  }
];
