import { Equipo } from "./equipo";

export class division {
  letter: string;
  equipos: Equipo[];

  constructor(letter: string, equipos: Equipo[]) {
    this.letter = letter;
    this.equipos = equipos;
  }
}
