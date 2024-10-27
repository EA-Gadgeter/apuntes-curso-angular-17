import { Component, EventEmitter, Output } from '@angular/core';

import type { Character } from "../../interfaces/character.interface";

@Component({
  selector: 'dbz-form',
  templateUrl: './form.component.html',
})
export class FormComponent {
  public character: Character = {
    name: "",
    power: 0,
  }

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public emitCharacter(): void {
    if (this.character.name.trim().length === 0) return;

    this.onNewCharacter.emit({...this.character});

    this.character.name = "";
    this.character.power = 0;
  }
}3
