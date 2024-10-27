import { Component, EventEmitter, Input, Output } from '@angular/core';
import type { Character } from "../../interfaces/character.interface";

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [
    {
      name: 'Krillin',
      power: 1000,
    },
  ];

  @Output()
  public onDeleteId: EventEmitter<string> = new EventEmitter();

  public emitDeleteId(id: string | undefined): void {
    if (!id) return;
    this.onDeleteId.emit(id);
  }
}
