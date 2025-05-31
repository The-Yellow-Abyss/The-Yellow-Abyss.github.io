// src/codex/bosses.js
import sebastian from '../codex/bosses/plague_doctor_boss.png';
import plague_doctor_symbol from '../codex/bosses/plague_doctor_symbol.png';
import romulus from '../codex/bosses/monk_boss.png';
import monk_symbol from '../codex/bosses/monk_symbol.png';
import hastur from '../codex/bosses/yellow_king_boss.png';
import yellow_king_symbol from '../codex/bosses/yellow_king_symbol.png';


export const bosses = [
  {
    title: "Sebastian - Medico della pestilenza",
    description:
      "Medici che si sono spinti troppo oltre per studiare la pestilenza, ora più degli altri loro colleghi sono perseguitati da visioni orribili, e con mutazioni grottesche. Lo strano legame che hanno con i ratti sembra essersi acuito, permettendogli di usarli come armi ancor più letali, vettori della pestilenza.",
    image: sebastian,
    symbol: plague_doctor_symbol,
  },
  {
    title: "Frate Romulus - Monaco",
    description:
      "Tra i monaci scesi nelle catacombe, questi sembrano aver subito il destino peggiore, dalle parole disconnesse che producono gorgogliando con quello che rimane della loro bocca, sembra che hanno visto qualcosa di terrificante.",
    image: romulus,
    symbol: monk_symbol,
  },
  {
    title: "Hastur - re giallo",
    description:
      "La sua natura non è chiara e probabilmente non lo potrà mai essere alle menti umane. L'unica cosa chiara è che vuole che qualcuno raggiunga il fondo delle catacombe, ma che lo faccia solo chi ritiene meritevole. Le uniche tracce storiche che si hanno della sua esistenza sono qualche menzione sporadica negli scritti di Babele, la più grande fonte di informazione riguardante il mondo antico e della civiltà dei Vissomnius.",
    image: hastur,
    symbol: yellow_king_symbol,
  },
];
