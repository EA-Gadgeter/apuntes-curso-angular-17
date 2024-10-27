import { Injectable } from "@angular/core";

import type { Character } from "../interfaces/character.interface";

@Injectable({ providedIn: "root" })
export class DbzService {
  public characters: Character[] = [
    {
      id: crypto.randomUUID(),
      name: "Goku",
      power: 15000
    },
    {
      id: crypto.randomUUID(),
      name: "Vegeta",
      power: 7500
    },
    {
      id: crypto.randomUUID(),
      name: "Krillin",
      power: 1000
    }
  ];

  public addNewCharacter(character: Character): void {
    character.id = crypto.randomUUID();
    this.characters.push(character);
  }

  public deleteCharacterById(id: string): void {
    this.characters = this.characters.filter((character) => character.id !== id);
  }
}
