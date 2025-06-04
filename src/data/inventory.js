// src/codex/inventory.js

import Rosalind from '../codex/Rosalind-sprite.png';
import Rosalind_dialogue from '../codex/Rosalind_dialogue.png';
import spadaRosalind from '../codex/weapons/Spada_di_Rosalind.PNG';
import lanciaRosalind from '../codex/weapons/Lancia_di_Rosalind.PNG';


export const inventory = [
  {
    id: "character",
    title: "Rosalind Bernard",
    description: "Cavaliere nobile di Acaina, una delle poche donne guerriere della sua epoca. A 27 anni, eccelle nell'uso della spada e nell'arte del combattimento. Condivide un amore segreto con Valerika, scomparsa durante una missione militare. Dopo aver ricevuto da un misterioso uomo il pendente donato a Valerika, Rosalind è determinata a scoprire la verità.",
    image: Rosalind,
    dialogue_image: Rosalind_dialogue,
  }
  ,
  {
    id:"weapon",
    title: "Spada di Rosalind",
    description: "Amata spada di Rosalind Bernard. Venne regalata dal padre come premio per esser riuscita a venir nominata cavaliere all'età di diciannove anni. Su di essa si possono vedere i segni degli duri allenamenti fatti dalla ragazza per non essere seconda agli altri cavalieri.",
    image: spadaRosalind,
  },
  {
    id:"weapon",
    title: "Lancia di Rosalind",
    description: "Lancia di Rosalind Bernard che le venne regalata dalla sua amata Valerika. Quest'arma nonostante l'orrore delle catacombe le ricorda perché sta combattendo, è l'unica speranza che le rimane e l'unica catena che la ancora alla realtà non facendola impazzire.",
    image: lanciaRosalind,
  }
];
